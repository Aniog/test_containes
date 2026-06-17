import { Ruler, Cog, ShieldCheck, Cpu, Wrench, Layers } from 'lucide-react'

const ITEMS = [
  {
    icon: Ruler,
    title: 'Architectural precision',
    body: 'Bend angles held to ±0.05° across the full beam length, sheet after sheet.',
  },
  {
    icon: Cog,
    title: 'Double folding speed',
    body: 'Up- and down-folds without flipping the workpiece — cycles cut nearly in half.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to outlast',
    body: 'Stress-relieved steel frames and hardened tool beams engineered for decades of duty.',
  },
  {
    icon: Cpu,
    title: 'CNC made simple',
    body: 'Touch-screen controls, recipe storage, and intuitive setup any operator can master.',
  },
  {
    icon: Wrench,
    title: 'Serviceable everywhere',
    body: 'Modular components and a global parts network keep your line running.',
  },
  {
    icon: Layers,
    title: 'Versatile materials',
    body: 'Mild steel, stainless, aluminium and pre-coated sheet — all handled with care.',
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-ink text-paper py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end mb-14 md:mb-20">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Capabilities</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight">
              Engineered for the demands <br className="hidden md:block" />
              of modern fabrication.
            </h2>
            <div className="w-12 h-px bg-accent mt-6" />
          </div>
          <p className="md:col-span-5 text-paper/70 leading-relaxed">
            Every ARTITECT folder is the product of decades spent on workshop floors —
            listening, measuring, and refining. The result is machinery that feels
            confident in the operator's hands and consistent in the customer's eyes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {ITEMS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-ink p-8 md:p-10 transition-colors duration-300 hover:bg-graphite"
            >
              <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-2xl text-paper">{title}</h3>
              <p className="mt-3 text-paper/70 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
