import InquiryForm from '../components/sections/InquiryForm'

export default function Contact() {
  return (
    <main>
      <section className="bg-white px-4 py-20 text-brand-ink sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">Contact</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-navy md:text-5xl">Get a Free Sourcing Quote</h1>
            <p className="mt-6 text-lg leading-8 text-brand-subtle">Share your product requirements and tell us where you need support: supplier search, factory verification, inspection, production follow-up, or shipping coordination.</p>
            <div className="mt-8 rounded-3xl border border-slate-200 bg-brand-surface p-6 text-brand-ink">
              <h2 className="text-xl font-bold text-brand-navy">What to include</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-brand-subtle">
                <li>Product photos, links, drawings, or specification notes</li>
                <li>Target order quantity, packaging needs, and destination market</li>
                <li>Any certifications, testing, or quality requirements</li>
                <li>Timeline for samples, production, inspection, and shipping</li>
              </ul>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  )
}
