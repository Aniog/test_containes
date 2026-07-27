import { Link } from 'react-router-dom'
import { ArrowRight, AlertTriangle } from 'lucide-react'
import { PROBLEMS } from '@/data/content'

const HomeProblems = () => (
  <section className="bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">Problems we solve</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          The risks of buying from China, handled for you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          Most sourcing problems are predictable. Our process is built to catch them
          before they cost you money.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((problem) => (
          <div key={problem.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">{problem.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{problem.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-900"
        >
          Tell us what you are struggling with <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
)

export default HomeProblems
