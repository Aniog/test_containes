import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, DollarSign, Clock, BarChart3 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    title: 'US E-Commerce Brand Cuts Kitchenware Sourcing Costs by 35%',
    client: 'Mid-size Amazon seller, USA',
    challenge: 'The client was sourcing silicone kitchenware through a trading company at $8.20/unit. Margins were thin and quality was inconsistent across batches.',
    solution: 'We identified 3 direct manufacturers in Yangjiang, conducted factory audits, negotiated factory-direct pricing, and implemented a QC protocol with pre-shipment inspections.',
    results: [
      'Unit cost reduced from $8.20 to $5.30 (35% savings)',
      'Annual order value of $420,000',
      'Defect rate dropped from 6% to under 0.5%',
      'Consistent quality across all batches',
    ],
    imgId: 'case-study-1-z9y8x7',
    titleId: 'case-title-1',
    descId: 'case-desc-1',
    highlight: '35% cost reduction',
  },
  {
    title: 'European Machinery Importer Avoids $120,000 Loss Through Factory Audit',
    client: 'Industrial equipment distributor, Germany',
    challenge: 'A supplier claimed to be a CNC parts manufacturer with 50+ machines. The client was about to wire a 60% deposit ($120K) for a $200K order.',
    solution: 'Our on-site audit revealed the "factory" was actually a trading office with no production equipment. We quickly pivoted to a verified manufacturer in Dongguan with proper ISO certification.',
    results: [
      'Saved $120,000 deposit from a fraudulent supplier',
      'Found a legitimate ISO 9001 certified factory',
      'New supplier delivered with 100% spec compliance',
      'Established a long-term supply relationship',
    ],
    imgId: 'case-study-2-w6v5u4',
    titleId: 'case-title-2',
    descId: 'case-desc-2',
    highlight: '$120K saved',
  },
  {
    title: 'Australian Retailer Scales from 12 to 200 SKUs in 18 Months',
    client: 'Home goods retailer, Australia',
    challenge: 'A growing retail chain needed to rapidly expand product lines while managing quality across multiple factories. They had no in-house sourcing team.',
    solution: 'We became their dedicated China sourcing office — managing 8 supplier relationships simultaneously, handling all QC, and coordinating consolidated shipments to their Sydney warehouse.',
    results: [
      'SKU count grew from 12 to 200 in 18 months',
      'Average 22% margin improvement vs. previous suppliers',
      'On-time delivery rate of 97%',
      'Zero major quality incidents across 200 SKUs',
    ],
    imgId: 'case-study-3-t3s2r1',
    titleId: 'case-title-3',
    descId: 'case-desc-3',
    highlight: '16x SKU growth',
  },
  {
    title: 'UK Startup Launches Custom Electronics Product in 4 Months',
    client: 'Hardware startup, United Kingdom',
    challenge: 'A startup had a prototype for a smart home device but no experience navigating Chinese manufacturing. They needed design for manufacturing (DFM), tooling, and production setup.',
    solution: 'We sourced a Shenzhen-based ODM partner, managed the DFM process, coordinated tooling fabrication, set up QC checkpoints, and arranged express air freight for the launch batch.',
    results: [
      'Product launched in 4 months from prototype to market',
      'Tooling cost 40% below client budget estimate',
      'First production run: 3,000 units with 0.3% defect rate',
      'Secured follow-on order for 10,000 units',
    ],
    imgId: 'case-study-4-m0n1o2',
    titleId: 'case-title-4',
    descId: 'case-desc-4',
    highlight: '4-month launch',
  },
  {
    title: 'Canadian Retail Chain Achieves 99% On-Time Delivery Rate',
    client: 'National retail chain, Canada',
    challenge: 'The client sourced promotional products from 5 different Chinese suppliers and consistently faced late deliveries during Q4 peak season, impacting holiday sales.',
    solution: 'We consolidated their supplier base under our management, implemented weekly production tracking, pre-booked freight space, and created a buffer production schedule for seasonal peaks.',
    results: [
      'On-time delivery improved from 72% to 99%',
      'Freight costs reduced by 18% through consolidation',
      'Peak season planning eliminated stockouts',
      'Client renewed with 3-year sourcing agreement',
    ],
    imgId: 'case-study-5-p3q4r5',
    titleId: 'case-title-5',
    descId: 'case-desc-5',
    highlight: '99% on-time delivery',
  },
  {
    title: 'US Fitness Brand Reduces Defect Rate from 12% to 0.2%',
    client: 'Fitness equipment brand, USA',
    challenge: 'Resistance bands and yoga accessories sourced from a low-cost supplier had 12% defect rates, causing returns and negative Amazon reviews.',
    solution: 'We audited and replaced the supplier, implemented inline QC inspections at 3 production stages, and introduced AQL 2.5 sampling at pre-shipment stage.',
    results: [
      'Defect rate reduced from 12% to 0.2%',
      'Amazon rating improved from 3.8 to 4.6 stars',
      'Return rate dropped by 85%',
      'Cost per quality unit actually decreased by 8%',
    ],
    imgId: 'case-study-6-a1b2c3',
    titleId: 'case-title-6',
    descId: 'case-desc-6',
    highlight: '93% fewer defects',
  },
]

export default function CaseStudiesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wide mb-3">Case Studies</p>
            <h1 id="cases-page-heading" className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Real Results from Real Sourcing Projects
            </h1>
            <p id="cases-page-sub" className="text-lg text-slate-300 leading-relaxed">
              Detailed case studies showing how we've helped businesses across industries
              save money, improve quality, and scale their sourcing from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, idx) => (
              <div
                key={cs.imgId}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  idx % 2 === 1 ? '' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 mb-4">
                    {cs.highlight}
                  </span>
                  <h2 id={cs.titleId} className="text-2xl font-extrabold text-navy-900 mb-4">{cs.title}</h2>

                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Client</span>
                      <p className="text-sm text-slate-700">{cs.client}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Challenge</span>
                      <p className="text-sm text-slate-700">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Our Solution</span>
                      <p className="text-sm text-slate-700">{cs.solution}</p>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Results</span>
                    <ul className="mt-2 space-y-2">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-slate-700">
                          <TrendingUp className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-slate-200">
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}] [cases-page-heading]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-navy-900 mb-4">Want to Be Our Next Success Story?</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Every project starts with a conversation. Tell us about your sourcing needs and
            we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-gold-500 text-white hover:bg-gold-600 transition-colors shadow-lg shadow-gold-500/25"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}