import React from 'react';

const Stat = ({ number, label }) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-1">{number}</div>
      <div className="text-sm text-slate-500 tracking-wide">{label}</div>
    </div>
  );
};

export default Stat;
