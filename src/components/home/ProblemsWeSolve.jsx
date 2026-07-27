import SectionHeading from '@/components/shared/SectionHeading'
import { AlertTriangle, HelpCircle, Clock, DollarSign, Globe, ShieldAlert } from 'lucide-react'

const problems = [
  {
    icon: AlertTriangle,
    problem: 'Unreliable suppliers',
    solution: 'We verify every factory on-site before you place an order.',
  },
  {
    icon: HelpCircle,
    problem: 'Language & culture barriers',
    solution: 'Our bilingual team handles all communication and negotiation.',
  },
  {
    icon: Clock,
    problem: 'Production delays',
    solution: 'We monitor timelines and send regular progress updates.',
  },
  {
    icon: DollarSign,
    problem: 'Hidden costs & scams',
    solution: 'Transparent pricing with no hidden fees. We protect your interests.',
  },
  {
    icon: Globe,
    problem: 'Shipping complexity',
    solution: 'Full logistics coordination from factory to your warehouse.',
  },
  {
    icon: ShieldAlert,
    problem: 'Quality inconsistency',
    solution: 'Professional QC inspections at every production stage.',
  },
]

const ProblemsWeSolve = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Problems We Solve"
          subtitle="Importing from China comes with real challenges. Here's how we eliminate them for you."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex gap-4 p-5 rounded-xl bg-surface border border-border">
                <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary mb-1">
                    {item.problem}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProblemsWeSolve
