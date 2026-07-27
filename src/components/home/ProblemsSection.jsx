import { AlertTriangle, Clock, DollarSign, MessageSquare, FileX, ShieldAlert } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'Many suppliers on B2B platforms are trading companies posing as factories, or simply cannot deliver on quality and timelines.',
  },
  {
    icon: Clock,
    title: 'Communication Barriers',
    description: 'Language differences, time zones, and cultural gaps lead to misunderstandings and costly mistakes.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Unexpected fees for samples, revisions, shipping, and customs can blow your budget without proper planning.',
  },
  {
    icon: MessageSquare,
    title: 'Quality Disputes',
    description: 'Without on-the-ground inspection, you may receive products that don\'t match samples or specifications.',
  },
  {
    icon: FileX,
    title: 'Compliance Risks',
    description: 'Missing certifications, incorrect labeling, or non-compliant materials can result in customs holds or legal issues.',
  },
  {
    icon: ShieldAlert,
    title: 'No Local Representation',
    description: 'Without someone in China to follow up, issues go unresolved and factories lose accountability.',
  },
]

export function ProblemsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Problems We Solve for Overseas Buyers
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sourcing from China comes with real challenges. We address each one so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                <problem.icon className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{problem.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
