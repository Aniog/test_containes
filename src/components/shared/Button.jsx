import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function Button({ children, to, href, onClick, variant = 'primary', size = 'md', className = '', type = 'button', disabled = false }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-[#e8621a] hover:bg-[#c9521a] text-white focus:ring-[#e8621a]',
    secondary: 'border-2 border-[#1a4f8a] text-[#1a4f8a] hover:bg-[#1a4f8a] hover:text-white focus:ring-[#1a4f8a]',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-300',
    ghost: 'text-[#1a4f8a] hover:bg-[#1a4f8a]/8 focus:ring-[#1a4f8a]',
    white: 'bg-white text-[#1a4f8a] hover:bg-gray-50 focus:ring-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = cn(base, variants[variant], sizes[size], disabled && 'opacity-50 cursor-not-allowed', className);

  if (to) return <Link to={to} className={classes}>{children}</Link>;
  if (href) return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{children}</a>;
  return <button type={type} onClick={onClick} className={classes} disabled={disabled}>{children}</button>;
}
