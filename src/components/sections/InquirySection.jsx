import InquiryForm from '@/components/shared/InquiryForm'

const InquirySection = () => (
  <section className="bg-brand-white py-16 text-brand-navy md:py-20">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
      <div className="flex flex-col justify-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">Start a sourcing request</p>
        <h2 id="inquiry-section-title" className="mt-3 text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
          Tell us what you need to source from China
        </h2>
        <p id="inquiry-section-desc" className="mt-4 text-base leading-7 text-brand-slate">
          The more details you share, the more useful the first response can be. Include product specifications, quantity, target market, certification needs, and expected order timeline.
        </p>
        <div
          className="mt-8 min-h-72 rounded-3xl border border-brand-line bg-cover bg-center shadow-soft"
          data-strk-bg-id="inquiry-supplier-meeting-77d4c1"
          data-strk-bg="[inquiry-section-desc] [inquiry-section-title]"
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="800"
        />
      </div>
      <InquiryForm />
    </div>
  </section>
)

export default InquirySection
