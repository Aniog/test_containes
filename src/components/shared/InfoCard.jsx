function InfoCard({ title, description, index, dark = false }) {
  return (
    <article
      className={`rounded-3xl border p-6 md:p-8 ${dark ? 'border-white/10 bg-white/5 text-white' : 'border-slate-200 bg-white text-slate-950 shadow-sm'}`}
    >
      {index ? (
        <p className={`text-sm font-medium uppercase tracking-[0.18em] ${dark ? 'text-emerald-300' : 'text-emerald-700'}`}>
          {index}
        </p>
      ) : null}
      <h3 className="mt-4 text-xl font-semibold tracking-tight">{title}</h3>
      <p className={`mt-3 text-base leading-7 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>
    </article>
  )
}

export default InfoCard
