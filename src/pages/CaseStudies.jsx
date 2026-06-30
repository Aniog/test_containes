import { Link } from 'react-router-dom'
import { ArrowRight, Star, TrendingDown, Calendar } from 'lucide-react'

const caseStudies = [
  {
    company: 'EuroTech GmbH',
    location: 'Germany',
    industry: 'Industrial Equipment',
    challenge: 'EuroTech had been buying hydraulic components from a local distributor at high margins. They wanted to source directly from China but were concerned about quality and supplier reliability.',
    solution: 'We identified five certified hydraulic component manufacturers in Zhejiang province. After factory audits, we shortlisted two suppliers with ISO 9001 certification and modern CNC machining capabilities.',
    result: '35% reduction in landed costs. 12 months of defect-free deliveries. EuroTech now works directly with the selected factory on new product development.',
    metrics: ['35% cost reduction', 'Zero defects in 12 months', 'Direct factory partnership established'],
  },
  {
    company: 'Pacific Home Goods',
    location: 'Australia',
    industry: 'Home & Lifestyle',
    challenge: 'An Australian importer wanted to expand their product range with bamboo kitchenware but lacked connections with reliable Chinese manufacturers.',
    solution: 'We sourced from three vetted factories in Fujian province, managed sampling and evaluation, coordinated quality inspections, and consolidated shipping into a single container.',
    result: 'Three new product lines successfully launched with 40+ SKUs across bamboo cutting boards, utensils, and storage containers.',
    metrics: ['3 new product lines', '40+ SKU approvals', 'Consolidated shipping savings'],
  },
  {
    company: 'Nova Electronics',
    location: 'United States',
    industry: 'Consumer Electronics',
    challenge: 'A US hardware startup needed to find a contract manufacturer for custom PCB assemblies but had no experience with Chinese electronics factories.',
    solution: 'We verified five potential suppliers in Shenzhen, arranged factory visits with video documentation, negotiated prototype runs, and conducted thorough QC on pilot batches.',
    result: 'Supplier selected and engaged within two weeks. Pilot production passed all quality checks. Nova Electronics scaled to full production within three months.',
    metrics: ['2-week supplier selection', 'Passed pilot QC', '3-month scale-up'],
  },
  {
    company: 'Maple Supply Chain',
    location: 'Canada',
    industry: 'Packaging',
    challenge: 'A Canadian packaging distributor needed a secondary supplier for custom corrugated boxes but struggled to find Chinese factories that could meet their specific quality and sizing requirements.',
    solution: 'We identified and audited three packaging manufacturers in Guangdong, coordinated sample runs of different box styles, and negotiated volume pricing with the best-performing factory.',
    result: '22% savings compared to their existing supplier. Second source established as a backup. Consistent quality across all trial orders.',
    metrics: ['22% cost savings', 'Second source secured', 'Consistent quality'],
  },
  {
    company: 'Tideway Sports',
    location: 'United Kingdom',
    industry: 'Apparel & Accessories',
    challenge: 'A UK sportswear brand wanted to source high-quality training bags but had difficulty finding factories that could handle custom designs with consistent quality.',
    solution: 'We sourced from a specialized bag manufacturer in Guangzhou, managed the sampling process through three iterations, and implemented a rigorous QC protocol for each production batch.',
    result: 'First order of 5,000 bags delivered on schedule with zero quality rejections. The brand continues to scale orders quarterly.',
    metrics: ['5,000 units delivered', 'Zero quality rejections', 'Ongoing quarterly orders'],
  },
  {
    company: 'GreenBuild Materials',
    location: 'Singapore',
    industry: 'Building & Construction',
    challenge: 'A Singapore construction supplier needed a reliable source for safety helmets and work gloves that met local safety standards.',
    solution: 'We audited three PPE manufacturers in Jiangsu, verified their certifications (CE, ANSI), arranged compliance testing, and managed regular QC inspections for ongoing orders.',
    result: 'All products met Singapore safety standards. Reliable monthly shipments established. 18% cost savings versus regional distributors.',
    metrics: ['Compliant with local standards', 'Monthly shipments', '18% cost savings'],
  },
]

export default function CaseStudies() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real examples of how we have helped businesses around the world source products successfully from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {caseStudies.map((study, index) => (
            <div key={study.company} className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-bold text-gray-900">{study.company}</h2>
                  <span className="text-xs bg-gray-200 text-gray-600 rounded-full px-3 py-1">{study.location}</span>
                  <span className="text-xs bg-brand-50 text-brand-600 rounded-full px-3 py-1">{study.industry}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-2">Challenge</h3>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-2">Solution</h3>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-2">Result</h3>
                      <p className="text-gray-600 text-sm">{study.result}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-semibold text-gray-900 text-sm mb-3">Key Metrics</h3>
                    <ul className="space-y-2">
                      {study.metrics.map((metric) => (
                        <li key={metric} className="flex items-start gap-2 text-sm text-gray-700">
                          <Star className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Link
                        to="/contact"
                        className="text-brand-600 hover:text-brand-700 text-sm font-medium"
                      >
                        Discuss a similar project &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let Us Help You Achieve Similar Results</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Every business and product is different. Tell us about your sourcing needs and we will create a custom plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}