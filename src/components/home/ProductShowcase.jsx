import { ChevronRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    summary: 'A refined solution for high-quality double folds and repeatable bends in demanding sheet metal production.',
    points: ['Accurate bend alignment', 'Smooth material handling', 'Built for daily output'],
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    summary: 'A practical folder for workshops needing clean folding performance across panels, trims, and fabrication parts.',
    points: ['Clean edge finishing', 'Easy operator workflow', 'Stable folding force'],
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    summary: 'A durable metal folding machine for manufacturers that need dependable results and simple maintenance.',
    points: ['Strong frame structure', 'Consistent angle control', 'Service-friendly design'],
  },
]

const ProductShowcase = () => {
  return (
    <section id="products" className="bg-white py-20 text-slate-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-600">Product range</p>
          <h2 id="products-title" className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Folding machines for precise sheet metal work.
          </h2>
          <p id="products-subtitle" className="mt-5 text-lg leading-8 text-slate-600">
            From double folders to sheet metal folding machines, every ARTITECT solution is presented with clear operation, reliable output, and a polished industrial finish.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((product) => {
            const titleId = `product-${product.id}-title`
            const summaryId = `product-${product.id}-summary`

            return (
              <article key={product.id} className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <img
                  alt={product.name}
                  className="h-64 w-full object-cover"
                  data-strk-img-id={`artitect-product-${product.id}-c7e2a1`}
                  data-strk-img={`[${summaryId}] [${titleId}] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-6">
                  <div className="mb-4 inline-flex rounded-full bg-slate-950 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-300">
                    ARTITECT
                  </div>
                  <h3 id={titleId} className="text-2xl font-black text-slate-950">{product.name}</h3>
                  <p id={summaryId} className="mt-3 text-sm leading-7 text-slate-600">{product.summary}</p>
                  <ul className="mt-5 space-y-3">
                    {product.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <ChevronRight className="h-4 w-4 text-amber-600" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
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
