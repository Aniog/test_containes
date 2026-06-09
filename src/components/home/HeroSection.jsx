const proofPoints = [
  'Precision-built folders for modern metal workshops',
  'Clear product positioning for double folding and sheet metal systems',
  'Elegant presentation with practical buyer guidance',
]

const featureCards = [
  ['Product focus', 'Double folder and sheet metal folding machine'],
  ['Buyer priority', 'Accuracy, workflow ease, and durable construction'],
  ['Use case', 'Architectural cladding, fabrication, and custom metal work'],
  ['Experience', 'Premium presentation with practical information'],
]

const HeroSection = () => (
  <section id="top" className="border-b border-white/10 bg-slate-950">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
      <div className="space-y-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
          Elegant industrial performance
        </p>
        <div className="space-y-6">
          <h1 className="max-w-4xl font-serif text-5xl tracking-tight text-white sm:text-6xl lg:text-7xl">
            ARTITECT MACHINERY for precise, dependable metal folding.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Discover double folding machines, double folders, sheet metal folders,
            and metal folding systems designed to help manufacturers shape clean
            finishes with confidence.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#machines"
            className="rounded-full bg-amber-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Explore products
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Talk to our team
          </a>
        </div>
        <ul className="grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
          {proofPoints.map((point) => (
            <li
              key={point}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 shadow-2xl shadow-slate-950/40">
        <div className="grid gap-6">
          <div className="rounded-3xl border border-amber-300/20 bg-slate-950 p-6">
            <p className="text-sm uppercase tracking-widest text-cyan-300">
              Featured range
            </p>
            <p className="mt-4 font-serif text-3xl text-white">
              Double folding excellence
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Built for operators who need clean bends, stable throughput, and an
              interface that feels easy from day one.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featureCards.map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  {label}
                </p>
                <p className="mt-3 text-sm leading-6 text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
