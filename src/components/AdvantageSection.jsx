import { BadgeCheck, Handshake, Shield, Wrench } from 'lucide-react'

const advantages = [
  {
    title: 'Precise folding results',
    description: 'Designed to support clean, consistent folds across common sheet metal tasks.',
    icon: BadgeCheck,
  },
  {
    title: 'User-friendly operation',
    description: 'Clear controls and practical layouts help teams work confidently with less complexity.',
    icon: Handshake,
  },
  {
    title: 'Durable industrial build',
    description: 'Strong structures and dependable components support long-term workshop use.',
    icon: Shield,
  },
  {
    title: 'Service-minded support',
    description: 'Guidance for machine selection, operation needs, and production-fit recommendations.',
    icon: Wrench,
  },
]

export default function AdvantageSection() {
  return (
    <section id="advantages" className="bg-white px-6 py-20 text-slate-950 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p id="advantages-eyebrow" className="text-sm font-semibold uppercase tracking-widest text-amber-700">Why ARTITECT</p>
          <h2 id="advantages-title" className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Elegant machinery that feels simple to choose and simple to use.
          </h2>
          <p id="advantages-subtitle" className="mt-5 text-lg leading-8 text-slate-600">
            ARTITECT MACHINERY focuses on the essentials that matter to metalworking teams: accuracy, usability, stability, and responsive support.
          </p>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-950">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Suitable for</p>
            <p className="mt-3 text-xl font-semibold text-slate-950">HVAC panels, roofing profiles, fabrication workshops, cladding work, and custom sheet metal production.</p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {advantages.map((advantage) => (
            <article key={advantage.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7 text-slate-950 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-amber-300">
                <advantage.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-950">{advantage.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{advantage.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
