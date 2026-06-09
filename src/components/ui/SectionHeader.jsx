import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function SectionHeader({ label, title, subtitle, centered = true, className = '' }) {
  return (
    <div className={cn(centered ? 'text-center' : '', 'mb-12', className)}>
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">{title}</h2>
      {subtitle && (
        <p className={cn('text-text-muted text-lg leading-relaxed', centered ? 'max-w-2xl mx-auto' : 'max-w-2xl')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', className = '', variant = 'accent' }) {
  const base = 'inline-block font-semibold px-7 py-3.5 rounded-lg transition-colors text-center';
  const variants = {
    accent: 'bg-accent hover:bg-[#a93226] text-white',
    primary: 'bg-primary hover:bg-primary-dark text-white',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-primary-dark',
    'outline-primary': 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
