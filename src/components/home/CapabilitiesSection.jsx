import { Gauge, Ruler, Wrench, Users } from 'lucide-react'

const capabilities = [
  {
    icon: Ruler,
    title: 'Accurate bend control',
    text: 'Designed to help teams create repeatable folds for sheet metal parts, panels, flashing, trim, and custom profiles.',
  },
  {
    icon: Gauge,
    title: 'Production-ready workflow',
    text: 'Clear controls and reliable machine behavior make daily operation easier for experienced teams and new operators alike.',
  },
  {
    icon: Wrench,
    title: 'Durable construction',
    text: 'Strong machine bodies, practical access points, and dependable components support demanding workshop environments.',
  },
  {
    icon: Users,
    title: 'Helpful consultation',
    text: 'Get guidance on choosing a double folder, metal folder machine, or sheet metal folder based on your production needs.',
  },
]

const stats = [
  ['4+', 'core product categories'],
  ['24/7', 'production-minded reliability'],
  ['100%', 'focused on metal folding'],
]

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="bg-slate-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Capabilities</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Strong machinery with a polished user experience
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              ARTITECT MACHINERY combines industrial strength with clear operation, helping your workshop work faster while maintaining professional finishing standards.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white">
                  <p className="text-3xl font-semibold text-amber-300">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/5 p-7 text-white shadow-2xl shadow-slate-950/20">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-slate-950">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSection
