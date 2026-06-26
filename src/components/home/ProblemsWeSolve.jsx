import { AlertTriangle, DollarSign, Clock, XCircle, FileQuestion, Users } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'Finding trustworthy suppliers online is risky. Many listings are trading companies, not real factories, leading to quality and communication issues.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs & Overpricing',
    description: 'Without local market knowledge, buyers often pay more than necessary or face unexpected costs for tooling, packaging, and shipping.',
  },
  {
    icon: XCircle,
    title: 'Quality Inconsistency',
    description: 'Samples look great, but mass production quality drops. Without on-site inspection, defects go unnoticed until goods arrive.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    description: 'Lack of follow-up leads to missed deadlines. Communication gaps and cultural differences compound the problem.',
  },
  {
    icon: FileQuestion,
    title: 'Compliance & Documentation',
    description: 'Navigating export regulations, product certifications, and customs documentation can be overwhelming without local expertise.',
  },
  {
    icon: Users,
    title: 'Language & Cultural Barriers',
    description: 'Miscommunication with suppliers leads to wrong specifications, delays, and frustration on both sides.',
  },
]

export default function ProblemsWeSolve() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Common Challenges</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">
            Problems We Solve
          </h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            Sourcing from China doesn't have to be difficult. We address the most common challenges overseas buyers face.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem) => {
            const Icon = problem.icon
            return (
              <div key={problem.title} className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{problem.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{problem.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
