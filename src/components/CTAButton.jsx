import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', className = '', showArrow = false }) {
  const base = 'inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-sm';
  const variants = {
    primary: 'bg-red-600 hover:bg-red-700 text-white shadow-sm hover:shadow-md',
    secondary: 'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-navy-900',
    ghost: 'text-red-600 hover:text-red-700 hover:underline px-0 py-0',
  };

  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </Link>
  );
}
