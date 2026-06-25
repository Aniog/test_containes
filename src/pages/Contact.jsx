import InquiryForm from '@/components/home/InquiryForm'
import SectionHeading from '@/components/home/SectionHeading'

export default function Contact() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Get a Free Sourcing Quote"
              text="Send your sourcing request and we will review the product, service needs, and available information before suggesting a practical next step."
            />
            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-950">
                <h2 className="text-base font-bold text-slate-950">What to include</h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">Product photos or drawings, quantity, destination country, packaging needs, timeline, quality expectations, and current supplier status.</p>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-blue-950">
                <h2 className="text-base font-bold text-blue-950">How we respond</h2>
                <p className="mt-2 text-sm leading-6 text-blue-900">We review whether the request is clear enough for supplier search, verification, inspection, production follow-up, or shipping coordination.</p>
              </div>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  )
}
