import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { TrendingDown, Clock, ShieldCheck, Award } from 'lucide-react'
import CTAButton from '../components/shared/CTAButton'

const caseStudies = [
  {
    id: 'electronics-retailer',
    client: 'Mid-size Electronics Retailer',
    location: 'United States',
    category: 'Electronics',
    challenge: 'The client was paying premium prices to a trading company and experiencing inconsistent quality on Bluetooth speakers and earbuds. They needed direct factory access but lacked the resources to verify suppliers in China.',
    solution: 'We identified 5 potential factories in Shenzhen, conducted on-site audits, and arranged sample testing. After selecting the best match, we negotiated pricing and set up a QC protocol with inspections at 3 production stages.',
    results: [
      { icon: TrendingDown, text: '22% reduction in unit cost' },
      { icon: ShieldCheck, text: 'Defect rate dropped from 4.2% to 0.8%' },
      { icon: Clock, text: 'Lead time reduced by 2 weeks' },
      { icon: Award, text: 'Ongoing relationship for 3+ years' },
    ],
    imgId: 'case-electronics-img-b3d1e7',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    id: 'furniture-brand',
    client: 'Premium Furniture Brand',
    location: 'Germany',
    category: 'Home & Garden',
    challenge: 'A German furniture company wanted to expand their product line with Chinese-manufactured pieces but was concerned about quality consistency and material compliance with EU standards.',
    solution: 'We sourced 3 verified furniture factories in Foshan, arranged material testing for EU compliance (REACH, EN standards), and managed the entire first container order with weekly production updates.',
    results: [
      { icon: Clock, text: 'First container shipped in 45 days' },
      { icon: ShieldCheck, text: '100% EU compliance on first shipment' },
      { icon: TrendingDown, text: '35% cost savings vs. European production' },
      { icon: Award, text: 'Now ordering 4 containers per quarter' },
    ],
    imgId: 'case-furniture-img-c4e2f8',
    titleId: 'case-furniture-title',
    descId: 'case-furniture-desc',
  },
  {
    id: 'apparel-startup',
    client: 'Direct-to-Consumer Apparel Startup',
    location: 'Australia',
    category: 'Apparel & Textiles',
    challenge: 'A new activewear brand needed to find a factory capable of small MOQ production with custom fabric blends and private labeling, while maintaining premium quality standards.',
    solution: 'We identified factories in Guangzhou specializing in small-batch activewear, negotiated a 200-piece MOQ (down from standard 500), and managed fabric development, sampling, and production with pre-shipment inspection.',
    results: [
      { icon: ShieldCheck, text: 'Zero defects on first 200-piece order' },
      { icon: TrendingDown, text: 'MOQ negotiated 60% below standard' },
      { icon: Clock, text: 'From brief to delivery in 8 weeks' },
      { icon: Award, text: 'Scaled to 2,000 units within 6 months' },
    ],
    imgId: 'case-apparel-img-d5f3g9',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
  },
  {
    id: 'hardware-distributor',
    client: 'Industrial Hardware Distributor',
    location: 'United Kingdom',
    challenge: 'A UK distributor was losing margin to competitors sourcing directly from China. They needed a reliable partner to manage multiple supplier relationships across different product lines.',
    category: 'Industrial & Hardware',
    solution: 'We consolidated their sourcing across 4 product categories (fasteners, hand tools, safety equipment, and fittings), verified 6 factories, and set up a quarterly ordering system with consolidated shipping.',
    results: [
      { icon: TrendingDown, text: '28% average cost reduction across lines' },
      { icon: Clock, text: 'Order processing time cut by 70%' },
      { icon: ShieldCheck, text: 'Consistent quality across all suppliers' },
      { icon: Award, text: 'Managing 12 SKU families ongoing' },
    ],
    imgId: 'case-hardware-img-e6g4h0',
    titleId: 'case-hardware-title',
    descId: 'case-hardware-desc',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-[#0f2a4a] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
            <p className="text-lg text-slate-300">
              Real sourcing projects with measurable results. See how we've helped businesses like yours source successfully from China.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs) => (
              <article key={cs.id} className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-50 px-6 md:px-8 py-5 border-b border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h2 id={cs.titleId} className="text-xl font-bold text-slate-900">{cs.client}</h2>
                      <p id={cs.descId} className="text-sm text-slate-600">{cs.location} · {cs.category}</p>
                    </div>
                    <span className="text-xs font-medium text-[#e86c2b] bg-orange-50 px-3 py-1 rounded-full self-start">{cs.category}</span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Challenge</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Our Solution</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Results</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cs.results.map((r, i) => (
                        <div key={i} className="flex items-center gap-3 bg-emerald-50 rounded-lg px-4 py-3">
                          <r.icon className="w-5 h-5 text-emerald-600 shrink-0" />
                          <span className="text-sm font-medium text-slate-800">{r.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Want Results Like These?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Every project starts with a free consultation. Tell us your sourcing needs and we'll show you what's possible.
          </p>
          <CTAButton>Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}
