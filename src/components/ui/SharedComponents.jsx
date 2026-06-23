import { cn } from '@/lib/utils';

export function SectionHeader({ eyebrow, title, subtitle, centered = true, light = false, className = '' }) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {eyebrow && (
        <p className={cn('text-sm font-semibold uppercase tracking-widest mb-3', light ? 'text-brand-sky' : 'text-brand-blue')}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn('text-3xl md:text-4xl font-bold mb-4', light ? 'text-white' : 'text-brand-navy')}>{title}</h2>
      {subtitle && (
        <p className={cn('text-lg leading-relaxed', light ? 'text-gray-300' : 'text-gray-600', centered && 'max-w-2xl mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Badge({ children, variant = 'blue', className = '' }) {
  const variants = {
    blue: 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20',
    gold: 'bg-brand-gold/10 text-amber-700 border border-brand-gold/30',
    green: 'bg-green-50 text-green-700 border border-green-200',
    gray: 'bg-gray-100 text-gray-600 border border-gray-200',
  };
  return (
    <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold', variants[variant], className)}>
      {children}
    </span>
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

export function PrimaryButton({ children, onClick, href, className = '', type = 'button' }) {
  const cls = cn(
    'inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-sky text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm',
    className
  );
  if (href) {
    return <a href={href} className={cls}>{children}</a>;
  }
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}

export function SecondaryButton({ children, onClick, href, className = '' }) {
  const cls = cn(
    'inline-flex items-center justify-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm',
    className
  );
  if (href) {
    return <a href={href} className={cls}>{children}</a>;
  }
  return <button type="button" onClick={onClick} className={cls}>{children}</button>;
}
