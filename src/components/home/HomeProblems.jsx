import { AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '@/components/SectionHeader'

const PROBLEMS = [
  {
    problem: 'Suppliers on B2B platforms turn out to be trading companies, not factories.',
    solution: 'We visit the factory in person, verify business license and workshop, and confirm real production capacity before any order.',
  },
  {
    problem: 'Quality drops between samples and bulk production.',
    solution: 'We run DUPRO during production and pre-shipment inspection (PSI) using AQL standards. Issues are caught before payment is released.',
  },
  {
    problem: 'Price quotes are inconsistent and hard to compare.',
    solution: 'We benchmark across 3–5 vetted suppliers in a normalized format so you see the real market price for your spec.',
  },
  {
    problem: 'Communication breaks down across time zones and languages.',
    solution: 'A bilingual project manager handles all factory communication and gives you weekly written updates.',
  },
  {
    problem: 'Production runs late and shipping is unpredictable.',
    solution: 'We track milestones (materials, production, QC, booking) and coordinate freight in advance so timelines are realistic.',
  },
  {
    problem: 'Hidden fees and unclear total landed cost.',
    solution: 'We present a transparent cost breakdown: unit price, packaging, inspection, freight, duties — so there are no surprises.',
  },
]

export default function HomeProblems() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Problems We Solve"
          title="Common pain points when buying from China — and how we handle them"
          description="Most issues importers face are predictable. Our process is built around them."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {PROBLEMS.map((p, i) => (
            <div key={i} className="bg-surface rounded-2xl border border-line p-6 hover:border-accent/40 transition">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-red-50 text-red-600 inline-flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-red-600">Problem</div>
                  <p className="text-ink font-medium mt-1">{p.problem}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-4 pl-1">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 inline-flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">How we handle it</div>
                  <p className="text-ink-soft mt-1 leading-relaxed">{p.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-5 py-3 rounded-lg font-semibold transition"
          >
            Talk to a sourcing specialist <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
