import { ArrowRight, BadgeCheck, Gauge, ShieldCheck } from 'lucide-react'

const heroStats = [
  { value: '0.3 mm – 2.5 mm', label: 'Sheet range focus' },
  { value: 'Precision', label: 'Repeatable folding control' },
  { value: 'Support', label: 'Guidance from selection to setup' },
]

const trustItems = [
  { icon: BadgeCheck, label: 'Double folding machine specialists' },
  { icon: Gauge, label: 'Built for efficient sheet metal production' },
  { icon: ShieldCheck, label: 'Durable frames and operator-first design' },
]

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="artitect-hero-bg-9c41af"
        data-strk-bg="[hero-eyebrow] [hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.24),transparent_34%),linear-gradient(90deg,rgba(2,6,23,0.96),rgba(15,23,42,0.88),rgba(15,23,42,0.62))]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-32 md:grid-cols-[1.05fr_0.95fr] md:pt-40">
        <div>
          <p id="hero-eyebrow" className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
            Elegant sheet metal folding solutions
          </p>
          <h1 id="hero-title" className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Precision folding machinery for cleaner metalwork.
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            ARTITECT MACHINERY supplies double folding machines, double folders, and sheet metal folder systems for workshops that need accuracy, strength, and easy operation.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:bg-amber-300"
            >
              Explore Machines
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
            >
              Talk to Sales
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur-md">
                <strong className="block text-lg font-semibold text-white">{stat.value}</strong>
                <span className="mt-1 block text-sm text-slate-300">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-md">
          <div className="overflow-hidden rounded-[1.5rem] bg-slate-900">
            <img
              className="h-[460px] w-full object-cover"
              data-strk-img-id="artitect-hero-machine-a74d2e"
              data-strk-img="[hero-title] [hero-subtitle]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="ARTITECT sheet metal folding machine in a modern workshop"
            />
          </div>
          <div className="grid gap-3 pt-4">
            {trustItems.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl bg-slate-950/75 p-4 text-slate-100">
                  <Icon className="h-5 w-5 flex-none text-amber-300" aria-hidden="true" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
