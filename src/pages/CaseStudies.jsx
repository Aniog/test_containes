import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Star, ArrowRight, TrendingUp, DollarSign, Shield } from 'lucide-react'

const caseStudies = [
  {
    company: 'EuroHome GmbH',
    industry: 'Home & Furniture',
    country: 'Germany',
    background: 'EuroHome GmbH is a mid-sized furniture retailer based in Berlin, sourcing custom-designed furniture for their European retail network. After experiencing quality issues with their previous supplier, they needed a more reliable sourcing partner.',
    challenge: 'Previous supplier delivered furniture with inconsistent quality — warped wood, mismatched colors, and poor finishing. Defect rates exceeded 12%, leading to customer complaints, returns, and damaged brand reputation. They needed a supplier who could meet European quality standards consistently.',
    solution: 'We conducted a thorough search across furniture manufacturing hubs in Guangdong and Zhejiang provinces. After evaluating 8 factories, we shortlisted 3 that met the criteria. We performed in-depth factory audits, checked certifications, and reviewed past export records. We negotiated pricing, established clear quality specifications, and implemented a multi-stage QC protocol.',
    result: 'The selected manufacturer delivered consistent quality with defect rates below 1%. EuroHome launched their new furniture line on time, within budget, and has since expanded their product range. They continue to work with us for all their China sourcing needs.',
    metrics: [
      { icon: TrendingUp, value: '12% → <1%', label: 'Defect rate reduction' },
      { icon: DollarSign, value: '15%', label: 'Cost savings vs. previous supplier' },
      { icon: Shield, value: '100%', label: 'On-time delivery rate' },
    ],
    rating: 5,
    imgId: 'cs-eurohome-1a2b3c',
    imgQuery: '[cs-eurohome-title] [case-studies-heading]',
    titleId: 'cs-eurohome-title',
  },
  {
    company: 'TechSphere Inc.',
    industry: 'Consumer Electronics',
    country: 'USA',
    background: 'TechSphere Inc. is a US-based tech accessories brand that needed to scale production of their Bluetooth audio products. They had previously sourced directly from Alibaba with mixed results.',
    challenge: 'Finding a manufacturer capable of producing high-quality Bluetooth accessories at scale while meeting FCC/CE certification requirements. Previous attempts at direct sourcing resulted in communication issues, delayed shipments, and products that failed certification testing.',
    solution: 'We identified 15 potential suppliers across Shenzhen and Dongguan, specializing in audio electronics. After initial screening, we visited 5 factories in person, evaluating their SMT lines, testing equipment, and quality control processes. We negotiated favorable payment terms and established a production monitoring schedule with weekly progress reports.',
    result: 'Three qualified suppliers were selected for different product lines. All products passed FCC/CE certification on the first attempt. Production was completed on schedule, and TechSphere launched their product line at a major trade show. They have since tripled their order volume.',
    metrics: [
      { icon: TrendingUp, value: '3x', label: 'Order volume growth' },
      { icon: DollarSign, value: '20%', label: 'Cost reduction' },
      { icon: Shield, value: '100%', label: 'Certification pass rate' },
    ],
    rating: 5,
    imgId: 'cs-techsphere-2b3c4d',
    imgQuery: '[cs-techsphere-title] [case-studies-heading]',
    titleId: 'cs-techsphere-title',
  },
  {
    company: 'ModaViva',
    industry: 'Apparel & Fashion',
    country: 'Italy',
    background: 'ModaViva is an Italian fashion brand known for high-quality seasonal apparel. They needed a reliable manufacturing partner in China to produce their Spring/Summer collection under tight deadlines.',
    challenge: 'The collection involved complex fabric specifications, multiple colorways, and strict quality requirements. The lead time was compressed due to design delays, leaving only 10 weeks from sample approval to final shipment. Finding a factory with the right capabilities and available capacity was critical.',
    solution: 'We coordinated with 4 fabric mills to source the specific materials required, then identified 2 garment factories with experience in high-end fashion production. We managed the entire sample process, from initial prototypes to final approved samples. During production, we conducted weekly inspections and provided daily progress updates.',
    result: 'All production milestones were met. The collection shipped on time, with 100% of units passing pre-shipment inspection. The client was particularly impressed by the fabric quality and stitching precision. ModaViva has since expanded their China production to include their Autumn/Winter line.',
    metrics: [
      { icon: TrendingUp, value: '10 weeks', label: 'From sample to delivery' },
      { icon: DollarSign, value: '30%', label: 'Cost advantage vs. domestic production' },
      { icon: Shield, value: '100%', label: 'On-time delivery' },
    ],
    rating: 5,
    imgId: 'cs-modaviva-3c4d5e',
    imgQuery: '[cs-modaviva-title] [case-studies-heading]',
    titleId: 'cs-modaviva-title',
  },
  {
    company: 'BuildRight Hardware',
    industry: 'Industrial Equipment',
    country: 'Australia',
    background: 'BuildRight Hardware is an Australian supplier of construction hardware and tools. They needed to diversify their supply chain and reduce dependency on a single source.',
    challenge: 'Finding ISO-certified manufacturers in China capable of producing industrial-grade hardware meeting Australian standards. The products required specific material specifications, load-bearing certifications, and consistent quality across large production runs.',
    solution: 'We conducted a targeted search across industrial manufacturing hubs in Zhejiang and Jiangsu. We evaluated 6 factories, focusing on those with ISO 9001 certification and experience exporting to Australia. We facilitated sample testing, negotiated bulk pricing, and established a quality assurance protocol including third-party material testing.',
    result: 'Two factories were approved and began production. The client achieved a 25% cost reduction compared to their previous supplier while maintaining quality standards. The diversified supply chain also reduced lead times by 2 weeks.',
    metrics: [
      { icon: TrendingUp, value: '25%', label: 'Cost reduction' },
      { icon: DollarSign, value: '2 weeks', label: 'Faster lead time' },
      { icon: Shield, value: 'ISO 9001', label: 'Certified suppliers' },
    ],
    rating: 5,
    imgId: 'cs-buildright-4d5e6f',
    imgQuery: '[cs-buildright-title] [case-studies-heading]',
    titleId: 'cs-buildright-title',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28">
        <div className="section-container text-center">
          <h1 id="case-studies-heading" className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Real results from real partnerships. See how we have helped businesses across 
            industries source successfully from China.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section-padding">
        <div className="section-container space-y-16">
          {caseStudies.map((cs, index) => (
            <article key={index} className="card">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(cs.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                    <span className="bg-gray-100 px-2 py-0.5 rounded">{cs.industry}</span>
                    <span>{cs.country}</span>
                  </div>
                  <h2 id={cs.titleId} className="text-2xl font-bold text-gray-900 mb-2">{cs.company}</h2>
                  <p className="text-gray-600 text-sm mb-4">{cs.background}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm">Challenge</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm">Solution</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm">Result</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{cs.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {cs.metrics.map((metric, i) => {
                      const Icon = metric.icon
                      return (
                        <div key={i} className="text-center p-3 bg-gray-50 rounded-lg">
                          <Icon className="w-5 h-5 text-primary mx-auto mb-1" />
                          <div className="text-sm font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-gray-500">{metric.label}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="lg:w-80 shrink-0">
                  <div className="bg-gray-100 rounded-xl aspect-[4/3] overflow-hidden">
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={cs.imgQuery}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      alt={cs.company}
                      className="w-full h-full object-cover"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Be Our Next Success Story</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Let us help you source products from China with confidence. Get started with a free quote.
          </p>
          <Link to="/contact" className="btn-secondary text-lg px-8 py-3.5 inline-flex items-center gap-2">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}