import { Ruler, Settings2, ShieldCheck, Cpu } from 'lucide-react'

const values = [
  {
    icon: Ruler,
    title: 'Architectural precision',
    desc: 'Ground folding beams and servo-driven gauges deliver bends that read as architecture, not industry.',
  },
  {
    icon: Settings2,
    title: 'Made to be used',
    desc: 'Touch interfaces, foot pedals, and tooling that any operator can master in a single afternoon.',
  },
  {
    icon: ShieldCheck,
    title: 'Quiet reliability',
    desc: 'Stress-relieved welded frames and conservative drive ratings for decades of daily folding.',
  },
  {
    icon: Cpu,
    title: 'Intelligent control',
    desc: 'CNC programs, offset libraries, and material memory built around the way a workshop actually thinks.',
  },
]

const Values = () => {
  return (
    <section className="bg-mist border-y border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-bronze">
            What we believe
          </p>
          <h2 className="mt-5 font-serif text-3xl md:text-5xl leading-tight text-ink">
            Engineered to be elegant. Built to be used every day.
          </h2>
          <p className="mt-6 text-base md:text-lg text-steel leading-relaxed">
            Every Artitect machine is designed twice — once by an engineer for
            accuracy, once by an operator for ease. The result is folding
            machinery that fits as naturally in a quiet design studio as it does
            on a busy shop floor.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-paper p-8 md:p-10">
              <Icon className="w-6 h-6 text-bronze" />
              <h3 className="mt-6 font-serif text-xl text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
