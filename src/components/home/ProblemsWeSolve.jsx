import {
  AlertTriangle,
  CircleDollarSign,
  Languages,
  Clock4,
  PackageX,
  MapPinned,
} from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'

const problems = [
  {
    icon: AlertTriangle,
    problem: 'Suppliers turn out to be trading companies, not the real factory.',
    solution: 'We verify business licenses, visit factories on-site and confirm real production capacity.',
  },
  {
    icon: CircleDollarSign,
    problem: 'Prices keep changing or hidden costs appear at the end.',
    solution: 'We negotiate transparent quotes with itemized pricing and lock terms before production.',
  },
  {
    icon: PackageX,
    problem: 'Goods arrive with defects or do not match the sample.',
    solution: 'AQL-based inspections at multiple stages, with photo and video reports before payment of balance.',
  },
  {
    icon: Clock4,
    problem: 'Lead times slip and you find out only at shipping.',
    solution: 'Weekly production tracking on the ground and early escalation when timelines drift.',
  },
  {
    icon: Languages,
    problem: 'Language and time-zone gaps create misunderstandings.',
    solution: 'A bilingual point of contact follows your order end-to-end and responds in your working hours.',
  },
  {
    icon: MapPinned,
    problem: 'Freight, customs and last-mile logistics get complicated.',
    solution: 'Consolidation, freight booking, customs documents and door-to-door delivery, handled for you.',
  },
]

export default function ProblemsWeSolve() {
  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeading
          eyebrow="Problems we solve"
          title="Common pain points when sourcing from China"
          description="Most buyer headaches are predictable. Here is how we prevent them on your behalf."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, problem, solution }, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="flex w-10 h-10 items-center justify-center rounded-md bg-red-50 text-red-600">
                <Icon className="w-5 h-5" />
              </span>
              <p className="mt-4 text-sm font-semibold text-slate-900 leading-relaxed">
                {problem}
              </p>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">How we help:</span> {solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
