import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-slate-700" />
      </div>
      <h4 className="font-semibold text-lg text-slate-900 mb-3 tracking-tight">{title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
