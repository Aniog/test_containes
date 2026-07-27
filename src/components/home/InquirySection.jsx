import InquiryForm from '../site/InquiryForm'

function InquirySection() {
  return (
    <section className="bg-brand-bg py-16 text-brand-ink lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Start a sourcing brief</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
            Tell us what you want to source from China
          </h2>
          <p className="mt-4 text-base leading-7 text-brand-ink/75 sm:text-lg">
            The more specific your brief, the faster we can evaluate supplier fit, quality requirements, likely questions, and the right next step.
          </p>
          <div className="mt-8 rounded-3xl border border-brand-line bg-white p-6 text-brand-ink shadow-sm">
            <h3 className="text-lg font-semibold text-brand-navy">Helpful details to include</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-brand-ink/70">
              <li>Product photos, drawings, samples, or reference links</li>
              <li>Estimated order quantity and target market</li>
              <li>Quality, testing, labeling, or packaging requirements</li>
              <li>Timeline, current supplier status, and shipment destination</li>
            </ul>
          </div>
        </div>
        <InquiryForm />
      </div>
    </section>
  )
}

export default InquirySection
