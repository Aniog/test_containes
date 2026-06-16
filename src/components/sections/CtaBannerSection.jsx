import React from 'react'
import { ArrowRight } from 'lucide-react'

const CtaBannerSection = () => {
  return (
    <section className="bg-bone py-20 md:py-24 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="bg-cream border border-line p-10 md:p-16 text-center max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-eyebrow text-copper">Visit · Inspect · Decide</p>
          <h2 className="mt-5 font-display text-3xl md:text-5xl lg:text-6xl text-ink leading-tight">
            See a machine run, in person.
          </h2>
          <p className="mt-6 text-slate text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Visitors are welcome at our Shanghai showroom six days a week. We'll bend your
            sample parts on a machine of your choice, and you can audit our production line
            while you're here.
          </p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <a
              href="mailto:visit@artitect-machinery.com"
              className="inline-flex items-center gap-3 bg-copper text-ink px-7 py-4 text-sm font-medium tracking-widest uppercase hover:bg-copper-bright transition-colors"
            >
              Book a factory visit
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 border border-ink/20 text-ink px-7 py-4 text-sm font-medium tracking-widest uppercase hover:bg-ink hover:text-cream transition-colors"
            >
              Or request a remote demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaBannerSection
