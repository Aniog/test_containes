import { Gauge, ShieldCheck, SlidersHorizontal, Wrench } from 'lucide-react'

const advantages = [
  {
    icon: Gauge,
    title: 'Production-ready accuracy',
    text: 'Built to support repeatable folding results for sheet metal parts, panels, and formed components.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Easy operator experience',
    text: 'Clear controls and thoughtful machine layout help teams work with confidence from day one.',
  },
  {
    icon: ShieldCheck,
    title: 'Durable industrial design',
    text: 'Strong construction and reliable components support steady use in demanding environments.',
  },
  {
    icon: Wrench,
    title: 'Practical service support',
    text: 'Guidance for selection, operation, and maintenance keeps your folding equipment productive.',
  },
]

export default function AdvantageSection() {
  return (
    <section id="advantages" className="bg-white px-6 py-16 text-slate-950 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Why ARTITECT</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Elegant machinery decisions, made simple.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            The right sheet metal folding machine should be easy to understand, easy to operate, and strong enough for your production goals.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {advantages.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-950 shadow-sm">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-amber-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
