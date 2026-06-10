import { AlertTriangle, ShieldOff, Clock, Languages, DollarSign, HelpCircle } from 'lucide-react'

const problems = [
  {
    icon: ShieldOff,
    problem: 'Unreliable suppliers',
    solution: 'We verify every factory on-site before you place an order — checking licenses, capacity, and track record.',
  },
  {
    icon: AlertTriangle,
    problem: 'Quality issues discovered too late',
    solution: 'Our inspectors check quality during production and before shipment, catching defects before they reach you.',
  },
  {
    icon: Languages,
    problem: 'Language & cultural barriers',
    solution: 'Our bilingual team handles all communication, negotiations, and documentation in Chinese and English.',
  },
  {
    icon: Clock,
    problem: 'Production delays with no visibility',
    solution: 'Weekly progress reports with photos keep you informed. We push factories to meet agreed timelines.',
  },
  {
    icon: DollarSign,
    problem: 'Overpaying without knowing market price',
    solution: 'We benchmark pricing across multiple suppliers and negotiate on your behalf to get competitive rates.',
  },
  {
    icon: HelpCircle,
    problem: 'Complex shipping & customs',
    solution: 'We coordinate freight, prepare export documents, and work with trusted forwarders to deliver smoothly.',
  },
]

export default function ProblemsWeSolve() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Why Work With Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 tracking-tight mb-4">
            Problems We Solve
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Importing from China comes with real risks. Here's how we eliminate them for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="bg-white rounded-xl border border-neutral-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="font-semibold text-neutral-800 text-sm">{item.problem}</h3>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed pl-[52px]">
                  {item.solution}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
