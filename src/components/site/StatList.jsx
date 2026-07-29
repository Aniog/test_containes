const StatList = ({ items }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="rounded-3xl border border-brand-line bg-white p-5 shadow-card">
          <p className="text-2xl font-semibold tracking-tight text-brand-ink">{item.value}</p>
          <p className="mt-2 text-sm leading-6 text-brand-slate">{item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default StatList
