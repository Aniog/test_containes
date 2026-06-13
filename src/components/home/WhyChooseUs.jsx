import { CircleGauge, Handshake, ShieldCheck, Wrench } from 'lucide-react'

const advantages = [
  {
    title: 'Refined engineering',
    description:
      'Every detail is presented with a clean, professional finish that reinforces machine quality and brand trust.',
    icon: ShieldCheck,
  },
  {
    title: 'Practical usability',
    description:
      'User-friendly operation helps teams learn faster, work with confidence, and stay productive throughout the shift.',
    icon: Handshake,
  },
  {
    title: 'Reliable production rhythm',
    description:
      'Stable motion, predictable results, and repeatable folding behavior support a smoother manufacturing flow.',
    icon: CircleGauge,
  },
  {
    title: 'Service-minded access',
    description:
      'Maintenance and upkeep are easier when systems are structured around clarity, access, and long-term use.',
    icon: Wrench,
  },
]

const WhyChooseUs = () => {
  return (
    <section id="advantages" className="bg-white text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-600">
            Why ARTITECT MACHINERY
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Elegant by design, dependable in production.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            We focus on machinery experiences that feel premium for decision-makers
            and approachable for operators. The result is equipment that supports
            both performance goals and daily usability.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {advantages.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-[1.75rem] border border-slate-200 bg-slate-100 p-6 text-slate-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-slate-950">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
