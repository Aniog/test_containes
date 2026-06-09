const StatsStrip = ({ items }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-3xl font-semibold tracking-tight text-slate-950">{item.value}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default StatsStrip
