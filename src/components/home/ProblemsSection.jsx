import { problems } from '@/data/site'
import Icon from '@/components/shared/Icon'
import SectionHeading from '@/components/shared/SectionHeading'

export default function ProblemsSection() {
  return (
    <section className="section-pad bg-navy">
      <div className="container-page">
        <SectionHeading
          eyebrow="Problems We Solve"
          title="The risks of buying from China — handled"
          subtitle="Most sourcing problems come down to a few recurring issues. Here is how we address each one."
          light
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <div key={p.id} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber/15 text-amber">
                <Icon name={p.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
