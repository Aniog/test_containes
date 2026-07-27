import React from 'react'
import CTAButton from '@/components/CTAButton'

export default function CTABand() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Free, no-obligation quote
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to source from China with confidence?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Tell us what you want to buy. We reply within one business day with a
              realistic sourcing plan and a clear quotation — no commitment required.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <CTAButton to="/contact">Get a Free Sourcing Quote</CTAButton>
            <CTAButton to="/how-it-works" variant="outlineDark">
              See How It Works
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
