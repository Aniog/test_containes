import { AlertTriangle, ShieldOff, Clock, Languages, DollarSign, PackageX } from 'lucide-react'

const problems = [
  {
    icon: ShieldOff,
    problem: 'Unreliable Suppliers',
    solution: 'We verify every factory on-site before you place an order.',
  },
  {
    icon: PackageX,
    problem: 'Quality Issues',
    solution: 'Professional QC inspections at every production stage.',
  },
  {
    icon: Languages,
    problem: 'Communication Barriers',
    solution: 'Bilingual team handles all supplier communication for you.',
  },
  {
    icon: Clock,
    problem: 'Production Delays',
    solution: 'Regular factory visits and progress tracking keep orders on time.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying',
    solution: 'We negotiate competitive prices and compare multiple suppliers.',
  },
  {
    icon: AlertTriangle,
    problem: 'Shipping Complications',
    solution: 'Full logistics support from factory door to your warehouse.',
  },
]

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Buying from China without local support is risky. Here is how we protect your interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">{item.problem}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection
