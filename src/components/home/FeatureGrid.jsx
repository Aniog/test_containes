import { Gauge, Layers3, Settings2, Wrench } from 'lucide-react'

const features = [
  {
    title: 'Elegant industrial design',
    description:
      'Clean machine architecture and thoughtful layout create a premium impression without sacrificing usability.',
    icon: Layers3,
  },
  {
    title: 'Consistent folding precision',
    description:
      'Engineered for repeatable performance to help your team maintain reliable production quality over time.',
    icon: Gauge,
  },
  {
    title: 'User-friendly operation',
    description:
      'Controls and working flow are arranged to help operators learn quickly and work confidently each day.',
    icon: Settings2,
  },
  {
    title: 'Dependable service support',
    description:
      'Built with durability and maintainability in mind so your equipment stays ready for demanding schedules.',
    icon: Wrench,
  },
]

function FeatureGrid() {
  return (
    <section className="bg-white py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
              Why buyers choose us
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Sophisticated machines that remain practical on the factory floor.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
              Every ARTITECT MACHINERY model is positioned to feel premium, perform
              reliably, and reduce friction for operators and production managers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-3xl border border-slate-200 bg-stone-50 p-6"
              >
                <div className="inline-flex rounded-2xl bg-slate-950 p-3 text-amber-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
