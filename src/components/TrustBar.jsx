import React from 'react';

const TrustBar = () => {
  const stats = [
    { number: '12+', label: 'Years Experience' },
    { number: '850+', label: 'Factories Audited' },
    { number: '2,400+', label: 'Orders Managed' },
    { number: '40+', label: 'Countries Served' },
  ];

  return (
    <div className="border-y border-slate-200 bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center border-r border-slate-200 last:border-r-0 md:last:border-r-0">
              <div className="text-3xl font-semibold text-slate-900 tracking-tight">{stat.number}</div>
              <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
