import { Link } from 'react-router-dom'
import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react'

const problems = [
  {
    problem: 'Unreliable suppliers who disappear after payment',
    solution: 'We verify every supplier with on-site factory audits and maintain long-term relationships.',
  },
  {
    problem: 'Quality issues discovered only after receiving goods',
    solution: 'Pre-shipment inspections and production monitoring catch defects before shipping.',
  },
  {
    problem: 'Communication barriers and language difficulties',
    solution: 'Our bilingual team bridges the gap between you and Chinese manufacturers.',
  },
  {
    problem: 'Hidden costs and unexpected price increases',
    solution: 'Transparent pricing with detailed cost breakdowns and no hidden fees.',
  },
  {
    problem: 'Long lead times and missed deadlines',
    solution: 'Production tracking and milestone management keep your orders on schedule.',
  },
  {
    problem: 'Complex shipping and customs procedures',
    solution: 'End-to-end logistics coordination including documentation and customs clearance.',
  },
]

const HomeProblems = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full mb-4">
            Problems We Solve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Common Sourcing Challenges, Solved
          </h2>
          <p className="text-lg text-slate-600">
            We understand the risks of sourcing from China. Here's how we protect your business
            and ensure smooth operations.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                    <AlertTriangle size={20} className="text-red-500" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.problem}</h3>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600 text-sm">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/contact" className="btn-accent gap-2">
            Discuss Your Sourcing Needs
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeProblems
