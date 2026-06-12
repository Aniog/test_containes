import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowUpRight } from 'lucide-react'

export const CASES = [
  {
    id: 'kitchen-appliance-eu',
    industry: 'Home & Kitchen',
    region: 'EU buyer',
    title: 'Replacing an unreliable supplier for a kitchen appliance brand',
    summary:
      'A European brand was facing 12% defect rates and missed deadlines. We re-sourced two qualified factories in Foshan, ran factory audits, restructured the QC plan and cut defects below 1.5% within two production cycles.',
    metrics: [
      { k: 'Defect rate', v: '12% → 1.4%' },
      { k: 'On-time shipment', v: '68% → 97%' },
      { k: 'Unit cost', v: '−6%' },
    ],
  },
  {
    id: 'electronics-startup-us',
    industry: 'Consumer Electronics',
    region: 'US startup',
    title: 'First production run for a Bluetooth speaker startup',
    summary:
      'A US hardware startup needed help moving from prototype to first production. We managed DFM feedback with three Shenzhen factories, coordinated tooling, samples and certifications (FCC, CE, RoHS), and supervised the first 5,000-unit run.',
    metrics: [
      { k: 'Lead time', v: '11 weeks' },
      { k: 'AQL final inspection', v: 'Pass — Level II 2.5' },
      { k: 'On-time delivery', v: 'Yes (Week 12)' },
    ],
  },
  {
    id: 'apparel-au',
    industry: 'Apparel & Textiles',
    region: 'Australia',
    title: 'Private-label activewear line with retail packaging',
    summary:
      'An Australian retailer wanted to launch a 9-SKU activewear line with custom labels, hangtags and retail-ready packaging. We managed sampling, fabric tests, fitting rounds and DUPRO inspections across two Guangzhou factories.',
    metrics: [
      { k: 'SKUs launched', v: '9' },
      { k: 'Sample rounds', v: '3 → approved' },
      { k: 'Reorder rate', v: '2x within 6 months' },
    ],
  },
]

export default function CaseStudiesSection({
  kicker = 'Case studies',
  title = 'Real orders, real results',
  showAll = false,
  showCTA = true,
}) {
  const ref = useRef(null)
  const items = showAll ? CASES : CASES

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">{kicker}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              A few examples of how we helped buyers de-risk their supply chain. Names anonymized
              on request — full references available on call.
            </p>
          </div>
          {showCTA && (
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              View all case studies <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {items.map((c) => (
            <article
              key={c.id}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  alt={c.title}
                  data-strk-img-id={`case-${c.id}-img`}
                  data-strk-img={`[case-${c.id}-title] ${c.industry} factory production warehouse`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-blue-700">{c.industry}</span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700">{c.region}</span>
                </div>
                <h3
                  id={`case-${c.id}-title`}
                  className="mt-4 text-lg font-semibold leading-snug text-slate-900"
                >
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.summary}</p>

                <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
                  {c.metrics.map((m) => (
                    <div key={m.k}>
                      <dt className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                        {m.k}
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-slate-900">{m.v}</dd>
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
