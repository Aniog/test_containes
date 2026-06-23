import SectionHeader from '../components/SectionHeader.jsx'
import { caseStudies } from '../data/siteContent.js'

export default function CaseStudies() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Case studies" title="Practical examples of sourcing support" description="Representative scenarios showing how organized supplier screening, verification, and QC coordination can support better buying decisions." centered />
        </div>
      </section>
      <section className="pb-16 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {caseStudies.map((study) => (
            <article key={study.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold text-blue-700">{study.category}</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">{study.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">{study.summary}</p>
              <p className="mt-5 rounded-2xl bg-emerald-50 p-4 text-sm font-medium leading-6 text-emerald-900">{study.result}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
