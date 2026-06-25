import {
  AlertTriangle,
  ShieldOff,
  Languages,
  TimerReset,
  PackageX,
  Receipt,
} from 'lucide-react'
import SectionHeader from '../SectionHeader'

const problems = [
  {
    icon: ShieldOff,
    problem: 'Unreliable or fake suppliers',
    solution:
      'On-site factory visits and document checks before we shortlist a supplier for you.',
  },
  {
    icon: PackageX,
    problem: 'Quality differs from samples',
    solution:
      'Independent AQL inspections during production and before shipment with photo reports.',
  },
  {
    icon: Languages,
    problem: 'Language and time-zone gaps',
    solution:
      'We handle all Chinese-language communication and send you daily updates in English.',
  },
  {
    icon: Receipt,
    problem: 'Hidden costs and unclear pricing',
    solution:
      'Transparent service fees. You see the supplier quote — we don’t hide markups inside it.',
  },
  {
    icon: TimerReset,
    problem: 'Production delays without warning',
    solution:
      'Weekly production tracking and early escalation if any step is behind schedule.',
  },
  {
    icon: AlertTriangle,
    problem: 'Risky payments and shipping issues',
    solution:
      'Vetted payment workflows and trusted freight partners with full documentation handling.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Problems we solve"
          title="Common sourcing risks — and how we reduce them"
          description="Sourcing from China can be efficient and profitable when these issues are managed by someone on the ground."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.problem}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#E0A458]/15 text-[#9A6A1F]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-[#0B2545]">{item.problem}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  <span className="font-semibold text-[#0F8A6A]">Our approach: </span>
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
