const stats = [
  { label: 'Precision-focused engineering', value: 'High' },
  { label: 'Operator learning curve', value: 'Fast' },
  { label: 'Premium presentation', value: 'Built-in' },
  { label: 'Production confidence', value: 'Every shift' },
]

function CapabilityStats() {
  return (
    <section className="bg-slate-950 py-16 text-slate-100 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm font-medium text-slate-300">{stat.label}</p>
              <p className="mt-4 text-3xl font-semibold tracking-tight text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CapabilityStats
