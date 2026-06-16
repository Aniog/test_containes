import { ArrowRight, CheckCircle2, Factory } from 'lucide-react'
import { strengths } from './siteData'

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-950 text-slate-50">
      <div
        className="absolute inset-y-0 right-0 hidden w-1/2 opacity-30 lg:block"
        data-strk-bg-id="hero-industrial-folding-machine-bg-k8w2s1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/70" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
            Premium sheet metal folding solutions
          </p>
          <h1 id="hero-title" className="max-w-4xl text-4xl font-bold tracking-tight text-slate-50 md:text-6xl lg:text-7xl">
            Precision folding machinery for stronger, cleaner metal work.
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            ARTITECT MACHINERY supplies double folding machines, double folders, sheet metal folders, and metal folding machines for teams that value accuracy and dependable operation.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-400">
              Explore products
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-7 py-3 text-base font-semibold text-slate-50 transition hover:border-amber-300 hover:text-amber-200">
              Talk to sales
            </a>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {strengths.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-slate-200">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-amber-400" />
                <span className="text-sm leading-6">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-700 bg-slate-900/80 p-4 shadow-2xl shadow-slate-950/40">
          <div className="rounded-[1.5rem] bg-slate-800 p-6 text-slate-50">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-amber-300">Machine focus</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-50">Double Folder Systems</h2>
              </div>
              <Factory className="h-10 w-10 text-amber-400" />
            </div>
            <div className="grid gap-4">
              {['Accurate folding angles', 'User-friendly operation', 'Industrial-grade productivity'].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                  <p className="font-semibold text-slate-50">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Designed to make high-quality sheet metal folding easier to specify, operate, and maintain.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
