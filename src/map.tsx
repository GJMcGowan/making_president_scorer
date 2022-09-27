import React from "react";
import {geoCentroid} from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";
import {states} from './states.js';

interface IStates {
  [key: string]: {
    id: string;
    val: string;
    heldBy?: 'nixon' | 'kennedy';
  }
}

// const allStates: IState[] = [
//   {"id": "AL", "val": "01"},
//   {"id": "AK", "val": "02"},
//   {"id": "AS", "val": "60"},
//   {"id": "AZ", "val": "04"},
//   {"id": "AR", "val": "05"},
//   {"id": "CA", "val": "06"},
//   {"id": "CO", "val": "08"},
//   {"id": "CT", "val": "09"},
//   {"id": "DE", "val": "10"},
//   {"id": "DC", "val": "11"},
//   {"id": "FL", "val": "12"},
//   {"id": "FM", "val": "64"},
//   {"id": "GA", "val": "13"},
//   {"id": "GU", "val": "66"},
//   {"id": "HI", "val": "15"},
//   {"id": "ID", "val": "16"},
//   {"id": "IL", "val": "17"},
//   {"id": "IN", "val": "18"},
//   {"id": "IA", "val": "19"},
//   {"id": "KS", "val": "20"},
//   {"id": "KY", "val": "21"},
//   {"id": "LA", "val": "22"},
//   {"id": "ME", "val": "23"},
//   {"id": "MH", "val": "68"},
//   {"id": "MD", "val": "24"},
//   {"id": "MA", "val": "25"},
//   {"id": "MI", "val": "26"},
//   {"id": "MN", "val": "27"},
//   {"id": "MS", "val": "28"},
//   {"id": "MO", "val": "29"},
//   {"id": "MT", "val": "30"},
//   {"id": "NE", "val": "31"},
//   {"id": "NV", "val": "32"},
//   {"id": "NH", "val": "33"},
//   {"id": "NJ", "val": "34"},
//   {"id": "NM", "val": "35"},
//   {"id": "NY", "val": "36"},
//   {"id": "NC", "val": "37"},
//   {"id": "ND", "val": "38"},
//   {"id": "MP", "val": "69"},
//   {"id": "OH", "val": "39"},
//   {"id": "OK", "val": "40"},
//   {"id": "OR", "val": "41"},
//   {"id": "PW", "val": "70"},
//   {"id": "PA", "val": "42"},
//   {"id": "PR", "val": "72"},
//   {"id": "RI", "val": "44"},
//   {"id": "SC", "val": "45"},
//   {"id": "SD", "val": "46"},
//   {"id": "TN", "val": "47"},
//   {"id": "TX", "val": "48"},
//   {"id": "UM", "val": "74"},
//   {"id": "UT", "val": "49"},
//   {"id": "VT", "val": "50"},
//   {"id": "VA", "val": "51"},
//   {"id": "VI", "val": "78"},
//   {"id": "WA", "val": "53"},
//   {"id": "WV", "val": "54"},
//   {"id": "WI", "val": "55"},
//   {"id": "WY", "val": "56"}
// ];

const allStates: IStates = {
  "10": {
    "id": "DE",
    "val": "10"
  },
  "11": {
    "id": "DC",
    "val": "11"
  },
  "12": {
    "id": "FL",
    "val": "12"
  },
  "13": {
    "id": "GA",
    "val": "13"
  },
  "15": {
    "id": "HI",
    "val": "15"
  },
  "16": {
    "id": "ID",
    "val": "16"
  },
  "17": {
    "id": "IL",
    "val": "17"
  },
  "18": {
    "id": "IN",
    "val": "18"
  },
  "19": {
    "id": "IA",
    "val": "19"
  },
  "20": {
    "id": "KS",
    "val": "20"
  },
  "21": {
    "id": "KY",
    "val": "21"
  },
  "22": {
    "id": "LA",
    "val": "22"
  },
  "23": {
    "id": "ME",
    "val": "23"
  },
  "24": {
    "id": "MD",
    "val": "24"
  },
  "25": {
    "id": "MA",
    "val": "25"
  },
  "26": {
    "id": "MI",
    "val": "26"
  },
  "27": {
    "id": "MN",
    "val": "27"
  },
  "28": {
    "id": "MS",
    "val": "28"
  },
  "29": {
    "id": "MO",
    "val": "29"
  },
  "30": {
    "id": "MT",
    "val": "30"
  },
  "31": {
    "id": "NE",
    "val": "31"
  },
  "32": {
    "id": "NV",
    "val": "32"
  },
  "33": {
    "id": "NH",
    "val": "33"
  },
  "34": {
    "id": "NJ",
    "val": "34"
  },
  "35": {
    "id": "NM",
    "val": "35"
  },
  "36": {
    "id": "NY",
    "val": "36"
  },
  "37": {
    "id": "NC",
    "val": "37"
  },
  "38": {
    "id": "ND",
    "val": "38"
  },
  "39": {
    "id": "OH",
    "val": "39"
  },
  "40": {
    "id": "OK",
    "val": "40"
  },
  "41": {
    "id": "OR",
    "val": "41"
  },
  "42": {
    "id": "PA",
    "val": "42"
  },
  "44": {
    "id": "RI",
    "val": "44"
  },
  "45": {
    "id": "SC",
    "val": "45"
  },
  "46": {
    "id": "SD",
    "val": "46"
  },
  "47": {
    "id": "TN",
    "val": "47"
  },
  "48": {
    "id": "TX",
    "val": "48"
  },
  "49": {
    "id": "UT",
    "val": "49"
  },
  "50": {
    "id": "VT",
    "val": "50"
  },
  "51": {
    "id": "VA",
    "val": "51"
  },
  "53": {
    "id": "WA",
    "val": "53"
  },
  "54": {
    "id": "WV",
    "val": "54"
  },
  "55": {
    "id": "WI",
    "val": "55"
  },
  "56": {
    "id": "WY",
    "val": "56"
  },
  "60": {
    "id": "AS",
    "val": "60"
  },
  "64": {
    "id": "FM",
    "val": "64"
  },
  "66": {
    "id": "GU",
    "val": "66"
  },
  "68": {
    "id": "MH",
    "val": "68"
  },
  "69": {
    "id": "MP",
    "val": "69"
  },
  "70": {
    "id": "PW",
    "val": "70"
  },
  "72": {
    "id": "PR",
    "val": "72"
  },
  "74": {
    "id": "UM",
    "val": "74"
  },
  "78": {
    "id": "VI",
    "val": "78"
  },
  "01": {
    "id": "AL",
    "val": "01"
  },
  "02": {
    "id": "AK",
    "val": "02"
  },
  "04": {
    "id": "AZ",
    "val": "04"
  },
  "05": {
    "id": "AR",
    "val": "05"
  },
  "06": {
    "id": "CA",
    "val": "06"
  },
  "08": {
    "id": "CO",
    "val": "08"
  },
  "09": {
    "id": "CT",
    "val": "09"
  }
}

// const allStates: IStates = {
//   "AL": {
//     "id": "AL",
//     "val": "01"
//   },
//   "AK": {
//     "id": "AK",
//     "val": "02"
//   },
//   "AS": {
//     "id": "AS",
//     "val": "60"
//   },
//   "AZ": {
//     "id": "AZ",
//     "val": "04"
//   },
//   "AR": {
//     "id": "AR",
//     "val": "05"
//   },
//   "CA": {
//     "id": "CA",
//     "val": "06"
//   },
//   "CO": {
//     "id": "CO",
//     "val": "08"
//   },
//   "CT": {
//     "id": "CT",
//     "val": "09"
//   },
//   "DE": {
//     "id": "DE",
//     "val": "10"
//   },
//   "DC": {
//     "id": "DC",
//     "val": "11"
//   },
//   "FL": {
//     "id": "FL",
//     "val": "12"
//   },
//   "FM": {
//     "id": "FM",
//     "val": "64"
//   },
//   "GA": {
//     "id": "GA",
//     "val": "13"
//   },
//   "GU": {
//     "id": "GU",
//     "val": "66"
//   },
//   "HI": {
//     "id": "HI",
//     "val": "15"
//   },
//   "ID": {
//     "id": "ID",
//     "val": "16"
//   },
//   "IL": {
//     "id": "IL",
//     "val": "17"
//   },
//   "IN": {
//     "id": "IN",
//     "val": "18"
//   },
//   "IA": {
//     "id": "IA",
//     "val": "19"
//   },
//   "KS": {
//     "id": "KS",
//     "val": "20"
//   },
//   "KY": {
//     "id": "KY",
//     "val": "21"
//   },
//   "LA": {
//     "id": "LA",
//     "val": "22"
//   },
//   "ME": {
//     "id": "ME",
//     "val": "23"
//   },
//   "MH": {
//     "id": "MH",
//     "val": "68"
//   },
//   "MD": {
//     "id": "MD",
//     "val": "24"
//   },
//   "MA": {
//     "id": "MA",
//     "val": "25"
//   },
//   "MI": {
//     "id": "MI",
//     "val": "26"
//   },
//   "MN": {
//     "id": "MN",
//     "val": "27"
//   },
//   "MS": {
//     "id": "MS",
//     "val": "28"
//   },
//   "MO": {
//     "id": "MO",
//     "val": "29"
//   },
//   "MT": {
//     "id": "MT",
//     "val": "30"
//   },
//   "NE": {
//     "id": "NE",
//     "val": "31"
//   },
//   "NV": {
//     "id": "NV",
//     "val": "32"
//   },
//   "NH": {
//     "id": "NH",
//     "val": "33"
//   },
//   "NJ": {
//     "id": "NJ",
//     "val": "34"
//   },
//   "NM": {
//     "id": "NM",
//     "val": "35"
//   },
//   "NY": {
//     "id": "NY",
//     "val": "36"
//   },
//   "NC": {
//     "id": "NC",
//     "val": "37"
//   },
//   "ND": {
//     "id": "ND",
//     "val": "38"
//   },
//   "MP": {
//     "id": "MP",
//     "val": "69"
//   },
//   "OH": {
//     "id": "OH",
//     "val": "39"
//   },
//   "OK": {
//     "id": "OK",
//     "val": "40"
//   },
//   "OR": {
//     "id": "OR",
//     "val": "41"
//   },
//   "PW": {
//     "id": "PW",
//     "val": "70"
//   },
//   "PA": {
//     "id": "PA",
//     "val": "42"
//   },
//   "PR": {
//     "id": "PR",
//     "val": "72"
//   },
//   "RI": {
//     "id": "RI",
//     "val": "44"
//   },
//   "SC": {
//     "id": "SC",
//     "val": "45"
//   },
//   "SD": {
//     "id": "SD",
//     "val": "46"
//   },
//   "TN": {
//     "id": "TN",
//     "val": "47"
//   },
//   "TX": {
//     "id": "TX",
//     "val": "48"
//   },
//   "UM": {
//     "id": "UM",
//     "val": "74"
//   },
//   "UT": {
//     "id": "UT",
//     "val": "49"
//   },
//   "VT": {
//     "id": "VT",
//     "val": "50"
//   },
//   "VA": {
//     "id": "VA",
//     "val": "51"
//   },
//   "VI": {
//     "id": "VI",
//     "val": "78"
//   },
//   "WA": {
//     "id": "WA",
//     "val": "53"
//   },
//   "WV": {
//     "id": "WV",
//     "val": "54"
//   },
//   "WI": {
//     "id": "WI",
//     "val": "55"
//   },
//   "WY": {
//     "id": "WY",
//     "val": "56"
//   }
// }

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

export default class USAMap extends React.Component<{}, {allStates: IStates}> {
  constructor(props) {
    super(props);
    this.state = {
      allStates: allStates
    };
  }

  getFill(id: string) {
    const state = this.state.allStates[id];
    if (state.heldBy === 'kennedy') return 'blue';
    if (state.heldBy === 'nixon') return 'red';
    return "#DDD"
  }

  selectStateWinner(id: string) {
    const state = this.state.allStates[id];
    switch (state.heldBy) {
      case undefined:
        this.setState({
          allStates: {
            ...this.state.allStates,
            [id]: {
              ...state,
              heldBy: 'kennedy'
            }
          }
        })
        break;
      case 'kennedy':
        this.setState({
          allStates: {
            ...this.state.allStates,
            [id]: {
              ...state,
              heldBy: 'nixon'
            }
          }
        });
        break;
      case 'nixon':
        this.setState({
          allStates: {
            ...this.state.allStates,
            [id]: {
              ...state,
              heldBy: undefined
            }
          }
        });
        break;
    }
  }

  render() {
    return (
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={states}>
          {({geographies}) => (
            <>
              {geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  stroke="#FFF"
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
                      (Object.keys(offsets).indexOf(currentState.id) === -1 ? (
                        <Marker coordinates={centroid}>
                          <text y="2" fontSize={14} textAnchor="middle">
                            {currentState.id}
                          </text>
                        </Marker>
                      ) : (
                        <Annotation
                          connectorProps={{}}
                          subject={centroid}
                          dx={offsets[currentState.id][0]}
                          dy={offsets[currentState.id][1]}
                        >
                          <text x={4} fontSize={14} alignmentBaseline="middle">
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
    )
  }
}
