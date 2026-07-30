import { Link } from 'react-router-dom';

export default function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', className = '', variant = 'primary' }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-brand-red text-white hover:bg-brand-red-dark focus:ring-brand-red px-8 py-4 text-base',
    navy: 'bg-navy text-white hover:bg-navy-dark focus:ring-navy px-8 py-4 text-base',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 text-base',
    'outline-navy': 'border-2 border-navy text-navy hover:bg-navy hover:text-white focus:ring-navy px-8 py-4 text-base',
    sm: 'bg-brand-red text-white hover:bg-brand-red-dark focus:ring-brand-red px-5 py-2.5 text-sm',
  };

  return (
    <Link to={to} className={`${base} ${variants[variant] || variants.primary} ${className}`}>
      {children}
    </Link>
  );
}
