import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function PageHero({ eyebrow, title, description, image, imageId, imageQuery, children }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-ink via-brand-ink-soft to-brand-ink text-white">
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id={imageId}
        data-strk-bg={imageQuery}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="container-page relative grid gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24">
        <div className="md:col-span-7">
          {eyebrow && (
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              {eyebrow}
            </div>
          )}
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
              {description}
            </p>
          )}
          {children}
        </div>
        {image && (
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              {image}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export function CtaBanner() {
  return (
    <section className="bg-brand-ink text-white">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center md:py-14">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
            Ready to source from China with confidence?
          </h3>
          <p className="mt-2 text-sm text-slate-200 md:text-base">
            Share your product brief and we will come back with a supplier shortlist, indicative pricing, and a clear next-step plan within one business day.
          </p>
        </div>
        <Link to="/contact" className="btn-primary !px-7 !py-3.5 text-base">
          Get a Free Sourcing Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
