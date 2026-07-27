import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    client: 'European Retail Chain',
    industry: 'Home & Garden',
    result: 'Reduced sourcing costs by 22% and cut lead times from 90 to 65 days.',
    imgId: 'cs-retail-a1b2c3',
    descId: 'cs-retail-desc',
  },
  {
    client: 'US Electronics Startup',
    industry: 'Consumer Electronics',
    result: 'Sourced 3 verified component suppliers and passed FCC compliance on first shipment.',
    imgId: 'cs-electronics-d4e5f6',
    descId: 'cs-electronics-desc',
  },
  {
    client: 'Australian Apparel Brand',
    industry: 'Textiles',
    result: 'Achieved 98.5% first-pass quality rate after implementing our QC protocol.',
    imgId: 'cs-textiles-g7h8i9',
    descId: 'cs-textiles-desc',
  },
]

export default function CaseStudiesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <h2 id="case-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Client Success Stories
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Real results from real projects. See how we have helped businesses like yours source smarter.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center text-brand font-semibold hover:text-brand-light transition-colors shrink-0"
          >
            View All Case Studies
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <Link
              to="/case-studies"
              key={cs.client}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.client.replace(/\s+/g, '-').toLowerCase()}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cs.client}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {cs.industry}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand transition-colors" />
                </div>
                <h3 id={`${cs.client.replace(/\s+/g, '-').toLowerCase()}-title`} className="text-lg font-semibold text-slate-900 mb-2">{cs.client}</h3>
                <p id={cs.descId} className="text-sm text-slate-600 leading-relaxed">
                  {cs.result}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
