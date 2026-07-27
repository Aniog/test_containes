import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingDown, Clock, ShieldCheck } from 'lucide-react'

const cases = [
  {
    id: 'us-electronics-distributor',
    title: 'US Electronics Distributor — Defect Rate Reduction',
    client: 'US-based electronics components distributor',
    challenge: 'The client was sourcing PCBs from multiple Chinese suppliers with inconsistent quality. Defect rates averaged 12%, causing costly returns and production delays.',
    solution: 'We identified 3 verified PCB manufacturers, conducted on-site audits, negotiated pricing, and implemented AQL-based pre-shipment inspections across all suppliers.',
    results: [
      { label: 'Defect rate', before: '12%', after: '1.5%', icon: TrendingDown },
      { label: 'Lead time', before: '45 days', after: '31 days', icon: Clock },
      { label: 'Supplier reliability', before: 'Unverified', after: '3 verified factories', icon: ShieldCheck },
    ],
    imgId: 'case-us-electronics-full-a1',
    titleId: 'case-us-electronics-full-title',
    descId: 'case-us-electronics-full-desc',
  },
  {
    id: 'eu-home-garden-brand',
    title: 'European Home & Garden Brand — Multi-Factory QC',
    client: 'European home & garden product brand',
    challenge: 'The client needed to source furniture from 4 different factories simultaneously, with consistent quality standards and on-time delivery across all suppliers.',
    solution: 'We assigned a dedicated project manager, verified all 4 factories, created unified QC checklists, and conducted during-production and pre-shipment inspections at each factory.',
    results: [
      { label: 'On-time delivery', before: '72%', after: '98%', icon: Clock },
      { label: 'Quality consistency', before: 'Variable', after: 'Unified AQL standard', icon: ShieldCheck },
      { label: 'Communication overhead', before: '4 separate contacts', after: '1 project manager', icon: TrendingDown },
    ],
    imgId: 'case-eu-home-full-b2',
    titleId: 'case-eu-home-full-title',
    descId: 'case-eu-home-full-desc',
  },
  {
    id: 'au-auto-parts-retailer',
    title: 'Australian Auto Parts Retailer — Full Cycle Sourcing',
    client: 'Australian aftermarket auto parts retailer',
    challenge: 'The client needed to source 15 different auto part categories, verify suppliers, manage production, and coordinate shipping for 50,000 units — with no prior China sourcing experience.',
    solution: 'We handled the entire sourcing cycle: supplier search, factory verification, sample evaluation, price negotiation, production follow-up, QC inspections, and door-to-door shipping coordination.',
    results: [
      { label: 'Units delivered', before: '0', after: '50,000', icon: TrendingDown },
      { label: 'Supplier network', before: 'None', after: '8 verified suppliers', icon: ShieldCheck },
      { label: 'Time to first shipment', before: 'N/A', after: '12 weeks', icon: Clock },
    ],
    imgId: 'case-au-auto-full-c3',
    titleId: 'case-au-auto-full-title',
    descId: 'case-au-auto-full-desc',
  },
  {
    id: 'middle-east-building',
    title: 'Middle East Building Materials Importer — Supplier Switch',
    client: 'Middle East building materials importer',
    challenge: "The client's existing supplier had repeated quality failures and delivery delays on ceramic tiles and plumbing fixtures, threatening their construction project timelines.",
    solution: 'We quickly identified and verified alternative suppliers in Foshan and Wenzhou, coordinated sample production, negotiated better terms, and managed the transition with zero supply gap.',
    results: [
      { label: 'Quality failures', before: '8% rejection', after: '0.5% rejection', icon: TrendingDown },
      { label: 'Delivery reliability', before: '60% on-time', after: '95% on-time', icon: Clock },
      { label: 'Cost savings', before: 'Previous pricing', after: '12% lower unit cost', icon: ShieldCheck },
    ],
    imgId: 'case-me-building-full-d4',
    titleId: 'case-me-building-full-title',
    descId: 'case-me-building-full-desc',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Case Studies</h1>
          <p className="text-navy-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Real results for real buyers. See how we've helped global businesses overcome sourcing challenges.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cases.map((c, i) => (
            <div key={c.id} className="mb-16 md:mb-20 last:mb-0">
              <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
                <div className="lg:w-1/2">
                  <div className="aspect-[3x2] rounded-xl overflow-hidden bg-gray-50">
                    <img
                      alt={c.title}
                      data-strk-img-id={c.imgId}
                      data-strk-img={`[${c.descId}] [${c.titleId}]`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 id={c.titleId} className="text-2xl font-bold text-navy-600 mb-2">{c.title}</h3>
                  <p id={c.descId} className="text-accent-400 font-medium text-sm mb-4">{c.client}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-navy-600 uppercase tracking-wide mb-2">Challenge</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{c.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-navy-600 uppercase tracking-wide mb-2">Solution</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{c.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-navy-600 uppercase tracking-wide mb-3">Results</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {c.results.map((r) => (
                        <div key={r.label} className="bg-navy-50 rounded-lg p-3">
                          <r.icon className="w-4 h-4 text-accent-400 mb-1" />
                          <p className="text-xs text-gray-500 mb-0.5">{r.label}</p>
                          <p className="text-sm font-semibold text-navy-600">{r.after}</p>
                          <p className="text-xs text-gray-400">Before: {r.before}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-navy-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Want Similar Results?</h2>
          <p className="text-navy-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Tell us about your sourcing challenge. We'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-500 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
