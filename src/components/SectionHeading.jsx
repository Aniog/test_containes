import React from 'react';

const SectionHeading = ({ eyebrow, title, subtitle, align = 'left' }) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  
  return (
    <div className={`mb-12 ${alignClass}`}>
      {eyebrow && (
        <div className="inline-block text-xs tracking-[3px] text-slate-500 font-medium mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
