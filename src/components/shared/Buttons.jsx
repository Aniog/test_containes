import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function PrimaryButton({ to, href, onClick, children, className = '', large = false }) {
  const base = `inline-flex items-center gap-2 bg-brand-blue text-white font-semibold rounded-lg transition-colors hover:bg-brand-sky ${
    large ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm'
  } ${className}`;

  if (to) return <Link to={to} className={base}>{children}</Link>;
  if (href) return <a href={href} className={base}>{children}</a>;
  return <button onClick={onClick} className={base}>{children}</button>;
}

export function GoldButton({ to, href, onClick, children, className = '', large = false }) {
  const base = `inline-flex items-center gap-2 bg-brand-gold text-white font-bold rounded-lg transition-opacity hover:opacity-90 ${
    large ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-sm font-semibold'
  } ${className}`;

  if (to) return <Link to={to} className={base}>{children}</Link>;
  if (href) return <a href={href} className={base}>{children}</a>;
  return <button onClick={onClick} className={base}>{children}</button>;
}

export function OutlineButton({ to, href, onClick, children, className = '', light = false }) {
  const base = `inline-flex items-center gap-2 border-2 font-semibold rounded-lg transition-colors px-6 py-3 text-sm ${
    light
      ? 'border-white text-white hover:bg-white hover:text-brand-navy'
      : 'border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'
  } ${className}`;

  if (to) return <Link to={to} className={base}>{children}</Link>;
  if (href) return <a href={href} className={base}>{children}</a>;
  return <button onClick={onClick} className={base}>{children}</button>;
}
