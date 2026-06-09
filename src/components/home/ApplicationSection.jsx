import { ArrowRight, Factory, Layers3, Ruler, ShieldCheck } from 'lucide-react'
import SectionHeading from './SectionHeading'

const applications = [
  {
    title: 'Architectural cladding',
    description: 'Support clean folds and polished visual results for facade systems and exterior detailing.',
    icon: Layers3,
  },
  {
    title: 'General fabrication',
    description: 'Give workshop teams dependable folding tools that fit repeatable day-to-day production work.',
    icon: Factory,
  },
  {
    title: 'Custom metal projects',
    description: 'Handle bespoke parts with the control needed for accurate dimensions and refined edges.',
    icon: Ruler,
  },
]

const benefits = [
  'User-friendly presentation for first-time visitors',
  'Elegant layout that reflects product quality',
  'Clear message around precision, durability, and workflow ease',
  'Ready for buyers comparing folding machine categories',
]

const ApplicationSection = () => (
  <section id="applications" className="bg-white py-16 lg:py-24">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
      <div>
        <SectionHeading
          eyebrow="Applications"
          title="Built for real production environments"
          description="Your visitors should quickly understand where these machines belong and why they are valuable in modern metalworking settings."
        />
        <div className="mt-10 grid gap-5">
          {applications.map(({ title, description, icon: Icon }) => (
            <article key={title} className="flex gap-4 rounded-[1.5rem] border border-slate-200 bg-stone-50 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-amber-300">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <aside id="why-us" className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Why ARTITECT MACHINERY</p>
        <h3 className="mt-4 font-serif text-4xl tracking-tight">A premium look that still feels easy to use</h3>
        <p className="mt-5 text-base leading-7 text-slate-300">
          The site experience is designed to feel sophisticated for decision-makers while staying clear and approachable for practical buyers.
        </p>
        <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3 text-amber-300">
            <ShieldCheck className="h-5 w-5" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em]">Core strengths</p>
          </div>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-200">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  </section>
)

export default ApplicationSection
