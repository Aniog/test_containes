import { Link } from 'react-router-dom';

export default function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200';
  const variants = {
    primary: 'bg-accent text-white hover:bg-red-700 shadow-sm hover:shadow-md',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-primary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
