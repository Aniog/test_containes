import { CTAButton } from '../common/CTAButton'

export default function ContactCTASection() {
  return (
    <section className="bg-brand-navy px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Ready to compare suppliers?</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">Send your product details and sourcing priorities.</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">We will review your requirements and help identify practical next steps for supplier search, verification, quality inspection, production follow-up, or shipping coordination.</p>
        </div>
        <div className="lg:text-right">
          <CTAButton className="bg-white text-brand-navy hover:bg-brand-amber hover:text-brand-navy" />
        </div>
      </div>
    </section>
  )
}
