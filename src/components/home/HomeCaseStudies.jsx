import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '@/components/shared/SectionHeader'

const cases = [
  {
    id: 'europe-retailer',
    titleId: 'case-title-europe-retailer',
    descId: 'case-desc-europe-retailer',
    title: 'European retailer scales kitchenware line',
    description:
      'Found two qualified manufacturers, reduced defect rate from 8% to under 1.5%, and cut average lead time by 12 days.',
    stat: '1.5% defect rate',
    imgId: 'case-img-europe-retailer-7e1c',
  },
  {
    id: 'us-distributor',
    titleId: 'case-title-us-distributor',
    descId: 'case-desc-us-distributor',
    title: 'US distributor launches private-label electronics',
    description:
      'Verified suppliers, managed tooling and sample approvals, and coordinated the first 40-ft container shipment.',
    stat: '40-ft container shipped',
    imgId: 'case-img-us-distributor-2b5a',
  },
  {
    id: 'australia-brand',
    titleId: 'case-title-australia-brand',
    descId: 'case-desc-australia-brand',
    title: 'Australian brand stabilizes apparel supply',
    description:
      'Audited factories, introduced inline inspections, and consolidated orders to improve delivery reliability.',
    stat: '98% on-time delivery',
    imgId: 'case-img-australia-brand-9d3f',
  },
]

export default function HomeCaseStudies() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case Studies"
          title="Real results for global buyers"
          description="Practical outcomes from sourcing projects we have managed across different industries and markets."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {cases.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [section-cases-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-semibold">
                  {item.stat}
                </span>
                <h3
                  id={item.titleId}
                  className="mt-3 text-lg font-semibold text-slate-900"
                >
                  {item.title}
                </h3>
                <p
                  id={item.descId}
                  className="mt-2 text-sm text-slate-600 leading-relaxed"
                >
                  {item.description}
                </p>
                <Link
                  to="/case-studies"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-800 hover:underline"
                >
                  Read more <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
