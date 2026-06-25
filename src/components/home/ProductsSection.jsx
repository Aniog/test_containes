import { ArrowRight } from 'lucide-react'
import { products } from './content'

const ProductsSection = () => {
  return (
    <section id="products" className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            Product family
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Folding machinery for modern sheet metal production.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
            ARTITECT MACHINERY presents a focused range of double folding machine,
            double folder, sheet metal folder, and metal folding machine solutions for
            fabrication teams that care about performance and usability.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white text-slate-950 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)]"
            >
              <div className="p-4">
                <img
                  alt={product.title}
                  className="h-60 w-full rounded-3xl object-cover"
                  data-strk-img-id={product.imageId}
                  data-strk-img={`[${product.descriptionId}] [${product.titleId}] [hero-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>

              <div className="px-6 pb-6">
                <h3
                  id={product.titleId}
                  className="text-2xl font-semibold tracking-tight text-slate-950"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descriptionId}
                  className="mt-3 text-sm leading-6 text-slate-600"
                >
                  {product.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {product.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700"
                    >
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 transition hover:text-amber-600"
                >
                  Discuss this machine
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
