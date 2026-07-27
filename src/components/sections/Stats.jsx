import { stats } from '@/data/content'

export default function Stats() {
  return (
    <section className="bg-white border-b border-border-base">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-12">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="text-3xl sm:text-4xl font-bold text-primary">
                {s.value}
              </dt>
              <dd className="mt-2 text-sm text-slate-body">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
