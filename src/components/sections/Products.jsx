import { ArrowRight } from 'lucide-react'
import { products } from '@/data/catalog'

export default function Products() {
  return (
    <section id="products" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Our Products
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            A Folder for Every Fabrication Need
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From compact light-gauge folders to heavy-duty double folding
            machines, our range covers the full spectrum of sheet-metal folding.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-slate-900"
                >
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-amber-600">
                  {product.tagline}
                </p>
                <p
                  id={product.descId}
                  className="mt-3 text-sm leading-relaxed text-slate-600"
                >
                  {product.description}
                </p>

                <dl className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <dt className="text-slate-500">{spec.label}</dt>
                      <dd className="font-semibold text-slate-900">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700"
                >
                  Get a quote
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
