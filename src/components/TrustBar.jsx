import React from 'react';

const TrustBar = () => {
  const items = [
    '12+ years sourcing experience',
    '180+ verified supplier networks',
    'No upfront fees until supplier confirmed',
    'On-site inspections in 18 provinces',
    'English-speaking project managers',
  ];

  return (
    <div className="bg-slate-50 border-y border-slate-200 py-5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-600">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-700" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
