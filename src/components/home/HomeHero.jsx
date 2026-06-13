import { ArrowRight, BadgeCheck, Factory, Wrench } from 'lucide-react'

const heroStats = [
  { value: '7 product keywords', label: 'covered across your core folding machine range' },
  { value: '24/7', label: 'support-ready positioning for buyer confidence' },
  { value: 'Premium', label: 'industrial presentation with easy navigation' },
]

function HomeHero() {
  return (
    <section className="border-b border-stone-200 bg-stone-950 text-stone-50">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-900/80 px-4 py-2 text-sm font-medium text-stone-200">
            <Factory className="h-4 w-4 text-amber-400" />
            ARTITECT MACHINERY
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
              Precision sheet metal folding solutions
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Elegant engineering for every double folding and sheet metal folding workflow.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-stone-300 md:text-lg">
              Explore double folding machines, double folders, sheet metal folders, and advanced metal folding systems built for consistent bends, fast setup, and operator-friendly production.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
            >
              Explore products
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-stone-600 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:border-stone-400 hover:bg-stone-900"
            >
              Request a consultation
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-stone-800 bg-stone-900/80 p-5">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-stone-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-full rounded-[2rem] border border-stone-800 bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800 p-6 shadow-2xl shadow-stone-950/30">
            <div className="rounded-[1.5rem] border border-stone-700 bg-stone-100 p-6 text-slate-900">
              <div className="flex items-start justify-between gap-4 border-b border-stone-300 pb-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Signature range
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                    Smart folding systems designed to feel precise from the first run.
                  </h2>
                </div>
                <div className="rounded-2xl bg-amber-100 p-3 text-amber-600">
                  <Wrench className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  'Double folding machine for streamlined high-volume operations',
                  'Sheet metal folding machine with smooth control and stable accuracy',
                  'Metal folder machine layouts that are easy to learn and easy to service',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-4"
                  >
                    <BadgeCheck className="mt-0.5 h-5 w-5 text-amber-500" />
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
