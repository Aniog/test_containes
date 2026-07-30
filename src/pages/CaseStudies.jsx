import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingDown, ShieldCheck, Clock, Star } from 'lucide-react'

const caseStudies = [
  {
    id: 'cs-1',
    category: 'Electronics',
    country: 'United States',
    flag: '🇺🇸',
    title: 'US Retailer Reduces Sourcing Costs by 28%',
    challenge: 'A US-based electronics retailer was sourcing LED lighting products through a trading company and paying above-market prices. They had no visibility into the actual manufacturer.',
    solution: 'We identified three verified LED manufacturers in Zhongshan, conducted factory audits, and negotiated directly with the best-matched supplier. We also implemented a pre-shipment inspection process.',
    result: '28% reduction in unit cost, direct factory relationship established, and zero quality rejections over 12 months of orders.',
    metrics: [
      { icon: TrendingDown, label: 'Cost Reduction', value: '28%' },
      { icon: ShieldCheck, label: 'Quality Rejections', value: '0' },
      { icon: Clock, label: 'Lead Time Saved', value: '2 weeks' },
    ],
    titleId: 'cs-1-title',
    descId: 'cs-1-desc',
    imgId: 'cs-1-img-a1b2c3',
  },
  {
    id: 'cs-2',
    category: 'Home & Garden',
    country: 'United Kingdom',
    flag: '🇬🇧',
    title: 'UK Brand Launches Private Label Home Goods Line',
    challenge: 'A UK home goods brand wanted to launch a private label product line but had no experience sourcing from China and no contacts in the market.',
    solution: 'We managed the entire OEM process — from product design consultation and factory matching to sample development, branded packaging design, and final delivery coordination.',
    result: 'Successfully launched 8 SKUs under their own brand within 5 months. The brand has since placed three repeat orders.',
    metrics: [
      { icon: Star, label: 'SKUs Launched', value: '8' },
      { icon: Clock, label: 'Time to Market', value: '5 months' },
      { icon: ShieldCheck, label: 'Repeat Orders', value: '3' },
    ],
    titleId: 'cs-2-title',
    descId: 'cs-2-desc',
    imgId: 'cs-2-img-d4e5f6',
  },
  {
    id: 'cs-3',
    category: 'Apparel',
    country: 'Australia',
    flag: '🇦🇺',
    title: 'Australian Importer Avoids Costly Quality Dispute',
    challenge: 'An Australian clothing importer had previously received a shipment of garments that did not match the approved samples, resulting in a significant financial loss.',
    solution: 'We implemented a structured quality control process including in-line inspections during production and a comprehensive pre-shipment inspection before goods were loaded.',
    result: 'Our inspection identified 12% defect rate in the first batch, which was corrected before shipment. The buyer avoided a repeat of their previous loss.',
    metrics: [
      { icon: ShieldCheck, label: 'Defects Caught', value: '12%' },
      { icon: TrendingDown, label: 'Loss Avoided', value: '$18K' },
      { icon: Clock, label: 'Resolution Time', value: '3 days' },
    ],
    titleId: 'cs-3-title',
    descId: 'cs-3-desc',
    imgId: 'cs-3-img-g7h8i9',
  },
  {
    id: 'cs-4',
    category: 'Industrial',
    country: 'Germany',
    flag: '🇩🇪',
    title: 'German Distributor Verifies New Supplier Before Large Order',
    challenge: 'A German industrial equipment distributor found a new supplier online offering competitive prices but had no way to verify the factory\'s legitimacy or production capability.',
    solution: 'We conducted a comprehensive factory audit covering business registration, production equipment, quality certifications, and worker conditions. We delivered a detailed audit report within 7 days.',
    result: 'The audit confirmed the factory was legitimate and capable. The buyer placed a €120,000 order with confidence. The factory has since become a key supplier.',
    metrics: [
      { icon: ShieldCheck, label: 'Audit Completed', value: '7 days' },
      { icon: Star, label: 'Order Value', value: '€120K' },
      { icon: Clock, label: 'Risk Mitigated', value: '100%' },
    ],
    titleId: 'cs-4-title',
    descId: 'cs-4-desc',
    imgId: 'cs-4-img-j1k2l3',
  },
  {
    id: 'cs-5',
    category: 'Toys',
    country: 'Canada',
    flag: '🇨🇦',
    title: 'Canadian Toy Brand Achieves CE & ASTM Compliance',
    challenge: 'A Canadian toy brand needed to source products that met both CE (European) and ASTM (US/Canada) safety standards, but struggled to find factories with the right certifications.',
    solution: 'We identified factories with existing CE and ASTM certifications, coordinated third-party lab testing, and managed the compliance documentation process.',
    result: 'All products passed required safety tests. The brand successfully entered both the Canadian and European markets with compliant products.',
    metrics: [
      { icon: ShieldCheck, label: 'Standards Met', value: 'CE + ASTM' },
      { icon: Star, label: 'Markets Entered', value: '2' },
      { icon: Clock, label: 'Compliance Time', value: '6 weeks' },
    ],
    titleId: 'cs-5-title',
    descId: 'cs-5-desc',
    imgId: 'cs-5-img-m4n5o6',
  },
  {
    id: 'cs-6',
    category: 'Health & Beauty',
    country: 'France',
    flag: '🇫🇷',
    title: 'French Cosmetics Brand Sources Eco-Friendly Packaging',
    challenge: 'A French cosmetics brand needed to transition to sustainable packaging but found it difficult to identify Chinese suppliers offering certified eco-friendly materials at competitive prices.',
    solution: 'We sourced three packaging manufacturers specializing in recycled and biodegradable materials, verified their environmental certifications, and coordinated sample development.',
    result: 'The brand transitioned to 100% eco-friendly packaging within 4 months, reducing packaging costs by 15% compared to their previous European supplier.',
    metrics: [
      { icon: TrendingDown, label: 'Cost Reduction', value: '15%' },
      { icon: Clock, label: 'Transition Time', value: '4 months' },
      { icon: ShieldCheck, label: 'Eco Certified', value: '100%' },
    ],
    titleId: 'cs-6-title',
    descId: 'cs-6-desc',
    imgId: 'cs-6-img-p7q8r9',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-red-300 font-semibold text-sm uppercase tracking-wider mb-3">Real Results</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Real examples of how we've helped global buyers source successfully from China — reducing costs, improving quality, and avoiding common pitfalls.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, idx) => (
              <div key={cs.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-xl shadow-md object-cover h-56 md:h-64 bg-gray-100"
                  />
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="bg-lightblue rounded-lg p-3 text-center">
                        <m.icon className="w-4 h-4 text-accent mx-auto mb-1" />
                        <div className="text-lg font-black text-primary">{m.value}</div>
                        <div className="text-xs text-gray-500">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded">{cs.category}</span>
                    <span className="text-sm text-gray-500">{cs.flag} {cs.country}</span>
                  </div>
                  <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-primary mb-5">{cs.title}</h2>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide mb-1">Challenge</h4>
                      <p id={cs.descId} className="text-gray-600 leading-relaxed text-sm">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide mb-1">Our Solution</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">{cs.solution}</p>
                    </div>
                    <div className="bg-lightblue rounded-lg p-4">
                      <h4 className="font-semibold text-primary text-sm uppercase tracking-wide mb-1">Result</h4>
                      <p className="text-gray-700 leading-relaxed text-sm font-medium">{cs.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Contact us today and let's discuss how we can help you source from China with confidence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-red-700 transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
