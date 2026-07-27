import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/shared/SectionHeading'
import { PROCESS_STEPS } from '@/data/site'

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear, five-step sourcing process"
          description="You always know what stage your project is at, what happens next, and what it costs. No black boxes."
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {PROCESS_STEPS.map((step) => (
            <li key={step.step} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-800 text-sm font-bold text-white">
                {step.step}
              </span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-accent-600">{step.duration}</p>
              <h3 className="mt-2 font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.short}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 font-semibold text-primary-600 transition-colors hover:text-primary-700"
          >
            See the full process in detail <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
