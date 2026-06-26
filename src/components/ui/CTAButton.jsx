import { Link } from 'react-router-dom';

export default function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2';
  const variants = {
    primary: 'bg-brand-blue hover:bg-brand-sky text-white px-6 py-3',
    secondary: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-6 py-3',
    white: 'bg-white text-brand-navy hover:bg-brand-light px-6 py-3',
    'white-outline': 'border-2 border-white text-white hover:bg-white hover:text-brand-navy px-6 py-3',
  };

  return (
    <Link to={to} className={`${base} ${variants[variant] || variants.primary} ${className}`}>
      {children}
    </Link>
  );
}
