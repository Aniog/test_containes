import { stats } from './content'

const StatsStrip = () => {
  return (
    <section className="bg-white py-6">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 lg:grid-cols-3 lg:px-8">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-stone-200 bg-stone-50 px-6 py-5 text-slate-950 shadow-sm"
          >
            <p className="text-sm font-medium text-slate-500">{item.label}</p>
            <p className="mt-2 text-lg font-semibold text-slate-950">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsStrip
