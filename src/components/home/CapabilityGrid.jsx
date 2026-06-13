import { Gauge, Layers3, ShieldCheck, SlidersHorizontal } from 'lucide-react'

const capabilities = [
  {
    icon: Gauge,
    title: 'Controlled precision',
    description:
      'Present your machinery as a dependable choice for repeatable folds, clean edges, and measured performance.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Operator-friendly setup',
    description:
      'Emphasize accessible controls and smoother onboarding for teams that value efficiency without complexity.',
  },
  {
    icon: Layers3,
    title: 'Versatile production use',
    description:
      'Support a wide span of sheet metal tasks with product positioning that feels flexible and commercially relevant.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable long-term value',
    description:
      'Reassure buyers with messaging around stability, serviceability, and durable industrial construction.',
  },
]

function CapabilityGrid() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">
              Why the brand feels premium
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Elegant presentation outside, hard-working machine credibility inside.
            </h2>
            <p className="text-base leading-8 text-slate-600 md:text-lg">
              The site structure balances technical confidence with readability, helping visitors quickly understand the value behind your machinery lineup.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6"
              >
                <div className="inline-flex rounded-2xl bg-amber-100 p-3 text-amber-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CapabilityGrid
