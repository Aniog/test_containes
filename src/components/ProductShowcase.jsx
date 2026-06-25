import { ArrowUpRight, Gauge, Layers3, Ruler } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'A refined solution for two-sided folding workflows, helping operators improve throughput while keeping bend quality consistent.',
    icon: Layers3,
    imgId: 'artitect-product-double-folding-machine-c91e2a',
    titleId: 'product-double-folding-machine-title',
    descId: 'product-double-folding-machine-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'User-friendly folder systems for clean edges, accurate angles, and repeatable sheet metal fabrication results.',
    icon: Ruler,
    imgId: 'artitect-product-sheet-metal-folder-e37a8d',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Strong metal folding machine platforms made for fabrication teams that need reliable performance every shift.',
    icon: Gauge,
    imgId: 'artitect-product-metal-folding-machine-b82f4a',
    titleId: 'product-metal-folding-machine-title',
    descId: 'product-metal-folding-machine-desc',
  },
]

function ProductShowcase() {
  return (
    <section id="products" className="bg-slate-50 py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">Products</p>
          <h2 id="products-title" className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Folding machinery for demanding sheet metal work.
          </h2>
          <p id="products-subtitle" className="mt-5 text-lg leading-8 text-slate-600">
            Choose from double folders, sheet metal folding machines, metal folders, and metal folder machines built around practical operation and refined output.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <article key={product.id} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
                <div className="relative overflow-hidden bg-slate-200">
                  <img
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}] [products-subtitle] [products-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                  />
                  <div className="absolute left-5 top-5 rounded-full bg-white/95 p-3 text-slate-950 shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 id={product.titleId} className="text-2xl font-semibold tracking-tight text-slate-950">
                      {product.title}
                    </h3>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
                  </div>
                  <p id={product.descId} className="leading-7 text-slate-600">
                    {product.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['Precision', 'Durable', 'Easy to use'].map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
