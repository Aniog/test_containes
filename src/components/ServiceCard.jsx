import React from 'react';
import { Check } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, features }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full flex flex-col">
      <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-slate-700" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
              <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
