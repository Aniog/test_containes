import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingDown, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react'

const caseStudies = [
  {
    id: 'case-electronics-us',
    title: 'Electronics Retailer Reduces Costs by 22%',
    client: 'Mid-size electronics retailer — United States',
    category: 'Consumer Electronics',
    challenge: 'The client was paying premium prices through trading companies and experiencing inconsistent quality across their product range of Bluetooth speakers, power banks, and phone accessories.',
    solution: 'We identified 3 direct manufacturers, conducted factory audits, negotiated pricing, and implemented a QC inspection program for every shipment.',
    results: [
      '22% reduction in unit costs across 3 product lines',
      'Defect rate dropped from 8% to under 1.5%',
      'Direct factory relationships established',
      'Consistent quality across 12 monthly shipments',
    ],
    metric: '22%',
    metricLabel: 'Cost Reduction',
  },
  {
    id: 'case-furniture-eu',
    title: 'European Furniture Brand Finds Reliable Supply',
    client: 'Premium furniture brand — Germany',
    category: 'Home & Garden',
    challenge: 'After two failed attempts with Chinese suppliers (late deliveries, quality issues), the client needed a reliable manufacturing partner for their custom furniture line.',
    solution: 'We audited 8 factories, arranged sample production from 3 finalists, and established a production monitoring system with weekly photo updates.',
    results: [
      'Zero defect shipments over 8 months',
      '2 verified factory partnerships established',
      'On-time delivery rate of 100%',
      'Custom packaging solution developed',
    ],
    metric: '0',
    metricLabel: 'Defect Shipments',
  },
  {
    id: 'case-apparel-au',
    title: 'Australian Apparel Company Scales Production',
    client: 'Growing fashion brand — Australia',
    category: 'Textiles & Apparel',
    challenge: 'The brand needed to scale from small-batch local production to larger volumes in China while maintaining their quality standards and ethical manufacturing practices.',
    solution: 'We sourced BSCI-certified factories, managed the transition from samples to bulk production, and implemented size-grading QC checks.',
    results: [
      '98% on-time delivery rate',
      'Production capacity increased 5x',
      'Unit cost reduced by 35%',
      'All factories BSCI-certified',
    ],
    metric: '98%',
    metricLabel: 'On-Time Delivery',
  },
  {
    id: 'case-industrial-uk',
    title: 'UK Manufacturer Sources Custom Components',
    client: 'Industrial equipment manufacturer — United Kingdom',
    category: 'Industrial & Machinery',
    challenge: 'The client needed precision-machined components with tight tolerances (±0.02mm) at competitive prices, previously sourced from expensive European suppliers.',
    solution: 'We identified CNC machining specialists in Dongguan, arranged trial production runs, and set up a dimensional inspection protocol for every batch.',
    results: [
      '40% cost savings vs European suppliers',
      'All tolerances met within ±0.02mm',
      'Lead time reduced from 8 weeks to 4 weeks',
      'Ongoing monthly supply established',
    ],
    metric: '40%',
    metricLabel: 'Cost Savings',
  },
  {
    id: 'case-packaging-ca',
    title: 'Canadian Brand Develops Custom Packaging',
    client: 'Organic food brand — Canada',
    category: 'Packaging & Printing',
    challenge: 'The client needed eco-friendly custom packaging (compostable pouches and recycled cardboard boxes) that met Canadian food safety standards.',
    solution: 'We sourced FDA/CFIA-compliant packaging manufacturers, coordinated material testing, and managed the certification process.',
    results: [
      'FDA & CFIA compliant packaging achieved',
      '30% cost reduction vs domestic suppliers',
      'Sustainable materials sourced successfully',
      'Consistent print quality across 50,000+ units',
    ],
    metric: '30%',
    metricLabel: 'Cost Reduction',
  },
]

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="cases-title" className="text-4xl md:text-5xl font-bold text-slate-800">
              Case Studies
            </h1>
            <p id="cases-subtitle" className="mt-6 text-lg text-slate-600 leading-relaxed">
              Real sourcing projects, real results. See how we've helped businesses across industries source successfully from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs) => (
              <article key={cs.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                <div className="p-6 md:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-sky bg-blue-50 px-2.5 py-1 rounded-full">{cs.category}</span>
                    <span className="text-xs text-slate-500">{cs.client}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">{cs.title}</h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="md:col-span-2 space-y-4">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-2">Challenge</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-2">Our Solution</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-6 flex flex-col items-center justify-center">
                      <div className="text-4xl font-bold text-sky">{cs.metric}</div>
                      <div className="text-sm text-slate-600 mt-1">{cs.metricLabel}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-3">Results</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {cs.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sky">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Want Similar Results?</h2>
          <p className="mt-4 text-blue-100 text-lg">
            Every successful sourcing project starts with a conversation. Tell us about your needs.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-sky px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
