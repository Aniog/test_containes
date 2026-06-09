export default function MetricStrip({ items }) {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
        {items.map((item) => (
          <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-3xl font-semibold tracking-tight text-slate-950">{item.value}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
