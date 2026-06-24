import { ChevronRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-efficiency equipment for repeatable double folds on professional sheet metal work.',
    features: ['Double-sided folding', 'Stable pressure', 'Clean bend lines'],
    imgId: 'product-double-folding-machine-d4c7a1',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'A user-friendly folder for workshops that need accurate forming with simple operation.',
    features: ['Quick setup', 'Precise clamping', 'Workshop friendly'],
    imgId: 'product-sheet-metal-folder-f2b0e8',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Durable metal folding machinery made for production lines, custom fabrication, and daily use.',
    features: ['Heavy-duty frame', 'Smooth control', 'Reliable output'],
    imgId: 'product-metal-folding-machine-6e91b3',
  },
]

const productTerms = [
  'Double folder',
  'Sheet metal folding machine',
  'Metal folder',
  'Metal folder machine',
]

function ProductShowcase() {
  return (
    <section id="products" className="bg-slate-50 py-20 text-slate-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-700">Product Range</p>
          <h2 id="products-title" className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Folding machines for precise sheet metal work.
          </h2>
          <p id="products-subtitle" className="mt-5 text-lg leading-8 text-slate-700">
            Choose a machine category that matches your workflow, from compact metal folders to robust double folding systems for larger production needs.
          </p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {products.map((product) => {
            const titleId = `product-${product.id}-title`
            const descId = `product-${product.id}-desc`

            return (
              <article key={product.id} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-slate-950 shadow-lg shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-300/60">
                <img
                  alt={product.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${descId}] [${titleId}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-7">
                  <h3 id={titleId} className="text-2xl font-bold text-slate-950">{product.title}</h3>
                  <p id={descId} className="mt-3 leading-7 text-slate-700">{product.description}</p>
                  <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-700">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <ChevronRight className="h-4 w-4 text-amber-600" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {productTerms.map((term) => (
            <span key={term} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">
              {term}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
