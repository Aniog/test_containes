import { Gauge, Ruler, ShieldCheck, Wrench } from 'lucide-react'

const advantages = [
  {
    icon: Ruler,
    title: 'Precise folding control',
    text: 'Clear geometry, stable clamping, and thoughtful machine design support accurate metal forming work.',
  },
  {
    icon: Gauge,
    title: 'Simple operator experience',
    text: 'User-friendly workflows help production teams move quickly while keeping results consistent.',
  },
  {
    icon: ShieldCheck,
    title: 'Built for reliability',
    text: 'Durable structures and practical service access help keep folding operations dependable.',
  },
  {
    icon: Wrench,
    title: 'Application support',
    text: 'Choose equipment around your material, working length, production volume, and finished part needs.',
  },
]

const stats = [
  ['4+', 'Core product categories'],
  ['2-way', 'Double folding capability'],
  ['B2B', 'Manufacturing focus'],
]

export default function AdvantageSection() {
  return (
    <section id="advantages" className="bg-white py-16 text-graphite md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brass">Why ARTITECT</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-graphite sm:text-5xl">
              Elegant engineering with practical daily usability.
            </h2>
            <p className="mt-5 text-lg leading-8 text-graphite/70">
              The best machinery feels powerful without feeling complicated. ARTITECT MACHINERY presents industrial folding solutions with a clean buying journey and equipment benefits your team can understand quickly.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-3xl bg-mist p-5 text-graphite">
                  <strong className="block text-2xl font-black text-steel">{value}</strong>
                  <span className="mt-1 block text-sm font-semibold text-graphite/70">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {advantages.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-3xl border border-graphite/10 bg-ivory p-6 text-graphite shadow-sm">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-steel text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black tracking-tight text-graphite">{title}</h3>
                <p className="mt-3 text-base leading-7 text-graphite/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
