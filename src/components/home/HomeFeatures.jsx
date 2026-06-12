import { Ruler, Cog, ShieldCheck, Sparkles } from 'lucide-react'

const FEATURES = [
  {
    icon: Ruler,
    title: 'Exacting Tolerance',
    desc: 'Bend angles held within ±0.1° across a full sheet — proven on every leaving the workshop floor.',
  },
  {
    icon: Cog,
    title: 'Considered Mechanics',
    desc: 'Machined cast iron beams, hardened steel blades, sealed bearings. Built to fold for decades.',
  },
  {
    icon: ShieldCheck,
    title: 'Workshop Warranty',
    desc: 'Two years of full mechanical cover and lifetime access to spares and engineering support.',
  },
  {
    icon: Sparkles,
    title: 'Refined Finish',
    desc: 'Nylon-faced clamps protect coated and stainless surfaces. No marks. No rework. No compromise.',
  },
]

export default function HomeFeatures() {
  return (
    <section className="bg-mist py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-ember mb-5">
            Why Artitect
          </p>
          <h2 className="font-display font-light text-ink text-4xl md:text-5xl leading-tight">
            Engineering you can <span className="italic text-ember">feel</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-paper border border-ink/10 p-8 hover:border-ember/40 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-12 h-12 border border-ink/20 flex items-center justify-center mb-6">
                <f.icon size={20} className="text-ember" />
              </div>
              <h3 className="font-display text-xl text-ink mb-3">{f.title}</h3>
              <p className="text-steel text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
