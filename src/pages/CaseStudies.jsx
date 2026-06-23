import SectionHeading from '../components/SectionHeading.jsx'
import { caseStudies } from '../data/siteContent.js'

export default function CaseStudies() {
  return (
    <main className="bg-brand-surface text-brand-ink">
      <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="Case studies" title="Practical sourcing scenarios for overseas buyers" desc="These examples show how structured supplier screening, inspection planning, and production follow-up can support better buying decisions." /></div></section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div className="grid gap-6 lg:grid-cols-3">{caseStudies.map((study) => <article key={study.title} className="rounded-3xl border border-brand-border bg-white p-7 text-brand-ink shadow-sm"><p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">{study.industry}</p><h2 className="mt-4 text-2xl font-bold text-brand-ink">{study.title}</h2><div className="mt-6 space-y-4 text-sm leading-6 text-brand-muted"><p><strong className="text-brand-ink">Challenge:</strong> {study.challenge}</p><p><strong className="text-brand-ink">Approach:</strong> {study.approach}</p><p><strong className="text-brand-ink">Result:</strong> {study.result}</p></div></article>)}</div></section>
    </main>
  )
}
