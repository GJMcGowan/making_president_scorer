import './progress_bar.css'

interface ICandidateVotes {
  kennedy: number;
  nixon: number;
  unaligned: number;
}

const TOTAL_ELECTORAL_VOTES = 537;

export const ProgressBar = ({candidateVotes}: {candidateVotes: ICandidateVotes}) => {
  const kennedyPercent = (candidateVotes.kennedy / TOTAL_ELECTORAL_VOTES) * 100;
  const nixonPercent = (candidateVotes.nixon / TOTAL_ELECTORAL_VOTES) * 100;
  const unalignedPercent = (candidateVotes.unaligned / TOTAL_ELECTORAL_VOTES) * 100;

  return <div className="bar">
    <div className="filler kennedy-filler" style={{width: `${kennedyPercent}%`}}>
      {kennedyPercent > 0 && <span className="label">{candidateVotes.kennedy}</span>}
    </div>
    <div className="filler unaligned-filler" style={{width: `${unalignedPercent}%`}}>
      {unalignedPercent > 0 && <span className="label"></span>}
    </div>
    <div className="filler nixon-filler" style={{width: `${nixonPercent}%`}}>
      {nixonPercent > 0 && <span className="label">{candidateVotes.nixon}</span>}
    </div>
  </div>
}
