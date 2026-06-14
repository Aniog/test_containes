import React from 'react';

const ProcessStep = ({ number, title, description, deliverables }) => {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
          {number}
        </div>
      </div>
      <div className="flex-1 pb-10 border-l border-slate-200 pl-6 -ml-px">
        <h4 className="font-semibold text-lg text-slate-900 mb-2">{title}</h4>
        <p className="text-slate-600 mb-3">{description}</p>
        {deliverables && deliverables.length > 0 && (
          <div className="text-sm text-slate-500">
            <span className="font-medium text-slate-600">Deliverables: </span>
            {deliverables.join(' • ')}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessStep;
