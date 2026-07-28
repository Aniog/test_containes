import { AlertTriangle, CheckCircle } from 'lucide-react'

const problems = [
  {
    problem: 'Unreliable suppliers who disappear after receiving payment',
    solution: 'We verify every supplier with on-site audits and maintain long-term relationships with trusted factories.',
  },
  {
    problem: 'Poor product quality that doesn\'t match samples',
    solution: 'Multi-stage quality inspections ensure products meet your exact specifications before shipment.',
  },
  {
    problem: 'Communication barriers and time zone differences',
    solution: 'Our bilingual team bridges the gap with clear communication and real-time updates during your business hours.',
  },
  {
    problem: 'Hidden costs and unexpected price increases',
    solution: 'Transparent pricing with detailed breakdowns. No hidden fees, no surprises.',
  },
  {
    problem: 'Shipping delays and customs complications',
    solution: 'Experienced logistics team handles documentation, customs clearance, and tracks shipments end-to-end.',
  },
  {
    problem: 'Intellectual property and design theft concerns',
    solution: 'We help protect your IP through NDAs, registered designs, and careful supplier selection.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
            Common Sourcing Problems We Solve
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We understand the challenges of sourcing from China. Here is how we help you overcome them.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-navy font-medium mb-3">{item.problem}</p>
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-trust-green flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
