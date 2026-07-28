import React from 'react';

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const alignmentClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
  };

  return (
    <div className={`max-w-3xl ${alignmentClasses[align]} ${className}`}>
      {eyebrow && (
        <span className="section-eyebrow">{eyebrow}</span>
      )}
      {title && (
        <h2 className="section-title">{title}</h2>
      )}
      {subtitle && (
        <p className="section-subtitle">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
