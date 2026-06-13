import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { CTASection, SectionHeader } from '../components/shared/CTASection'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const caseStudies = [
  {
    title: 'US Electronics Brand Cuts Defect Rate by 85%',
    category: 'Electronics',
    challenge: 'A US-based consumer electronics company was experiencing a 12% defect rate from their Chinese supplier. Customer complaints were increasing, and returns were eroding margins. The client needed a partner who could identify the root causes and find a better manufacturing solution.',
    solution: 'We conducted a thorough audit of the existing supplier and identified systemic quality control failures. Our team then sourced and vetted three alternative factories, arranged sample production, and implemented a multi-stage inspection protocol covering incoming materials, in-process checks, and final inspection.',
    result: 'Defect rate dropped to 1.8% within 3 months. The client also achieved a 5% cost reduction through better supplier negotiation.',
    metrics: [
      { label: 'Defect Rate Reduction', value: '85%' },
      { label: 'Cost Savings', value: '5%' },
      { label: 'Time to Resolution', value: '3 months' },
    ],
    imgId: 'case-electronics-n1p2q3',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    title: 'European Retailer Saves 22% on Home Goods',
    category: 'Home & Garden',
    challenge: 'A European home goods retailer was purchasing through a trading company without direct factory access. Prices were inflated, communication was slow, and they had no visibility into production conditions or quality processes.',
    solution: 'We identified the actual factories behind the trading company and established direct relationships. Our team negotiated pricing based on actual factory costs, implemented quality inspection protocols, and set up a direct shipping arrangement that eliminated unnecessary intermediaries.',
    result: '22% cost reduction with maintained quality. Lead times improved by 10 days due to streamlined communication.',
    metrics: [
      { label: 'Cost Reduction', value: '22%' },
      { label: 'Lead Time Improvement', value: '10 days' },
      { label: 'Quality Score', value: '98.5%' },
    ],
    imgId: 'case-home-r4s5t6',
    titleId: 'case-home-title',
    descId: 'case-home-desc',
  },
  {
    title: 'Australian Importer Avoids $50K Loss',
    category: 'Apparel',
    challenge: 'An Australian apparel importer had placed a large order based on good samples. Without on-ground quality control, they were at risk of receiving goods that did not match the approved samples — a common issue in apparel manufacturing.',
    solution: 'During our pre-shipment inspection, our QC team found major deviations: incorrect fabric weight, wrong color shading, and stitching quality below the agreed standard. We halted the shipment, documented all issues with photos, and worked with the factory to rework the entire batch.',
    result: 'Client avoided a potential $50K loss from defective goods. The reworked batch passed inspection and was delivered on revised timeline.',
    metrics: [
      { label: 'Loss Avoided', value: '$50K' },
      { label: 'Issues Caught', value: '3 major' },
      { label: 'Final Pass Rate', value: '99.2%' },
    ],
    imgId: 'case-apparel-u7v8w9',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
  },
  {
    title: 'Canadian Distributor Expands Product Line',
    category: 'Industrial & Hardware',
    challenge: 'A Canadian industrial distributor wanted to expand their product line with new hardware items but lacked the expertise to evaluate Chinese manufacturers for technical specifications and compliance requirements.',
    solution: 'We sourced specialized factories with the required certifications, arranged factory visits, coordinated sample testing at accredited labs, and set up ongoing quality monitoring for their first production runs.',
    result: 'Successfully launched 15 new SKUs with zero quality incidents in the first year. The client expanded their sourcing scope with us to cover additional product categories.',
    metrics: [
      { label: 'New SKUs Launched', value: '15' },
      { label: 'Quality Incidents', value: '0' },
      { label: 'Categories Expanded', value: '3' },
    ],
    imgId: 'case-industrial-x1y2z3',
    titleId: 'case-industrial-title',
    descId: 'case-industrial-desc',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Real results from real clients. See how we have helped businesses overcome sourcing challenges and achieve better outcomes.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((cs, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="inline-block bg-blue-50 text-sky-brand text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {cs.category}
                  </span>
                  <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{cs.title}</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Challenge</h3>
                    <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Our Solution</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Result</h3>
                    <div className="flex items-start gap-2 bg-green-50 rounded-md p-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-green-800">{cs.result}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {cs.metrics.map((metric, j) => (
                      <div key={j} className="text-center bg-gray-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-navy">{metric.value}</div>
                        <div className="text-xs text-gray-600 mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-lg bg-gray-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want Results Like These?"
        subtitle="Tell us about your sourcing challenges and we will show you how we can help."
        buttonText="Get a Free Sourcing Quote"
      />
    </div>
  )
}
