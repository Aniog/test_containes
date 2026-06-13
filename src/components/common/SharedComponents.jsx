import { Link } from 'react-router-dom'

export function SectionHeader({ label, title, description, center = true }) {
  return (
    <div className={center ? 'text-center max-w-3xl mx-auto mb-12 md:mb-16' : 'max-w-3xl mb-12 md:mb-16'}>
      {label && (
        <span className="inline-block text-brand-orange font-semibold text-sm tracking-wide uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-content-primary leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-content-secondary text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

export function CTAButton({ to = '/contact', children, variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors text-sm'
  const variants = {
    primary: 'px-6 py-3 bg-brand-orange text-white hover:bg-brand-orange-hover shadow-sm',
    secondary: 'px-6 py-3 bg-white text-brand-navy border-2 border-brand-navy hover:bg-brand-navy hover:text-white',
    ghost: 'px-6 py-3 text-brand-navy hover:bg-brand-navy/5 border border-border-light',
  }

  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}

export function StatCard({ value, label }) {
  return (
    <div className="text-center p-4">
      <div className="text-3xl md:text-4xl font-bold text-brand-navy mb-1">{value}</div>
      <div className="text-content-muted text-sm font-medium">{label}</div>
    </div>
  )
}

export function TestimonialCard({ quote, name, role, company }) {
  return (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-border-light">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-content-secondary text-sm md:text-base leading-relaxed mb-5">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-navy/10 flex items-center justify-center text-brand-navy font-bold text-sm">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="font-semibold text-sm text-content-primary">{name}</div>
          <div className="text-content-muted text-xs">{role}, {company}</div>
        </div>
      </div>
    </div>
  )
}
