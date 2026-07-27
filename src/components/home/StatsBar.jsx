import { stats } from '@/data/site'

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="container-page py-10">
        <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.id} className="text-center lg:text-left">
              <dt className="text-3xl md:text-4xl font-bold text-navy">{s.value}</dt>
              <dd className="mt-1 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
