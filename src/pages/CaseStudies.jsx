import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ArrowRight, Star, TrendingUp, DollarSign, Clock, 
  ShieldCheck, CheckCircle, BarChart3
} from 'lucide-react'

const caseStudies = [
  {
    company: 'TechGear Europe',
    industry: 'Consumer Electronics',
    location: 'Netherlands',
    challenge: 'TechGear was sourcing Bluetooth headphones from multiple suppliers with inconsistent quality. Returns were running at 15%, damaging their brand reputation and margins.',
    solution: 'We identified and audited five manufacturers in Shenzhen, selected one with ISO-certified production, implemented stage-by-stage QC, and established clear quality benchmarks.',
    results: [
      '40% reduction in unit cost',
      'Quality defect rate dropped from 15% to 2%',
      'Consolidated from 3 suppliers to 1 reliable partner',
      '12-week lead time reduced to 6 weeks',
    ],
    metric: { icon: DollarSign, value: '40%', label: 'Cost Reduction' },
  },
  {
    company: 'GreenHome US',
    industry: 'Home & Lifestyle',
    location: 'United States',
    challenge: 'A US home goods brand was struggling with long lead times and communication gaps with their existing supplier. Their product launch was delayed by 4 months.',
    solution: 'We identified alternative manufacturers in the Zhejiang region, facilitated factory visits, negotiated better terms, and set up a production monitoring system with weekly updates.',
    results: [
      'Production lead time reduced from 12 to 4 weeks',
      '30% improvement in shipping costs through optimized logistics',
      'Successful on-time launch of 3 product lines',
      'Ongoing monthly quality audits implemented',
    ],
    metric: { icon: Clock, value: '3x', label: 'Faster Production' },
  },
  {
    company: 'AutoParts UK',
    industry: 'Auto Parts',
    location: 'United Kingdom',
    challenge: 'A UK auto parts importer needed a reliable supplier for brake components with rigorous quality standards and full traceability for regulatory compliance.',
    solution: 'We conducted comprehensive factory audits across 8 suppliers, selected one with IATF 16949 certification, implemented full traceability systems, and conducted 100% pre-shipment inspection.',
    results: [
      'Zero defects across first 10 shipments',
      'Full regulatory compliance achieved',
      '30% cost savings compared to previous supplier',
      'Long-term partnership agreement established',
    ],
    metric: { icon: ShieldCheck, value: 'Zero', label: 'Defects' },
  },
  {
    company: 'StyleLab Australia',
    industry: 'Fashion & Accessories',
    location: 'Australia',
    challenge: 'An Australian fashion brand needed to find ethical manufacturers for their sustainable clothing line, with strict requirements for materials, labor practices, and environmental compliance.',
    solution: 'We identified and audited factories in Guangdong with relevant certifications (GOTS, OEKO-TEX, BSCI), facilitated sample development, and established a transparent supply chain.',
    results: [
      '5 certified ethical suppliers identified',
      'First collection launched 8 weeks ahead of schedule',
      '40% better margins than previous European suppliers',
      'Full supply chain transparency achieved',
    ],
    metric: { icon: TrendingUp, value: '40%', label: 'Better Margins' },
  },
  {
    company: 'MedEquip Germany',
    industry: 'Medical Devices',
    location: 'Germany',
    challenge: 'A German medical device company needed to source precision components with strict ISO 13485 compliance and complete batch traceability for regulatory approval.',
    solution: 'We conducted specialized audits of 6 precision manufacturing facilities, verified ISO certifications, implemented batch tracking systems, and coordinated third-party material testing.',
    results: [
      '2 suppliers qualified for medical-grade production',
      'Full ISO 13485 compliance verified',
      '30% cost reduction on precision components',
      'Regulatory approval achieved in 3 months',
    ],
    metric: { icon: BarChart3, value: '30%', label: 'Cost Savings' },
  },
  {
    company: 'BoxMart Canada',
    industry: 'Packaging',
    location: 'Canada',
    challenge: 'A Canadian packaging distributor needed custom eco-friendly packaging solutions at competitive prices, but struggled to find suppliers who could meet their sustainability requirements.',
    solution: 'We sourced and audited 4 packaging manufacturers with FSC certification and recycled material capabilities, negotiated volume pricing, and established a quality control protocol.',
    results: [
      '40% savings on custom packaging',
      '100% recyclable materials achieved',
      'Monthly container shipments established',
      'Distributed to 500+ retail locations',
    ],
    metric: { icon: DollarSign, value: '40%', label: 'Cost Savings' },
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary-light pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
            <p className="text-lg md:text-xl text-blue-200 leading-relaxed">
              Real results from real partnerships. See how we've helped businesses around the world 
              source better, reduce costs, and improve quality.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.company} className="card hover:shadow-md transition-shadow">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary-light" />
                  </div>
                  <div>
                    <div className="font-semibold text-base">{cs.company}</div>
                    <div className="text-xs text-muted">{cs.industry}</div>
                    <div className="text-xs text-muted">{cs.location}</div>
                  </div>
                </div>

                {/* Metric */}
                <div className="bg-blue-50 rounded-lg p-4 mb-4 text-center">
                  <cs.metric.icon className="w-6 h-6 text-primary-light mx-auto mb-1" />
                  <div className="text-2xl font-bold text-primary">{cs.metric.value}</div>
                  <div className="text-xs text-muted">{cs.metric.label}</div>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">Challenge</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">Solution</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Results</h3>
                  <ul className="space-y-1.5">
                    {cs.results.map((result) => (
                      <li key={result} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Create Your Success Story</h2>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Every successful partnership starts with a conversation. Tell us about your sourcing goals 
            and we'll show you how we can help.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-semibold text-base bg-white text-primary hover:bg-blue-50 transition-colors">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}