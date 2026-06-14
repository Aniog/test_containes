import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group p-8 rounded-2xl bg-white border border-brand-steel/10 hover:border-brand-bronze/30 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center mb-6 group-hover:bg-brand-bronze/10 transition-colors">
        <Icon className="w-6 h-6 text-brand-bronze" />
      </div>
      <h3 className="text-xl font-semibold text-brand-navy mb-3 tracking-tight">{title}</h3>
      <p className="text-brand-charcoal/70 leading-relaxed text-[15px]">{description}</p>
    </div>
  );
};

export default FeatureCard;
