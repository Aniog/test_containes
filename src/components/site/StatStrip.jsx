const StatStrip = ({ items }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <p className="text-2xl font-bold text-slate-900">{item.value}</p>
          <p className="mt-2 text-sm text-slate-600">{item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default StatStrip
