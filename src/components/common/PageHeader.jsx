import { Link } from 'react-router-dom'
import Icon from '@/components/ui/Icon'

export default function PageHeader({ eyebrow, title, description, breadcrumbs = [] }) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {breadcrumbs.length > 0 && (
          <nav className="mb-4 flex items-center gap-1.5 text-sm text-ink-muted">
            <Link to="/" className="hover:text-accent">
              Home
            </Link>
            {breadcrumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <Icon name="ArrowRight" className="h-3.5 w-3.5" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-accent">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>
        )}
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
