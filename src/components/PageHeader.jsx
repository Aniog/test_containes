import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHeader({ eyebrow, title, subtitle, crumbs = [] }) {
  return (
    <section className="relative bg-[#0B2545] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, #E63946 0, transparent 40%), radial-gradient(circle at 80% 80%, #ffffff 0, transparent 50%)'
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {crumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs text-slate-300 mb-5">
            <Link to="/" className="hover:text-white">Home</Link>
            {crumbs.map((c, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-white">{c.label}</Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E63946]">{eyebrow}</p>
        )}
        <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl">{title}</h1>
        {subtitle && (
          <p className="mt-5 text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
