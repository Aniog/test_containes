import { Link } from 'react-router-dom'
import { ArrowRight, ClipboardCheck } from 'lucide-react'

const CtaSection = () => (
  <section className="bg-brand-white py-16 text-brand-navy">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid overflow-hidden rounded-3xl bg-brand-navy shadow-soft lg:grid-cols-[1.15fr_0.85fr]">
        <div className="p-8 text-white md:p-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold/20 text-brand-gold">
            <ClipboardCheck className="h-6 w-6" />
          </div>
          <h2 id="cta-title" className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Ready to discuss your China sourcing request?
          </h2>
          <p id="cta-desc" className="mt-4 max-w-2xl text-base leading-7 text-white/78">
            Send your product details, target quantity, and destination market. We will help you understand supplier options, quality control needs, and practical next steps.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-brand-navy"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div
          className="min-h-80 bg-cover bg-center"
          data-strk-bg-id="cta-shipping-containers-48f2b1"
          data-strk-bg="[cta-desc] [cta-title]"
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="900"
        />
      </div>
    </div>
  </section>
)

export default CtaSection
