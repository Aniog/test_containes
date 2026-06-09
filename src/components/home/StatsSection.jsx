const stats = [
  ['Product language', 'Clear and category-led'],
  ['Visual tone', 'Elegant, structured, and readable'],
  ['Audience fit', 'Manufacturers, fabricators, and spec-driven buyers'],
  ['Primary promise', 'Precision folding with a user-friendly experience'],
]

const StatsSection = () => (
  <section className="border-y border-white/10 bg-slate-900 py-10">
    <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-8">
      {stats.map(([label, value]) => (
        <div key={label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">{label}</p>
          <p className="mt-4 text-lg leading-7 text-white">{value}</p>
        </div>
      ))}
    </div>
  </section>
)

export default StatsSection
