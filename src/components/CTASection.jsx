import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-brand-navy py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">Ready to source from China with more control?</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Send your product requirements and get a practical sourcing plan.</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-blue-100">We review your category, target quantity, quality requirements, and timeline before recommending next steps.</p>
        </div>
        <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-semibold text-brand-navy transition hover:bg-brand-soft">
          Get a Free Sourcing Quote
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
