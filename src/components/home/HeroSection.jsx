import { ArrowRight, BadgeCheck } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.20),transparent_30%),radial-gradient(circle_at_left,rgba(148,163,184,0.16),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
            ARTITECT MACHINERY
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-5xl font-semibold tracking-tight text-white md:text-7xl"
          >
            Elegant sheet metal folding power built for real production.
          </h1>

          <p
            id="hero-subtitle"
            className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg"
          >
            Discover premium double folding machine solutions, metal folder systems,
            and sheet metal folding equipment designed to feel precise, capable, and
            easy to use from day one.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              Explore products
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
            >
              Request a consultation
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              'Premium industrial positioning',
              'Clear and operator-friendly workflow',
              'Built for fabrication reliability',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200 backdrop-blur"
              >
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-amber-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl">
            <div className="grid gap-6 p-5 md:p-6">
              <div
                className="min-h-[300px] rounded-[1.5rem] border border-white/10 bg-slate-800 bg-cover bg-center"
                data-strk-bg-id="hero-machinery-bg-g8m3af"
                data-strk-bg="[hero-subtitle] [hero-title]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="1000"
              >
                <div className="flex min-h-[300px] items-end bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
                      Precision-driven product line
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-200">
                      From double folder systems to full metal folding machine solutions,
                      the range is presented for manufacturers who want confidence and clarity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-medium text-slate-300">Core focus</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Double folding and sheet metal folder solutions
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-medium text-slate-300">Experience goal</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Elegant design with easy buyer navigation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
