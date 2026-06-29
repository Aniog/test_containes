import { Cog, Layers2, Sparkles, SquareStack, Workflow, Wrench } from 'lucide-react'

const products = [
  {
    title: 'Double folding machine',
    description:
      'A premium solution for fabricators who need clean bends, stable output, and reliable performance across demanding production cycles.',
    icon: Layers2,
  },
  {
    title: 'Double folder',
    description:
      'Designed for streamlined handling and practical day-to-day operation, balancing precision engineering with user-friendly control.',
    icon: Workflow,
  },
  {
    title: 'Sheet metal folder',
    description:
      'Built to support accurate forming for workshops focused on speed, repeatability, and professional finish quality.',
    icon: SquareStack,
  },
  {
    title: 'Sheet metal folding machine',
    description:
      'An industrial-grade machine platform for high-value metalwork where clarity, control, and finish matter just as much as throughput.',
    icon: Cog,
  },
  {
    title: 'Metal folder',
    description:
      'A versatile folding option for teams that want strong capability in a layout that remains intuitive for operators.',
    icon: Wrench,
  },
  {
    title: 'Metal folder machine',
    description:
      'Combines durable construction with a polished, efficient workflow that helps reduce friction on the shop floor.',
    icon: Sparkles,
  },
  {
    title: 'Metal folding machine',
    description:
      'A dependable machinery category for businesses that need scalable, elegant performance in modern metal fabrication.',
    icon: Layers2,
  },
]

function ProductHighlights() {
  return (
    <section id="products" className="bg-brand-mist py-16 text-brand-copy md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-champagne-deep">
            Product focus
          </p>
          <h2
            id="products-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-brand-copy md:text-4xl"
          >
            A specialized product range built around advanced folding performance.
          </h2>
          <p
            id="products-subtitle"
            className="mt-5 text-base leading-8 text-brand-soft md:text-lg"
          >
            ARTITECT MACHINERY presents a focused machinery portfolio for sheet
            metal professionals who want elegant design, practical operation, and
            strong industrial capability in the same machine family.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon

            return (
              <article
                key={product.title}
                className="rounded-3xl border border-brand-line bg-white p-7 text-brand-copy shadow-xl shadow-slate-950/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-ink text-brand-champagne">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-brand-copy">
                  {product.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-soft md:text-base">
                  {product.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductHighlights
