import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'

const caseStudies = [
  {
    company: 'EuroTech GmbH',
    industry: 'Consumer Electronics',
    country: 'Germany',
    product: 'Custom Bluetooth Speakers',
    challenge: 'EuroTech needed a reliable manufacturer for custom Bluetooth speakers with specific audio quality standards, IPX4 waterproofing, and compliance with EU regulations. Their previous supplier had quality consistency issues.',
    solution: 'We identified and audited 6 potential factories in Shenzhen and Dongguan. After evaluating production capabilities, quality systems, and certifications, we selected a factory with ISO 9001 and BSCI certifications. We negotiated pricing, established quality checkpoints, and set up a production monitoring schedule.',
    result: 'The client achieved a 35% cost reduction compared to their previous supplier. The first production run of 10,000 units was completed on schedule with zero defects. Ongoing monthly orders are now managed through our production monitoring service.',
    metric: '35% cost savings',
    metricSub: '10,000 units delivered',
  },
  {
    company: 'Pacific Home Goods',
    industry: 'Home & Kitchen',
    country: 'Australia',
    product: 'Stainless Steel Kitchenware',
    challenge: 'Pacific Home Goods required FDA-compliant stainless steel kitchenware suppliers for the Australian market. They needed factories with food-grade certifications, consistent quality, and the ability to handle 50,000-unit orders.',
    solution: 'We conducted a comprehensive search across Guangdong and Zhejiang provinces, auditing 5 factories. One factory met all requirements with ISO 9001, FDA, and LFGB certifications. We managed sample production, arranged third-party lab testing, and set up a multi-stage inspection process.',
    result: 'All 50,000 units passed pre-shipment inspection with zero critical defects. The client launched their product line on schedule and has since placed 3 repeat orders. Total savings estimated at 28% compared to their previous sourcing approach.',
    metric: '50,000 units delivered',
    metricSub: '3 repeat orders',
  },
  {
    company: 'Atlas Auto Parts',
    industry: 'Automotive',
    country: 'UAE',
    product: 'Automotive LED Lighting',
    challenge: 'Atlas Auto Parts needed competitive pricing on automotive LED lighting products for the Middle Eastern market. They required factories with E-mark and CE certifications, consistent quality, and reliable delivery schedules.',
    solution: 'We sourced and qualified 3 factories in Guangzhou and Zhejiang. Our team conducted technical assessments, verified certifications, and established production quality benchmarks. We implemented a production monitoring system with weekly progress reports and random in-process inspections.',
    result: 'Defect rate was maintained below 0.5% across all shipments. The client secured pricing 22% below market average. Delivery schedules were met with 98% on-time performance across 6 months of orders.',
    metric: '< 0.5% defect rate',
    metricSub: '22% below market price',
  },
  {
    company: 'Maple Leaf Toys',
    industry: 'Toys & Children',
    country: 'Canada',
    product: 'Educational Wooden Toys',
    challenge: 'The client needed a supplier of eco-friendly wooden toys with EN71 and ASTM certifications. They required non-toxic paints, sustainable packaging, and ethical manufacturing practices.',
    solution: 'We identified specialist wooden toy manufacturers in Zhejiang province. Our team conducted detailed audits focusing on material sourcing, paint safety, and labor conditions. We coordinated sample testing at an accredited lab and established a quality control plan.',
    result: 'Product successfully launched in Canadian market with all required certifications. The client reported strong sales and positive customer feedback on product quality. They have since expanded their product line with our support.',
    metric: 'Full certification achieved',
    metricSub: 'Successful market launch',
  },
  {
    company: 'Nordic Living',
    industry: 'Home Decor',
    country: 'Sweden',
    product: 'Ceramic Home Decor',
    challenge: 'Nordic Living needed a supplier for minimalist ceramic home decor products with consistent glaze quality, precise dimensions, and sustainable packaging. They required MOQs suitable for a growing brand.',
    solution: 'We found and audited a specialized ceramic manufacturer in Jiangxi province. We negotiated flexible MOQs, established quality standards for glaze consistency, and set up a packaging solution using recycled materials. We managed the entire sample approval process.',
    result: 'The client launched 15 SKUs successfully. Product quality exceeded expectations. The factory partnership has grown to include custom designs and exclusive product lines for the Nordic market.',
    metric: '15 SKUs launched',
    metricSub: 'Exclusive designs secured',
  },
  {
    company: 'GreenLeaf Organics',
    industry: 'Health & Beauty',
    country: 'United Kingdom',
    product: 'Organic Supplement Packaging',
    challenge: 'GreenLeaf needed eco-friendly packaging for their organic supplement line. They required suppliers using recycled materials, food-grade certified, and capable of custom printing with precise color matching.',
    solution: 'We sourced packaging manufacturers specializing in sustainable materials. Our team audited 4 factories, verified food-grade certifications, and coordinated multiple sample rounds to achieve exact color matching for the brand.',
    result: 'Packaging line launched with 100% recycled materials. CO2 emissions reduced by 40% compared to previous packaging. The client received positive feedback from eco-conscious customers.',
    metric: '100% recycled materials',
    metricSub: '40% CO2 reduction',
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Case Studies
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              Real examples of how we have helped global buyers source products successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 lg:space-y-12">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-sm font-semibold text-white bg-navy-700 px-3 py-1 rounded-full">
                      {cs.industry}
                    </span>
                    <span className="text-sm text-gray-500">{cs.country}</span>
                    <span className="text-sm text-gray-400">|</span>
                    <span className="text-sm text-gray-500">{cs.product}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-navy-700 mb-2">{cs.company}</h2>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-6">
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Challenge</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Solution</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-2">Result</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{cs.result}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-50 text-green-700 text-sm font-semibold px-3 py-1.5 rounded-lg">
                          {cs.metric}
                        </span>
                        <span className="bg-navy-50 text-navy-600 text-sm font-semibold px-3 py-1.5 rounded-lg">
                          {cs.metricSub}
                        </span>
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
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-4">
            Want Results Like These?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Every successful partnership starts with a conversation. Tell us about your sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-base transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}