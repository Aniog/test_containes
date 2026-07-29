import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Quote } from 'lucide-react'

const caseStudies = [
  {
    id: 'case-furniture',
    title: 'Custom Furniture for EU Retailer',
    category: 'Furniture',
    result: 'Reduced unit cost by 35% while maintaining quality standards',
    quote: 'SSourcing China found us a factory that could handle our custom designs at scale. The quality inspections gave us confidence to place large orders.',
    client: 'Nordic Home Co.',
    country: 'Sweden',
    imgId: 'case-furniture-img-a1b2c3',
    titleId: 'case-furniture-title',
    descId: 'case-furniture-desc',
  },
  {
    id: 'case-electronics',
    title: 'Consumer Electronics for US Brand',
    category: 'Electronics',
    result: 'Delivered 50,000 units on time with 99.2% pass rate',
    quote: 'Their production follow-up was critical. We had weekly updates and caught issues before they became problems.',
    client: 'TechGear Inc.',
    country: 'United States',
    imgId: 'case-electronics-img-d4e5f6',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    id: 'case-textiles',
    title: 'Private Label Apparel for AU Market',
    category: 'Textiles',
    result: 'Launched 3 product lines in 4 months from concept to delivery',
    quote: 'From fabric sourcing to final shipping, they managed everything. We could focus on marketing while they handled production.',
    client: 'Outback Wear',
    country: 'Australia',
    imgId: 'case-textiles-img-g7h8i9',
    titleId: 'case-textiles-title',
    descId: 'case-textiles-desc',
  },
]

const CaseStudiesSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="cases-section-title" className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Real results from real sourcing projects we have managed for international buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-white rounded-xl overflow-hidden border border-neutral-200 hover:shadow-lg transition-shadow">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}] [cases-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cs.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">{cs.category}</span>
                <h3 id={cs.titleId} className="text-lg font-semibold text-neutral-800 mt-3 mb-2">{cs.title}</h3>
                <p id={cs.descId} className="text-sm text-neutral-600 mb-4">{cs.result}</p>
                <div className="border-t border-neutral-100 pt-4">
                  <Quote className="w-4 h-4 text-accent mb-2" />
                  <p className="text-sm text-neutral-600 italic mb-3">{cs.quote}</p>
                  <p className="text-xs font-medium text-neutral-800">{cs.client} — {cs.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
