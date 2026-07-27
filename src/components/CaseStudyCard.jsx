import React from 'react';

const CaseStudyCard = ({ client, industry, challenge, solution, results }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <div className="text-xs uppercase tracking-widest text-sky-600 font-medium mb-1">{industry}</div>
      <h3 className="font-semibold text-lg text-slate-900 mb-3">{client}</h3>
      
      <div className="space-y-3 text-sm">
        <div>
          <div className="font-medium text-slate-700 mb-0.5">Challenge</div>
          <p className="text-slate-600">{challenge}</p>
        </div>
        <div>
          <div className="font-medium text-slate-700 mb-0.5">Solution</div>
          <p className="text-slate-600">{solution}</p>
        </div>
        <div>
          <div className="font-medium text-slate-700 mb-0.5">Results</div>
          <ul className="text-slate-600 space-y-0.5">
            {results.map((r, i) => (
              <li key={i}>• {r}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
