import { BadgeCheck, Clock3, Ruler, Wrench } from 'lucide-react'

const capabilities = [
  {
    title: 'Precision bending',
    text: 'Support consistent folding angles and smooth edges for high-quality sheet metal parts.',
    icon: Ruler,
  },
  {
    title: 'Operator-friendly controls',
    text: 'Clear operation flow helps teams reduce training time and keep production moving.',
    icon: BadgeCheck,
  },
  {
    title: 'Durable construction',
    text: 'Rigid frames and practical access points make the machines dependable in daily use.',
    icon: Wrench,
  },
  {
    title: 'Efficient output',
    text: 'Designed to improve setup speed and repeatability for small batches or ongoing production.',
    icon: Clock3,
  },
]

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-white py-16 text-slate-950 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Capabilities</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Practical performance for real fabrication work.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            ARTITECT MACHINERY focuses on folding equipment that feels refined, simple to evaluate, and ready for demanding industrial environments.
          </p>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-300">Popular applications</p>
            <p className="mt-3 text-lg leading-8 text-slate-100">
              Roofing panels, architectural trim, cabinets, HVAC components, enclosures, sign making, and custom sheet metal production.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {capabilities.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-950 shadow-sm">
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
