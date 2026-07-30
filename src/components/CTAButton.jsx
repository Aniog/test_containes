import { Link } from 'react-router-dom';

export default function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', className = '' }) {
  const base = 'inline-block px-6 py-3 rounded-lg font-semibold text-sm transition-colors';
  const styles = {
    primary: 'bg-accent text-white hover:bg-red-700',
    secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    white: 'bg-white text-primary hover:bg-lightblue',
    'white-outline': 'border-2 border-white text-white hover:bg-white hover:text-primary',
  };

  return (
    <Link to={to} className={`${base} ${styles[variant] || styles.primary} ${className}`}>
      {children}
    </Link>
  );
}
