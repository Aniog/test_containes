import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export const caseStudies = [
  {
    id: 'kitchenware-uk',
    industry: 'Home & Kitchen',
    country: 'United Kingdom',
    title: 'Private-label kitchen accessories for a UK Amazon brand',
    summary:
      'Sourced and tooled a 12-SKU stainless steel kitchen range. Replaced an unreliable trading company with a verified factory in Guangdong.',
    metrics: [
      { label: 'Unit cost', value: '−18%' },
      { label: 'Defect rate', value: '< 0.8%' },
      { label: 'Time to first order', value: '11 weeks' },
    ],
    imgId: 'case-kitchen-uk-9912ab',
  },
  {
    id: 'apparel-us',
    industry: 'Apparel & Textiles',
    country: 'United States',
    title: 'Sportswear line for a US DTC brand',
    summary:
      'Found a vertically integrated factory in Zhejiang, ran fit samples and pre-production QC. Coordinated air + sea shipping for launch.',
    metrics: [
      { label: 'Suppliers reviewed', value: '14' },
      { label: 'Lead time', value: '−25%' },
      { label: 'On-time shipment', value: '100%' },
    ],
    imgId: 'case-apparel-us-664fb2',
  },
  {
    id: 'electronics-de',
    industry: 'Consumer Electronics',
    country: 'Germany',
    title: 'IoT device manufacturing for a German startup',
    summary:
      'Verified two Shenzhen EMS factories, managed PCBA samples, tooling and CE testing, and ran inline QC during three production runs.',
    metrics: [
      { label: 'Tooling lead time', value: '6 weeks' },
      { label: 'PSI pass rate', value: '99.3%' },
      { label: 'Shipping mode', value: 'Sea LCL' },
    ],
    imgId: 'case-iot-de-fa31cd',
  },
]

export default function HomeCaseStudies() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-600">Case studies</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Real projects, measurable results
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              A few representative projects across categories. Company names are kept private on request.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="text-sm font-semibold text-red-600 hover:text-red-700"
          >
            View all case studies →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <article
              key={cs.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[case-${cs.id}-title] ${cs.industry} factory China`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  <span>{cs.industry}</span>
                  <span aria-hidden>•</span>
                  <span>{cs.country}</span>
                </div>
                <h3 id={`case-${cs.id}-title`} className="mt-3 text-lg font-semibold text-slate-900">
                  {cs.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{cs.summary}</p>

                <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{m.label}</dt>
                      <dd className="mt-1 text-sm font-semibold text-slate-900">{m.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6">
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700"
                  >
                    Read details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
