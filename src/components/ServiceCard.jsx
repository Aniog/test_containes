import React from 'react';

const ServiceCard = ({ icon: Icon, title, description, points }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 h-full">
      <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
        {Icon && <Icon className="w-5 h-5 text-slate-700" />}
      </div>
      <h3 className="font-semibold text-lg text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm mb-4">{description}</p>
      {points && points.length > 0 && (
        <ul className="space-y-1.5 text-sm text-slate-600">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1.5 block w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
