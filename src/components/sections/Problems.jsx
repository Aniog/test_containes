import { AlertTriangle, XCircle, Clock, DollarSign } from 'lucide-react'

const problems = [
  {
    icon: XCircle,
    title: 'Unreliable Suppliers',
    description: 'We vet factories through audits, license checks, and on-site visits before you commit.',
  },
  {
    icon: AlertTriangle,
    title: 'Quality Issues',
    description: 'Our QC team inspects at key stages to catch defects before goods leave the factory.',
  },
  {
    icon: Clock,
    title: 'Missed Deadlines',
    description: 'We track production milestones and push suppliers to keep your delivery on schedule.',
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    description: 'Clear quotations and cost breakdowns help you avoid unexpected fees later.',
  },
]

export default function Problems() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label text-brand-400">Problems We Solve</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-6 text-white">
              Avoid the common risks of sourcing from China
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Buying from overseas can be complex. We reduce the uncertainty with boots-on-the-ground support and clear communication.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {problems.map((problem) => {
                const Icon = problem.icon
                return (
                  <div key={problem.title}>
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{problem.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{problem.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 lg:p-10 border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-white">What buyers often face</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">Suppliers that disappear after receiving deposits</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">Samples that do not match mass production</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">Language barriers and slow response times</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">Confusing shipping terms and customs paperwork</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">No visibility into production progress</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
