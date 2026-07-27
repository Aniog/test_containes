import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PROCESS_STEPS } from '@/data/content'

const HomeProcess = () => (
  <section className="bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">How it works</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          A structured sourcing process, in five steps
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          You always know what stage your project is at, what happens next, and what it costs.
        </p>
      </div>
      <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {PROCESS_STEPS.map((step) => (
          <li key={step.step} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 text-sm font-bold text-white">
              {step.step}
            </span>
            <h3 className="mt-4 text-base font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.short}</p>
            <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-500">{step.duration}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10">
        <Link
          to="/how-it-works"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-900"
        >
          See the full process in detail <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
)

export default HomeProcess
