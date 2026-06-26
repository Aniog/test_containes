import { Layers, Cpu, Ruler, ShieldCheck, Wrench, Gauge } from 'lucide-react'

const features = [
  {
    icon: Layers,
    title: 'Dual-beam folding',
    desc: 'Upper and lower folding beams act independently — produce up-folds and down-folds in a single setup, with no sheet flipping.',
  },
  {
    icon: Cpu,
    title: 'CNC repeatability',
    desc: 'Servo-driven back-gauges and folding beams hold position to ±0.05°, fold after fold, shift after shift.',
  },
  {
    icon: Ruler,
    title: 'Wide working range',
    desc: 'Bed lengths from 1,600 to 4,000 mm. Bend mild steel, stainless, aluminum, copper and pre-finished panels.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to last',
    desc: 'Stress-relieved welded steel frame, hardened tool steel beams, and a five-year structural guarantee.',
  },
  {
    icon: Wrench,
    title: 'Operator-friendly',
    desc: 'Touchscreen HMI, graphic part programming, and one-touch recall. New operators get productive in a single shift.',
  },
  {
    icon: Gauge,
    title: 'Quiet, efficient drive',
    desc: 'Electric servo drive replaces noisy hydraulics. Lower energy use, no oil maintenance, cleaner workshops.',
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="bg-neutral-900 text-stone-50 py-20 md:py-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.5] pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p
            id="features-eyebrow"
            className="text-xs uppercase tracking-[0.25em] font-medium text-amber-500 mb-4"
          >
            Engineering
          </p>
          <h2
            id="features-title"
            className="font-serif text-3xl md:text-5xl font-medium tracking-tight leading-[1.05]"
          >
            Quiet machines.{' '}
            <span className="italic text-amber-500">Loud results.</span>
          </h2>
          <p
            id="features-subtitle"
            className="mt-5 text-lg text-neutral-300 leading-relaxed"
          >
            Six engineering choices that separate an ARTITECT folder from any
            other sheet metal folding machine on the floor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800 rounded-2xl overflow-hidden">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="bg-neutral-900 p-8 md:p-10 hover:bg-neutral-800/60 transition-colors"
              >
                <Icon className="w-7 h-7 text-amber-500" strokeWidth={1.5} />
                <h3 className="mt-6 font-serif text-xl md:text-2xl font-medium text-stone-50">
                  {f.title}
                </h3>
                <p className="mt-3 text-base text-neutral-300 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
