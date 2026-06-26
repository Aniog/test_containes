import { AlertTriangle, XCircle, Clock, DollarSign, ShieldAlert, HelpCircle } from 'lucide-react'

const problems = [
  {
    icon: HelpCircle,
    title: 'Finding Reliable Suppliers',
    desc: 'Alibaba and trade shows are overwhelming. How do you know which suppliers are legitimate and capable?',
  },
  {
    icon: ShieldAlert,
    title: 'Quality Inconsistency',
    desc: 'Samples look great, but mass production quality drops. Without on-site inspection, defects go unnoticed.',
  },
  {
    icon: XCircle,
    title: 'Communication Barriers',
    desc: 'Language gaps, time zone differences, and cultural misunderstandings lead to costly mistakes.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    desc: 'Without local follow-up, factories deprioritize your order. Delays cascade into missed deadlines.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    desc: 'Unexpected fees, incorrect pricing, and poor negotiation can erode your margins significantly.',
  },
  {
    icon: AlertTriangle,
    title: 'Shipping Complications',
    desc: 'Customs, documentation, freight booking, and last-mile delivery are complex without local expertise.',
  },
]

export default function ProblemsWeSolve() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-amber font-semibold text-sm uppercase tracking-wider mb-2">Common Challenges</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Problems We Solve
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Sourcing from China doesn't have to be risky. We address the most common pain points global buyers face.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-5">
                <problem.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{problem.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
