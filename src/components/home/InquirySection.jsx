import InquiryForm from '@/components/shared/InquiryForm'
import SectionHeader from '@/components/shared/SectionHeader'

const InquirySection = ({ pageSource = 'homepage inquiry section' }) => (
  <section className="bg-slate-50 py-16 text-slate-950 md:py-24">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
      <div>
        <SectionHeader
          eyebrow="Start a project"
          title="Get a Free Sourcing Quote"
          description="Send your product details and sourcing requirements. The more specific your inquiry, the easier it is to identify suitable suppliers and realistic next steps."
        />
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-6 text-slate-700 shadow-sm">
          <p className="font-semibold text-slate-950">Helpful details to include:</p>
          <ul className="mt-3 grid gap-2">
            <li>Product photos, drawings, or reference links</li>
            <li>Quantity, target price, and destination country</li>
            <li>Material, size, packaging, and certification needs</li>
            <li>Preferred timeline and current supplier status</li>
          </ul>
        </div>
      </div>
      <InquiryForm pageSource={pageSource} />
    </div>
  </section>
)

export default InquirySection
