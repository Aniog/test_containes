import { ArrowRight, BadgeCheck, Cog, ShieldCheck } from 'lucide-react'

const highlights = [
  'Double folding machine systems for high-volume production',
  'Double folder solutions for precise repeatable bends',
  'Sheet metal folder models tailored to fabrication workflows',
]

function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id="hero-bg-artitect-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/92 to-slate-900/80" />
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="max-w-3xl">
          <p
            id="hero-subtitle"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300"
          >
            Elegant machinery for modern metal fabrication
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl"
          >
            ARTITECT MACHINERY builds refined folding power for serious sheet metal production.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Discover premium double folding machine and sheet metal folding solutions
            designed to improve speed, consistency, and operator confidence on every run.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Explore machines
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Request a consultation
            </a>
          </div>

          <ul className="mt-10 grid gap-3 text-sm text-slate-200 md:grid-cols-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                Signature line
              </span>
              <BadgeCheck className="h-5 w-5 text-amber-300" />
            </div>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-amber-500/10 p-3 text-amber-300">
                    <Cog className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Precision forming system</p>
                    <p className="text-sm text-slate-300">Stable bending accuracy for demanding production lines.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-amber-500/10 p-3 text-amber-300">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Operator-friendly workflow</p>
                    <p className="text-sm text-slate-300">Elegant controls with practical usability for everyday factory work.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm text-slate-300">Built for manufacturers seeking dependable output, premium engineering, and easier day-to-day handling.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
