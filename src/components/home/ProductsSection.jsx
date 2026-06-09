export default function ProductsSection({ productCards }) {
  return (
    <section id="products" className="bg-stone-100 py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col gap-5 md:max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-amber-600">
            Product range
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Folding machines designed for premium fabrication workflows.
          </h2>
          <p className="text-base leading-7 text-slate-600 md:text-lg">
            From double folding machine applications to all-around metal folder
            machine needs, ARTITECT MACHINERY supports fabrication teams that
            want performance, clarity, and a more polished production experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {productCards.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  alt={product.name}
                  className="h-full w-full object-cover"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [${product.termsId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>

              <div className="space-y-5 p-6 md:p-8">
                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-widest text-amber-600">
                    Core machine
                  </p>
                  <h3 id={product.titleId} className="text-2xl font-semibold text-slate-900">
                    {product.name}
                  </h3>
                  <p id={product.descId} className="text-sm leading-6 text-slate-600">
                    {product.summary}
                  </p>
                  <p id={product.termsId} className="text-sm font-medium text-slate-700">
                    Search focus: {product.terms.join(', ')}
                  </p>
                </div>

                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-2xl bg-stone-100 px-4 py-3 text-sm leading-6 text-slate-700"
                    >
                      {feature}
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
