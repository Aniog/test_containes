import { Gauge, Layers, ShieldCheck, Wrench } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'Sub-millimeter accuracy',
    description:
      'Hardened tool steel beams and servo-driven backgauges keep every bend within ±0.05 mm, panel after panel.',
  },
  {
    icon: Layers,
    title: 'True double folding',
    description:
      'Up and down folding in one cycle. Form positive and negative bends without flipping the sheet by hand.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to outlast shifts',
    description:
      'Welded steel frames are stress-relieved and machined as one piece for decades of vibration-free service.',
  },
  {
    icon: Wrench,
    title: 'Service you can rely on',
    description:
      'Remote diagnostics, factory-trained engineers, and a global spare parts network keep your line moving.',
  },
]

export default function FeatureStrip() {
  return (
    <section className="bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-600 font-semibold">Why ARTITECT</p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl font-medium text-slate-900 leading-snug">
            Engineering elegance, on the shop floor.
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Every machine we build is a quiet promise: that precision and beauty
            belong together — even in heavy industry.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-stone-50 p-6 md:p-7 hover:border-slate-900/20 hover:shadow-sm transition"
            >
              <div className="h-11 w-11 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center">
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-serif text-xl text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
