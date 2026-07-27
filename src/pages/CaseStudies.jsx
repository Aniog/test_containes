import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    title: 'US Electronics Retailer Reduces Defect Rate by 85%',
    client: 'Mid-size consumer electronics retailer, USA',
    challenge: 'The client was receiving shipments with a 12% defect rate from an unverified supplier, causing returns and customer complaints. They needed a reliable sourcing partner to fix the quality problem.',
    approach: 'We conducted a factory verification audit on the existing supplier, identified systemic quality control failures, and sourced two alternative suppliers with better QC systems. We then implemented AQL-based pre-shipment inspections.',
    result: 'Defect rate dropped from 12% to under 2%. The client saved $120K in annual rework and return costs. They now use our inspection services for all China orders.',
    category: 'Electronics',
    imgId: 'case-page-electronics-m1n2o3',
    titleId: 'case-page-electronics-title',
    descId: 'case-page-electronics-desc',
  },
  {
    title: 'European Fashion Brand Launches First China Production',
    client: 'Startup fashion brand, Germany',
    challenge: 'A new fashion brand needed to source fabrics and manufacture garments in China but had no supplier contacts, no local knowledge, and was concerned about quality consistency for their premium positioning.',
    approach: 'We sourced 3 vetted fabric suppliers in Guangzhou and 2 garment factories in Dongguan. We managed the entire sampling process, conducted fabric quality checks, and supervised the first production run.',
    result: 'The first 5,000-unit order was delivered on schedule with a defect rate below 1%. The brand has since scaled to 20,000-unit orders with the same suppliers.',
    category: 'Textiles',
    imgId: 'case-page-textiles-p4q5r6',
    titleId: 'case-page-textiles-title',
    descId: 'case-page-textiles-desc',
  },
  {
    title: 'Australian Hardware Distributor Cuts Lead Time by 40%',
    client: 'Hardware tools distributor, Australia',
    challenge: 'Long lead times (90+ days) and inconsistent quality from existing suppliers were causing stock shortages and lost sales. The client needed faster, more reliable sourcing.',
    approach: 'We identified alternative suppliers with better production capacity in Zhejiang, implemented weekly production tracking, and coordinated shipping via a faster freight route.',
    result: 'Average lead time reduced from 90 to 54 days. Quality consistency improved significantly. The client expanded their product range by 30% with the new supplier network.',
    category: 'Hardware',
    imgId: 'case-page-hardware-s7t8u9',
    titleId: 'case-page-hardware-title',
    descId: 'case-page-hardware-desc',
  },
  {
    title: 'Canadian Home Goods Brand Avoids $50K Loss',
    client: 'Home goods brand, Canada',
    challenge: 'The client placed a $200K order with a supplier found on an online platform. After payment, the supplier delayed production and the client could not verify progress remotely.',
    approach: 'We immediately visited the factory, discovered the supplier had overcommitted production capacity, and negotiated a revised timeline. We then supervised production and conducted a pre-shipment inspection.',
    result: 'The order was delivered 2 weeks later than originally planned but the client avoided a complete loss. They now use our sourcing and verification services for all new suppliers.',
    category: 'Home & Garden',
    imgId: 'case-page-home-v1w2x3',
    titleId: 'case-page-home-title',
    descId: 'case-page-home-desc',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="case-page-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Case Studies
          </h1>
          <p id="case-page-subtitle" className="text-slate-300 text-lg max-w-2xl mx-auto">
            Real results from real clients. See how we have helped international buyers solve sourcing challenges and improve their supply chain.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={study.title} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <img
                      alt={study.title}
                      data-strk-img-id={study.imgId}
                      data-strk-img={`[${study.descId}] [${study.titleId}] [case-page-subtitle] [case-page-title]`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-2 py-1 rounded mb-3">
                    {study.category}
                  </span>
                  <h2 id={study.titleId} className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                    {study.title}
                  </h2>
                  <p id={study.descId} className="text-slate-500 text-sm mb-4">{study.client}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Challenge</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Our Approach</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.approach}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary-600 mb-1">Result</h4>
                      <p className="text-primary-600 text-sm leading-relaxed font-medium">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Tell us about your sourcing challenges. We will propose a solution tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent-600 transition-colors no-underline text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
