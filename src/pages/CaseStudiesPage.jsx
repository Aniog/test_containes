import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle, TrendingDown, Shield, Clock } from 'lucide-react'

const caseStudies = [
  {
    title: 'Electronics Manufacturer Saves 18% on Component Costs',
    industry: 'Electronics',
    client: 'US-based electronics company',
    challenge: 'A US-based electronics company needed reliable PCB suppliers with competitive pricing. They had previously experienced quality issues and delivery delays with their existing supplier.',
    solution: 'We identified three verified PCB factories in Shenzhen and Dongguan, conducted on-site audits, negotiated pricing, and managed quality control throughout production. We also arranged sample testing before mass production.',
    result: '18% cost reduction compared to previous supplier, zero defect rate on first shipment, and 3-day faster delivery timeline.',
    metrics: [
      { icon: TrendingDown, label: 'Cost Savings', value: '18%' },
      { icon: Shield, label: 'Defect Rate', value: '0%' },
      { icon: Clock, label: 'Faster Delivery', value: '3 days' },
    ],
    imgId: 'case1-img-c1d2e3',
    imgQuery: '[case1-title]',
  },
  {
    title: 'Retailer Avoids $50K Loss Through Factory Audit',
    industry: 'Home & Garden',
    client: 'European home goods retailer',
    challenge: 'A European retailer was about to place a $50,000 order for outdoor furniture with a supplier that claimed to have a large factory and high production capacity.',
    solution: 'Our team conducted an on-site factory audit before the order was placed. We discovered the supplier did not have the claimed production capacity and was actually a trading company, not a manufacturer.',
    result: 'Identified capacity mismatch, redirected client to a verified manufacturer with proper certifications, and saved the client from a potentially costly mistake.',
    metrics: [
      { icon: Shield, label: 'Loss Prevented', value: '$50K' },
      { icon: CheckCircle, label: 'Verified Supplier', value: 'Yes' },
      { icon: Clock, label: 'Audit Time', value: '2 days' },
    ],
    imgId: 'case2-img-f4g5h6',
    imgQuery: '[case2-title]',
  },
  {
    title: 'Auto Parts Importer Streamlines Shipping Process',
    industry: 'Auto Parts',
    client: 'Australian auto parts importer',
    challenge: 'An Australian auto parts importer struggled with customs delays and inconsistent shipping times. Their orders were frequently held up due to incomplete documentation.',
    solution: 'We coordinated freight forwarding, prepared all export documentation, and worked with trusted logistics partners. We also set up a standardized documentation process for future shipments.',
    result: '5-day faster average delivery time, simplified customs clearance, and a repeatable shipping process for ongoing orders.',
    metrics: [
      { icon: Clock, label: 'Faster Delivery', value: '5 days' },
      { icon: CheckCircle, label: 'Customs Issues', value: 'Resolved' },
      { icon: TrendingDown, label: 'Shipping Cost', value: '-12%' },
    ],
    imgId: 'case3-img-i7j8k9',
    imgQuery: '[case3-title]',
  },
  {
    title: 'Fashion Brand Achieves Consistent Quality Across 5 Factories',
    industry: 'Textiles & Apparel',
    client: 'UK-based fashion brand',
    challenge: 'A UK fashion brand was working with five different garment factories but experiencing inconsistent quality and sizing issues across production batches.',
    solution: 'We implemented a standardized quality inspection process across all five factories, created detailed specification sheets, and conducted pre-production and pre-shipment inspections for every batch.',
    result: 'Consistent quality across all factories, 95% first-pass inspection rate, and reduced return rate by 40%.',
    metrics: [
      { icon: Shield, label: 'First-Pass Rate', value: '95%' },
      { icon: TrendingDown, label: 'Return Rate', value: '-40%' },
      { icon: CheckCircle, label: 'Factories Managed', value: '5' },
    ],
    imgId: 'case4-img-l1m2n3',
    imgQuery: '[case4-title]',
  },
]

function CaseStudyCard({ cs }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
      <div
        className="w-full h-56 bg-slate-100"
        data-strk-bg-id={cs.imgId}
        data-strk-bg={cs.imgQuery}
        data-strk-bg-ratio="4x3"
        data-strk-bg-width="800"
      />
      <div className="p-6">
        <span className="inline-block px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full">
          {cs.industry}
        </span>
        <h3 id={cs.imgQuery.replace('[', '').replace(']', '')} className="mt-3 text-lg font-semibold text-slate-900">
          {cs.title}
        </h3>
        <p className="mt-1 text-sm text-slate-500">Client: {cs.client}</p>

        <div className="mt-4 space-y-3 text-sm">
          <div>
            <span className="font-medium text-slate-900">Challenge: </span>
            <span className="text-slate-600">{cs.challenge}</span>
          </div>
          <div>
            <span className="font-medium text-slate-900">Solution: </span>
            <span className="text-slate-600">{cs.solution}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100">
          <p className="text-sm font-medium text-slate-900 mb-3">Results:</p>
          <div className="grid grid-cols-3 gap-3">
            {cs.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <m.icon className="w-4 h-4 mx-auto text-blue-700 mb-1" />
                <div className="text-lg font-bold text-slate-900">{m.value}</div>
                <div className="text-xs text-slate-500">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudiesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">Case Studies</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Real examples of how we help buyers source from China successfully.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.title} cs={cs} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Want Similar Results?</h2>
          <p className="mt-4 text-slate-600">
            Tell us about your sourcing needs and we will help you achieve your goals.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
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
