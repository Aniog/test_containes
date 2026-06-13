const CaseStudyGrid = ({ items }) => {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Case study
          </p>
          <h3 className="mt-4 text-xl font-semibold text-slate-900">
            {item.title}
          </h3>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
            <p>
              <span className="font-semibold text-slate-900">Challenge:</span>{' '}
              {item.challenge}
            </p>
            <p>
              <span className="font-semibold text-slate-900">Action:</span>{' '}
              {item.action}
            </p>
            <p>
              <span className="font-semibold text-slate-900">Result:</span>{' '}
              {item.result}
            </p>
          </div>
          <div className="mt-6 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900">
            {item.metric}
          </div>
        </article>
      ))}
    </div>
  )
}

export default CaseStudyGrid
