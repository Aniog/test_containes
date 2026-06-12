import { Layers, Settings2, ShieldCheck, Gauge } from 'lucide-react'

const items = [
  {
    icon: Layers,
    title: 'Double folding, both directions',
    body: 'Bend up and down without ever flipping the sheet — half the handling, twice the consistency.',
  },
  {
    icon: Gauge,
    title: 'Repeatability you can measure',
    body: 'Servo-driven beams and self-calibrating back gauges hold ±0.05 mm across the full bed.',
  },
  {
    icon: Settings2,
    title: 'Programmed in minutes',
    body: 'Full-color HMI, offline programming and a tooling library so operators can switch jobs fast.',
  },
  {
    icon: ShieldCheck,
    title: 'Engineered to last',
    body: 'Stress-relieved welded frames and sealed drives. Designed for two-shift production for 20 years.',
  },
]

export default function Highlights() {
  return (
    <section className="bg-paper border-y border-mist/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-2xl">
          <p
            id="highlights-eyebrow"
            className="text-xs uppercase tracking-[0.2em] text-steel mb-5"
          >
            What sets us apart
          </p>
          <h2
            id="highlights-title"
            className="font-serif text-3xl md:text-5xl font-medium text-ink leading-tight"
          >
            Quiet engineering, loud results.
          </h2>
          <p
            id="highlights-subtitle"
            className="mt-5 text-base md:text-lg text-steel leading-relaxed"
          >
            Every Artitect machine is built around four principles. They are
            the reason our customers re-order, generation after generation.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-mist/50 border border-mist/50">
          {items.map((item) => (
            <div key={item.title} className="bg-paper p-8">
              <item.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
              <h3 className="mt-6 font-serif text-xl text-ink leading-snug">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-steel leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
