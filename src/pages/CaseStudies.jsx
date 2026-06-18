import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Star, ArrowRight, TrendingDown, Clock, CheckCircle } from 'lucide-react'
import CTABanner from '../components/home/CTABanner'

const caseStudies = [
  {
    id: 'cs-bamboo-furniture',
    client: 'HomeGoods Retailer',
    country: 'United States',
    flag: '🇺🇸',
    industry: 'Home & Furniture',
    product: 'Bamboo Furniture Collection',
    challenge: 'A US-based home goods retailer needed to source a 15-piece bamboo furniture collection for their Q4 launch. They had no existing China supplier relationships and needed CE-certified factories with OEM capability.',
    approach: 'We identified 8 potential suppliers, conducted on-site audits at 4 factories, and shortlisted 3 that met all requirements. We negotiated pricing, arranged sample production, and managed the full production run.',
    result: 'The client launched on time with a 22% lower unit cost than their previous supplier. Zero quality defects on the first shipment of 500 units.',
    metrics: [
      { label: 'Cost Reduction', value: '22%', icon: TrendingDown },
      { label: 'Time to First Sample', value: '12 days', icon: Clock },
      { label: 'Defect Rate', value: '0%', icon: CheckCircle },
    ],
    rating: 5,
    quote: 'SSourcing China found us better suppliers than we could have found ourselves in months. The process was transparent and professional throughout.',
    imgId: 'cs-img-bamboo-a1b2c3',
    titleId: 'cs-title-bamboo',
    descId: 'cs-desc-bamboo',
  },
  {
    id: 'cs-led-lighting',
    client: 'Electronics Distributor',
    country: 'Germany',
    flag: '🇩🇪',
    industry: 'Electronics',
    product: 'LED Lighting Products',
    challenge: 'A German electronics distributor\'s existing LED supplier failed EU compliance audits. They needed urgent replacement with CE and RoHS-certified factories, without disrupting their supply chain.',
    approach: 'We fast-tracked supplier research, focusing on factories with existing EU certifications. Within 10 days, we identified 2 compliant factories, conducted audits, and arranged sample testing.',
    result: 'The client transitioned to a new supplier without any shipment delays. All products passed EU compliance testing on the first attempt.',
    metrics: [
      { label: 'Days to New Supplier', value: '10 days', icon: Clock },
      { label: 'Compliance Issues', value: 'Zero', icon: CheckCircle },
      { label: 'Supply Chain Disruption', value: 'None', icon: TrendingDown },
    ],
    rating: 5,
    quote: 'We were in a critical situation and SSourcing China delivered. They found compliant suppliers faster than we thought possible.',
    imgId: 'cs-img-led-d4e5f6',
    titleId: 'cs-title-led',
    descId: 'cs-desc-led',
  },
  {
    id: 'cs-sportswear',
    client: 'Fashion Brand',
    country: 'Australia',
    flag: '🇦🇺',
    industry: 'Apparel',
    product: 'Private Label Sportswear',
    challenge: 'An Australian fashion brand was launching their first private label sportswear line. As first-time importers, they needed end-to-end support from design to delivery.',
    approach: 'We managed the entire OEM process — from factory selection and design consultation to 3 rounds of sample revisions, production monitoring, QC inspection, and sea freight coordination.',
    result: '2,000 units delivered within 60 days of order placement. The client successfully launched their brand with zero import issues.',
    metrics: [
      { label: 'Units Delivered', value: '2,000', icon: CheckCircle },
      { label: 'Time to Delivery', value: '60 days', icon: Clock },
      { label: 'Import Issues', value: 'Zero', icon: TrendingDown },
    ],
    rating: 5,
    quote: 'As first-time importers, we were nervous. SSourcing China guided us through every step and made the whole process straightforward.',
    imgId: 'cs-img-sportswear-g7h8i9',
    titleId: 'cs-title-sportswear',
    descId: 'cs-desc-sportswear',
  },
  {
    id: 'cs-auto-parts',
    client: 'Auto Parts Wholesaler',
    country: 'United Kingdom',
    flag: '🇬🇧',
    industry: 'Automotive',
    product: 'Replacement Auto Parts',
    challenge: 'A UK auto parts wholesaler needed to diversify their supplier base for 50+ SKUs of replacement parts, with strict quality requirements and consistent supply.',
    approach: 'We conducted a comprehensive supplier audit across 12 factories, established quality benchmarks for each SKU, and set up a regular inspection schedule for ongoing orders.',
    result: 'The client now sources from 4 verified factories with a 99.2% quality pass rate across all SKUs. Annual savings of £85,000 vs. previous suppliers.',
    metrics: [
      { label: 'Quality Pass Rate', value: '99.2%', icon: CheckCircle },
      { label: 'Annual Savings', value: '£85K', icon: TrendingDown },
      { label: 'Verified Factories', value: '4', icon: Clock },
    ],
    rating: 5,
    quote: 'The ongoing inspection program gives us confidence in every shipment. Our defect rate has dropped dramatically since working with SSourcing China.',
    imgId: 'cs-img-auto-j1k2l3',
    titleId: 'cs-title-auto',
    descId: 'cs-desc-auto',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="bg-[#1A3C6E] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#D4A017] text-xs font-semibold uppercase tracking-widest mb-3">Client Results</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-[#CBD5E0] text-lg max-w-2xl mx-auto">
            Real results from real clients. See how we've helped businesses across industries source successfully from China.
          </p>
        </div>
      </div>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, index) => {
              const isEven = index % 2 === 0
              return (
                <div key={cs.id} className="bg-[#F7F9FC] rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <div className={`grid grid-cols-1 lg:grid-cols-2`}>
                    <div className={`relative h-64 lg:h-auto bg-[#EBF2FA] ${!isEven ? 'lg:order-2' : ''}`}>
                      <img
                        alt={cs.product}
                        data-strk-img-id={cs.imgId}
                        data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="700"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`p-8 md:p-10 ${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">{cs.flag}</span>
                        <div>
                          <div className="font-semibold text-[#1A1A2E]">{cs.client}</div>
                          <div className="text-[#718096] text-sm">{cs.country} · {cs.industry}</div>
                        </div>
                      </div>

                      <h2 id={cs.titleId} className="text-2xl font-bold text-[#1A1A2E] mb-2">{cs.product}</h2>

                      <div className="grid grid-cols-3 gap-3 my-5">
                        {cs.metrics.map(({ label, value, icon: Icon }) => (
                          <div key={label} className="bg-white rounded-lg p-3 text-center border border-[#E2E8F0]">
                            <div className="text-lg font-bold text-[#1A3C6E]">{value}</div>
                            <div className="text-xs text-[#718096] mt-0.5">{label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3 mb-5">
                        <div>
                          <div className="text-xs font-semibold text-[#718096] uppercase tracking-wider mb-1">Challenge</div>
                          <p id={cs.descId} className="text-[#4A5568] text-sm">{cs.challenge}</p>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[#718096] uppercase tracking-wider mb-1">Result</div>
                          <p className="text-[#4A5568] text-sm">{cs.result}</p>
                        </div>
                      </div>

                      <blockquote className="border-l-4 border-[#C0392B] pl-4 italic text-[#4A5568] text-sm mb-5">
                        "{cs.quote}"
                      </blockquote>

                      <div className="flex gap-0.5">
                        {Array.from({ length: cs.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#D4A017] text-[#D4A017]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
