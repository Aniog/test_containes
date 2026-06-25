import { Link } from 'react-router-dom';

export default function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors px-6 py-3 text-base';
  const variants = {
    primary: 'bg-[#e8621a] hover:bg-[#c9521a] text-white',
    secondary: 'border-2 border-[#1a4f8a] text-[#1a4f8a] hover:bg-[#1a4f8a] hover:text-white bg-transparent',
    white: 'bg-white text-[#1a4f8a] hover:bg-slate-100',
  };
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
