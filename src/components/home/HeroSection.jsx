import { ArrowRight, CheckCircle2, Factory } from 'lucide-react'
import MachineVisual from './MachineVisual'

const highlights = ['Heavy-duty folding performance', 'Clean bends for sheet metal', 'Operator-friendly controls']

export default function HeroSection() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.2),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_48%,#1e293b_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_120px)]" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-32">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-amber-200">
            Precision sheet metal machinery
          </p>
          <h1 id="hero-title" className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Elegant power for professional metal folding.
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            ARTITECT MACHINERY builds double folding machines, double folders, sheet metal folders, and metal folding machines designed for accurate bends, smooth workflows, and durable daily production.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-4 text-base font-bold text-slate-950 shadow-xl shadow-amber-950/30 transition hover:bg-amber-400">
              Explore products
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:border-amber-300/60 hover:text-amber-200">
              Talk to sales
            </a>
          </div>

          <div className="mt-10 grid gap-3 text-sm text-slate-100 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/40 backdrop-blur">
            <MachineVisual title="ARTITECT MACHINERY double folding machine illustration" />
          </div>
          <div className="absolute -bottom-8 left-4 right-4 rounded-3xl border border-white/10 bg-slate-950/90 p-5 text-white shadow-2xl backdrop-blur sm:left-auto sm:right-8 sm:w-72">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-slate-950">
                <Factory className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">Built for production</p>
                <p className="text-sm text-slate-300">Stable, precise, and easy to operate.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
