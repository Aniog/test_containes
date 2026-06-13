import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Shield, DollarSign } from 'lucide-react'

const caseStudies = [
  {
    title: 'Electronics Manufacturer Finds Reliable PCB Supplier',
    industry: 'Electronics',
    challenge: 'A US-based electronics company needed a verified PCB manufacturer with ISO 9001 certification for a 50,000-unit order. Previous suppliers had quality inconsistencies and missed delivery deadlines.',
    solution: 'We identified 3 qualified factories through our verified network, conducted on-site audits, coordinated sample production, and managed the full production run with weekly progress reports.',
    result: '15% cost savings compared to previous supplier, zero defect rate, delivered 5 days ahead of schedule.',
    metrics: [
      { icon: DollarSign, value: '15%', label: 'Cost Savings' },
      { icon: Shield, value: '0%', label: 'Defect Rate' },
      { icon: TrendingUp, value: '5 days', label: 'Early Delivery' },
    ],
    imgId: 'case-study-1-a1b2c3',
  },
  {
    title: 'Retailer Avoids $200K in Defective Products',
    industry: 'Home Goods',
    challenge: 'A European retailer ordered 20,000 units of ceramic tableware. Without proper quality control, they risked receiving products that did not meet their quality standards and EU safety regulations.',
    solution: 'Our QC team conducted a pre-shipment inspection and discovered that 30% of the order had glaze defects and dimensional inconsistencies. We halted shipment and negotiated a full rework with the factory.',
    result: 'Saved the client from receiving defective goods worth $200,000 and potential retail chargebacks.',
    metrics: [
      { icon: DollarSign, value: '$200K', label: 'Saved' },
      { icon: Shield, value: '30%', label: 'Defects Caught' },
      { icon: TrendingUp, value: '100%', label: 'Rework Success' },
    ],
    imgId: 'case-study-2-d4e5f6',
  },
  {
    title: 'Startup Launches Private Label Product Line',
    industry: 'E-commerce',
    challenge: 'A European e-commerce startup wanted to launch a private label kitchenware line on Amazon but had no experience with China sourcing or Amazon FBA requirements.',
    solution: 'We handled everything from supplier sourcing to packaging design coordination, quality inspections, and Amazon FBA shipping with proper labeling and documentation.',
    result: 'Product launched on time, achieved 4.7-star average rating, and sold over 10,000 units in the first quarter.',
    metrics: [
      { icon: DollarSign, value: '10K+', label: 'Units Sold Q1' },
      { icon: Shield, value: '4.7', label: 'Star Rating' },
      { icon: TrendingUp, value: 'On Time', label: 'Launch' },
    ],
    imgId: 'case-study-3-g7h8i9',
  },
  {
    title: 'Automotive Parts Importer Reduces Lead Time by 40%',
    industry: 'Automotive',
    challenge: 'An Australian auto parts distributor was experiencing 12-week lead times and frequent communication delays with their existing Chinese supplier.',
    solution: 'We found a closer manufacturing cluster with better logistics infrastructure, set up a dedicated communication channel, and implemented weekly production tracking.',
    result: 'Lead time reduced from 12 weeks to 7 weeks, with improved communication and fewer production issues.',
    metrics: [
      { icon: DollarSign, value: '40%', label: 'Faster Delivery' },
      { icon: Shield, value: '7 weeks', label: 'New Lead Time' },
      { icon: TrendingUp, value: 'Weekly', label: 'Updates' },
    ],
    imgId: 'case-study-4-k1l2m3',
  },
]

export default function CaseStudiesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#1a2744] py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 id="case-studies-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Case Studies
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Real examples of how we have helped buyers overcome sourcing challenges and achieve their business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16 md:space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div
                  className={`aspect-video rounded-lg bg-[#f5f7fa] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  data-strk-bg-id={study.imgId}
                  data-strk-bg={`[case-study-page-title-${index}] [case-studies-page-title]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="800"
                />
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="inline-block text-xs font-semibold text-[#d4a843] uppercase tracking-wider mb-2">
                    {study.industry}
                  </span>
                  <h2 id={`case-study-page-title-${index}`} className="text-xl md:text-2xl font-bold text-[#1a2744] mb-4">
                    {study.title}
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold text-[#1a2744] mb-1">Challenge</h3>
                      <p className="text-[#4a5568] text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#1a2744] mb-1">Solution</h3>
                      <p className="text-[#4a5568] text-sm leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#1a2744] mb-1">Result</h3>
                      <p className="text-[#1a2744] text-sm font-medium leading-relaxed">{study.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="text-center p-3 bg-[#f5f7fa] rounded-md">
                        <metric.icon size={16} className="text-[#d4a843] mx-auto mb-1" />
                        <div className="text-lg font-bold text-[#1a2744]">{metric.value}</div>
                        <div className="text-xs text-[#4a5568]">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-4">
              Let Us Write Your Success Story
            </h2>
            <p className="text-[#4a5568] mb-8">
              Tell us about your sourcing needs and we will help you achieve similar results.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
