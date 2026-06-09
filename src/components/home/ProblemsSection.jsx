import { AlertTriangle, Eye, Truck, DollarSign, Shield, Clock } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'Trading companies posing as factories, inconsistent quality, or suppliers disappearing after deposit — we verify before you commit.',
  },
  {
    icon: Eye,
    title: 'No Quality Visibility',
    description: 'You cannot be on-site to check every order. Our inspectors act as your eyes in the factory with detailed photo reports.',
  },
  {
    icon: Truck,
    title: 'Shipping Complexity',
    description: 'Multiple suppliers, consolidation, customs paperwork, and freight options — we coordinate the entire logistics chain for you.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs & Overpricing',
    description: 'Without local market knowledge, you may overpay. We benchmark prices and negotiate on your behalf to get fair terms.',
  },
  {
    icon: Shield,
    title: 'IP & Compliance Risks',
    description: 'We help protect your designs with NDAs, verify supplier compliance, and ensure products meet your market regulations.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    description: 'We monitor production schedules, identify delays early, and work with factories to keep your orders on track.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-surface" id="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">Problems We Solve</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-4">
            Common Sourcing Challenges, Solved
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            Importing from China comes with real risks. Here is how we help you avoid the most common pitfalls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem) => (
            <div key={problem.title} className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-5">
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">{problem.title}</h3>
              <p className="text-steel text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
