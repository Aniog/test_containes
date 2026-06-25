import { ArrowRight, ChevronRight } from 'lucide-react'
import { heroSignals, keywordPhrases } from './home-content'

const HomeHero = () => {
  return (
    <section className="px-6 pb-10 pt-6 md:px-8 md:pb-16 md:pt-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-12">
          <div className="mb-6 inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">
            Precision folding systems for modern fabrication
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            ARTITECT MACHINERY presents sheet metal folding machines with an elegant,
            easy-to-explore experience.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Discover premium double folding machine solutions, double folder systems,
            and metal folder equipment designed for clarity, confidence, and refined
            production performance.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#machines"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Explore machines
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
            >
              Request details
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {heroSignals.map((signal) => (
              <div
                key={signal}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700"
              >
                {signal}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] md:p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-amber-300">
            Product focus keywords
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {keywordPhrases.map((phrase) => (
              <span
                key={phrase}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-100"
              >
                {phrase}
              </span>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-800 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Signature positioning
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  Sophisticated machinery, presented with calm confidence.
                </h2>
              </div>
              <div className="rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-200">
                Elegant and user friendly
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
                <p className="text-sm text-slate-400">Machine category</p>
                <p className="mt-2 text-lg font-medium text-white">
                  Double folder and sheet metal folding systems
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
                <p className="text-sm text-slate-400">Brand promise</p>
                <p className="mt-2 text-lg font-medium text-white">
                  Premium presentation without making technical products feel difficult.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
