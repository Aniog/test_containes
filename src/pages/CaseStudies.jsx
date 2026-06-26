import { Link } from 'react-router-dom'
import { ArrowRight, Star, TrendingDown, Clock, Shield } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'Custom LED Lighting for a US Retail Chain',
    industry: 'Electronics',
    client: 'Mid-size US retailer (50+ stores)',
    challenge: 'The client needed a reliable supplier for custom LED strip lighting with specific color temperature, waterproof rating, and UL certification. Previous attempts through Alibaba resulted in inconsistent quality and missed deadlines.',
    solution: 'We identified 3 qualified factories in Shenzhen with UL-certified production lines. After factory audits, we selected one factory and managed the full process: sample development, UL certification coordination, production monitoring with weekly QC inspections, and logistics.',
    results: [
      '50,000 units delivered with 0.3% defect rate',
      '15% below target cost through competitive negotiation',
      'Project completed 2 weeks ahead of schedule',
      'Client now sources 3 additional product lines through us',
    ],
  },
  {
    id: 2,
    title: 'Quality Control Program for European Furniture Brand',
    industry: 'Furniture',
    client: 'Established European furniture brand',
    challenge: 'The client was experiencing 12% defect rates and frequent customer complaints about their Chinese-manufactured wooden furniture. Their existing supplier lacked proper QC processes and communication was poor.',
    solution: 'We implemented a full QC program: pre-production raw material inspection, in-line inspection at 30% completion, and pre-shipment inspection at 100%. We also introduced a corrective action process for recurring defects and improved communication protocols.',
    results: [
      'Defect rate reduced from 12% to under 2% in 6 months',
      'Quality-related customer claims dropped by 85%',
      'Production lead time stabilized to 45 days',
      'Supplier relationship transformed from adversarial to collaborative',
    ],
  },
  {
    id: 3,
    title: 'Industrial Parts Sourcing for Australian Manufacturer',
    industry: 'Industrial',
    client: 'Australian manufacturing company',
    challenge: 'The client needed precision CNC-machined steel components with tight tolerances (±0.02mm). They were paying 40% above market rates from their existing supplier and experiencing 3-week lead time delays.',
    solution: 'We identified 7 potential suppliers across Guangdong and Jiangsu provinces. After technical capability audits and sample runs, we shortlisted 2 factories. We negotiated competitive pricing and established a quality assurance protocol with dimensional inspection reports.',
    results: [
      '30% reduction in procurement costs',
      'Lead time reduced from 11 weeks to 8 weeks',
      'Zero quality rejections in the first 12 months',
      'Client expanded sourcing to 15 additional part numbers',
    ],
  },
  {
    id: 4,
    title: 'Custom Packaging Solution for a Global Cosmetics Brand',
    industry: 'Packaging',
    client: 'International cosmetics company',
    challenge: 'The client needed premium custom packaging — rigid boxes with magnetic closure, foil stamping, and custom inserts — for a new product launch. They needed 100,000 units in 8 weeks with strict color matching requirements.',
    solution: 'We sourced 4 specialized packaging manufacturers in Dongguan. After evaluating samples for print quality, color accuracy, and structural integrity, we selected one factory. We managed the entire process including color proofing, production monitoring, and final inspection.',
    results: [
      '100,000 units delivered on time for product launch',
      'Color matching achieved within Delta E < 1.5',
      '20% cost savings vs. client\'s previous European supplier',
      'Ongoing relationship for all packaging needs',
    ],
  },
  {
    id: 5,
    title: 'Sportswear Production for a UK Fitness Brand',
    industry: 'Textiles & Apparel',
    client: 'Fast-growing UK fitness apparel brand',
    challenge: 'The client needed a manufacturer for their new line of performance sportswear — moisture-wicking fabric, flatlock stitching, custom prints, and specific fit requirements. They had been burned by a previous supplier who delivered poor quality samples.',
    solution: 'We identified 5 sportswear manufacturers in Fujian province with experience in performance fabrics. We managed the sampling process through 3 rounds of iteration, coordinated fabric sourcing and testing, and oversaw production with inline QC.',
    results: [
      'First production run of 20,000 units with 1.2% defect rate',
      'Sample-to-production match rate of 98%',
      'Production cost 25% below UK manufacturing quotes',
      'Client now runs 4 seasonal collections per year through us',
    ],
  },
  {
    id: 6,
    title: 'Injection Molding Project for a German Hardware Company',
    industry: 'Plastics & Molding',
    client: 'German hardware and tools manufacturer',
    challenge: 'The client needed custom injection-molded components with glass-fiber reinforced nylon, requiring precise mold design and consistent material properties. Previous attempts with Chinese suppliers resulted in warping issues and inconsistent batch quality.',
    solution: 'We sourced 3 mold makers with experience in engineering-grade plastics. We coordinated mold flow analysis, managed the tooling process, and implemented a rigorous QC protocol including dimensional checks and material testing for every batch.',
    results: [
      'Mold development completed in 6 weeks (vs. 10 weeks initially quoted)',
      'Batch-to-batch consistency achieved with <0.5% variation',
      'Total project cost 35% below German manufacturing',
      'Tooling amortized within first 2 production runs',
    ],
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Case Studies</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
              Client Success Stories
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Real projects, real results. See how we've helped businesses across industries 
              source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 md:py-28">
        <div className="section-container max-w-4xl">
          <div className="space-y-12">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      {cs.industry}
                    </span>
                    <span className="text-sm text-text-muted">{cs.client}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold mb-4">{cs.title}</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-2">Challenge</h3>
                      <p className="text-sm text-text-muted leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-2">Solution</h3>
                      <p className="text-sm text-text-muted leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-3">Results</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cs.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-surface-alt rounded-lg">
                          <Star className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                          <span className="text-sm font-medium">{result}</span>
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
      <section className="py-20 bg-surface-alt">
        <div className="section-container text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Success Story Starts Here</h2>
          <p className="text-text-muted mb-8">
            Every successful sourcing relationship begins with a conversation. Let's discuss your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}