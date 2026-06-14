import React from 'react';

const ServiceCard = ({ icon: Icon, title, description, details }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-8 h-full flex flex-col hover:shadow-sm transition-shadow">
      <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-slate-700" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 mb-4 flex-1">{description}</p>
      {details && (
        <ul className="text-sm text-slate-600 space-y-1.5">
          {details.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1.5 block w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
