import { AlertTriangle, ThumbsDown, Clock, DollarSign, XCircle, HelpCircle } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    problem: 'Unreliable Suppliers',
    solution: 'We verify every factory through on-site audits, checking certifications, production capacity, and business licenses before introduction.',
  },
  {
    icon: ThumbsDown,
    problem: 'Poor Product Quality',
    solution: 'Our inspectors conduct during-production and pre-shipment checks using AQL standards, with detailed photo and measurement reports.',
  },
  {
    icon: Clock,
    problem: 'Missed Deadlines',
    solution: 'We track production schedules, send regular progress updates, and flag delays early so you can adjust plans.',
  },
  {
    icon: DollarSign,
    problem: 'Hidden Costs',
    solution: 'Transparent pricing from the start. We itemize all costs including sourcing fees, inspection charges, and logistics estimates.',
  },
  {
    icon: XCircle,
    problem: 'Communication Barriers',
    solution: 'Our bilingual team bridges the gap between you and Chinese suppliers. Clear communication in English throughout the process.',
  },
  {
    icon: HelpCircle,
    problem: 'Shipping & Customs Issues',
    solution: 'We handle documentation, HS code classification, and coordinate with freight forwarders to ensure smooth delivery.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Common Challenges</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Problems We Solve
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Sourcing from China comes with risks. Here is how we help you navigate them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => (
            <div key={item.problem} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <item.icon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <h3 className="font-semibold text-gray-900">{item.problem}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-8">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}