import { ArrowUpRight } from 'lucide-react'
import { productLines } from './siteData'

export default function ProductSection() {
  return (
    <section id="products" className="bg-slate-50 px-6 py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Product range</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Machines made for clean bends and confident production.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            From compact metal folder machines to advanced double folding machine lines, ARTITECT MACHINERY helps manufacturers choose equipment that feels precise, approachable, and ready for daily use.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {productLines.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <img
                className="h-56 w-full bg-slate-200 object-cover"
                alt={product.title}
                data-strk-img-id={product.imageId}
                data-strk-img={`[${product.subtitleId}] [${product.titleId}] [product-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 id={product.titleId} className="text-2xl font-bold text-slate-950">{product.title}</h3>
                    <p id={product.subtitleId} className="mt-2 text-sm leading-6 text-slate-600">{product.subtitle}</p>
                  </div>
                  <ArrowUpRight className="h-6 w-6 flex-none text-amber-600" />
                </div>
                <ul className="space-y-3 border-t border-slate-200 pt-5">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
      <span id="product-section-title" className="sr-only">sheet metal folding machine and metal folder products</span>
    </section>
  )
}
