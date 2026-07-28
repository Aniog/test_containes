import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, TrendingUp, Clock, DollarSign, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    title: 'European Electronics Brand Reduces Costs by 40%',
    category: 'Consumer Electronics',
    industry: 'Technology',
    client: 'German electronics company',
    challenge: 'The client was sourcing PCB components from multiple suppliers with inconsistent quality and high costs. They needed a consolidated, reliable supply chain with strict quality control.',
    solution: 'We conducted a thorough market analysis and identified 6 qualified PCB manufacturers. After factory audits and sample evaluations, we selected 2 primary suppliers. We implemented a quality control protocol including incoming material inspection, in-process QC, and pre-shipment testing.',
    results: [
      '40% reduction in total production costs',
      'Consolidated from 5 suppliers to 2 strategic partners',
      'Defect rate reduced from 5% to 0.8%',
      'Lead time reduced by 3 weeks',
    ],
    imgId: 'casestudy-electronics-7a3b2c',
    metric: '40% Cost Reduction',
  },
  {
    title: 'US Home Goods Retailer Expands Product Range 3x',
    category: 'Home & Living',
    industry: 'Retail',
    client: 'US-based home goods retailer',
    challenge: 'The retailer wanted to expand their product catalog from 20 to 60+ SKUs but lacked the supplier network and quality assurance infrastructure to manage the expansion.',
    solution: 'We sourced and vetted 15 new manufacturers across furniture, kitchenware, and home decor categories. Our team managed the entire sampling process, negotiated pricing, and established QC protocols for each product category.',
    results: [
      'Expanded from 20 to 60 SKUs within 6 months',
      'Average margin improvement of 12%',
      'Zero quality-related returns in first 3 months',
      'Established long-term relationships with 8 suppliers',
    ],
    imgId: 'casestudy-homegoods-8d4e1f',
    metric: '3x Product Range',
  },
  {
    title: 'Australian Fashion Label Achieves 95% On-Time Delivery',
    category: 'Apparel',
    industry: 'Fashion',
    client: 'Australian fashion brand',
    challenge: 'The brand was launching a seasonal collection across 5 factories and needed coordinated production management to meet strict retail deadlines.',
    solution: 'We assigned a dedicated production manager who coordinated across all 5 factories, implemented a centralized production tracking system, and conducted weekly quality inspections at each facility.',
    results: [
      '95% on-time delivery rate achieved',
      'Successfully delivered 50,000 units across 5 factories',
      'All products passed retail quality standards',
      'Established emergency production contingency plans',
    ],
    imgId: 'casestudy-apparel-5f9g2h',
    metric: '95% On-Time Delivery',
  },
  {
    title: 'UK Industrial Parts Distributor Ensures Compliance',
    category: 'Industrial Parts',
    industry: 'Manufacturing',
    client: 'UK-based industrial parts distributor',
    challenge: 'The client needed to source precision-machined parts that met strict EU regulatory standards. Previous attempts with Chinese suppliers resulted in compliance failures and shipment delays.',
    solution: 'We conducted technical capability assessments of 10 CNC machining facilities, verified ISO 9001 and ISO 13485 certifications, and implemented a comprehensive quality control plan including material certification verification and dimensional inspection.',
    results: [
      '100% compliance with EU regulatory standards',
      'Cost savings of 35% compared to European suppliers',
      'First-pass yield rate of 97%',
      'Reliable 8-week production cycle established',
    ],
    imgId: 'casestudy-industrial-6h1i2j',
    metric: '35% Cost Savings',
  },
  {
    title: 'Canadian Start-Up Scales from Prototype to Production',
    category: 'Consumer Electronics',
    industry: 'Technology',
    client: 'Canadian hardware start-up',
    challenge: 'A start-up needed to transition from prototype to mass production of their IoT device but lacked manufacturing experience and supplier connections in China.',
    solution: 'We identified manufacturers with experience in IoT device production, managed the NDA process, coordinated tooling and mold creation, and supervised the entire production ramp-up.',
    results: [
      'Successfully produced 10,000 units for first production run',
      'Production cost 60% lower than US quotes',
      'Product launched on schedule for target market',
      'Ongoing production support for subsequent orders',
    ],
    imgId: 'casestudy-startup-3k4l5m',
    metric: '60% Cost Savings',
  },
  {
    title: 'German Retailer Establishes Sustainable Packaging Line',
    category: 'Packaging Materials',
    industry: 'Retail',
    client: 'German retail chain',
    challenge: 'The retailer wanted to transition to sustainable packaging but needed suppliers who could meet EU environmental standards and certifications at competitive prices.',
    solution: 'We researched eco-friendly packaging manufacturers in China, verified FSC and other environmental certifications, coordinated sample production of biodegradable alternatives, and negotiated volume pricing.',
    results: [
      'Successfully sourced 100% recyclable packaging',
      'Cost savings of 25% vs. European suppliers',
      'All products met EU environmental standards',
      'Reduced carbon footprint through optimized shipping',
    ],
    imgId: 'casestudy-packaging-6n7o8p',
    metric: '25% Cost Savings',
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
      <section className="bg-brand-600 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Case Studies</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Real results from real partnerships. See how we've helped businesses across industries 
              source from China successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-20">
          {caseStudies.map((cs, index) => (
            <div key={cs.title} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-start`}>
              <div className="flex-1 w-full">
                <div className="bg-gray-200 rounded-xl overflow-hidden h-64 md:h-80">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[cs-title-detail-${cs.imgId}] [cs-category-${cs.imgId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                  <span id={`cs-title-detail-${cs.imgId}`} className="hidden">{cs.title}</span>
                  <span id={`cs-category-${cs.imgId}`} className="hidden">{cs.category}</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-accent-500 uppercase tracking-wider">{cs.category}</span>
                  <span className="text-xs text-gray-400">|</span>
                  <span className="text-xs text-gray-400">{cs.industry}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{cs.title}</h2>
                <p className="text-sm text-gray-500 mb-2">Client: {cs.client}</p>
                <div className="inline-block bg-green-50 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {cs.metric}
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Challenge</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Solution</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Results</h3>
                    <ul className="space-y-1.5">
                      {cs.results.map((result) => (
                        <li key={result} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Let's Create Your Success Story
          </h2>
          <p className="text-brand-200 mb-8">
            Tell us about your sourcing needs and we'll show you how we can help.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg" className="text-base">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}