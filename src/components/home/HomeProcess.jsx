import SectionHeading from '@/components/SectionHeading.jsx'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PROCESS_STEPS } from '@/data/content.js'

export default function HomeProcess() {
  return (
    <section className="section-pad bg-brand-mist" id="process">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our sourcing process"
          title="Six clear steps from your brief to your port"
          description="A predictable workflow that keeps you informed at every stage. No surprises, no silent gaps between milestones."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative rounded-xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-ink text-sm font-bold text-white">
                  {step.step}
                </span>
                {idx < PROCESS_STEPS.length - 1 && (
                  <span className="hidden h-px flex-1 bg-slate-200 lg:block" />
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/how-it-works" className="btn-secondary">
            Read the full process
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
