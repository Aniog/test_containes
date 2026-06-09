import { Link } from 'react-router-dom';

export default function CTAButton({ to, href, children, variant = 'primary', className = '', onClick }) {
  const base = 'inline-flex items-center justify-center font-semibold px-6 py-3 rounded-lg transition-colors text-sm no-underline cursor-pointer';
  const variants = {
    primary: 'bg-brand-blue hover:bg-brand-navy text-white',
    secondary: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white',
    accent: 'bg-brand-red hover:bg-red-800 text-white',
    white: 'bg-white text-brand-blue hover:bg-blue-50',
    'white-outline': 'border-2 border-white text-white hover:bg-white hover:text-brand-blue',
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return <a href={href} className={cls}>{children}</a>;
  }
  if (to) {
    return <Link to={to} className={cls}>{children}</Link>;
  }
  return <button className={cls} onClick={onClick}>{children}</button>;
}
