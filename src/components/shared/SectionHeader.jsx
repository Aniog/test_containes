import React from 'react';

export default function SectionHeader({ label, title, subtitle, center = true }) {
  return (
    <div className={`mb-10 md:mb-14 ${center ? 'text-center' : ''}`}>
      {label && (
        <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
          {label}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-600 text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
