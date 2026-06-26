import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const cases = [
  {
    industry: 'Consumer Electronics',
    title: 'Sourcing Bluetooth Headphones for a US Retail Brand',
    result: 'Reduced unit cost by 18% while improving defect rate from 4% to under 1%.',
    imgId: 'case-study-electronics-1a2b3c',
  },
  {
    industry: 'Packaging',
    title: 'Custom Rigid Boxes for a European Cosmetics Startup',
    result: 'Delivered 50,000 units on time with consistent print quality and color match.',
    imgId: 'case-study-packaging-4d5e6f',
  },
  {
    industry: 'Industrial Hardware',
    title: 'CNC Machined Parts for an Australian Robotics Company',
    result: 'Achieved +/- 0.05mm tolerance across 12 part variants with 100% on-time delivery.',
    imgId: 'case-study-hardware-7g8h9i',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-accent mb-3">
            Results
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
            Case Studies
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Real results for real clients across different industries and product categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.title}
              className="bg-surface rounded-xl border border-border-light overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[case-title-${c.industry}] [case-industry-${c.industry}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={c.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span
                  id={`case-industry-${c.industry}`}
                  className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-accent mb-2"
                >
                  {c.industry}
                </span>
                <h3
                  id={`case-title-${c.industry}`}
                  className="text-base font-bold text-text-primary mb-3 leading-snug"
                >
                  {c.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4">{c.result}</p>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center text-sm font-semibold text-primary-accent hover:text-blue-700 transition-colors"
                >
                  Read more
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
