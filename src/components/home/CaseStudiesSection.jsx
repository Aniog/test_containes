import { Link } from 'react-router-dom'
import SectionHeader from '../SectionHeader'
import { ArrowRight, TrendingUp } from 'lucide-react'

const cases = [
  {
    client: 'Nordic Home Co.',
    location: 'Sweden',
    industry: 'Home & Furniture',
    result: 'Reduced sourcing costs by 23% and improved delivery reliability from 72% to 96%.',
  },
  {
    client: 'TechGear Solutions',
    location: 'USA',
    industry: 'Electronics',
    result: 'Identified 3 qualified PCB manufacturers in 10 days, cutting time-to-market by 6 weeks.',
  },
  {
    client: 'GreenWear Ltd.',
    location: 'UK',
    industry: 'Apparel',
    result: 'Sourced sustainable fabric suppliers with full certification, passing all audits on first attempt.',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          caption="Results"
          title="Client Success Stories"
          subtitle="Real outcomes from real projects. See how we help businesses like yours source smarter from China."
        />
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c, idx) => (
            <div
              key={idx}
              className="p-6 lg:p-8 rounded-xl border border-border bg-bg hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  {c.industry}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-1">{c.client}</h3>
              <p className="text-xs text-text-muted mb-4">{c.location}</p>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">{c.result}</p>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors"
              >
                Read full case study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
