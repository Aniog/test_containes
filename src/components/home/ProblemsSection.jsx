import { AlertTriangle, XCircle, Clock, DollarSign, FileQuestion, RefreshCw } from 'lucide-react'

const problems = [
  {
    icon: XCircle,
    problem: 'Unreliable Suppliers',
    solution: 'We verify every factory through on-site audits, license checks, and capability assessments before any engagement.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: AlertTriangle,
    problem: 'Poor Product Quality',
    solution: 'Our multi-stage inspection process catches defects early, from pre-production samples to pre-shipment checks.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Clock,
    problem: 'Missed Deadlines',
    solution: 'We monitor production schedules daily, flag delays early, and keep you informed with regular progress updates.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: DollarSign,
    problem: 'Hidden Costs',
    solution: 'Transparent pricing with no hidden fees. We provide detailed quotes covering all service costs upfront.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: FileQuestion,
    problem: 'Communication Barriers',
    solution: 'Our bilingual team bridges the language and cultural gap, ensuring clear communication with suppliers.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: RefreshCw,
    problem: 'Returns & Disputes',
    solution: 'We handle dispute resolution and coordinate returns or replacements when products do not meet specifications.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-4">
            Problems We Solve
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Sourcing from China comes with challenges. We help you avoid the common pitfalls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 lg:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <div className="mb-1">
                    <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">Problem</span>
                  </div>
                  <h3 className="font-semibold text-navy-700 mb-2">{item.problem}</h3>
                  <div className="mb-1">
                    <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">Solution</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}