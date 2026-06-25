import { Link } from 'react-router-dom';
import {
  ArrowRight, TrendingUp, DollarSign, Clock, CheckCircle,
  BarChart3, Target
} from 'lucide-react';

const cases = [
  {
    title: 'European Retail Chain Kitchen Product Line',
    client: 'Mid-Sized European Retail Chain',
    industry: 'Home & Kitchen',
    challenge: 'A European retailer with 40+ stores needed to source 15 kitchen product SKUs with consistent quality across all items. Previous attempts at direct China sourcing resulted in inconsistent quality and late deliveries from multiple suppliers.',
    solution: 'We sourced from 3 qualified manufacturers, negotiated unified pricing, implemented a standardized QC protocol across all production lines, and consolidated shipments to reduce freight costs.',
    results: [
      '40% cost reduction compared to previous suppliers',
      'Defect rate decreased from 8% to under 1%',
      'On-time delivery rate improved to 99%',
      'Consolidated from 5 suppliers to 3 strategic partners'
    ],
    highlight: '40% cost reduction with consistent quality across 15 SKUs'
  },
  {
    title: 'US E-commerce Brand Electronics Accessories',
    client: 'Fast-Growing US E-commerce Brand',
    industry: 'Consumer Electronics',
    challenge: 'An Amazon seller wanted to expand from 2 to 25 SKUs in the mobile accessories category but lacked the sourcing infrastructure to manage multiple factories and maintain quality at scale.',
    solution: 'We identified and vetted 4 specialized manufacturers, set up QC checkpoints for each product line, managed production scheduling to prevent bottlenecks, and coordinated weekly consolidated shipments.',
    results: [
      'Scaled from 2 to 25 SKUs in 6 months',
      'Revenue grew 3x within the first year',
      'Maintained 4.5+ star ratings across all products',
      'Reduced per-unit cost by 25% through volume negotiations'
    ],
    highlight: 'Scaled from 2 to 25 SKUs in 6 months with 3x revenue growth'
  },
  {
    title: 'Australian Hardware Distributor Supply Chain',
    client: 'Australian Hardware Distributor',
    industry: 'Industrial Tools & Equipment',
    challenge: 'An Australian distributor was facing 90-day lead times from their existing China suppliers, impacting their ability to compete with faster rivals. Quality was also inconsistent across different tool categories.',
    solution: 'We restructured the supply chain by identifying faster regional suppliers, implemented real-time production monitoring, and established a quality management system across all product lines.',
    results: [
      'Lead time reduced from 90 to 45 days',
      'Product consistency improved significantly',
      'Warehousing costs reduced by 30%',
      'Customer satisfaction scores increased by 35%'
    ],
    highlight: 'Lead time cut from 90 to 45 days with 30% lower warehousing costs'
  },
  {
    title: 'UK Brand Sustainable Packaging Transition',
    client: 'UK-Based Sustainable Goods Brand',
    industry: 'Packaging & Printing',
    challenge: 'A UK brand needed eco-friendly packaging solutions that met strict EU environmental standards while keeping costs competitive. They struggled to find suppliers who could deliver certified sustainable materials.',
    solution: 'We specialized suppliers with FSC certification and verified environmental compliance. We coordinated sample development, negotiated competitive pricing for recycled materials, and managed the certification documentation process.',
    results: [
      'Sourced 100% FSC-certified packaging materials',
      '20% cost savings vs European suppliers',
      'Full compliance with EU packaging regulations',
      'Reduced carbon footprint through optimized shipping'
    ],
    highlight: '100% FSC-certified packaging at 20% below EU prices'
  },
  {
    title: 'Canadian Startup Consumer Electronics Launch',
    client: 'Canadian Consumer Electronics Startup',
    industry: 'Consumer Electronics',
    challenge: 'A hardware startup needed to manufacture their first production run of 5,000 units of a smart home device. They required a supplier capable of handling prototype-to-production transition with strict quality requirements.',
    solution: 'We identified a Shenzhen-based manufacturer experienced in new product introductions. We managed the NPI process, conducted component sourcing, oversaw tooling development, and implemented rigorous quality testing.',
    results: [
      'Successful product launch within budget',
      'First batch delivered on schedule at 8 weeks',
      'Zero defective units in initial shipment',
      'Established long-term manufacturing partnership'
    ],
    highlight: 'First production run delivered on time with zero defects'
  },
  {
    title: 'German Brand Furniture Line Expansion',
    client: 'German Home & Living Brand',
    industry: 'Furniture & Lighting',
    challenge: 'A German brand wanted to launch a new furniture line but needed manufacturers who could meet EU quality standards for materials, safety, and durability at competitive price points.',
    solution: 'We audited 8 furniture manufacturers across Guangdong and Zhejiang, selected 3 partners, negotiated pricing including EU standard compliance, and established a quality verification process for each production batch.',
    results: [
      'New product line launched 3 months ahead of schedule',
      'Manufacturing costs 45% lower than EU production',
      'All products passed EU safety certification on first test',
      'Ongoing partnership with 3 strategic factories'
    ],
    highlight: '45% cost savings with first-pass EU safety certification'
  },
];

export default function CaseStudies() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Case Studies</h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Real results from real partnerships. See how we have helped businesses around the world optimize their China sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 md:space-y-16">
            {cases.map((cs, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/5 bg-slate-50 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold text-brand-700 bg-brand-50 rounded-full px-3 py-1 inline-block mb-3">
                        {cs.industry}
                      </span>
                      <h2 className="text-xl font-bold text-slate-900 mb-2">{cs.title}</h2>
                      <p className="text-sm text-slate-500 mb-4">{cs.client}</p>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">{cs.challenge}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-5 h-5 text-brand-700" />
                      <span className="font-semibold text-slate-900">Results</span>
                    </div>
                    <div className="bg-brand-50 rounded-lg p-4 mb-4">
                      <TrendingUp className="w-4 h-4 text-brand-700 inline mr-2" />
                      <span className="text-sm font-semibold text-brand-800">{cs.highlight}</span>
                    </div>
                    <ul className="space-y-2">
                      {cs.results.map((r, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          {r}
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
      <section className="bg-gradient-to-br from-brand-800 to-brand-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let Us Help You Achieve Similar Results</h2>
          <p className="text-lg text-brand-200 mb-8 max-w-xl mx-auto">
            Every partnership starts with a conversation. Tell us about your sourcing goals and we will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
          >
            Start Your Success Story
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}