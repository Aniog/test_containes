import { Link } from 'react-router-dom';

export function PrimaryButton({ children, to, href, onClick, className = '', size = 'md' }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  const base = `inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors duration-200 ${sizes[size]} ${className}`;
  if (to) return <Link to={to} className={base}>{children}</Link>;
  if (href) return <a href={href} className={base}>{children}</a>;
  return <button onClick={onClick} className={base}>{children}</button>;
}

export function AccentButton({ children, to, href, onClick, className = '', size = 'md' }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  const base = `inline-flex items-center justify-center gap-2 bg-accent hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 ${sizes[size]} ${className}`;
  if (to) return <Link to={to} className={base}>{children}</Link>;
  if (href) return <a href={href} className={base}>{children}</a>;
  return <button onClick={onClick} className={base}>{children}</button>;
}

export function OutlineButton({ children, to, href, onClick, className = '', size = 'md' }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  const base = `inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-colors duration-200 ${sizes[size]} ${className}`;
  if (to) return <Link to={to} className={base}>{children}</Link>;
  if (href) return <a href={href} className={base}>{children}</a>;
  return <button onClick={onClick} className={base}>{children}</button>;
}
