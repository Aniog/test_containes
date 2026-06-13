function StatsBand({ items }) {
  return (
    <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="rounded-3xl bg-slate-50 p-5">
          <p className="text-3xl font-semibold tracking-tight text-slate-900">{item.value}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default StatsBand
