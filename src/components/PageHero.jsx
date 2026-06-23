import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ eyebrow, title, description, breadcrumbs = [] }) {
  return (
    <section className="bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1 text-xs text-white/60 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight className="w-3.5 h-3.5" />
                {b.to ? <Link to={b.to} className="hover:text-white">{b.label}</Link> : <span>{b.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-semibold uppercase tracking-wider mb-3">
            {eyebrow}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl">{title}</h1>
        {description && (
          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl">{description}</p>
        )}
      </div>
    </section>
  )
}
