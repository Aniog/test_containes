import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const cases = [
  {
    id: 'electronics-buyer',
    title: 'Electronics Buyer from Germany',
    desc: 'Sourced IoT device components from 3 qualified factories, reduced unit cost by 22% while improving quality consistency.',
    imgId: 'case-electronics-4a1b2c',
    result: '22% cost reduction',
  },
  {
    id: 'furniture-retailer',
    title: 'Furniture Retailer from Australia',
    desc: 'Verified 5 factories, managed custom furniture production, handled FCL shipping for 12 container loads.',
    imgId: 'case-furniture-7d3e5f',
    result: '12 containers delivered',
  },
  {
    id: 'packaging-distributor',
    title: 'Packaging Distributor from USA',
    desc: 'Found alternative supplier after original factory failed audit, ensured consistent packaging quality across 50+ SKUs.',
    imgId: 'case-packaging-9b6c8d',
    result: 'Supplier rescued in 3 weeks',
  },
]

export default function HomeCaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 id="cases-heading" className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Case Studies
            </h2>
            <p id="cases-subtitle" className="mt-3 text-gray-600 text-lg max-w-xl">
              Real stories from buyers who transformed their sourcing with our support.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-brand-orange hover:text-brand-orange-hover font-medium text-sm transition-colors shrink-0"
          >
            View all case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <article key={c.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div
                className="aspect-[3/2]"
                data-strk-bg-id={c.imgId}
                data-strk-bg={`[case-${c.id}-desc] [case-${c.id}-title] [cases-subtitle] [cases-heading]`}
                data-strk-bg-ratio="3x2"
                data-strk-bg-width="600"
              />
              <div className="p-5 md:p-6">
                <span className="inline-block px-2.5 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded-full mb-3">
                  {c.result}
                </span>
                <h3 id={`case-${c.id}-title`} className="font-semibold text-brand-navy mb-2">{c.title}</h3>
                <p id={`case-${c.id}-desc`} className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}