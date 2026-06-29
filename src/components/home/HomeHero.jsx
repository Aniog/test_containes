import { ArrowRight, BadgeCheck, Cog, Gauge } from 'lucide-react'

const featurePills = ['Elegant industrial design', 'User-friendly operation', 'Built for sheet metal precision']

function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-800" />
      <div className="relative grid gap-10 px-6 py-16 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-12 lg:py-20">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">ARTITECT MACHINERY</p>
            <h1 id="hero-title" className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Elegant machinery for powerful sheet metal folding.
            </h1>
            <p id="hero-description" className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Premium double folding machine solutions designed to help modern fabricators work with more precision,
              clarity, and confidence.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {featurePills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Explore machines
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#applications"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View applications
            </a>
          </div>
        </div>

        <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 text-slate-950">
                <BadgeCheck className="h-8 w-8 text-amber-600" />
                <h2 className="mt-4 text-lg font-semibold">Refined control</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Clear, operator-friendly workflow for dependable daily production.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-800 p-5 text-white">
                <Cog className="h-8 w-8 text-amber-400" />
                <h2 className="mt-4 text-lg font-semibold">Industrial build</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Durable engineering for folding performance that stays stable over time.
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-800 p-5 text-white">
              <Gauge className="h-8 w-8 text-amber-400" />
              <h2 className="mt-4 text-lg font-semibold">Precision output</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Designed for teams that value accurate bends, clean finishes, and efficient throughput.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
