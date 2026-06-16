import { stats } from '@/data/catalog'

export default function Stats() {
  return (
    <section className="bg-paper py-24 md:py-32" aria-label="Key statistics">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow eyebrow-line text-brass-2">By the numbers</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            Twenty-five years of engineering folding machines.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ash">
            From a single workbench in Stuttgart to a global footprint, ARTITECT
            has shipped more than 4,800 folding machines. Every one of them
            is acceptance-tested with a customer part before it leaves the floor.
          </p>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line-2 bg-line-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-3 bg-paper p-8 md:p-10"
            >
              <dt className="text-xs font-medium uppercase tracking-eyebrow text-ash">
                {stat.label}
              </dt>
              <dd className="text-5xl font-semibold leading-none tracking-tight text-ink md:text-6xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
