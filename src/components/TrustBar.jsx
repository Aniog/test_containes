import React from 'react';

const TrustBar = () => {
  const items = [
    'ISO 9001 & BSCI Audited Factories',
    'AQL 2.5 / 4.0 Inspection Standards',
    'Real-time Production Tracking',
    'Export Documentation & Compliance',
  ];

  return (
    <div className="bg-slate-50 border-y border-slate-200 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-slate-600">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
