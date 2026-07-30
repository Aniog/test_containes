import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Globe, Package, TrendingUp } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

const caseStudies = [
  {
    id: 'led-lighting',
    title: 'LED Lighting for European Retailer',
    client: 'Home goods retailer, Germany',
    challenge: 'Client needed CE-certified LED panels at competitive prices but had been burned by a previous supplier who delivered non-compliant products.',
    solution: 'We audited 8 factories, selected 2 finalists, coordinated CE testing, and managed production of 50,000 units with 3 QC inspections.',
    results: ['30% cost reduction vs. previous supplier', 'Zero defects on final inspection', '100% CE compliance achieved', 'On-time delivery within 45 days'],
    category: 'Electronics',
    volume: '50,000 units',
    savings: '30%',
  },
  {
    id: 'sportswear',
    title: 'Custom Sportswear Line for US Brand',
    client: 'Athletic apparel startup, USA',
    challenge: 'New brand needed a reliable manufacturer for custom-designed activewear with specific fabric requirements and small initial MOQs.',
    solution: 'We identified factories willing to work with startups, coordinated fabric development, managed 3 rounds of samples, and supervised first production run.',
    results: ['Found factory accepting 500-unit MOQ', 'Custom fabric developed in 3 weeks', 'Brand launched on schedule', 'Ongoing partnership for 2+ years'],
    category: 'Textiles',
    volume: '2,000 units',
    savings: '25%',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts for Australian Distributor',
    client: 'Automotive parts distributor, Australia',
    challenge: 'Distributor needed consistent quality brake pads and rotors meeting ADR standards, with reliable monthly supply.',
    solution: 'We verified 5 factories with IATF 16949 certification, arranged ADR testing, and set up a monthly supply chain with buffer stock management.',
    results: ['Consistent monthly supply established', 'All products ADR certified', '40% cost savings vs. local sourcing', 'Zero quality claims in 18 months'],
    category: 'Industrial',
    volume: '10,000 units/month',
    savings: '40%',
  },
  {
    id: 'packaging',
    title: 'Custom Packaging for UK Cosmetics Brand',
    client: 'Premium skincare brand, UK',
    challenge: 'Brand needed luxury packaging (bottles, jars, boxes) with custom finishes that matched their premium positioning, at scale.',
    solution: 'We sourced packaging specialists in Guangzhou, managed mold development, coordinated color matching, and supervised production of 100,000 units.',
    results: ['Premium quality at 45% less than EU suppliers', 'Custom molds delivered in 20 days', 'Exact color match achieved', 'Repeat orders every quarter'],
    category: 'Packaging',
    volume: '100,000 units',
    savings: '45%',
  },
  {
    id: 'furniture',
    title: 'Office Furniture for Middle East Project',
    client: 'Interior design firm, UAE',
    challenge: 'Large commercial project requiring 500+ desks, chairs, and storage units with custom finishes, delivered to Dubai within tight deadline.',
    solution: 'We coordinated with 3 specialized factories, managed custom finish development, conducted loading inspections, and arranged consolidated shipping.',
    results: ['Project delivered 5 days ahead of schedule', 'All items matched design specifications', '35% budget savings', 'Client won follow-up contracts'],
    category: 'Furniture',
    volume: '500+ pieces',
    savings: '35%',
  },
  {
    id: 'electronics-accessories',
    title: 'Phone Accessories for Amazon Seller',
    client: 'E-commerce seller, Canada',
    challenge: 'Seller needed private-label phone cases and screen protectors with custom branding, FBA-ready packaging, and fast turnaround.',
    solution: 'We found factories experienced with Amazon FBA requirements, managed branding, arranged FBA labeling, and shipped directly to Amazon warehouses.',
    results: ['Products live on Amazon in 30 days', 'FBA-compliant packaging from day one', '60% margin improvement', 'Scaled to 6 product lines'],
    category: 'Electronics',
    volume: '20,000 units',
    savings: '60%',
  },
]

export default function CaseStudiesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-orange text-sm font-semibold uppercase tracking-wide">Case Studies</span>
            <h1 id="cases-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-2 mb-4">
              Real Results for Real Businesses
            </h1>
            <p id="cases-page-subtitle" className="text-slate-300 text-lg leading-relaxed">
              See how we have helped businesses across the world source products from China successfully, saving time and money while ensuring quality.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="p-6 md:p-8 lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs bg-navy/10 text-navy font-medium px-3 py-1 rounded-full">{study.category}</span>
                      <span className="text-xs text-slate-500">{study.client}</span>
                    </div>
                    <h2 id={`case-${study.id}-title`} className="text-xl font-bold text-slate-900 mb-4">{study.title}</h2>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="text-sm font-semibold text-slate-900">Challenge: </span>
                        <span id={`case-${study.id}-desc`} className="text-sm text-slate-600">{study.challenge}</span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-slate-900">Solution: </span>
                        <span className="text-sm text-slate-600">{study.solution}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {study.results.map((result) => (
                        <div key={result} className="flex items-start gap-2 text-sm text-slate-700">
                          <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-6 md:p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-200">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Package className="w-5 h-5 text-navy" />
                        <div>
                          <div className="text-xs text-slate-500">Volume</div>
                          <div className="text-sm font-semibold text-slate-900">{study.volume}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <div>
                          <div className="text-xs text-slate-500">Cost Savings</div>
                          <div className="text-sm font-semibold text-green-700">{study.savings}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-orange" />
                        <div>
                          <div className="text-xs text-slate-500">Client Location</div>
                          <div className="text-sm font-semibold text-slate-900">{study.client.split(', ')[1]}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Want Similar Results?
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Every project starts with a conversation. Tell us about your sourcing needs and we will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-orange text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-orange-dark transition text-base"
          >
            Discuss Your Project <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
