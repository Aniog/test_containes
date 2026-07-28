import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin } from 'lucide-react'
import SectionTitle from '../shared/SectionTitle'

const cases = [
  {
    client: 'Outdoor Gear Retailer (UK)',
    location: 'United Kingdom',
    industry: 'Outdoor & Camping',
    result: 'Reduced sourcing costs by 22% and improved defect rate from 8% to under 2%',
    description: 'Sourced 15+ camping product lines from 4 verified factories with full QC and container loading supervision.',
  },
  {
    client: 'Home Décor Brand (USA)',
    location: 'United States',
    industry: 'Home & Kitchen',
    result: 'Launched 3 new product collections in 6 months with zero quality complaints',
    description: 'End-to-end sourcing from supplier identification to shipping, including custom packaging design coordination.',
  },
  {
    client: 'Industrial Parts Distributor (Germany)',
    location: 'Germany',
    industry: 'Industrial & Hardware',
    result: 'Established reliable supply chain for 200+ SKUs with 99.5% on-time delivery',
    description: 'Built a multi-supplier network with standardized QC protocols and consolidated shipping.',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Client Success Stories"
          subtitle="Real results from businesses that trusted us to manage their China sourcing operations."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cases.map((c) => (
            <div key={c.client} className="group p-6 md:p-8 rounded-xl border border-border bg-surface hover:shadow-lg transition-all flex flex-col">
              <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>{c.location}</span>
                <span className="mx-1">&middot;</span>
                <span>{c.industry}</span>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">{c.client}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">{c.description}</p>
              <div className="bg-primary/5 rounded-lg p-4 mb-5">
                <p className="text-sm font-semibold text-primary">{c.result}</p>
              </div>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                Read Full Case Study
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            View All Case Studies
            <span className="text-lg">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
