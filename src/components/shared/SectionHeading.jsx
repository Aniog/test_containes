import { Link } from 'react-router-dom'

const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

const CTAButton = ({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary' }) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 font-semibold text-base rounded-lg transition-colors no-underline'
  const variants = {
    primary: 'bg-secondary hover:bg-secondary-dark text-white',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }

  return (
    <Link to={to} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  )
}

export { SectionHeading, CTAButton }
