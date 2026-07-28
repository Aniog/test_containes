import { Link } from 'react-router-dom'
import { MapPin, BarChart3, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import SectionTitle from '../components/shared/SectionTitle'

const cases = [
  {
    client: 'Outdoor Gear Retailer',
    location: 'United Kingdom',
    industry: 'Outdoor & Camping',
    duration: 'Ongoing since 2019',
    challenge: 'The client was sourcing camping equipment from multiple Alibaba suppliers with inconsistent quality and frequent delays. Defect rates averaged 8%, and they had no visibility into production timelines.',
    solution: 'We conducted factory audits across Zhejiang and Guangdong provinces, identifying 4 qualified manufacturers. Implemented a structured QC program with pre-shipment inspections and container loading supervision for every order.',
    results: [
      'Sourcing costs reduced by 22% through direct factory relationships',
      'Defect rate dropped from 8% to under 2%',
      'Average production delay reduced from 3 weeks to 5 days',
      'Expanded from 8 SKUs to 35+ SKUs across 4 product lines',
    ],
  },
  {
    client: 'Home Décor Brand',
    location: 'United States',
    industry: 'Home & Kitchen',
    duration: '12-month project',
    challenge: 'A growing DTC brand needed to launch 3 new product collections within 6 months. They had no existing China supplier relationships and needed help with product development, custom packaging, and quality consistency.',
    solution: 'We managed end-to-end sourcing from supplier identification to shipping. Coordinated sample development across 6 factories, designed custom packaging with a local designer, and implemented a 3-stage QC protocol.',
    results: [
      'All 3 collections launched on schedule within 6 months',
      'Zero quality complaints in first 6 months post-launch',
      'Packaging costs reduced by 18% through local sourcing',
      'Repeat order rate of 94% from end customers',
    ],
  },
  {
    client: 'Industrial Parts Distributor',
    location: 'Germany',
    industry: 'Industrial & Hardware',
    duration: 'Ongoing since 2017',
    challenge: 'A B2B distributor needed a reliable supply chain for over 200 SKUs of industrial components. Previous suppliers had inconsistent lead times and poor documentation, causing stockouts and customer complaints.',
    solution: 'We built a multi-supplier network with standardized QC protocols, consolidated shipping schedules, and digitized documentation. Implemented monthly production planning meetings with each factory.',
    results: [
      '99.5% on-time delivery rate achieved within 8 months',
      'Reduced average lead time from 45 days to 28 days',
      'Document error rate reduced from 12% to under 1%',
      'Saved approximately €180,000 annually in freight consolidation',
    ],
  },
  {
    client: 'Beauty Startup',
    location: 'Australia',
    industry: 'Beauty & Personal Care',
    duration: '8-month project',
    challenge: 'A new beauty brand needed custom cosmetic packaging (bottles, jars, boxes) and tool manufacturing. They required FDA-compliant materials and had strict color-matching requirements.',
    solution: 'We identified packaging specialists in Guangzhou and Ningbo with FDA certification. Managed the color approval process with physical samples shipped to Australia, and coordinated label printing with a local supplier.',
    results: [
      'Packaging samples approved in 3 rounds vs. industry average of 6-8',
      'MOQ negotiated down by 35% for initial order',
      'All materials passed third-party lab testing for compliance',
      'First production run delivered 1 week ahead of schedule',
    ],
  },
  {
    client: 'Fitness Equipment E-commerce',
    location: 'Canada',
    industry: 'Sports & Fitness',
    duration: 'Ongoing since 2020',
    challenge: 'An Amazon seller needed to diversify their supplier base for resistance bands, yoga mats, and fitness accessories. Their single-source strategy had become risky during supply chain disruptions.',
    solution: 'We mapped alternative suppliers across 3 provinces for each product category. Conducted comparative audits and sample evaluations to establish backup suppliers with comparable quality at competitive pricing.',
    results: [
      'Supplier base expanded from 2 to 7 qualified factories',
      'Average unit cost reduced by 15% through competitive sourcing',
      'Stockout incidents reduced from 4 per year to zero',
      'Successfully switched suppliers during COVID without quality issues',
    ],
  },
  {
    client: 'Automotive Accessories Brand',
    location: 'Netherlands',
    industry: 'Automotive',
    duration: '18-month project',
    challenge: 'A European automotive brand needed custom car interior accessories with CE marking and REACH compliance. Previous attempts with direct Alibaba sourcing resulted in non-compliant products being rejected at customs.',
    solution: 'We pre-qualified only factories with existing CE certification and REACH documentation. Managed third-party lab testing in China before shipment and prepared full customs documentation for EU import.',
    results: [
      '100% customs clearance success rate (vs. 60% previously)',
      'Lab testing costs reduced by 40% through local coordination',
      'Product return rate dropped from 5% to 0.8%',
      'Successfully launched 12 new products in EU market',
    ],
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
            Client Case Studies
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real outcomes from businesses that partnered with us to solve their China sourcing challenges.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {cases.map((c, index) => (
              <article key={c.client} className="bg-surface rounded-2xl border border-border overflow-hidden">
                <div className="p-6 md:p-10">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                      <MapPin className="w-3 h-3" />
                      {c.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-dark text-text-secondary rounded-full text-xs font-semibold">
                      {c.industry}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-dark text-text-secondary rounded-full text-xs font-semibold">
                      {c.duration}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">{c.client}</h2>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-2">The Challenge</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-2">Our Solution</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{c.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-white rounded-xl p-6 border border-border">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      Measurable Results
                    </h4>
                    <ul className="space-y-3">
                      {c.results.map((result) => (
                        <li key={result} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                          <span className="text-sm text-text-secondary">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-text-secondary mb-8">
            Let's discuss your sourcing challenges and how we can help you achieve similar results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-accent-hover transition-colors shadow-lg"
          >
            Start Your Project
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
