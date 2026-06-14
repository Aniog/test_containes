import React from 'react';

const ProcessStep = ({ number, title, description, items }) => {
  return (
    <div className="process-step flex gap-4 md:gap-6 pb-8 last:pb-0">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-lg">
          {number}
        </div>
      </div>
      <div className="flex-1 pt-1">
        <h3 className="font-semibold text-lg text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 mb-3">{description}</p>
        {items && items.length > 0 && (
          <ul className="text-sm text-slate-600 space-y-1">
            {items.map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProcessStep;