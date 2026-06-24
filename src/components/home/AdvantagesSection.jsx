import { CircleGauge, Handshake, Layers3, Settings2 } from 'lucide-react'

const advantages = [
  {
    icon: Settings2,
    title: 'Precise adjustment',
    description: 'Clear controls help teams set bends quickly and keep production results consistent.',
  },
  {
    icon: Layers3,
    title: 'Strong machine structure',
    description: 'Rigid frames and carefully selected components support reliable daily folding work.',
  },
  {
    icon: CircleGauge,
    title: 'Efficient operation',
    description: 'Operator-friendly layouts reduce friction for workshops moving from setup to production.',
  },
  {
    icon: Handshake,
    title: 'Practical buying support',
    description: 'Get help matching machine type, size, and configuration to your sheet metal applications.',
  },
]

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="bg-white py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Why ARTITECT</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Elegant machinery experience, serious industrial capability.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            We present metal folder machines in a simple, transparent way so you can compare, choose, and plan with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => {
            const Icon = advantage.icon
            return (
              <article key={advantage.title} className="rounded-3xl border border-slate-200 bg-stone-50 p-6 text-slate-950 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-amber-300">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{advantage.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-700">{advantage.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
