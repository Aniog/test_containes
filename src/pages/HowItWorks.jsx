import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { processSteps } from '../content.js'

export default function HowItWorks() {
  return (
    <main>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="How it works" title="From product requirement to shipment handover">
            Our workflow is designed to make supplier selection, quality checks, and production communication easier to manage from overseas.
          </SectionHeader>
          <div className="mt-12 grid gap-6">
            {processSteps.map(([number, title, desc]) => (
              <article key={number} className="grid gap-5 rounded-3xl border border-brand-border bg-brand-page p-6 text-brand-ink shadow-sm md:grid-cols-[110px_1fr_auto] md:items-center">
                <div className="text-3xl font-semibold text-brand-blue">{number}</div>
                <div>
                  <h2 className="text-2xl font-semibold text-brand-navy">{title}</h2>
                  <p className="mt-2 leading-8 text-brand-muted">{desc}</p>
                </div>
                <CheckCircle2 className="h-8 w-8 text-brand-green" aria-hidden="true" />
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-brand-navy p-8 text-white md:p-10">
            <h2 className="text-2xl font-semibold">Start with clear product information</h2>
            <p className="mt-3 max-w-3xl leading-8 text-blue-100">The more specific your requirements are, the more accurate supplier comparison becomes. If your specification is incomplete, we can help identify what needs to be clarified before supplier outreach.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-brand-navy transition hover:bg-brand-soft">
              Send requirements
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  )
}
