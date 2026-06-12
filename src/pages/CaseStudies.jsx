import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import CTAButton from '@/components/shared/CTAButton'

const caseStudies = [
  {
    id: 'case-bluetooth',
    industry: 'Consumer Electronics',
    title: 'Bluetooth Speaker Sourcing for US E-commerce Brand',
    challenge: 'A US-based Amazon seller needed a reliable factory for custom Bluetooth speakers with specific sound quality requirements and FCC certification.',
    solution: 'We identified 5 factories in Shenzhen, conducted on-site audits, arranged samples from 3 finalists, and negotiated a 22% lower unit price than their previous supplier.',
    results: ['22% cost reduction per unit', '10,000 units delivered on time', 'FCC certification passed first attempt', 'Ongoing partnership for 3 product lines'],
    metrics: { savings: '22%', units: '10,000', timeline: '45 days' },
    imgId: 'case-bluetooth-img-x1y2z3',
  },
  {
    id: 'case-furniture',
    industry: 'Home & Furniture',
    title: 'Custom Furniture Line for European Retailer',
    challenge: 'A European furniture retailer needed a manufacturer capable of producing custom-designed pieces meeting EU safety and environmental standards.',
    solution: 'We sourced 3 FSC-certified factories in Foshan, arranged prototype production, and managed quality control through a 6-month production run.',
    results: ['18% below target budget', 'All EU compliance tests passed', '2,500 pieces across 12 SKUs', 'Zero quality claims from end customers'],
    metrics: { savings: '18%', units: '2,500', timeline: '60 days' },
    imgId: 'case-furniture-img-a2b3c4',
  },
  {
    id: 'case-packaging',
    industry: 'Packaging',
    title: 'Eco-Friendly Packaging for Australian Health Brand',
    challenge: 'An Australian health food company needed sustainable, FSC-certified packaging that met Australian labeling requirements at a competitive price.',
    solution: 'We found an FSC-certified packaging factory in Dongguan, negotiated pricing 30% below their existing supplier, and managed artwork approval and production.',
    results: ['30% cost reduction', '50,000 units per month capacity', 'FSC and food-safe certified', 'Consistent reorder every 6 weeks'],
    metrics: { savings: '30%', units: '50,000/mo', timeline: '30 days' },
    imgId: 'case-packaging-img-b3c4d5',
  },
  {
    id: 'case-apparel',
    industry: 'Textiles & Apparel',
    title: 'Private Label Activewear for UK Fitness Brand',
    challenge: 'A UK fitness brand wanted to launch a private label activewear line but struggled to find factories that could handle small initial orders with custom fabrics.',
    solution: 'We identified factories in Guangzhou specializing in small-batch activewear, negotiated a 300-piece MOQ, and managed fabric sourcing and quality control.',
    results: ['300-piece MOQ achieved', '4 fabric options tested', 'Full size run in 3 weeks', 'Scaled to 5,000 units within 6 months'],
    metrics: { savings: '15%', units: '5,000', timeline: '35 days' },
    imgId: 'case-apparel-img-c4d5e6',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Case Studies
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Real sourcing projects, real results. See how we've helped businesses source successfully from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="grid lg:grid-cols-2">
                  <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                    <img
                      data-strk-img-id={study.imgId}
                      data-strk-img={`[${study.id}-title] [${study.id}-industry]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.title}
                      className="w-full h-full min-h-[250px] object-cover"
                    />
                  </div>
                  <div className={`p-8 md:p-10 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <span id={`${study.id}-industry`} className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-500/10 text-accent-500 mb-3">
                      {study.industry}
                    </span>
                    <h2 id={`${study.id}-title`} className="text-xl md:text-2xl font-bold text-navy-900 mb-4">{study.title}</h2>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 mb-1">Challenge</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 mb-1">Our Solution</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 mb-2">Results</h4>
                      <ul className="space-y-1.5">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-center gap-2 text-sm text-slate-700">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
                      <div className="text-center">
                        <p className="text-xl font-bold text-accent-500">{study.metrics.savings}</p>
                        <p className="text-xs text-slate-500">Cost Saved</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold text-accent-500">{study.metrics.units}</p>
                        <p className="text-xs text-slate-500">Units</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold text-accent-500">{study.metrics.timeline}</p>
                        <p className="text-xs text-slate-500">Lead Time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Success Story Starts Here
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join hundreds of businesses that source confidently from China with our support.
          </p>
          <CTAButton variant="white">Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}
