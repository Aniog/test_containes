import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: 'led-lighting',
    title: 'LED Lighting for US Retailer',
    category: 'Electronics',
    result: 'Saved 32% vs previous supplier with better quality',
    desc: 'Sourced and verified LED panel manufacturer in Shenzhen. Managed 3 production runs with zero defect shipments.',
  },
  {
    id: 'furniture-eu',
    title: 'Office Furniture for EU Distributor',
    category: 'Furniture',
    result: 'Delivered 2,000 units on time with FSC certification',
    desc: 'Found FSC-certified factory in Foshan. Coordinated container loading inspection and sea freight to Hamburg.',
  },
  {
    id: 'apparel-au',
    title: 'Custom Workwear for Australian Brand',
    category: 'Textiles',
    result: 'Reduced lead time from 60 to 35 days',
    desc: 'Identified specialized workwear factory in Dongguan. Managed fabric sourcing, sampling, and bulk production.',
  },
]

export default function CaseStudiesPreview() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Case Studies</span>
            <h2 id="cases-section-title" className="text-3xl md:text-4xl font-bold text-neutral-800 tracking-tight mb-2">
              Real Results for Real Buyers
            </h2>
            <p className="text-neutral-600 text-lg">See how we've helped businesses source successfully from China.</p>
          </div>
          <Link to="/case-studies" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-accent transition-colors">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[16/9] relative">
                <img
                  data-strk-img-id={`case-${cs.id}-img-c3d4`}
                  data-strk-img={`[case-${cs.id}-desc] [case-${cs.id}-title] [cases-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cs.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-3">
                  {cs.category}
                </span>
                <h3 id={`case-${cs.id}-title`} className="font-semibold text-neutral-800 text-lg mb-2">{cs.title}</h3>
                <p id={`case-${cs.id}-desc`} className="text-neutral-600 text-sm leading-relaxed mb-3">{cs.desc}</p>
                <p className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1.5 rounded-lg inline-block">
                  ✓ {cs.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
