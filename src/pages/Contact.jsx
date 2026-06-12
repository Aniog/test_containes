import InquiryForm from '@/components/forms/InquiryForm'
import PageHero from '@/components/sections/PageHero'

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Get a Free Sourcing Quote"
        text="Send your product details, estimated quantity, required service, quality expectations, and shipping destination. We will review and respond with practical next steps."
        cta={false}
      />
      <section className="bg-slate-50 py-16 text-slate-900 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">What to include</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>Product photos, drawings, materials, or reference links if available.</li>
              <li>Estimated order quantity, target market, and required certificates.</li>
              <li>Packaging, labeling, inspection, and shipment destination details.</li>
              <li>Your timeline for sampling, order confirmation, and delivery.</li>
            </ul>
            <div className="mt-8 rounded-2xl bg-blue-50 p-5 text-sm leading-6 text-slate-800">
              We provide practical feedback based on the information shared. We do not promise unrealistic prices or guaranteed supplier outcomes.
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  )
}
