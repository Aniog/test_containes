import { Gauge, Ruler, Cog, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'Predictable precision',
    body: 'CNC back-gauges and hardened beams deliver repeatable folds within ±0.05 mm, batch after batch.',
  },
  {
    icon: Ruler,
    title: 'Built for real workshops',
    body: 'Operator-first ergonomics, intuitive touchscreens and quick-change tooling shorten setup time.',
  },
  {
    icon: Cog,
    title: 'Modular tooling',
    body: 'Configure your folder with sectional blades and segmented clamps to match your panel work.',
  },
  {
    icon: ShieldCheck,
    title: 'Engineered to outlast',
    body: 'Stress-relieved frames and sealed drives are designed for two-shift operation and decades of service.',
  },
]

export default function HomeFeatures() {
  return (
    <section className="bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.28em] text-amber-700 font-medium">
            Why ARTITECT
          </span>
          <h2 className="mt-5 font-serif text-3xl md:text-5xl text-stone-900 leading-tight tracking-tight">
            Refined engineering, in service of the operator.
          </h2>
          <p className="mt-6 text-base md:text-lg text-stone-600 leading-relaxed">
            Every folding machine we build is a balance of mechanical rigor and
            quiet, considered design. The result is equipment that feels as good
            to use as the parts it produces.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="bg-white border border-stone-200 p-8 hover:border-stone-300 transition-colors"
              >
                <div className="w-11 h-11 flex items-center justify-center border border-stone-900 text-stone-900">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-6 font-serif text-xl text-stone-900 leading-snug">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                  {f.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
