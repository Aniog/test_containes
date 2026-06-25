import PageHeader from '../components/PageHeader.jsx'
import CaseStudiesSection, { CASES } from '../components/home/CaseStudiesSection.jsx'
import CTABanner from '../components/CTABanner.jsx'
import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote: 'They cut through the noise of dozens of trading companies and brought us two real factories with proper QC. Our defect rate finally became predictable.',
    name: 'Operations Director',
    company: 'European houseware brand',
  },
  {
    quote: 'Honest fees and weekly updates. We always knew where our production was, and the pre-shipment inspection saved us from a bad batch on our second order.',
    name: 'Founder',
    company: 'US Amazon seller, electronics',
  },
  {
    quote: 'Consolidating five suppliers into two cut both our landed cost and our internal admin time. We treat SSourcing as part of our supply chain team now.',
    name: 'Head of Supply Chain',
    company: 'Australian furniture e-tailer',
  },
]

export default function CaseStudies() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="What we have shipped for our buyers"
        subtitle="A selection of recent projects, summarised from our internal records. We keep company names confidential and only publish numbers we can back up."
        crumbs={[{ label: 'Case Studies' }]}
      />

      <CaseStudiesSection />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E63946]">Buyer feedback</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#0B2545]">
              What buyers say about working with us
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, idx) => (
              <figure key={idx} className="rounded-xl border border-slate-200 bg-white p-6 lg:p-7 shadow-sm flex flex-col">
                <Quote className="h-7 w-7 text-[#E63946]" />
                <blockquote className="mt-4 text-sm text-slate-700 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-slate-100">
                  <p className="text-sm font-semibold text-[#0B2545]">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.company}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#0B2545] p-8 md:p-12 grid md:grid-cols-3 gap-8 text-white">
            {[
              { value: `${CASES.length * 200}+`, label: 'Inspections completed' },
              { value: '< 1%', label: 'Average defect rate on inspected orders' },
              { value: '94%', label: 'Buyers who place a second order' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl md:text-5xl font-bold tracking-tight">{s.value}</p>
                <p className="mt-2 text-sm text-slate-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
