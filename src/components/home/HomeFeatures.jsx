import { Ruler, Cpu, ShieldCheck, Wrench } from 'lucide-react'

const features = [
  {
    icon: Ruler,
    title: 'Precision-ground beams',
    body: 'Every folding beam is machined and ground in-house to within ± 0.02 mm, delivering folds you can trust the first time and the ten-thousandth time.',
  },
  {
    icon: Cpu,
    title: 'Intuitive CNC control',
    body: 'A clear, generous touch interface designed with operators on the shop floor — not engineers in a meeting room. New users are productive in under an hour.',
  },
  {
    icon: ShieldCheck,
    title: 'Engineered to outlast',
    body: 'Cast iron frames, sealed bearings, and serviceable subassemblies mean our machines run reliably for decades, not seasons.',
  },
  {
    icon: Wrench,
    title: 'Service that actually answers',
    body: 'A direct line to our engineers — same time zone, same language as your workshop. Parts ship within 48 hours, anywhere.',
  },
]

export default function HomeFeatures() {
  return (
    <section className="bg-bone-100 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">Why ARTITECT</p>
          <h2 className="mt-4 font-serif font-light text-4xl md:text-5xl text-graphite-900 leading-tight">
            Elegant engineering, made for everyday use.
          </h2>
          <div className="hairline-brass mt-6" />
          <p className="mt-6 text-steel-500 leading-relaxed">
            We believe a folding machine should disappear into your workflow —
            quiet, dependable, and easy to live with for years on end.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-bone-200 md:grid-cols-2 lg:grid-cols-4 border border-bone-200">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="bg-bone-50 p-8 md:p-10">
                <Icon className="w-7 h-7 text-brass-600" strokeWidth={1.4} />
                <h3 className="mt-6 font-serif text-2xl font-medium text-graphite-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm text-steel-500 leading-relaxed">
                  {feature.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
