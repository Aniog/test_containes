import SectionHeading from '@/components/ui/SectionHeading'
import Icon from '@/components/ui/Icon'
import { PROBLEMS } from '@/data/siteContent'

export default function HomeProblems() {
  return (
    <section className="bg-brand py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Problems We Solve"
          title="The risks of sourcing from China — handled"
          description="Importing directly sounds simple until something goes wrong. Here are the problems we prevent every day."
          light
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber/20 text-amber">
                <Icon name={p.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
