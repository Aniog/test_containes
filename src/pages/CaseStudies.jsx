import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Quote, TrendingUp, DollarSign, Clock, CheckCircle } from 'lucide-react'

const caseStudies = [
  {
    title: 'European Retail Chain Saves 35% on Home Goods Sourcing',
    industry: 'Home & Living',
    client: 'Mid-sized European home goods retailer',
    challenge: 'The client was sourcing from multiple suppliers at high costs with inconsistent quality. They needed a single reliable partner who could manage multiple product categories while reducing costs.',
    solution: 'We identified and audited 12 factories across Guangdong and Zhejiang provinces. After selecting 4 key suppliers, we negotiated consolidated pricing, implemented quality control protocols, and set up consolidated shipping.',
    results: [
      '35% reduction in total sourcing costs',
      'Quality defect rate dropped from 8% to 1.2%',
      'Consolidated shipping reduced freight costs by 22%',
      'Lead time reduced from 14 to 9 weeks',
      'Expanded from 20 to 85 SKUs within 12 months',
    ],
    quote: 'SSourcing China transformed our supply chain. The cost savings exceeded our expectations, but the quality improvement has been the real game-changer for our business.',
    quoteAuthor: 'COO, European Home Goods Retailer',
  },
  {
    title: 'US Tech Startup Sources Custom Electronics at Scale',
    industry: 'Electronics',
    client: 'US-based hardware tech startup',
    challenge: 'The startup needed to scale from prototype to 10,000 units of a custom IoT device. They struggled to find a manufacturer who could meet both quality standards and FCC compliance requirements.',
    solution: 'We sourced 8 potential electronics manufacturers in Shenzhen, conducted on-site audits, and selected a factory with ISO 9001 certification and experience in IoT device production. We managed the entire production process including FCC compliance testing.',
    results: [
      '10,000 units delivered within 8 weeks of order',
      'FCC and CE compliance achieved on first submission',
      'Unit cost reduced by 28% through component sourcing optimization',
      'Zero defective units in pre-shipment inspection',
      'Successful Series A funding partly attributed to supply chain reliability',
    ],
    quote: 'We were skeptical about manufacturing in China, but SSourcing China made the process completely transparent. The quality and speed exceeded what we could achieve locally.',
    quoteAuthor: 'CEO, US Tech Startup',
  },
  {
    title: 'Australian Brand Launches Sustainable Packaging Line',
    industry: 'Packaging',
    client: 'Australian eco-friendly consumer brand',
    challenge: 'The client needed sustainable packaging materials that met strict environmental standards. Previous attempts to source from China resulted in quality issues and miscommunication about material specifications.',
    solution: 'We identified 6 factories specializing in eco-friendly packaging, conducted environmental compliance audits, and selected 2 suppliers. We implemented a rigorous material testing protocol and managed sample iterations until specifications were met.',
    results: [
      '40% reduction in carbon footprint vs previous packaging',
      '30% cost savings compared to domestic Australian suppliers',
      'All packaging certified as compostable and recyclable',
      'Successfully launched new product line within 10 weeks',
      'Ongoing monthly container shipments established',
    ],
    quote: 'SSourcing China understood our sustainability requirements immediately. They found suppliers who shared our values and delivered packaging that exceeded our expectations.',
    quoteAuthor: 'Founder, Australian Eco-Brand',
  },
  {
    title: 'German Industrial Company Optimizes Parts Supply Chain',
    industry: 'Industrial Parts',
    client: 'German mid-sized industrial equipment manufacturer',
    challenge: 'The company needed to diversify its supply chain for precision-machined components. They required suppliers with specific certifications and the ability to maintain tight tolerances.',
    solution: 'We conducted a targeted search across Jiangsu and Zhejiang, auditing 10 precision machining facilities. We selected 3 suppliers who met DIN standards and implemented a quality control program with regular inspections.',
    results: [
      '22% reduction in component costs',
      'All suppliers achieved ISO 9001:2015 certification',
      'Defect rate below 0.5% across all shipments',
      'Emergency rush order capability established',
      'Supply chain redundancy with 3 qualified suppliers',
    ],
    quote: 'German engineering standards require precision. SSourcing China found suppliers who could meet our requirements and helped us build a reliable, cost-effective supply chain.',
    quoteAuthor: 'Supply Chain Director, German Industrial Company',
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-900 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              Real results from real partnerships. See how we have helped businesses source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section-padding">
        <div className="section-container">
          <div className="space-y-16">
            {caseStudies.map((study, i) => (
              <div key={i} className="card">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                  <span className="text-sm text-neutral-500">{study.client}</span>
                </div>
                <h2 className="text-2xl font-bold mb-6">{study.title}</h2>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold text-sm text-neutral-500 uppercase tracking-wider mb-2">The Challenge</h3>
                    <p className="text-neutral-700 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-neutral-500 uppercase tracking-wider mb-2">Our Solution</h3>
                    <p className="text-neutral-700 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-neutral-500 uppercase tracking-wider mb-2">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-neutral-700">
                          <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-xl p-6 md:p-8 border border-primary-100">
                  <Quote className="w-6 h-6 text-primary-300 mb-2" />
                  <p className="text-primary-900 font-medium text-lg leading-relaxed mb-3 italic">
                    &ldquo;{study.quote}&rdquo;
                  </p>
                  <p className="text-sm text-neutral-500">— {study.quoteAuthor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Every successful partnership starts with a conversation. Tell us about your sourcing needs.
            </p>
            <Link to="/contact" className="btn-primary text-lg inline-flex items-center gap-2">
              Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}