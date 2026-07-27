import React from 'react';

const ProcessStep = ({ number, title, description, details }) => {
  return (
    <div className="flex gap-5">
      <div className="flex-shrink-0">
        <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
          {number}
        </div>
      </div>
      <div className="pb-8 border-l border-slate-200 pl-5 -ml-1">
        <h4 className="font-semibold text-slate-900 mb-1.5">{title}</h4>
        <p className="text-sm text-slate-600 mb-2">{description}</p>
        {details && (
          <ul className="text-sm text-slate-600 space-y-1">
            {details.map((d, i) => (
              <li key={i}>• {d}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProcessStep;
