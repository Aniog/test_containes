import React from 'react';

const ServiceCard = ({ icon: Icon, title, description, details }) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-slate-700" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-3 flex-1">{description}</p>
      {details && (
        <ul className="text-sm text-slate-600 space-y-1 mt-auto pt-2 border-t border-slate-100">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-teal-600 mt-1">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;