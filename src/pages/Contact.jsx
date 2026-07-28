import InquiryForm from '@/components/common/InquiryForm'
import PageHero from '@/components/common/PageHero'

const contactPoints = [
  'Tell us the product and expected quantity',
  'Share target market, delivery timeline, and quality needs',
  'Mention whether you need supplier search, verification, inspection, or shipping coordination',
]

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Get a Free Sourcing Quote"
        description="Use the form below to start a sourcing conversation. The goal is to qualify buyer requirements clearly and quickly."
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="rounded-3xl border border-slate-950/10 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">What to include in your inquiry</h2>
            <div className="mt-6 space-y-4">
              {contactPoints.map((point) => (
                <div key={point} className="rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700/80">
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-slate-950 p-5 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">SSourcing China</p>
              <p className="mt-3 text-sm leading-7 text-white/75">
                China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.
              </p>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  )
}
