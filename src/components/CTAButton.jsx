import { Link } from 'react-router-dom';

export default function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', size = 'md', className = '' }) {
  const base = 'inline-block font-semibold rounded-lg transition-colors text-center';
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-9 py-4 text-lg',
  };
  const variants = {
    primary: 'bg-accent text-white hover:bg-[#a93226] shadow-md',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-primary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };

  return (
    <Link to={to} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
