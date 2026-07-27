import React from 'react';
import { Link } from 'react-router-dom';

const SectionHeading = ({ subtitle, title, description, centered = true }) => {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-neutral-500 text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

const CTAButton = ({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary' }) => {
  const baseClasses = 'inline-block font-semibold px-6 py-3 rounded-lg transition-colors text-center';
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-dark',
    secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    white: 'bg-white text-primary font-semibold hover:bg-neutral-100',
  };

  return (
    <Link to={to} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
};

export { SectionHeading, CTAButton };
