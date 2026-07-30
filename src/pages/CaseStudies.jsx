import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react'

const caseStudies = [
  {
    id: 'uk-furniture',
    category: 'Furniture',
    country: 'United Kingdom',
    title: 'UK Retailer Cuts Sourcing Costs by 28%',
    challenge: 'A UK-based furniture retailer was sourcing from a single supplier in Foshan with no price benchmarking and no quality oversight. They had experienced two shipments with significant defects.',
    solution: 'We identified three alternative verified factories in Foshan, conducted on-site audits, and negotiated pricing on their behalf. We implemented a pre-shipment inspection protocol for all future orders.',
    results: ['28% reduction in unit cost', 'Zero defect claims in 4 subsequent shipments', '500-unit order delivered on schedule', 'Ongoing supplier relationship established'],
    titleId: 'cs-uk-furniture-title',
    descId: 'cs-uk-furniture-desc',
    imgId: 'cs-uk-furniture-img-a1b2c3',
  },
  {
    id: 'us-earbuds',
    category: 'Electronics',
    country: 'United States',
    title: 'US Brand Launches Private Label Earbuds',
    challenge: 'A US consumer electronics brand wanted to launch a private label earbud line but had no experience with Chinese OEM manufacturers and no contacts in the Shenzhen electronics ecosystem.',
    solution: 'We sourced and vetted 4 OEM manufacturers in Shenzhen, coordinated 3 rounds of samples, managed CE and FCC certification testing, and oversaw production of the initial 2,000-unit run.',
    results: ['Product launched within 5 months', '2,000 units delivered with full QC sign-off', 'CE and FCC certifications obtained', 'Repeat order placed within 60 days of launch'],
    titleId: 'cs-us-earbuds-title',
    descId: 'cs-us-earbuds-desc',
    imgId: 'cs-us-earbuds-img-d4e5f6',
  },
  {
    id: 'au-apparel',
    category: 'Apparel',
    country: 'Australia',
    title: 'Australian Brand Scales Clothing Line',
    challenge: 'An Australian activewear brand was struggling to scale production due to inconsistent quality from their existing Guangzhou supplier and communication delays that caused missed seasonal deadlines.',
    solution: 'We verified 5 garment factories, selected the best fit for their quality and volume requirements, and took over production follow-up and QC for three consecutive seasons.',
    results: ['3 seasons delivered on time', 'Quality consistency improved significantly', 'Communication turnaround reduced from 48h to same-day', 'Order volume scaled 3x over 18 months'],
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
    imgId: 'cs-au-apparel-img-g7h8i9',
  },
  {
    id: 'de-machinery',
    category: 'Machinery',
    country: 'Germany',
    title: 'German Distributor Sources Industrial Pumps',
    challenge: 'A German industrial distributor needed to source a range of centrifugal pumps from China at competitive prices while ensuring CE compliance and reliable delivery for their European clients.',
    solution: 'We identified certified pump manufacturers in Wenzhou, verified CE documentation, coordinated technical specification reviews, and managed a pilot order of 50 units with full inspection.',
    results: ['CE-compliant pumps sourced at 35% below European pricing', 'Pilot order of 50 units passed inspection', 'Ongoing supply agreement established', 'Lead time reduced by 3 weeks vs. previous supplier'],
    titleId: 'cs-de-machinery-title',
    descId: 'cs-de-machinery-desc',
    imgId: 'cs-de-machinery-img-j1k2l3',
  },
  {
    id: 'ca-toys',
    category: 'Toys',
    country: 'Canada',
    title: 'Canadian Toy Brand Passes Safety Certification',
    challenge: 'A Canadian toy startup needed to source educational wooden toys from China that met ASTM F963 and EN71 safety standards. Previous attempts had resulted in failed certification tests.',
    solution: 'We sourced factories with existing ASTM/EN71 experience, coordinated pre-production material testing, and worked with a third-party lab to ensure compliance before mass production.',
    results: ['ASTM F963 and EN71 certifications achieved', 'First production run of 1,500 units passed inspection', 'Time to market reduced by 6 weeks', 'Retail distribution secured in Canada and the US'],
    titleId: 'cs-ca-toys-title',
    descId: 'cs-ca-toys-desc',
    imgId: 'cs-ca-toys-img-m4n5o6',
  },
  {
    id: 'sg-packaging',
    category: 'Packaging',
    country: 'Singapore',
    title: 'Singapore E-Commerce Brand Launches Custom Packaging',
    challenge: 'A Singapore-based e-commerce brand needed custom-printed packaging boxes and paper bags for their product line, with tight color accuracy requirements and a 6-week delivery deadline.',
    solution: 'We sourced a specialist packaging printer in Guangzhou, managed 2 rounds of print proofs, and coordinated air freight to meet the launch deadline.',
    results: ['Custom packaging delivered in 5.5 weeks', 'Color accuracy approved on second proof round', 'Cost 40% lower than local Singapore quotes', 'Reorder process streamlined for future seasons'],
    titleId: 'cs-sg-packaging-title',
    descId: 'cs-sg-packaging-desc',
    imgId: 'cs-sg-packaging-img-p7q8r9',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-300 font-semibold text-sm uppercase tracking-wider">Client Results</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Case Studies
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Real outcomes from real clients. See how we've helped businesses across industries source from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {caseStudies.map(({ id, category, country, title, challenge, solution, results, titleId, descId, imgId }) => (
              <div key={id} className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-lightblue overflow-hidden">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-lightblue text-primary text-xs font-semibold px-3 py-1 rounded-full">{category}</span>
                    <span className="text-muted text-xs">{country}</span>
                  </div>
                  <h2 id={titleId} className="text-xl md:text-2xl font-bold text-textdark mb-4">{title}</h2>

                  <div className="space-y-4 mb-5">
                    <div>
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Challenge</p>
                      <p id={descId} className="text-muted text-sm leading-relaxed">{challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Our Solution</p>
                      <p className="text-muted text-sm leading-relaxed">{solution}</p>
                    </div>
                  </div>

                  <div className="bg-lightblue rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider">Results</p>
                    </div>
                    <ul className="space-y-1.5">
                      {results.map((r) => (
                        <li key={r} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-textdark text-sm">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Tell us what you need and we'll put together a free sourcing plan for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
