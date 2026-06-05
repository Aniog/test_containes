import { AlertTriangle, Search, ShieldAlert, Truck, DollarSign, MessageSquare } from 'lucide-react'

const problems = [
  {
    icon: Search,
    title: 'Finding Reliable Suppliers',
    problem: 'Online platforms are full of trading companies posing as manufacturers, making it hard to find genuine factories.',
    solution: 'We physically visit and verify every supplier. Factory audits, license checks, and capacity assessments before you commit.',
  },
  {
    icon: ShieldAlert,
    title: 'Quality Concerns',
    problem: 'Receiving products that don\'t match samples is one of the biggest risks when sourcing from China remotely.',
    solution: 'Multi-stage quality inspections at pre-production, mid-production, and pre-shipment stages. Detailed reports with photos.',
  },
  {
    icon: MessageSquare,
    title: 'Communication Barriers',
    problem: 'Language differences and cultural gaps lead to miscommunication, errors, and delayed production.',
    solution: 'Bilingual team bridges the gap. We translate specifications clearly and ensure both sides understand every requirement.',
  },
  {
    icon: AlertTriangle,
    title: 'Production Delays',
    problem: 'Factories often overpromise timelines and underdeliver, causing missed deadlines and supply chain disruption.',
    solution: 'We track production milestones weekly, flag delays early, and work with factories to keep schedules on track.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    problem: 'Unexpected fees for molds, packaging, certifications, and shipping can blow your budget after commitment.',
    solution: 'Transparent pricing breakdown before you approve. We identify all costs upfront so there are no surprises.',
  },
  {
    icon: Truck,
    title: 'Shipping & Customs',
    problem: 'Navigating Chinese export regulations, customs paperwork, and freight logistics is complex and error-prone.',
    solution: 'We handle all documentation, supervise container loading, and coordinate freight forwarding to your door.',
  },
]

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
            Why Work With Us
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Problems We Solve
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Sourcing from China comes with real challenges. Here is how we address
            each one so your sourcing experience is smooth and predictable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-7 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-11 h-11 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                    Challenge
                  </span>
                  <p className="mt-1 text-sm text-gray-600">{item.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">
                    Our Solution
                  </span>
                  <p className="mt-1 text-sm text-gray-600">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection
