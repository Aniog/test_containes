import { caseStudies } from '@/data/siteContent'

const CaseStudyGrid = () => {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      {caseStudies.map((item) => (
        <article key={item.company} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">Case study</p>
          <h3 className="mt-4 text-xl font-semibold text-brand-navy">{item.company}</h3>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
            <p><span className="font-semibold text-brand-navy">Challenge:</span> {item.challenge}</p>
            <p><span className="font-semibold text-brand-navy">Solution:</span> {item.solution}</p>
            <p><span className="font-semibold text-brand-navy">Result:</span> {item.result}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default CaseStudyGrid
