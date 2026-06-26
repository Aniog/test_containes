import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const cases = [
  {
    id: 'cookware',
    industry: 'Home & Kitchen',
    region: 'Germany',
    title: 'Cookware brand consolidates five suppliers into one verified factory',
    challenge:
      'A European cookware brand was managing five small suppliers across three provinces. Quality varied between batches, lead times slipped and complaints from end customers were rising.',
    approach:
      'We audited the existing supplier base, ran technical reviews with three candidate factories, and helped the brand transition production to a single mid-sized factory with proper QC systems.',
    outcome:
      'Defect rate dropped substantially within two production cycles. Lead time stabilized and packaging complaints from retailers fell sharply.',
    stats: [
      { label: 'Defect rate', value: '-68%' },
      { label: 'Lead time', value: '-21 days' },
      { label: 'Suppliers managed', value: '5 → 1' },
    ],
    quote: 'They did the boring, careful work we did not have time to do ourselves.',
    quoteAuthor: 'Head of Operations, cookware brand',
  },
  {
    id: 'audio',
    industry: 'Consumer Electronics',
    region: 'United States',
    title: 'US importer launches a new audio accessory line in 14 weeks',
    challenge:
      'A US importer wanted to launch a new audio accessory line for the holiday season, but had no existing China supplier and was on a tight 14-week deadline before first shipment.',
    approach:
      'We shortlisted four factories, ran prototyping in parallel with two of them, managed certification testing, and arranged pre-shipment inspection with a 0.65 AQL.',
    outcome:
      'The product shipped on schedule for the planned launch window with full certification and a clean pre-shipment inspection on the first production run.',
    stats: [
      { label: 'Time to first shipment', value: '14 weeks' },
      { label: 'Pre-shipment AQL pass', value: '100%' },
      { label: 'Suppliers evaluated', value: '12' },
    ],
    quote: 'Without their factory work on the ground, we would have missed the season entirely.',
    quoteAuthor: 'Founder, audio accessory startup',
  },
  {
    id: 'furniture',
    industry: 'Furniture',
    region: 'United Kingdom',
    title: 'Online retailer cuts container damage claims through better packing',
    challenge:
      'A UK online furniture retailer was receiving repeated damage claims from end customers. Investigation showed the issue was at the carton and pallet packing stage, not the product itself.',
    approach:
      'We worked with the factory engineering team to re-design the inner packing and outer carton, ran drop tests on the new packaging, and supervised the next two shipments.',
    outcome:
      'Damage claims dropped significantly, while the additional packaging cost added only a few percent to landed cost.',
    stats: [
      { label: 'Damage claims', value: '-74%' },
      { label: 'Packaging cost', value: '+3%' },
      { label: 'Shipments supervised', value: '8' },
    ],
    quote: 'A small investment in packaging saved us many times its cost in returns.',
    quoteAuthor: 'COO, online furniture retailer',
  },
  {
    id: 'apparel',
    industry: 'Apparel',
    region: 'Australia',
    title: 'Apparel brand introduces a structured QC program across three suppliers',
    challenge:
      'A growing apparel brand had inconsistent quality across three Chinese suppliers, with no formal inspection process and limited visibility before goods left China.',
    approach:
      'We introduced a documented in-line and pre-shipment inspection workflow, standardized defect classifications, and trained the brand on reading AQL reports.',
    outcome:
      'Each shipment now arrives with a documented inspection report. Quality issues are surfaced and corrected at the factory before goods are shipped.',
    stats: [
      { label: 'Inspection coverage', value: '100% of orders' },
      { label: 'Returns from end customers', value: '-41%' },
      { label: 'Inspectors trained', value: '3' },
    ],
    quote: 'For the first time, we understand exactly what we are shipping.',
    quoteAuthor: 'Founder, apparel brand',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Case studies"
        titleId="cases-page-title"
        descId="cases-page-desc"
        title="A few projects with overseas buyers"
        description="Selected examples of the sourcing and QC work we do, simplified to protect client confidentiality."
      />

      <section ref={containerRef} className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
          {cases.map((c, idx) => (
            <article
              key={c.id}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm"
            >
              <div className={`grid lg:grid-cols-12 gap-0 ${idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="lg:col-span-5 bg-slate-100">
                  <img
                    alt={c.title}
                    data-strk-img-id={`case-${c.id}-7f3b9c`}
                    data-strk-img={`[case-${c.id}-challenge] [case-${c.id}-title] china manufacturing factory`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
                  />
                </div>
                <div className="lg:col-span-7 p-6 md:p-10">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      {c.industry}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                      Buyer: {c.region}
                    </span>
                  </div>
                  <h2
                    id={`case-${c.id}-title`}
                    className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-slate-900 leading-snug"
                  >
                    {c.title}
                  </h2>

                  <div className="mt-6 space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Challenge
                      </h3>
                      <p id={`case-${c.id}-challenge`} className="mt-1.5">{c.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Approach
                      </h3>
                      <p className="mt-1.5">{c.approach}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Outcome
                      </h3>
                      <p className="mt-1.5">{c.outcome}</p>
                    </div>
                  </div>

                  <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-200 pt-5">
                    {c.stats.map((s) => (
                      <div key={s.label}>
                        <dt className="text-xs text-slate-500">{s.label}</dt>
                        <dd className="text-lg md:text-xl font-bold text-slate-900 mt-0.5">{s.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <blockquote className="mt-6 rounded-lg bg-slate-50 border border-slate-200 p-4 flex items-start gap-3">
                    <Quote className="h-5 w-5 text-blue-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-slate-700 italic leading-relaxed">"{c.quote}"</p>
                      <footer className="mt-2 text-xs text-slate-500">— {c.quoteAuthor}</footer>
                    </div>
                  </blockquote>
                </div>
              </div>
            </article>
          ))}

          <div className="rounded-2xl bg-slate-900 text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                Have a similar project?
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-300">
                Share your brief and we will tell you, candidly, whether we are a good fit.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-base font-semibold text-white hover:bg-blue-500 transition"
            >
              Start your inquiry
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
