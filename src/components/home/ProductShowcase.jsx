import { Check, Layers3 } from 'lucide-react'
import { productKeywords, products } from '@/data/siteContent'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'/%3E'

export default function ProductShowcase() {
  return (
    <section id="products" className="bg-steel-50 py-16 text-machine-900 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-brass-100 px-4 py-2 text-sm font-semibold text-machine-900">
            <Layers3 className="h-4 w-4 text-brass-700" /> Product range
          </p>
          <h2 id="products-title" className="text-3xl font-semibold tracking-tight text-machine-950 md:text-5xl">
            Focused machinery for folding metal cleanly and confidently.
          </h2>
          <p id="products-subtitle" className="mt-5 text-base leading-7 text-machine-600 md:text-lg">
            From a double folder to a sheet metal folding machine, ARTITECT MACHINERY presents clear options for workshops and production teams.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {productKeywords.map((keyword) => (
            <span key={keyword} className="rounded-full border border-steel-300 bg-white px-4 py-2 text-sm font-medium text-machine-700 shadow-soft">
              {keyword}
            </span>
          ))}
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-[1.75rem] border border-steel-200 bg-white text-machine-900 shadow-soft">
              <div className="aspect-[4/3] overflow-hidden bg-steel-200">
                <img
                  alt={product.name}
                  className="h-full w-full object-cover"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src={placeholder}
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass-700">{product.label}</p>
                <h3 id={product.titleId} className="mt-3 text-2xl font-semibold text-machine-950">{product.name}</h3>
                <p id={product.descId} className="mt-3 text-sm leading-6 text-machine-600">{product.description}</p>
                <ul className="mt-5 space-y-3">
                  {product.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-medium text-machine-700">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-steel-100 text-brass-700"><Check className="h-4 w-4" /></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
