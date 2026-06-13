function ProcessStep({ number, title, description }) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-950/5">
      <span className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold tracking-[0.24em] text-amber-200">
        {number}
      </span>
      <h3 className="mt-5 text-2xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </article>
  )
}

export default ProcessStep
