import { Gauge, Layers3, Settings2, Sparkles } from 'lucide-react'

const products = [
  {
    title: 'Double folding machine',
    description:
      'A powerful system for high-volume fabrication lines that need repeatable folding precision and stable throughput.',
    icon: Gauge,
  },
  {
    title: 'Double folder',
    description:
      'Designed for manufacturers seeking efficient bidirectional folding support with reduced handling effort.',
    icon: Sparkles,
  },
  {
    title: 'Sheet metal folder',
    description:
      'A dependable solution for fabricators who need clean bends, controlled motion, and easy daily operation.',
    icon: Layers3,
  },
  {
    title: 'Sheet metal folding machine',
    description:
      'Built to support demanding jobs with robust structure, predictable performance, and a refined user experience.',
    icon: Settings2,
  },
  {
    title: 'Metal folder',
    description:
      'A versatile option for teams that want solid forming capability in a streamlined machine platform.',
    icon: Layers3,
  },
  {
    title: 'Metal folder machine',
    description:
      'An operator-friendly platform that balances industrial capability with easy workflow control and service access.',
    icon: Gauge,
  },
  {
    title: 'Metal folding machine',
    description:
      'A modern folding solution shaped for precision manufacturing, quality output, and long-term reliability.',
    icon: Sparkles,
  },
]

const ProductHighlights = () => {
  return (
    <section id="products" className="bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-600">
            Product range
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Folding machinery designed for sheet metal specialists.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            From flexible workshop setups to demanding production lines, our range is
            positioned to help fabricators improve quality, workflow clarity, and
            output confidence.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-slate-950 shadow-sm shadow-slate-950/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-amber-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductHighlights
