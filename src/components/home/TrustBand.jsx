const stats = [
  { value: 'Premium', label: 'visual positioning for industrial buyers' },
  { value: 'Clear', label: 'section structure for quick scanning' },
  { value: 'Responsive', label: 'layout across desktop and mobile' },
]

const TrustBand = () => {
  return (
    <section className="bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Why this site works</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-slate-950 md:text-4xl">Professional enough for engineers, simple enough for decision-makers.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.value} className="rounded-3xl bg-slate-100 px-5 py-6 text-slate-950">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustBand
