import { ArrowUpRight } from 'lucide-react'

const products = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folder Machine',
  'Metal Folding Machine',
]

function ProductGrid() {
  return (
    <section id="products" className="bg-slate-950 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Product range</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">A complete folding lineup presented with clarity.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">Your visitors can quickly understand the product family, compare equipment naming, and identify the machine style that best matches their fabrication workflow.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-6 text-slate-200">
            Structured for manufacturers, distributors, and technical buyers.
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <article key={product} className="group rounded-[1.75rem] border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-slate-900">
              <div className="flex items-start justify-between gap-4">
                <p className="rounded-full bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">0{index + 1}</p>
                <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-amber-300" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">{product}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">A polished presentation for buyers looking for dependable metal folding capacity, clean machine positioning, and straightforward product understanding.</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-slate-200">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Precision folding</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Operator friendly</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Industrial finish</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
