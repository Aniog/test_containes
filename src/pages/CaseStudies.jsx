import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingDown, TrendingUp, Clock, Shield } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics-distributor',
    category: 'Consumer Electronics',
    title: 'European Electronics Distributor Saves 35% on BOM Costs',
    challenge: 'A German electronics distributor was sourcing 12 SKUs through a Hong Kong-based trading company. Their margins were being squeezed by multi-layered markups, and they had no direct relationship with the actual manufacturers. Quality was inconsistent, and lead times were unpredictable.',
    solution: 'We identified 3 direct manufacturers in Shenzhen\'s Huaqiangbei electronics district—each specializing in different product categories. Our team conducted on-site factory audits, negotiated pricing directly in Mandarin, and set up a quality control protocol including pre-shipment inspections for every order.',
    results: [
      '35% average cost reduction across all 12 SKUs',
      'Direct relationships with 3 verified manufacturers',
      'Quality consistency improved—defect rate dropped from 8% to under 1%',
      'Lead times reduced from 45 days to 25 days average',
    ],
    imgId: 'cs-electronics-bg-a1b2c3',
    titleId: 'cs-electronics-title',
  },
  {
    id: 'furniture-brand',
    category: 'Home & Furniture',
    title: 'UK Furniture Brand Scales from 1 to 15 Product Lines in 18 Months',
    challenge: 'A London-based D2C furniture brand launched with a single product line sourced from a trade show contact. When they wanted to scale to 15 product lines across different materials (solid wood, metal, upholstery), they had no supplier network to support the expansion.',
    solution: 'We mapped the Foshan furniture manufacturing cluster—China\'s largest—to find specialized factories for each material type. We managed the entire sourcing pipeline: supplier vetting for each category, sample coordination, production monitoring with weekly photo reports, and consolidated shipping to their UK warehouse.',
    results: [
      'Revenue grew from £200K to £2.8M in 18 months',
      '15 product lines launched across 7 specialized factories',
      'Average product margin improved from 42% to 58%',
      'Consolidated shipping reduced logistics costs by 22%',
    ],
    imgId: 'cs-furniture-bg-d4e5f6',
    titleId: 'cs-furniture-title',
  },
  {
    id: 'packaging-startup',
    category: 'Packaging & Printing',
    title: 'US Startup Launches Custom Eco-Friendly Packaging Line in 6 Weeks',
    challenge: 'A California-based subscription box startup needed fully custom, eco-friendly packaging—including branded boxes, tissue paper, stickers, and inserts—for a hard launch deadline. They had complex specifications requiring multiple materials and printing techniques, and only 6 weeks before their launch event.',
    solution: 'We sourced a packaging manufacturer in Dongguan with FSC certification and eco-friendly material options. Our team expedited the sampling process, managed 3 rounds of revisions in 10 days, and oversaw production with daily check-ins. We also arranged air freight to meet the tight deadline.',
    results: [
      'Full packaging suite delivered in 6 weeks—from brief to delivery',
      'All materials FSC-certified and eco-friendly',
      '20% cost savings vs. their initial US supplier quotes',
      'Launch event was fully stocked on time',
    ],
    imgId: 'cs-packaging-bg-g7h8i9',
    titleId: 'cs-packaging-title',
  },
  {
    id: 'apparel-brand',
    category: 'Apparel & Sportswear',
    title: 'Australian Activewear Brand Reduces Defect Rate from 12% to 0.5%',
    challenge: 'An Australian activewear brand was experiencing a 12% defect rate across their product lines, including inconsistent sizing, poor stitching, and fabric color variations. Their existing supplier was unresponsive to quality complaints, and they were losing money and brand reputation.',
    solution: 'We identified and audited 4 sportswear manufacturers in Fujian province with specialized activewear experience. We set up a comprehensive QC protocol: fabric inspection before cutting, inline inspection at 30% production, and AQL 2.5 pre-shipment inspection. We also implemented a defect tracking system.',
    results: [
      'Defect rate reduced from 12% to 0.5% within 3 production cycles',
      'New supplier relationships with 2 high-quality manufacturers',
      'Customer returns due to quality issues dropped by 95%',
      'Production costs remained stable despite higher quality standards',
    ],
    imgId: 'cs-apparel-bg-j0k1l2',
    titleId: 'cs-apparel-title',
  },
  {
    id: 'industrial-parts',
    category: 'Industrial & Machinery',
    title: 'Canadian Manufacturer Cuts CNC Parts Costs by 40%',
    challenge: 'A Canadian industrial equipment manufacturer was paying premium prices for CNC-machined components through a North American distributor. They needed precision metal parts with tight tolerances (±0.01mm) but were concerned about quality control from overseas suppliers.',
    solution: 'We identified 3 CNC machine shops in Dongguan with ISO 9001 certification and the required 5-axis CNC capabilities. Our team audited each facility, verified measurement equipment calibration, arranged sample production, and set up a QC protocol with dimensional inspection reports for every batch.',
    results: [
      '40% cost reduction on CNC-machined components',
      'Quality met or exceeded previous supplier standards',
      'Established reliable supply of 25 different precision parts',
      'On-time delivery rate of 98% over 12 months',
    ],
    imgId: 'cs-industrial-bg-m3n4o5',
    titleId: 'cs-industrial-title',
  },
  {
    id: 'beauty-brand',
    category: 'Beauty & Personal Care',
    title: 'Scandinavian Beauty Brand Sources Private Label Skincare Line',
    challenge: 'A Swedish beauty startup wanted to launch a private label organic skincare line—including serums, creams, and cleansers—with EU cosmetic certification (EC 1223/2009). They had formulas but no manufacturing partner who could meet both their quality standards and EU regulatory requirements.',
    solution: 'We found 3 GMP-certified cosmetic manufacturers in Guangzhou with experience in EU exports. We coordinated formula testing, stability testing, and packaging sourcing. Our team managed the entire certification documentation process and arranged sample shipments for the brand\'s testing.',
    results: [
      'Full product line of 8 SKUs sourced and certified for EU market',
      'GMP-certified manufacturer with organic ingredient capability',
      'Complete EC 1223/2009 compliance documentation package',
      '35% cost advantage vs. European contract manufacturers',
    ],
    imgId: 'cs-beauty-bg-p6q7r8',
    titleId: 'cs-beauty-title',
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
      <section className="bg-gradient-to-br from-primary to-primary-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Case Studies</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Real examples of how we help businesses reduce costs, improve quality,
            and build reliable China supply chains.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="border border-slate-200 rounded-2xl overflow-hidden">
                <div
                  className="aspect-[21/9] bg-slate-100"
                  data-strk-bg-id={cs.imgId}
                  data-strk-bg={`[${cs.titleId}]`}
                  data-strk-bg-ratio="21x9"
                  data-strk-bg-width="1200"
                />
                <div className="p-8 md:p-10">
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">{cs.category}</span>
                  <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-6">{cs.title}</h2>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Challenge</h3>
                      <p className="text-slate-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Our Solution</h3>
                      <p className="text-slate-600 leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                    <h3 className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-4">Results</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {cs.results.map((r, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-green-800 font-medium">
                          <TrendingDown className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {r}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary rounded-2xl p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Be Our Next Success Story?</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">Tell us about your sourcing challenge. We'll show you how we can help.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-cta text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25">
              Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

