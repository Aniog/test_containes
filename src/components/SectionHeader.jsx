import React from 'react';

const SectionHeader = ({ id, eyebrow, title, description, align = 'center', light = false }) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';
  const mxClass = align === 'left' ? 'mr-auto' : 'mx-auto';

  return (
    <div className={`${alignClass} mb-12 md:mb-16`}>
      {eyebrow && (
        <span className="inline-block text-sm font-semibold tracking-wide uppercase text-amber mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className={`text-3xl md:text-4xl font-extrabold ${light ? 'text-white' : 'text-navy'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg text-slate-muted leading-relaxed max-w-3xl ${mxClass} ${light ? 'text-slate-200' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
