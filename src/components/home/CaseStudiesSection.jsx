import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    id: 'european-electronics',
    title: 'European Electronics Brand Cuts Costs by 30%',
    desc: 'Helped a German electronics company find a reliable PCB assembly supplier, reducing unit costs by 30% while maintaining quality standards.',
    result: '30% cost reduction, 98% on-time delivery',
  },
  {
    id: 'us-furniture',
    title: 'US Furniture Retailer Scales Production',
    desc: 'Sourced a high-quality furniture manufacturer for a US retailer, managing the entire process from prototype to container loading.',
    result: 'Scaled from 1 to 5 containers/month, zero defects',
  },
  {
    id: 'australian-packaging',
    title: 'Australian Brand Finds Custom Packaging Partner',
    desc: 'Connected an Australian cosmetics brand with a premium packaging supplier, coordinating design, sampling, and quality control.',
    result: '40% savings on packaging, 100% on-spec delivery',
  },
]

export default function CaseStudiesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Case Studies
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
            Real Results for Real Clients
          </h2>
          <p className="mt-4 text-navy-500 text-lg">
            See how we have helped businesses across industries source better from China.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                <img
                  alt={cs.title}
                  data-strk-img-id={`case-study-${cs.id}-d4e7f1`}
                  data-strk-img={`[case-title-${cs.id}] China sourcing manufacturing success`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                  className="w-full h-full object-cover"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <h3 id={`case-title-${cs.id}`} className="text-lg font-semibold text-navy-900 mb-3">
                  {cs.title}
                </h3>
                <p className="text-sm text-navy-500 leading-relaxed mb-4">
                  {cs.desc}
                </p>
                <div className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                  {cs.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}