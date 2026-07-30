import { Link } from 'react-router-dom'

export function CTAButton({ to = '/contact', children = 'Get a Free Sourcing Quote', className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-block bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center ${className}`}
    >
      {children}
    </Link>
  )
}

export function SecondaryButton({ to, children, className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-block border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center ${className}`}
    >
      {children}
    </Link>
  )
}

export function SectionHeader({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-darktext mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-mutedtext text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function StatCard({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-accent mb-1">{value}</div>
      <div className="text-blue-200 text-sm">{label}</div>
    </div>
  )
}
