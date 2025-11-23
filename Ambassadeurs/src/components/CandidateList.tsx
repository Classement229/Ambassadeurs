import { useMemo } from 'react';
import CandidateRow from './CandidateRow';
import type { Candidate } from '../types';
import medalImg from '../../public/md1.png';

interface CandidateListProps {
  candidates: Candidate[];
}

function CandidateList({ candidates }: CandidateListProps) {
  const maxVotes = useMemo(() => {
    return Math.max(...candidates.map(c => c.votes), 1);
  }, [candidates]);

  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 shadow-2xl border border-white/10">
      <div className="space-y-3">
        {candidates.map((candidate, index) => (
          <div key={candidate.id}>
            {index === 0 && (
              <div className="flex justify-center mb-4">
                <img
                  src={medalImg}
                  alt="Médaille"
                  className="w-16 h-16 object-contain"
                />
              </div>
            )}
            {index === 1 && (
              <div className="flex justify-center mb-4">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-blue-400" style={{borderBottomWidth: '28px', borderLeftWidth: '14px', borderRightWidth: '14px'}}></div>
                  <div className="absolute w-0 h-0 border-l-8 border-r-8 border-t-16 border-l-transparent border-r-transparent border-t-blue-300" style={{borderTopWidth: '28px', borderLeftWidth: '14px', borderRightWidth: '14px', top: '28px'}}></div>
                  <span className="relative text-2xl font-bold text-white z-10">2</span>
                </div>
              </div>
            )}
            <CandidateRow
              candidate={candidate}
              rank={index + 1}
              maxVotes={maxVotes}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CandidateList;
