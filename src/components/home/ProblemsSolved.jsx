import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'

const problems = [
  {
    problem: 'Suppliers who look legitimate online but turn out to be traders, middlemen, or worse.',
    solution: 'We verify business licenses, visit the actual factory, and confirm production capability before you commit.',
  },
  {
    problem: 'Samples that look great, while mass production quality drifts and defects appear at arrival.',
    solution: 'On-site during-production and pre-shipment inspections against your approved sample and specification sheet.',
  },
  {
    problem: 'Endless time-zone-chasing: slow replies, unclear answers, and production updates you cannot trust.',
    solution: 'A bilingual team on the ground that visits the factory, chases answers daily, and reports to you weekly.',
  },
  {
    problem: 'Hidden costs — packaging upgrades, re-work, demurrage, and freight surprises that erase your margin.',
    solution: 'Transparent quotes, documented quality gates before balance payment, and consolidated shipping options.',
  },
  {
    problem: 'Language and culture gaps that turn small misunderstandings into expensive production errors.',
    solution: 'We translate your requirements into precise factory instructions and confirm every detail in writing.',
  },
  {
    problem: 'Not knowing which certifications (CE, FCC, FDA, RoHS) your product actually needs for your market.',
    solution: 'We check compliance requirements early and only shortlist factories that can provide valid test reports.',
  },
]

const ProblemsSolved = () => {
  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Problems We Solve"
          title="Sourcing from China is profitable — when nothing goes wrong"
          description="Most sourcing losses come from a handful of avoidable problems. Our process is built specifically to prevent them."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-accent-400" />
                <p className="text-base leading-relaxed text-slate-300">{item.problem}</p>
              </div>
              <div className="mt-4 flex items-start gap-3 border-t border-white/10 pt-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />
                <p className="text-base leading-relaxed text-white">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemsSolved
