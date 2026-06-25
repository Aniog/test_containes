import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

export const CASES = [
  {
    id: 'home-kitchen-eu',
    titleId: 'case-home-kitchen-eu-title',
    descId: 'case-home-kitchen-eu-desc',
    imgId: 'case-img-home-kitchen-eu-7a2d',
    industry: 'Home & Kitchen',
    region: 'European retail chain',
    title: 'Cut defect rate from 6.2% to 0.9% on a kitchenware reorder',
    desc: 'A European houseware brand had repeated complaints on a stainless steel cookware line. We replaced the supplier, introduced AQL II inspection, and standardized inner packaging. Over the next four shipments, defect rate dropped to under 1%.',
    metrics: [
      { label: 'Defect rate', value: '6.2% → 0.9%' },
      { label: 'On-time shipments', value: '4 of 4' },
      { label: 'Reorder cycle', value: '−18 days' },
    ],
  },
  {
    id: 'consumer-electronics-us',
    titleId: 'case-consumer-electronics-us-title',
    descId: 'case-consumer-electronics-us-desc',
    imgId: 'case-img-consumer-electronics-us-3c91',
    industry: 'Consumer Electronics',
    region: 'US Amazon seller',
    title: 'Launched a private-label charger across 3 SKUs in 11 weeks',
    desc: 'An Amazon seller needed a UL-listed wall charger with custom packaging. We sourced 8 factories around Shenzhen, ran two rounds of samples, and managed UL filing through the chosen supplier. First production passed inspection on the first attempt.',
    metrics: [
      { label: 'Factories evaluated', value: '8' },
      { label: 'Sample rounds', value: '2' },
      { label: 'Time to first PO', value: '11 weeks' },
    ],
  },
  {
    id: 'furniture-au',
    titleId: 'case-furniture-au-title',
    descId: 'case-furniture-au-desc',
    imgId: 'case-img-furniture-au-9b4e',
    industry: 'Furniture',
    region: 'Australian online retailer',
    title: 'Saved 14% by consolidating 5 suppliers into 2 partners',
    desc: 'A furniture e-tailer was paying premium freight on small mixed orders. We rebuilt their supplier base around two reliable factories, consolidated into 40HQ containers, and renegotiated FOB pricing. Net landed cost dropped 14% with no quality compromise.',
    metrics: [
      { label: 'Landed cost', value: '−14%' },
      { label: 'Active suppliers', value: '5 → 2' },
      { label: 'Container fill rate', value: '+22%' },
    ],
  },
]

export default function CaseStudiesSection({ limit }) {
  const containerRef = useRef(null)
  const items = typeof limit === 'number' ? CASES.slice(0, limit) : CASES
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [limit])

  return (
    <section ref={containerRef} className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E63946]">Case Studies</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#0B2545]">
              Real projects, measurable outcomes
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              A small selection of recent buyer engagements. Numbers are taken from our internal QC and
              shipping records. Company names are kept private by request.
            </p>
          </div>
          <Link to="/case-studies" className="inline-flex items-center gap-1.5 text-[#0B2545] font-semibold hover:text-[#E63946] transition">
            See all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <article key={c.id} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  alt={c.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs">
                  <span className="inline-flex items-center rounded-full bg-[#0B2545]/5 text-[#0B2545] px-2.5 py-1 font-medium">{c.industry}</span>
                  <span className="text-slate-500">{c.region}</span>
                </div>
                <h3 id={c.titleId} className="mt-3 text-lg font-semibold text-[#0B2545] leading-snug">{c.title}</h3>
                <p id={c.descId} className="mt-2 text-sm text-slate-600 leading-relaxed">{c.desc}</p>

                <dl className="mt-5 grid grid-cols-3 gap-3 pt-5 border-t border-slate-100">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[11px] uppercase tracking-wider text-slate-500">{m.label}</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-[#0B2545]">{m.value}</dd>
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
