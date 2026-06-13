const trustPoints = ['Factory-ready performance', 'Clean operator workflow', 'Custom production support']

const HomeHero = () => {
  return (
    <section className="border-b border-white/10 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-amber-300">Elegant machinery for modern fabrication</p>
            <h1 id="hero-title" className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Double folding machines designed for accurate bends, smoother production, and lasting industrial confidence.
            </h1>
            <p id="hero-subtitle" className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              ARTITECT MACHINERY delivers dependable double folders, sheet metal folders, and metal folding machines built to help manufacturers improve consistency, reduce handling time, and keep operations easy for every operator.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#machines"
              className="rounded-full bg-amber-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              Explore machinery
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/5"
            >
              Talk to our team
            </a>
          </div>

          <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-4 text-center">
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-4">
          <div
            className="relative overflow-hidden rounded-[1.5rem] bg-slate-800/80"
            data-strk-bg-id="hero-machinery-bg-4f9c2a"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1200"
          >
            <div className="flex min-h-[420px] flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent p-6">
              <div className="max-w-sm rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-amber-300">Built for demanding lines</p>
                <p className="mt-3 text-2xl font-semibold text-white">Accurate folds with a calm, intuitive operator experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
