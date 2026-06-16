import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'

const strengths = ['Precision folding', 'Heavy-duty construction', 'Operator-friendly controls']

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="artitect-hero-bg-a8f3c1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900" />
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-white" aria-label="ARTITECT MACHINERY home">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-400 bg-amber-500 text-base font-black text-slate-950">A</span>
          <span className="text-sm font-bold uppercase tracking-widest">ARTITECT MACHINERY</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex" aria-label="Main navigation">
          <a className="hover:text-amber-300" href="#products">Products</a>
          <a className="hover:text-amber-300" href="#capabilities">Capabilities</a>
          <a className="hover:text-amber-300" href="#contact">Contact</a>
        </nav>
      </header>

      <div id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-2 lg:px-8 lg:pb-28 lg:pt-20">
        <div>
          <p id="hero-eyebrow" className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-300 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-950">
            Sheet metal folding solutions
          </p>
          <h1 id="hero-title" className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Elegant power for precise metal folding.
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            ARTITECT MACHINERY supplies double folding machines, double folders, sheet metal folders, and metal folding machines built for clean bends, reliable output, and simple operation.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-300">
              Explore machines <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:border-amber-300 hover:text-amber-200">
              Request a quote
            </a>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {strengths.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-slate-100">
                <CheckCircle2 className="h-4 w-4 text-amber-300" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl shadow-slate-950/40 backdrop-blur">
          <img
            alt="Industrial sheet metal folding machine"
            className="h-full min-h-96 w-full rounded-2xl object-cover"
            data-strk-img-id="artitect-hero-machine-f4b9d2"
            data-strk-img="[hero-subtitle] [hero-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="mt-3 flex items-center gap-3 rounded-2xl bg-white p-4 text-slate-950">
            <ShieldCheck className="h-9 w-9 text-amber-500" aria-hidden="true" />
            <p className="text-sm font-semibold">Designed for workshops that value accuracy, durability, and efficient production flow.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
