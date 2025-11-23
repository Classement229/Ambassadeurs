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
