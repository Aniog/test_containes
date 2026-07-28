import { stats } from "@/data/trust"

export default function StatsBar() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <dt className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
