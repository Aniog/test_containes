import React from 'react';

const CaseStudyCard = ({ client, industry, challenge, solution, results, productType }) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="mb-4">
        <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">{industry}</div>
        <h3 className="font-semibold text-lg text-slate-900">{client}</h3>
        <p className="text-sm text-slate-500 mt-0.5">{productType}</p>
      </div>

      <div className="space-y-4 flex-1">
        <div>
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Challenge</div>
          <p className="text-sm text-slate-700">{challenge}</p>
        </div>

        <div>
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Our Approach</div>
          <p className="text-sm text-slate-700">{solution}</p>
        </div>

        <div>
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Results</div>
          <ul className="text-sm text-slate-700 space-y-1">
            {results.map((result, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5">✓</span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;