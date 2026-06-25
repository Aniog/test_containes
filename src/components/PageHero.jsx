import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ eyebrow, title, description, breadcrumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-[#0B2545]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2545] via-[#0B2545] to-[#13366B]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-10">
        {breadcrumbs.length > 0 && (
          <nav className="mb-5 flex items-center gap-1 text-xs text-slate-300">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            {breadcrumbs.map((b, idx) => (
              <span key={idx} className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5" />
                {b.to ? (
                  <Link to={b.to} className="hover:text-white">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-white">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9EC5E8]">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
