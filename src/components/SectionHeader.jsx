import React from 'react';

const SectionHeader = ({ eyebrow, title, description, align = 'left' }) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <div className={`max-w-3xl mb-10 ${alignClass}`}>
      {eyebrow && (
        <div className="uppercase tracking-[2px] text-xs font-semibold text-sky-600 mb-2">{eyebrow}</div>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-3">{title}</h2>
      {description && (
        <p className="text-lg text-slate-600">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
