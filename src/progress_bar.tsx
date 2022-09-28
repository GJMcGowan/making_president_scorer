import './progress_bar.css'

interface ICandidateVotes {
  kennedy: number;
  nixon: number;
  byrd: number;
  unaligned: number;
}

const TOTAL_ELECTORAL_VOTES = 537;
const HISTORICAL_VOTES = {
  kennedy: 303,
  byrd: 15,
  nixon: 219
}

const calculateVotePercentage = (candidateVotes: number) => {
  return (candidateVotes / TOTAL_ELECTORAL_VOTES) * 100
}

export const ProgressBar = (
  {candidateVotes, showHistoricalResults}: {candidateVotes: ICandidateVotes, showHistoricalResults: boolean}
) => {
  const kennedyVotes = showHistoricalResults ? HISTORICAL_VOTES.kennedy : candidateVotes.kennedy;
  const nixonVotes = showHistoricalResults ? HISTORICAL_VOTES.nixon : candidateVotes.nixon;
  const byrdVotes = showHistoricalResults ? HISTORICAL_VOTES.byrd : candidateVotes.byrd;
  const unalignedVotes = showHistoricalResults ? 0 : candidateVotes.unaligned;

  const kennedyPercent = calculateVotePercentage(kennedyVotes);
  const nixonPercent = calculateVotePercentage(nixonVotes);
  const byrdPercent = calculateVotePercentage(byrdVotes);
  const unalignedPercent = calculateVotePercentage(unalignedVotes);

  return (<div className="bar">
    <div className="filler kennedy-filler" style={{width: `${kennedyPercent}%`}}>
      {kennedyPercent > 0 && <span className="label">{kennedyVotes}</span>}
    </div>
    <div className="filler unaligned-filler" style={{width: `${unalignedPercent}%`}}>
    </div>
    <div className="filler byrd-filler" style={{width: `${byrdPercent}%`}}>
    </div>
    <div className="filler nixon-filler" style={{width: `${nixonPercent}%`}}>
      {nixonPercent > 0 && <span className="label">{nixonVotes}</span>}
    </div>
  </div>);
}
