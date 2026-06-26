import React from 'react';

const SectionHeading = ({ eyebrow, title, description, align = 'left', className = '' }) => {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <div className="uppercase tracking-[2px] text-xs font-semibold text-slate-500 mb-3">{eyebrow}</div>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
