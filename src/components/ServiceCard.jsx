import React from 'react';

const ServiceCard = ({ icon: Icon, title, description, href = '/services' }) => {
  return (
    <a
      href={href}
      className="group block bg-white rounded-xl border border-border p-6 md:p-8 shadow-card hover:shadow-lg hover:border-amber/30 transition-all h-full"
    >
      <div className="w-12 h-12 rounded-lg bg-amber-light text-amber flex items-center justify-center mb-5">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-amber transition-colors">
        {title}
      </h3>
      <p className="text-slate-muted leading-relaxed">
        {description}
      </p>
    </a>
  );
};

export default ServiceCard;
