import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function Button({ children, to, href, variant = 'primary', size = 'md', className = '', onClick, type = 'button', disabled }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-brand-red text-white hover:bg-red-700 focus:ring-brand-red',
    secondary: 'bg-navy text-white hover:bg-blue-900 focus:ring-navy',
    outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white focus:ring-navy',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-navy focus:ring-white',
    ghost: 'text-steel hover:bg-surface-alt focus:ring-steel',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (to) return <Link to={to} className={classes}>{children}</Link>;
  if (href) return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{children}</a>;
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export function SectionHeader({ eyebrow, title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className={`inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full ${
          light ? 'bg-white/20 text-white' : 'bg-surface-alt text-steel'
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-blue-100' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Card({ children, className = '', hover = true }) {
  return (
    <div className={cn(
      'bg-white rounded-xl border border-gray-100 shadow-sm p-6',
      hover && 'hover:shadow-md transition-shadow duration-200',
      className
    )}>
      {children}
    </div>
  );
}

export function Badge({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-surface-alt text-steel',
    red: 'bg-red-50 text-brand-red',
    green: 'bg-green-50 text-green-700',
    navy: 'bg-navy text-white',
  };
  return (
    <span className={cn('inline-block text-xs font-semibold px-2.5 py-1 rounded-full', variants[variant])}>
      {children}
    </span>
  );
}

export function PageHero({ title, subtitle, eyebrow, children }) {
  return (
    <section className="bg-navy py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-steel rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {eyebrow && (
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-white/20 text-blue-100">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-blue-100 max-w-2xl">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
