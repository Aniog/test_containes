import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading.jsx'
import { PROBLEMS } from '@/data/content.js'

export default function HomeProblems() {
  return (
    <section className="section-pad bg-brand-mist" id="problems">
      <div className="container-page">
        <SectionHeading
          eyebrow="Problems we solve"
          title="The risks that keep importers up at night — and how we handle them"
          description="Importing from China is not the problem. Doing it without a trustworthy local partner is. Here is what we hear most often, and what we do about it."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PROBLEMS.map((p) => (
            <div
              key={p.problem}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                  <AlertTriangle className="h-4 w-4" />
                </span>
                <p className="text-base font-semibold leading-snug text-brand-ink">{p.problem}</p>
              </div>
              <div className="mt-4 flex items-start gap-3 border-t border-slate-100 pt-4">
                <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-slate-600">{p.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
