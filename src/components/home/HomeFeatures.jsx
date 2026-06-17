import { Gauge, Wrench, ShieldCheck, Cpu } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'Repeatable to ±0.05 mm',
    desc: 'Every machine is calibrated and proof-bent on real material before it leaves the floor.',
  },
  {
    icon: Wrench,
    title: 'Engineered for service life',
    desc: 'Stress-relieved frames, ground tooling, and serviceable subsystems built for 20+ year duty cycles.',
  },
  {
    icon: Cpu,
    title: 'Operator-first controls',
    desc: 'Plain-language touch screens, 3D bend simulation, and one-touch program recall.',
  },
  {
    icon: ShieldCheck,
    title: 'CE & ISO certified',
    desc: 'Full safety-light curtain integration, lock-out tag-out compliance, and EU declarations included.',
  },
]

const HomeFeatures = () => {
  return (
    <section className="bg-white border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-32">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-5">
            What sets us apart
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl tracking-tight text-neutral-950">
            Built quietly. Built to outlast.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f) => (
            <div key={f.title}>
              <div className="inline-flex h-12 w-12 items-center justify-center bg-neutral-950 text-amber-500 mb-6">
                <f.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-neutral-950 mb-3 leading-snug">{f.title}</h3>
              <p className="text-neutral-700 leading-relaxed text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeFeatures
