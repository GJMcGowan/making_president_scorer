import React from "react";
import {geoCentroid} from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";

import {us_map} from './us_map.js';
import './map.css'
import {ProgressBar} from './progress_bar';
import {IStates, TCandidate, allStates} from './states_config';

const stateOffsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
  HI: [5, 40]
};

export default class USAMap extends React.Component<{}, {allStates: IStates, showHistoricalResult: boolean}> {
  constructor(props) {
    super(props);
    this.state = {
      allStates: allStates,
      showHistoricalResult: false
    };
  }

  getFill(id: string) {
    const state = this.state.allStates[id];
    // the map includes "states" which are not in the list so we have to handle this case
    if (!state) return;
    if (state.heldBy === 'kennedy') return 'blue';
    if (state.heldBy === 'nixon') return 'red';
    if (state.heldBy === 'byrd') return 'purple'
    return "darkgrey"
  }

  selectStateWinner(id: string) {
    const state = this.state.allStates[id];
    let heldBy: 'kennedy' | 'nixon' = 'kennedy';
    if (state.heldBy === 'kennedy') {heldBy = 'nixon'}
    if (state.heldBy === 'nixon') {heldBy = undefined}

    this.setState({
      allStates: {
        ...this.state.allStates,
        [id]: {
          ...state,
          heldBy
        }
      },
      showHistoricalResult: false
    });
  }

  getCandidateCount(candidate: TCandidate | undefined) {
    return Object.values(this.state.allStates).reduce((acc, state) => {
      if (state.heldBy === candidate) {
        return acc + state.votes;
      }
      return acc;
    }, 0)
  }

  randomiseStateAllocation() {
    const states = this.state.allStates;

    const newValues = Object.values(states).map((state) => {
      return {
        ...state,
        heldBy: Math.random() > 0.5 ? 'nixon' : 'kennedy' as TCandidate
      }
    });
    newValues.forEach((state) => {
      states[state.val] = state;
    });

    this.setState({
      allStates: states,
      showHistoricalResult: false
    });
  }

  clearStateAllocation() {
    const states = this.state.allStates;

    const newValues = Object.values(states).map((state) => {
      return {
        ...state,
        heldBy: undefined
      }
    });
    newValues.forEach((state) => {
      states[state.val] = state;
    });

    this.setState({
      allStates: states,
      showHistoricalResult: false
    });
  }

  showHistoricalResult() {
    const states = this.state.allStates;

    const newValues = Object.values(states).map((state) => {
      return {
        ...state,
        heldBy: state.historicallyHeldBy
      }
    });
    newValues.forEach((state) => {
      states[state.val] = state;
    });

    this.setState({
      allStates: states,
      showHistoricalResult: true
    });
  }

  render() {
    return (
      <>
        <p className="scoreBox">
          <span><b>Kennedy:</b> {this.getCandidateCount('kennedy')}</span>
          <span><b>Nixon:</b> {this.getCandidateCount('nixon')}</span>
          <span><b>Uncounted:</b> {this.getCandidateCount(undefined)}</span>
          <span><b>Total votes: </b> 537</span>
        </p>
        <p className="utilityButtonsBox">
          <button onClick={() => this.randomiseStateAllocation()}>Randomise</button>
          <button onClick={() => this.clearStateAllocation()}>Clear</button>
          <button onClick={() => this.showHistoricalResult()}>Show historical result</button>
        </p>
        <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={us_map}>
            {({geographies}) => (
              <>
                {geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    stroke="#FFF"
                    strokeWidth={0.5}
                    geography={geo}
                    fill={this.getFill(geo.id)}
                    style={{
                      default: {outline: "none"},
                      hover: {outline: "none"},
                      pressed: {outline: "none"},
                    }}
                    onClick={() => this.selectStateWinner(geo.id)}
                  />
                ))}
                {geographies.map(geo => {
                  const centroid = geoCentroid(geo);
                  const currentState = this.state.allStates[geo.id];
                  return (
                    <g key={geo.rsmKey + "-name"}>
                      {currentState &&
                        centroid[0] > -160 &&
                        centroid[0] < -67 &&
                        (Object.keys(stateOffsets).indexOf(currentState.id) === -1 ? (
                          <Marker coordinates={centroid}>
                          <text className="stateAnnotation" textAnchor="middle" fill="white">
                            {currentState.id}
                          </text>
                          </Marker>
                        ) : (
                          <Annotation
                            connectorProps={{}}
                            subject={centroid}
                            dx={stateOffsets[currentState.id][0]}
                            dy={stateOffsets[currentState.id][1]}
                          >
                            <text className="stateAnnotation" alignmentBaseline="middle">
                              {currentState.id}
                            </text>
                          </Annotation>
                        ))}
                    </g>
                  );
                })}
              </>
            )}
          </Geographies>
        </ComposableMap>
        <ProgressBar showHistoricalResults={this.state.showHistoricalResult} candidateVotes={{
          kennedy: this.getCandidateCount('kennedy'),
          nixon: this.getCandidateCount('nixon'),
          byrd: this.getCandidateCount('byrd'),
          unaligned: this.getCandidateCount(undefined)
        }} />
      </>
    );
  }
}
