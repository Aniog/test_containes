import CTAButton from '@/components/common/CTAButton'

export default function FinalCTASection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-brand-navy to-slate-900 px-6 py-12 text-center text-white shadow-2xl sm:px-10 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-amber">Ready to discuss your sourcing project?</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tell us what you need to source from China
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100">
            Share product details, target quantity, quality requirements, timeline, and destination. We will help you identify the next practical step.
          </p>
          <CTAButton to="/contact" variant="dark" className="mt-8">Get a Free Sourcing Quote</CTAButton>
        </div>
      </div>
    </section>
  )
}
