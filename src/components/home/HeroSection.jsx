import { ArrowRight, CheckCircle2, Gauge } from 'lucide-react'
import { stats } from '@/data/siteContent'

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-machine-950 text-steel-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-machine-800),transparent_34rem)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-brass-500/40 bg-machine-900 px-4 py-2 text-sm font-medium text-brass-300">
            <Gauge className="h-4 w-4" /> Precision folding machinery
          </p>
          <h1 id="hero-title" className="text-4xl font-semibold tracking-tight text-steel-50 md:text-6xl">
            Elegant sheet metal folding machines for confident production.
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-base leading-7 text-steel-200 md:text-lg">
            ARTITECT MACHINERY supplies double folding machines, double folders, sheet metal folders, and metal folder machines designed to be precise, durable, and easy to operate.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-full bg-brass-500 px-6 py-3 text-sm font-semibold text-machine-950 shadow-soft transition hover:bg-brass-400">
              Explore products <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-steel-600 px-6 py-3 text-sm font-semibold text-steel-50 transition hover:border-brass-400 hover:text-brass-200">
              Talk to a specialist
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-steel-700 bg-machine-900/80 p-4 text-steel-50">
                <p className="text-2xl font-semibold text-brass-300">{stat.value}</p>
                <p className="mt-1 text-sm text-steel-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-steel-700 bg-machine-900 shadow-soft">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--color-machine-800),var(--color-machine-950))]" data-strk-bg-id="hero-machinery-bg-18f3ca" data-strk-bg="[hero-subtitle] [hero-title]" data-strk-bg-ratio="4x3" data-strk-bg-width="1200" />
          <div className="absolute inset-0 bg-machine-950/35" />
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-steel-600 bg-machine-950/85 p-5 text-steel-50 backdrop-blur">
            <p className="flex items-center gap-2 text-sm font-semibold text-brass-300"><CheckCircle2 className="h-4 w-4" /> Built for clarity</p>
            <p className="mt-2 text-sm leading-6 text-steel-200">A clean product experience that helps buyers understand the right folding machine without friction.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
