import { ArrowRight, Factory, Gauge, ShieldCheck } from 'lucide-react'

const metrics = [
  { value: '7', label: 'folding machine categories presented' },
  { value: '24/7', label: 'production-focused design thinking' },
  { value: 'High', label: 'clarity, control, and operator comfort' },
]

function HomeHero() {
  return (
    <section id="top" className="border-b border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/40">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">ARTITECT MACHINERY</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">Elegant machinery presentation for precision-driven sheet metal folding systems.</p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm font-medium text-slate-200">
            <a href="#products" className="transition hover:text-amber-300">Products</a>
            <a href="#advantages" className="transition hover:text-amber-300">Advantages</a>
            <a href="#process" className="transition hover:text-amber-300">Process</a>
            <a href="#contact" className="transition hover:text-amber-300">Contact</a>
          </nav>
        </header>

        <div className="grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-200">
              <Factory className="h-4 w-4" />
              Industrial folding equipment with a refined digital presence
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">Precision sheet metal folding solutions designed to feel premium and easy to understand.</h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">ARTITECT MACHINERY showcases double folding machines, sheet metal folders, and metal folding systems with a clear, modern presentation that helps buyers move from interest to inquiry faster.</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-amber-200">
                Explore product range
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-amber-300/50 hover:text-amber-200">
                Plan your machine brief
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Machine focus</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Built for reliable folding performance</h2>
                </div>
                <ShieldCheck className="h-10 w-10 text-amber-300" />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-3xl font-bold text-white">{metric.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-5">
                <div className="flex items-center gap-3 text-amber-200">
                  <Gauge className="h-5 w-5" />
                  <p className="font-semibold text-white">User-friendly product communication</p>
                </div>
                <ul className="space-y-3 text-sm leading-6 text-slate-300">
                  <li>Clear naming across double folders, sheet metal folders, and metal folding machines.</li>
                  <li>Elegant structure that helps technical and commercial buyers scan quickly.</li>
                  <li>Premium visual language that supports trust from the first impression.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
