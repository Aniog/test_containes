import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function SectionHeader({ badge, title, subtitle, centered = true, light = false }) {
  return (
    <div className={cn('mb-12', centered && 'text-center')}>
      {badge && (
        <span className={cn(
          'inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4',
          light ? 'bg-white/20 text-white' : 'bg-brand-blue/10 text-brand-blue'
        )}>
          {badge}
        </span>
      )}
      <h2 className={cn(
        'text-3xl md:text-4xl font-bold tracking-tight mb-4',
        light ? 'text-white' : 'text-brand-dark'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg max-w-2xl leading-relaxed',
          centered && 'mx-auto',
          light ? 'text-blue-100' : 'text-gray-600'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-colors text-base';
  const variants = {
    primary: 'bg-brand-orange hover:bg-orange-700 text-white',
    secondary: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white',
    white: 'bg-white text-brand-blue hover:bg-blue-50',
    'white-outline': 'border-2 border-white text-white hover:bg-white hover:text-brand-blue',
  };
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function Card({ children, className = '' }) {
  return (
    <div className={cn('bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow', className)}>
      {children}
    </div>
  );
}

export function Badge({ children, variant = 'blue' }) {
  const variants = {
    blue: 'bg-brand-blue/10 text-brand-blue',
    orange: 'bg-brand-orange/10 text-brand-orange',
    green: 'bg-green-100 text-green-700',
    gray: 'bg-gray-100 text-gray-600',
  };
  return (
    <span className={cn('text-xs font-semibold px-3 py-1 rounded-full', variants[variant])}>
      {children}
    </span>
  );
}

export function TrustBar() {
  const stats = [
    { value: '500+', label: 'Verified Suppliers' },
    { value: '12+', label: 'Years in China' },
    { value: '30+', label: 'Countries Served' },
    { value: '98%', label: 'Client Satisfaction' },
  ];
  return (
    <div className="bg-brand-blue py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-blue-200 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
