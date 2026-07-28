import React from 'react';
import { Link } from 'react-router-dom';

const CTAButton = ({ to = '/contact', children = 'Get a Free Sourcing Quote', className = '' }) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#1E40AF] rounded-md hover:bg-[#1E3A8A] transition-colors ${className}`}
    >
      {children}
    </Link>
  );
};

export default CTAButton;
