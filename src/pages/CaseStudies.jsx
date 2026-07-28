import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingDown, TrendingUp, CheckCircle, Building2 } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

const caseStudies = [
  {
    id: 'case-1',
    title: 'German Auto Parts Importer Saves 30% on Sourcing Costs',
    client: 'Mid-sized auto parts distributor, Germany',
    challenge: 'The client relied on European intermediaries for their aftermarket auto parts supply chain, resulting in high costs and limited product variety.',
    solution: 'We identified 3 specialized factories in Zhejiang province, conducted full factory audits including ISO/TS 16949 certification verification, arranged sample runs with lab testing, and negotiated factory-direct pricing.',
    results: [
      '30% reduction in per-unit sourcing costs',
      '99.2% quality pass rate across all shipments',
      'Product range expanded from 200 to 450 SKUs',
      'Average lead time reduced from 12 to 8 weeks',
    ],
    imgId: 'case-study-1-auto-a1b2c3',
    titleId: 'case-1-title',
    descId: 'case-1-client',
  },
  {
    id: 'case-2',
    title: 'US E-Commerce Brand Scales from 1 to 15 Products in 8 Months',
    client: 'Amazon FBA seller, United States',
    challenge: 'A successful single-product Amazon seller wanted to rapidly diversify their product portfolio but lacked the sourcing expertise and factory contacts in China.',
    solution: 'We mapped out 15 complementary product opportunities, sourced and audited 12 different factories across Guangdong, managed sample development and QC for each product line, and coordinated consolidated shipments to Amazon FBA warehouses.',
    results: [
      '15 new product lines launched in 8 months',
      'Average product rating of 4.4 stars on Amazon',
      'Zero account suspensions or IP complaints',
      'Annual revenue grew from $800K to $3.2M',
    ],
    imgId: 'case-study-2-amazon-d4e5f6',
    titleId: 'case-2-title',
    descId: 'case-2-client',
  },
  {
    id: 'case-3',
    title: 'Australian Retail Chain Cuts Packaging Costs by 22%',
    client: 'National retail chain, Australia',
    challenge: 'The retailer was sourcing custom packaging from multiple local and regional suppliers at high costs. They needed to consolidate their packaging supply chain without compromising quality or reliability.',
    solution: 'We identified 2 large-scale packaging manufacturers in Guangdong, negotiated consolidated pricing across all packaging SKUs (corrugated boxes, gift boxes, shopping bags, labels), implemented QC protocols, and set up regular consolidated sea freight shipments.',
    results: [
      '22% annual savings on packaging spend',
      'Supplier base consolidated from 14 to 2',
      'On-time delivery rate improved to 98.5%',
      'Custom packaging design turnaround cut from 4 weeks to 10 days',
    ],
    imgId: 'case-study-3-retail-g7h8i9',
    titleId: 'case-3-title',
    descId: 'case-3-client',
  },
  {
    id: 'case-4',
    title: 'UK Electronics Startup Finds a Reliable OEM Partner',
    client: 'Hardware startup, United Kingdom',
    challenge: 'A UK startup had a prototype for a smart home device but struggled to find a reliable Chinese manufacturer willing to take on a small initial production run (500 units) at a workable price.',
    solution: 'We identified 5 factories with experience in similar IoT products, arranged factory visits, negotiated a trial production run with tooling cost amortization, provided on-site engineering support during the first production batch, and managed CE/RoHS certification testing.',
    results: [
      'First production batch of 500 units delivered on spec and on time',
      'Unit cost 35% below UK-based manufacturing quotes',
      'Established long-term manufacturing partnership',
      'Successfully scaled to 5,000 units in second production run',
    ],
    imgId: 'case-study-4-startup-j0k1l2',
    titleId: 'case-4-title',
    descId: 'case-4-client',
  },
  {
    id: 'case-5',
    title: 'Canadian Industrial Equipment Distributor Secures Exclusive Supply',
    client: 'Industrial equipment distributor, Canada',
    challenge: 'The distributor needed a reliable source for custom hydraulic components but had been burned twice by unverified Chinese suppliers who delivered substandard parts.',
    solution: 'We conducted exhaustive supplier research across 3 industrial clusters, performed rigorous factory audits including metallurgical testing capabilities, managed a 3-month sample qualification process with the client\'s engineering team, and structured a contract with quality guarantees and penalty clauses.',
    results: [
      'Zero quality rejections across 24 shipments',
      'Exclusive distribution agreement secured for North America',
      '35% cost savings vs. previous European supplier',
      'Technical collaboration established for custom part development',
    ],
    imgId: 'case-study-5-cad-m3n4o5',
    titleId: 'case-5-title',
    descId: 'case-5-client',
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
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-semibold text-sm tracking-wide uppercase mb-3">Case Studies</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Proven Results for Our Clients
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real stories of how we helped businesses of all sizes source better, cut costs,
            and build reliable supply chains in China.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, index) => (
              <div
                key={cs.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-10 lg:gap-16 items-start`}
              >
                <div className="flex-1">
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}] China sourcing success case study`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-brand-600 text-sm font-medium mb-3">
                    <Building2 className="w-4 h-4" />
                    <span id={cs.descId}>{cs.client}</span>
                  </div>
                  <h2 id={cs.titleId} className="text-2xl sm:text-3xl font-bold text-navy-950 mb-6">
                    {cs.title}
                  </h2>

                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Challenge</h4>
                      <p className="text-gray-700 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Our Solution</h4>
                      <p className="text-gray-700 leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                    <h4 className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-3">Results</h4>
                    <ul className="space-y-2.5">
                      {cs.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-gray-800 font-medium">{r}</span>
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

      <CTABanner
        title="Want to Be Our Next Success Story?"
        subtitle="Share your sourcing challenge with us and we will create a custom plan to achieve your goals."
        buttonText="Start Your Project"
      />
    </div>
  )
}
