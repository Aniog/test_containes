function CaseStudyGrid({ studies }) {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      {studies.map((study) => (
        <article
          key={study.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            {study.sector}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">{study.title}</h3>
          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm font-semibold text-slate-900">Challenge</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{study.challenge}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Action</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{study.action}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Outcome</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{study.outcome}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default CaseStudyGrid
