import { Cog, Gauge, ShieldCheck, Layers, Wrench, Cpu } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: 'Repeatable precision',
    desc: '±0.05 mm fold accuracy held over thousands of cycles, verified on every machine before shipment.',
  },
  {
    icon: Cpu,
    title: 'CNC control, simplified',
    desc: 'A 15-inch touch interface with intuitive program builder — your operators master it in a single afternoon.',
  },
  {
    icon: Layers,
    title: 'Double folding, single setup',
    desc: 'Up-and-down folding without flipping the sheet — production cycles drop by up to 40%.',
  },
  {
    icon: ShieldCheck,
    title: 'Engineered to outlast',
    desc: 'Stress-relieved heavy steel frames, hardened tooling, and sealed servo drives rated for 15+ years.',
  },
  {
    icon: Wrench,
    title: 'Quiet, calm operation',
    desc: 'Servo-electric drives replace noisy hydraulics. Less than 72 dB under full load.',
  },
  {
    icon: Cog,
    title: 'Service, anywhere',
    desc: 'Engineers on five continents, remote diagnostics included, spare parts shipped within 48 hours.',
  },
]

const HomeFeatures = () => {
  return (
    <section className="py-20 md:py-28 bg-fog">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-12 bg-accent" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                Why ARTITECT
              </span>
            </div>
            <h2 className="font-serif font-light text-3xl md:text-5xl tracking-tight text-ink">
              Engineering you can feel
              <span className="italic text-accent"> in every fold.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-graphite leading-relaxed">
              A folding machine is the heartbeat of a sheet-metal shop. We design ours
              the way Swiss watchmakers approach a movement — quietly, methodically,
              with respect for every part. The result is a tool that disappears into
              your workflow and lets the work speak.
            </p>
          </div>
        </div>

        <div className="grid gap-px bg-mist md:grid-cols-3 border border-mist">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="bg-paper p-8 md:p-10 hover:bg-white transition-colors group"
              >
                <Icon className="w-7 h-7 text-accent mb-6" strokeWidth={1.25} />
                <h3 className="font-serif text-xl text-ink mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed text-graphite">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeFeatures
