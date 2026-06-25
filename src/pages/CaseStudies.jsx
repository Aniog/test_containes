import SectionHeading from '@/components/home/SectionHeading'
import { caseStudies } from '@/lib/pageData'

export default function CaseStudies() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case studies"
            title="Practical examples of China sourcing support"
            text="Every sourcing project is different. These examples reflect typical work patterns: supplier comparison, factory verification, inspection coordination, and production follow-up."
          />
        </div>
      </section>
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:px-8">
          {caseStudies.map((item) => (
            <article key={item.title} className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm lg:grid-cols-[0.8fr_1fr_1fr] lg:p-8">
              <h2 className="text-2xl font-bold text-slate-950">{item.title}</h2>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Challenge</p>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.challenge}</p>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Approach</p>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.approach}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 text-slate-950">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-700">Result</p>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
