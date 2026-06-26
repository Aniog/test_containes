import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

const cases = [
  {
    id: 'kitchenware',
    industry: 'Home & Kitchen',
    title: 'Cookware brand consolidates 5 suppliers into 1 verified factory',
    summary:
      'A European cookware brand was managing five small suppliers with inconsistent quality. We audited the category, identified one capable factory and rebuilt the supply base.',
    stats: [
      { label: 'Defect rate', value: '-68%' },
      { label: 'Lead time', value: '-21 days' },
    ],
  },
  {
    id: 'electronics',
    industry: 'Consumer Electronics',
    title: 'US importer launches a new audio accessory line in 14 weeks',
    summary:
      'A North American importer needed to take a new audio product from concept to first container. We managed prototyping, certifications and pre-shipment QC end to end.',
    stats: [
      { label: 'Time to first shipment', value: '14 weeks' },
      { label: 'Pre-shipment AQL pass', value: '100%' },
    ],
  },
  {
    id: 'furniture',
    industry: 'Furniture',
    title: 'Online retailer cuts container damage claims through better packing',
    summary:
      'An online furniture retailer faced repeated damage claims. We re-engineered carton and pallet packing with the factory and ran drop tests before shipping.',
    stats: [
      { label: 'Damage claims', value: '-74%' },
      { label: 'Packaging cost', value: '+3% only' },
    ],
  },
]

export default function HomeCaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
              Case studies
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Selected projects with overseas buyers
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              A few examples of the kind of work we do. Details are simplified to protect
              client confidentiality.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            All case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article
              key={c.id}
              className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                <img
                  alt={c.title}
                  data-strk-img-id={`home-case-${c.id}-2b9c4f`}
                  data-strk-img={`[home-case-${c.id}-summary] [home-case-${c.id}-title] china manufacturing`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                  {c.industry}
                </span>
                <h3
                  id={`home-case-${c.id}-title`}
                  className="mt-3 text-lg font-semibold text-slate-900 leading-snug"
                >
                  {c.title}
                </h3>
                <p
                  id={`home-case-${c.id}-summary`}
                  className="mt-2 text-sm text-slate-600 leading-relaxed"
                >
                  {c.summary}
                </p>
                <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-200 pt-4">
                  {c.stats.map((s) => (
                    <div key={s.label}>
                      <dt className="text-xs text-slate-500">{s.label}</dt>
                      <dd className="text-base font-bold text-slate-900 mt-0.5">{s.value}</dd>
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
