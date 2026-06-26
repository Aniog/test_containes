import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ eyebrow, title, desc, breadcrumb }) {
  return (
    <section className="relative bg-slate-950 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id={`page-hero-bg-${(eyebrow || title).toLowerCase().replace(/\s+/g, '-')}`}
        data-strk-bg={`${title} sourcing factory china industrial`}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-slate-950/70" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {breadcrumb && (
          <nav className="flex items-center gap-1.5 text-xs text-slate-400 mb-5">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-slate-200">{breadcrumb}</span>
          </nav>
        )}
        <span className="inline-block text-xs uppercase tracking-[0.18em] font-semibold text-red-400">
          {eyebrow}
        </span>
        <h1 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-white max-w-3xl leading-tight">
          {title}
        </h1>
        {desc && (
          <p className="mt-5 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed">
            {desc}
          </p>
        )}
      </div>
    </section>
  )
}
