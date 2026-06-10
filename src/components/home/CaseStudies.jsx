import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

export const CASE_STUDIES = [
  {
    id: 'eu-kitchenware',
    industry: 'Home & Kitchen',
    country: 'Germany',
    title: 'Replacing an unreliable supplier for a German kitchenware brand',
    summary:
      'After two failed shipments from a previous factory, we rebuilt the supply chain with two verified manufacturers in Foshan, ran a full PSI on every batch, and stabilized monthly deliveries.',
    metrics: [
      { value: '−18%', label: 'Unit cost reduction' },
      { value: '0', label: 'Quality claims in 12 months' },
      { value: '32 days', label: 'Avg. lead time' },
    ],
    imgId: 'case-eu-kitchen-2c41fa',
  },
  {
    id: 'us-fitness',
    industry: 'Sports & Outdoors',
    country: 'United States',
    title: 'Scaling a US fitness equipment startup from prototype to retail',
    summary:
      'We sourced steel and rubber components, managed tooling investment with a Ningbo factory, and coordinated a 3-container pilot run with full DUPRO and pre-shipment inspections.',
    metrics: [
      { value: '3 SKUs', label: 'Launched in 5 months' },
      { value: '99%', label: 'PSI pass rate' },
      { value: '2', label: 'Factories audited' },
    ],
    imgId: 'case-us-fitness-83bd17',
  },
  {
    id: 'au-apparel',
    industry: 'Apparel & Textiles',
    country: 'Australia',
    title: 'Private-label activewear program for an Australian retailer',
    summary:
      'We shortlisted four knitwear factories near Hangzhou, negotiated tiered MOQs, and set up a recurring sample-to-bulk approval workflow with weekly production updates.',
    metrics: [
      { value: '4 → 1', label: 'Selected factory' },
      { value: '−12%', label: 'Vs. previous landed cost' },
      { value: '12', label: 'SKUs in production' },
    ],
    imgId: 'case-au-apparel-46e2cc',
  },
]

export default function CaseStudies({ heading = true, limit }) {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const items = limit ? CASE_STUDIES.slice(0, limit) : CASE_STUDIES

  return (
    <section className="py-16 md:py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {heading && (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">Case Studies</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-brand-navy">
                Real sourcing projects, measurable results
              </h2>
              <p className="mt-4 text-ink-700 text-lg">
                A small selection of recent client engagements. Names withheld under NDA.
              </p>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-blue-600"
            >
              See all case studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c) => (
            <article key={c.id} className="overflow-hidden rounded-xl border border-ink-200 bg-white shadow-sm hover:shadow-md transition flex flex-col">
              <div className="aspect-[16/10] bg-surface-muted overflow-hidden">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[case-${c.id}-summary] [case-${c.id}-title] ${c.industry.toLowerCase()} factory china`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  className="h-full w-full object-cover"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-brand-sky px-2.5 py-1 text-xs font-medium text-brand-navy">
                    {c.industry}
                  </span>
                  <span className="text-xs text-ink-500">{c.country}</span>
                </div>
                <h3 id={`case-${c.id}-title`} className="mt-3 text-lg font-semibold text-brand-navy leading-snug">
                  {c.title}
                </h3>
                <p id={`case-${c.id}-summary`} className="mt-2 text-sm text-ink-700 leading-relaxed flex-1">
                  {c.summary}
                </p>
                <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-ink-200 pt-4">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[11px] uppercase tracking-wider text-ink-500">{m.label}</dt>
                      <dd className="text-base font-semibold text-brand-navy mt-0.5">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
