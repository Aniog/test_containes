import { cn } from '@/lib/utils';

export function SectionHeader({ eyebrow, title, subtitle, centered = true, className }) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {eyebrow && (
        <span className="inline-block text-[#1a4f8a] font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={cn('text-brand-body text-lg leading-relaxed', centered && 'max-w-2xl mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Badge({ children, variant = 'default', className }) {
  const variants = {
    default: 'bg-blue-100 text-[#1a4f8a]',
    success: 'bg-green-100 text-green-800',
    gold: 'bg-yellow-100 text-yellow-800',
    red: 'bg-red-100 text-[#c0392b]',
  };
  return (
    <span className={cn('inline-block px-3 py-1 rounded-full text-xs font-semibold', variants[variant], className)}>
      {children}
    </span>
  );
}

export function Card({ children, className, hover = true }) {
  return (
    <div className={cn(
      'bg-white rounded-xl border border-brand-border p-6 shadow-sm',
      hover && 'hover:shadow-md transition-shadow duration-200',
      className
    )}>
      {children}
    </div>
  );
}

export function Button({ children, variant = 'primary', size = 'md', className, as: Tag = 'button', ...props }) {
  const variants = {
    primary: 'bg-[#1a4f8a] text-white hover:bg-[#163f6e]',
    secondary: 'border-2 border-[#1a4f8a] text-[#1a4f8a] hover:bg-[#1a4f8a] hover:text-white',
    cta: 'bg-[#c0392b] text-white hover:bg-[#a93226]',
    ghost: 'text-[#1a4f8a] hover:bg-blue-50',
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };
  return (
    <Tag
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 cursor-pointer',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function StatCard({ value, label, icon: Icon, color = 'text-[#1a4f8a]' }) {
  return (
    <div className="text-center">
      {Icon && <Icon className={cn('w-8 h-8 mx-auto mb-2', color)} />}
      <div className={cn('text-3xl font-bold mb-1', color)}>{value}</div>
      <div className="text-brand-muted text-sm">{label}</div>
    </div>
  );
}
