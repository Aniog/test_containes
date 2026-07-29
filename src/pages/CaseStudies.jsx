import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, DollarSign, Clock, ShieldCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const cases = [
  {
    title: 'European Kitchen Appliance Brand Reduces Unit Cost by 22%',
    client: 'Mid-size home appliance brand, Germany',
    challenge: 'The client was sourcing from a trading company with inconsistent quality and 15% cost premium. They needed direct factory access with reliable QC.',
    solution: 'We identified 4 ISO-certified manufacturers in Zhejiang, conducted on-site audits, and negotiated direct pricing. Implemented DPI and pre-shipment inspections.',
    results: [
      '22% reduction in unit cost through direct factory pricing',
      '98% first-pass QC acceptance rate vs. previous 82%',
      'Lead time reduced from 45 to 30 days',
    ],
    imgId: 'case-study-1-a1b2',
    titleId: 'case-1-title',
    descId: 'case-1-desc',
  },
  {
    title: 'US Startup Launches Custom Packaging Line in 6 Weeks',
    client: 'E-commerce startup, United States',
    challenge: 'The client needed custom-branded packaging for a subscription box launch, with tight deadlines and a limited budget. Zero China sourcing experience.',
    solution: 'We sourced 3 packaging factories in Guangdong, coordinated design-to-sample in 2 weeks, managed production with daily updates, and arranged air freight for launch.',
    results: [
      'Product launched on schedule within 6 weeks from first contact',
      'Unit cost 65% below US-based packaging quotes',
      'Ongoing monthly production with 48-hour QC turnaround',
    ],
    imgId: 'case-study-2-c3d4',
    titleId: 'case-2-title',
    descId: 'case-2-desc',
  },
  {
    title: 'Australian Industrial Parts Distributor Secures Reliable Supply Chain',
    client: 'Industrial components distributor, Australia',
    challenge: 'The client had experienced two supplier failures in 18 months — one factory closed without notice, another shipped substandard parts. They needed supply chain stability.',
    solution: 'We audited and qualified 5 CNC machining factories in Guangdong and Jiangsu. Established a dual-supplier model with overlapping capacity and weekly production tracking.',
    results: [
      'Zero supply disruptions in 24 months since engagement',
      'Quality consistency improved to 99.5% acceptance rate',
      'Long-term pricing agreements with quarterly review',
    ],
    imgId: 'case-study-3-e5f6',
    titleId: 'case-3-title',
    descId: 'case-3-desc',
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
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="cases-title" className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Case Studies
            </h1>
            <p className="text-lg text-blue-200 leading-relaxed">
              Real results from real clients. See how we have helped businesses source better from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((cs, i) => (
              <article key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}] [cases-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-brand-900 mb-3">{cs.title}</h2>
                  <p className="text-brand-600 text-sm font-semibold mb-4">{cs.client}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-red-600 font-semibold text-sm mb-2">Challenge</p>
                      <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-brand-600 font-semibold text-sm mb-2">Solution</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-5">
                    <p className="text-brand-900 font-semibold text-sm mb-3">Key Results</p>
                    <div className="flex flex-wrap gap-3">
                      {cs.results.map((r, j) => (
                        <span key={j} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                          <TrendingUp className="w-3 h-3" />
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Write Your Success Story
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Every great product starts with a conversation. Tell us about your sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-lg text-base transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
