import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, Clock, Shield } from 'lucide-react'
import Button from '@/components/ui/Button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    title: 'Electronics Component Sourcing for European Distributor',
    client: 'European Electronics Distributor',
    industry: 'Electronics',
    challenge: 'The client needed to source 15 different SKUs of electronic components from China but had no reliable supplier relationships. Previous attempts with other agents resulted in quality issues and missed deadlines.',
    solution: 'We identified and vetted 18 potential suppliers, conducted factory audits on 8, and shortlisted 5. We set up a consolidated QC program with in-process inspections and pre-shipment testing for all components.',
    result: '22% reduction in procurement costs, 100% on-time delivery, and full RoHS compliance documentation for all components. Client continues to use us for ongoing sourcing.',
    metrics: ['22% cost reduction', '100% on-time delivery', '15 SKUs sourced', '8 factories audited'],
    imgId: 'casestudy-electronics-1a2b3c',
  },
  {
    title: 'Home Textile Line for US Retail Chain',
    client: 'US Home Goods Retailer',
    industry: 'Home Textiles',
    challenge: 'A US retailer needed 50,000 units of custom home textiles with strict quality standards, specific fabric certifications, and a tight 10-week production timeline.',
    solution: 'We sourced from 12 textile factories in Zhejiang, audited 5, and selected 3 capable of meeting the quality and volume requirements. We implemented a multi-stage QC plan with weekly inspections.',
    result: 'All 50,000 units were produced and delivered on schedule. Quality pass rate exceeded 99%. Client expanded the product line to include curtains and bedding through our services.',
    metrics: ['50,000 units delivered', '99% quality pass rate', '10-week timeline met', '3 factories selected'],
    imgId: 'casestudy-textiles-2b3c4d',
  },
  {
    title: 'Industrial Equipment Parts for Australian Manufacturer',
    client: 'Australian Industrial Equipment Company',
    industry: 'Industrial Equipment',
    challenge: 'The client needed replacement parts for legacy equipment that were no longer available from original suppliers. They required precision manufacturing with strict tolerances.',
    solution: 'Our team identified 6 specialized machining factories in Guangdong and Shandong. We coordinated sample development with 3 factories and selected the one that best met precision requirements.',
    result: '30% cost savings compared to previous OEM pricing. Reduced lead time from 16 weeks to 6 weeks. Established ongoing supply relationship with 2 certified factories.',
    metrics: ['30% cost savings', '6-week lead time', '2 certified suppliers', 'Precision tolerance met'],
    imgId: 'casestudy-industrial-3c4d5e',
  },
  {
    title: 'Consumer Electronics Accessories for E-Commerce Brand',
    client: 'D2C E-Commerce Brand (UK)',
    industry: 'Consumer Electronics',
    challenge: 'A fast-growing e-commerce brand needed to launch 10 new SKUs of phone accessories within 8 weeks, with consistent quality across multiple product variants.',
    solution: 'We leveraged our existing supplier network to find manufacturers capable of producing all variants. We set up a centralized QC hub and managed packaging design with local suppliers.',
    result: 'All 10 SKUs launched on time. Production costs were 35% lower than the client\'s previous supplier in Vietnam. Repeat orders placed for 3 subsequent seasons.',
    metrics: ['10 SKUs launched', '35% cost reduction', '8-week turnaround', 'Ongoing partnership'],
    imgId: 'casestudy-consumer-4d5e6f',
  },
  {
    title: 'Medical Device Components for Healthcare Manufacturer',
    client: 'European Medical Device Manufacturer',
    industry: 'Medical',
    challenge: 'The client needed certified medical-grade components meeting EU MDR requirements. Supplier qualification required extensive documentation and quality system audits.',
    solution: 'We identified 4 ISO 13485 certified factories, conducted comprehensive audits, and managed the qualification process including documentation for EU regulatory compliance.',
    result: 'Two suppliers qualified for the approved vendor list. Production costs reduced by 28% while maintaining all regulatory compliance standards.',
    metrics: ['2 ISO 13485 suppliers', '28% cost reduction', 'MDR compliance met', 'Ongoing supply agreement'],
    imgId: 'casestudy-medical-5e6f7a',
  },
  {
    title: 'Packaging Materials for Global Food Brand',
    client: 'International Food & Beverage Company',
    industry: 'Packaging',
    challenge: 'The client required sustainable food-grade packaging with specific barrier properties, custom printing, and FDA compliance for multiple product lines.',
    solution: 'We sourced from 6 packaging manufacturers, conducted food safety audits, and coordinated sample development for 3 different packaging formats. We also managed the FDA compliance documentation.',
    result: 'Reduced packaging costs by 25% compared to previous European suppliers. Established a reliable supply chain for 5 packaging categories with consistent quality.',
    metrics: ['25% cost reduction', '5 packaging categories', 'FDA compliance', 'Sustainable materials sourced'],
    imgId: 'casestudy-packaging-6f7a8b',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="container-page text-center">
          <span className="text-brand-300 text-sm font-medium tracking-wider uppercase">Case Studies</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Sourcing Success Stories</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Real results from our sourcing engagements across different industries and markets
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-page space-y-12">
          {caseStudies.map((study, index) => (
            <div key={study.title} className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} p-8 rounded-xl border border-neutral-100 hover:shadow-md transition-shadow`}>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-brand-500 uppercase tracking-wider">{study.industry}</span>
                  <span className="text-neutral-300">|</span>
                  <span className="text-xs text-neutral-400">{study.client}</span>
                </div>
                <h2 className="text-xl font-bold text-neutral-900 mb-4">{study.title}</h2>
                <div className="space-y-4 mb-5">
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-700 flex items-center gap-2 mb-1">
                      <Shield className="h-4 w-4 text-accent-500" />
                      The Challenge
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-700 flex items-center gap-2 mb-1">
                      <TrendingUp className="h-4 w-4 text-brand-500" />
                      Our Solution
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-700 flex items-center gap-2 mb-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      The Result
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{study.result}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {study.metrics.map((metric) => (
                    <span key={metric} className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full lg:w-auto">
                <div className="rounded-xl overflow-hidden bg-neutral-100">
                  <div
                    className="h-64 lg:h-80 w-full"
                    data-strk-bg-id={study.imgId}
                    data-strk-bg={`[${study.imgId}-title]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                  />
                  <div className="sr-only">
                    <h3 id={`${study.imgId}-title`}>{study.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-50 text-center">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Let's Write Your Success Story</h2>
          <p className="text-neutral-500 max-w-xl mx-auto mb-8">
            Tell us about your sourcing needs and we'll show you how we can help.
          </p>
          <Link to="/contact">
            <Button size="xl" variant="accent">
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}