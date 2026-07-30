import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', className = '', showArrow = false }) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-brand-red hover:bg-red-700 text-white px-8 py-3.5 shadow-md hover:shadow-lg focus:ring-brand-red',
    secondary: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3.5 focus:ring-brand-blue',
    white: 'bg-white text-brand-blue hover:bg-gray-50 px-8 py-3.5 shadow-md focus:ring-white',
    'white-outline': 'border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-3.5 focus:ring-white',
  };

  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </Link>
  );
}
