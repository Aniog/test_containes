import { STATS } from "@/data/content"

export default function HomeStats() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.id} className="text-center md:text-left">
              <dt className="text-sm font-medium text-slate-500">
                {stat.label}
              </dt>
              <dd className="mt-1 text-3xl font-bold text-brand md:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-xs text-slate-400">
          Figures are illustrative of typical engagement scope.
        </p>
      </div>
    </section>
  )
}
