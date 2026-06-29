import { ChevronRight } from 'lucide-react'
import { products } from './content'

function ProductGrid() {
  return (
    <section id="products" className="space-y-8">
      <div className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">Products</p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
          Machine solutions for precise and efficient metal folding.
        </h2>
        <p className="text-base leading-7 text-slate-600">
          ARTITECT MACHINERY presents a focused range of double folding and sheet metal folding solutions built for
          practical operation, clean output, and dependable shop-floor performance.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article key={product.name} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
            <div className="space-y-4">
              <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                Industrial equipment
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{product.name}</h3>
              <p className="text-sm leading-7 text-slate-600">{product.description}</p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-950">
              Built for fabrication teams
              <ChevronRight className="h-4 w-4 text-amber-600" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductGrid
