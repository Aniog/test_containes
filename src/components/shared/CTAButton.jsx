import { Link } from 'react-router-dom';

const CTAButton = ({ to, href, onClick, children, variant = 'primary', size = 'md', className = '' }) => {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-brand-blue text-white hover:bg-brand-navy focus:ring-brand-blue',
    gold: 'bg-brand-gold text-white hover:bg-yellow-600 focus:ring-brand-gold',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-brand-navy focus:ring-white',
    'outline-blue': 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white focus:ring-brand-blue',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) return <Link to={to} className={classes}>{children}</Link>;
  if (href) return <a href={href} className={classes}>{children}</a>;
  return <button onClick={onClick} className={classes}>{children}</button>;
};

export default CTAButton;
