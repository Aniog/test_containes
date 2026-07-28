import InquiryForm from '@/components/site/InquiryForm.jsx'

const InquirySection = () => (
  <section className="bg-brand-mist py-16 md:py-24">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
      <div className="flex flex-col justify-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Start with your brief</p>
        <h2 className="text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">Send your product details and sourcing questions</h2>
        <p className="mt-4 text-base leading-7 text-brand-muted">The more specific your brief, the more useful the supplier comparison can be. Include photos, quantities, target price, quality requirements, and shipment destination when available.</p>
      </div>
      <InquiryForm />
    </div>
  </section>
)

export default InquirySection
