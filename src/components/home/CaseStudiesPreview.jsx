import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { TrendingUp, Package, DollarSign } from 'lucide-react'

const caseStudies = [
  {
    title: 'US Retailer Sourced Electronics in 3 Weeks',
    desc: 'A mid-size US retailer needed 10,000 units of a proprietary charging cable. We identified 5 factories, verified 3 on-site, and placed the order within 3 weeks.',
    result: 'Saved 34% on unit cost vs. existing supplier',
    icon: TrendingUp,
    imgId: 'cs-electronics-01',
    titleId: 'cs-title-0',
    descId: 'cs-desc-0',
  },
  {
    title: 'European Brand Launched Private Label Line',
    desc: 'A German wellness brand wanted to launch a line of bamboo kitchenware. We managed OEM development, mold creation, and packaging design from concept to first shipment.',
    result: 'Product line launched 2 weeks ahead of schedule',
    icon: Package,
    imgId: 'cs-bamboo-02',
    titleId: 'cs-title-1',
    descId: 'cs-desc-1',
  },
  {
    title: 'Australian Distributor Switched Suppliers',
    desc: 'An Australian distributor was experiencing 15% defect rates. We conducted a factory audit, identified process issues, and transitioned to a better supplier.',
    result: 'Defect rate dropped to under 2%',
    icon: DollarSign,
    imgId: 'cs-aus-03',
    titleId: 'cs-title-2',
    descId: 'cs-desc-2',
  },
]

export default function CaseStudiesPreview() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-[#F5EDE3] text-[#C27A3E] text-xs font-medium tracking-wider uppercase rounded-full mb-4">
            Client Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">Case Studies</h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Real results from real clients. See how we have helped businesses like yours succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => {
            const Icon = cs.icon
            return (
              <div
                key={cs.title}
                className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 bg-slate-100">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/70 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-4 h-4 text-[#C27A3E]" />
                    <span className="text-xs font-medium text-[#C27A3E] uppercase tracking-wider">Success Story</span>
                  </div>
                  <h3 id={cs.titleId} className="text-lg font-semibold text-[#1A365D] mb-2 leading-snug">{cs.title}</h3>
                  <p id={cs.descId} className="text-[#64748B] text-sm leading-relaxed mb-4">{cs.desc}</p>
                  <div className="bg-[#F5EDE3] rounded-md px-3 py-2.5">
                    <p className="text-[#C27A3E] text-sm font-semibold">{cs.result}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center px-6 py-3 border-2 border-[#1A365D] text-[#1A365D] text-sm font-semibold rounded-md hover:bg-[#1A365D] hover:text-white transition-colors"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}
