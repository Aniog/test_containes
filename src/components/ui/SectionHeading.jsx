import React from 'react';

export default function SectionHeading({ eyebrow, title, copy, align = 'center' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`reveal max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <p className="text-[11px] uppercase tracking-[0.28em] text-gold font-sans font-medium">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-serif text-4xl md:text-5xl font-medium text-ivory leading-tight">
        {title}
      </h2>
      {copy && <p className="mt-4 text-sand font-sans text-sm md:text-base leading-relaxed">{copy}</p>}
      <div className={`mt-6 h-px w-16 bg-gold/50 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
