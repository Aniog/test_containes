const CaseStudyCard = ({ study }) => {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
        <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
          {study.client}
        </span>
        <span>{study.sector}</span>
      </div>
      <div className="mt-6 space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            Challenge
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700">{study.challenge}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            Solution
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700">{study.solution}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            Outcome
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700">{study.outcome}</p>
        </div>
      </div>
    </article>
  )
}

export default CaseStudyCard
