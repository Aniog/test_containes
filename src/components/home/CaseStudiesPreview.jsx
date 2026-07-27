import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '@/components/shared/SectionHeader'

const cases = [
  {
    id: 'us-electronics',
    title: 'US Electronics Distributor',
    desc: 'Helped a US distributor find 3 verified PCB suppliers, reducing defect rate from 12% to 1.5% and cutting lead time by 30%.',
    imgId: 'case-us-electronics-m1n2',
    titleId: 'case-us-electronics-title',
    descId: 'case-us-electronics-desc',
  },
  {
    id: 'eu-home-garden',
    title: 'European Home & Garden Brand',
    desc: 'Sourced and verified furniture suppliers for a European brand, managing QC across 4 factories with 98% on-time delivery.',
    imgId: 'case-eu-home-o3p4',
    titleId: 'case-eu-home-title',
    descId: 'case-eu-home-desc',
  },
  {
    id: 'au-auto-parts',
    title: 'Australian Auto Parts Retailer',
    desc: 'Coordinated full sourcing cycle for aftermarket auto parts, from supplier search to door-to-door delivery of 50,000 units.',
    imgId: 'case-au-auto-q5r6',
    titleId: 'case-au-auto-title',
    descId: 'case-au-auto-desc',
  },
]

export default function CaseStudiesPreview() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Case Studies"
          title="Real Results for Real Buyers"
          subtitle="See how we've helped global buyers overcome sourcing challenges and achieve measurable improvements."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((c) => (
            <div key={c.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="aspect-[3x2] overflow-hidden bg-gray-50">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 id={c.titleId} className="text-base font-semibold text-navy-600 mb-2">{c.title}</h3>
                <p id={c.descId} className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-accent-400 font-semibold hover:text-accent-500 transition-colors"
          >
            Read All Case Studies
            <span className="text-lg">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
