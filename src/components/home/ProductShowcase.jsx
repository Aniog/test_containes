import { ChevronRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    description: 'A robust solution for precise two-way folding, efficient batch work, and repeatable sheet metal profiles.',
    tags: ['Double folding machine', 'Double folder', 'Production-ready'],
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    description: 'User-friendly folding equipment for workshops producing panels, trims, ducts, covers, and architectural metal parts.',
    tags: ['Sheet metal folder', 'Metal folder', 'Workshop friendly'],
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    description: 'Engineered for clean bends, stable clamping, and dependable daily operation across a wide range of folding tasks.',
    tags: ['Metal folding machine', 'Metal folder machine', 'Clean bends'],
  },
]

export default function ProductShowcase() {
  return (
    <section id="products" className="bg-stone-50 py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <p id="products-eyebrow" className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
              Product range
            </p>
            <h2 id="products-title" className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Machines built around your folding workflow.
            </h2>
          </div>
          <p id="products-subtitle" className="text-lg leading-8 text-slate-700">
            From double folder systems to sheet metal folding machines, ARTITECT MACHINERY focuses on equipment that helps operators work with confidence and consistency.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product) => {
            const titleId = `product-${product.id}-title`
            const descId = `product-${product.id}-desc`
            return (
              <article key={product.id} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="overflow-hidden bg-slate-200">
                  <img
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                    data-strk-img-id={`artitect-product-${product.id}-d31e8f`}
                    data-strk-img={`[${descId}] [${titleId}] [products-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                  />
                </div>
                <div className="p-6 md:p-7">
                  <h3 id={titleId} className="text-2xl font-semibold tracking-tight text-slate-950">
                    {product.name}
                  </h3>
                  <p id={descId} className="mt-3 text-base leading-7 text-slate-700">
                    {product.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-amber-700">
                    Ask about this machine
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
