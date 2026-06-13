import { ArrowRight, CheckCircle2 } from 'lucide-react'

const productTags = [
  'Double folding machine',
  'Double folder',
  'Sheet metal folder',
]

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_32%),linear-gradient(135deg,_rgba(2,6,23,0.98),_rgba(30,41,59,0.92))]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
            Precision folding solutions
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Elegant machinery built for strong, repeatable metal folding.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
            ARTITECT MACHINERY delivers dependable systems for demanding fabrication
            lines, combining industrial power with operator-friendly workflows and
            polished engineering detail.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {productTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:brightness-105"
            >
              Explore machines
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#advantages"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/8"
            >
              Why manufacturers choose us
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-amber-300">
                Built for output
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">24/7</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Stable folding performance for continuous production schedules.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-amber-300">
                Operator friendly
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">Fast</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Clear workflows that help teams shorten setup time and reduce errors.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-white p-6 text-slate-950">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
              Production promise
            </p>
            <ul className="mt-4 grid gap-4 text-sm leading-6 text-slate-700">
              {[
                'Consistent fold accuracy for sheet metal production',
                'Clean machine architecture with practical maintenance access',
                'Confident performance for modern fabrication environments',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
