import { BadgeCheck, Handshake, Ruler, Settings2 } from 'lucide-react'

const advantages = [
  {
    icon: Ruler,
    title: 'Accurate folding geometry',
    text: 'Built to help operators create crisp, consistent bends with less rework and easier quality control.',
  },
  {
    icon: Settings2,
    title: 'Simple daily operation',
    text: 'Clear controls and practical setup steps keep the machine approachable for experienced teams and new operators.',
  },
  {
    icon: BadgeCheck,
    title: 'Durable industrial build',
    text: 'Strong frames, stable components, and reliable mechanics support demanding workshop and production environments.',
  },
  {
    icon: Handshake,
    title: 'Helpful product guidance',
    text: 'We help match your folding machine with material thickness, production goals, and available floor space.',
  },
]

function AdvantagesSection() {
  return (
    <section id="advantages" className="bg-white py-20 text-slate-950 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-700">Why Artitect</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Premium engineering with a practical user experience.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            ARTITECT MACHINERY focuses on sheet metal folding equipment that looks refined, performs reliably, and stays straightforward for the people using it every day.
          </p>
          <div className="mt-8 rounded-3xl bg-slate-950 p-7 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Designed for</p>
            <p className="mt-3 text-2xl font-bold text-white">Metal fabrication shops, roofing production, HVAC panels, architectural metalwork, and custom manufacturing.</p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {advantages.map((advantage) => {
            const Icon = advantage.icon
            return (
              <article key={advantage.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 text-slate-950 shadow-sm transition hover:bg-white hover:shadow-xl">
                <div className="mb-5 inline-flex rounded-2xl bg-amber-400 p-3 text-slate-950">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-950">{advantage.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{advantage.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AdvantagesSection
