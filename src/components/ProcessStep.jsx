import React from 'react';

const ProcessStep = ({ number, title, description, details }) => {
  return (
    <div className="relative pl-12 pb-10 last:pb-0">
      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
        {number}
      </div>
      {number < 6 && (
        <div className="absolute left-[15px] top-9 bottom-0 w-px bg-slate-200" />
      )}
      <div>
        <h4 className="font-semibold text-lg text-slate-900 mb-2">{title}</h4>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">{description}</p>
        {details && (
          <ul className="text-sm text-slate-600 space-y-1">
            {details.map((d, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-slate-400">•</span> {d}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProcessStep;
