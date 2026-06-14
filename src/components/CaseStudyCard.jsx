import React from 'react';

const CaseStudyCard = ({ client, industry, challenge, solution, results }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col">
      <div className="mb-4">
        <div className="text-sm text-slate-500">{industry}</div>
        <div className="font-semibold text-xl text-slate-900 mt-1">{client}</div>
      </div>

      <div className="space-y-4 text-sm flex-1">
        <div>
          <div className="font-medium text-slate-700 mb-1">Challenge</div>
          <p className="text-slate-600">{challenge}</p>
        </div>
        <div>
          <div className="font-medium text-slate-700 mb-1">Our Approach</div>
          <p className="text-slate-600">{solution}</p>
        </div>
        <div>
          <div className="font-medium text-slate-700 mb-1">Results</div>
          <p className="text-slate-600">{results}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
