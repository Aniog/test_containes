import { Ruler, Cpu, ShieldCheck, Layers } from 'lucide-react'

const FEATURES = [
  {
    icon: Ruler,
    title: 'Architectural Precision',
    text: 'Servo-driven folding beams hold tolerances measured in hundredths of a degree, fold after fold.',
  },
  {
    icon: Cpu,
    title: 'Intuitive Control',
    text: 'A clear operator console, programmable cycles, and tactile controls keep skilled operators in flow.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Last',
    text: 'Stress-relieved frames, hardened tooling, and serviceable assemblies designed for decades of use.',
  },
  {
    icon: Layers,
    title: 'Double Folding',
    text: 'Up and down bends in a single setup. Save time, reduce handling, and produce cleaner panels.',
  },
]

export default function HomeFeatures() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-ember" />
            <span className="text-xs uppercase tracking-[0.3em] text-ember font-medium">Why Artitect</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-ink font-light leading-tight">
            Engineering distilled into every fold.
          </h2>
          <p className="mt-6 text-lg text-steel max-w-2xl leading-relaxed">
            Each machine is a quiet promise: that the line you draw on paper appears,
            unchanged, in metal. Our folders pair industrial strength with the elegance
            of a tool you actually want to operate.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-silver/40">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-paper p-8 md:p-10 hover:bg-mist transition-colors"
            >
              <Icon className="w-7 h-7 text-ember" strokeWidth={1.5} />
              <h3 className="mt-6 font-serif text-2xl text-ink font-medium">{title}</h3>
              <p className="mt-3 text-steel leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
