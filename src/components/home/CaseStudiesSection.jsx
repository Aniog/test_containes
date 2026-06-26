import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const cases = [
  {
    id: 'led-lighting',
    title: 'LED Lighting for European Distributor',
    problem: 'A German distributor needed reliable LED panel manufacturers but received inconsistent samples from unverified suppliers.',
    result: 'Reduced unit cost by 22% while maintaining CE certification standards. Established a stable 3-factory supply chain.',
  },
  {
    id: 'furniture',
    title: 'Custom Furniture for US Retail Chain',
    problem: 'A US furniture brand struggled with production delays and quality inconsistency from a factory they found on a B2B platform.',
    result: 'Sourced and audited 2 new factories. Implemented weekly QC inspections. On-time delivery improved from 60% to 97%.',
  },
  {
    id: 'textile',
    title: 'Performance Textiles for Australian Brand',
    problem: 'An Australian activewear brand needed a factory capable of producing moisture-wicking fabrics to their exact specifications.',
    result: 'Identified 3 specialized textile mills, managed the sampling process, and negotiated a 15% lower MOQ for the first production run.',
  },
]

export default function CaseStudiesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Case Studies</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Real Results for Real Buyers
            </h2>
            <p className="text-gray-600 leading-relaxed">
              See how we have helped businesses across industries source successfully from China.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:text-accent-hover transition-colors shrink-0"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="bg-surface rounded-xl overflow-hidden border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
              <div
                data-strk-bg-id={`case-bg-${c.id}-d4e5f6`}
                data-strk-bg={`[case-title-${c.id}] china factory quality inspection`}
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="600"
                style={{ paddingTop: '56.25%', backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="p-6">
                <h3 id={`case-title-${c.id}`} className="font-bold text-navy mb-3 group-hover:text-accent transition-colors">
                  {c.title}
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-sm text-gray-600">{c.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-success uppercase tracking-wider mb-1">Result</p>
                    <p className="text-sm text-gray-600">{c.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
