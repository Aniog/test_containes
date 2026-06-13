const products = [
  {
    name: 'Double Folding Machine',
    titleId: 'product-double-folding-machine-title',
    descId: 'product-double-folding-machine-desc',
    imageId: 'product-double-folding-machine-img-c3d2a1',
    description:
      'Premium high-capacity equipment for controlled two-direction folding with reliable repeat accuracy.',
  },
  {
    name: 'Double Folder',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
    imageId: 'product-double-folder-img-e4f5g6',
    description:
      'A compact production-ready solution for workshops that need speed, clean finishes, and simple operation.',
  },
  {
    name: 'Sheet Metal Folder',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
    imageId: 'product-sheet-metal-folder-img-h7i8j9',
    description:
      'Designed for fabricators who need versatile folding performance across multiple material applications.',
  },
  {
    name: 'Sheet Metal Folding Machine',
    titleId: 'product-sheet-metal-folding-machine-title',
    descId: 'product-sheet-metal-folding-machine-desc',
    imageId: 'product-sheet-metal-folding-machine-img-k1l2m3',
    description:
      'Delivers precise repeatable bends while helping teams maintain smooth workflow and consistent quality.',
  },
  {
    name: 'Metal Folder',
    titleId: 'product-metal-folder-title',
    descId: 'product-metal-folder-desc',
    imageId: 'product-metal-folder-img-n4o5p6',
    description:
      'A durable machine platform balancing robust performance with approachable controls and serviceability.',
  },
  {
    name: 'Metal Folder Machine',
    titleId: 'product-metal-folder-machine-title',
    descId: 'product-metal-folder-machine-desc',
    imageId: 'product-metal-folder-machine-img-q7r8s9',
    description:
      'Engineered to support efficient production output with a polished industrial finish and practical layout.',
  },
  {
    name: 'Metal Folding Machine',
    titleId: 'product-metal-folding-machine-title',
    descId: 'product-metal-folding-machine-desc',
    imageId: 'product-metal-folding-machine-img-t1u2v3',
    description:
      'For teams that value clean bend results, reliable uptime, and confident operation across long shifts.',
  },
]

function ProductShowcase() {
  return (
    <section id="products" className="bg-stone-50 py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">
            Product range
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Folding machines built to match modern fabrication demands.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
            ARTITECT MACHINERY offers a focused lineup of folding solutions that blend
            engineering confidence with user-friendly operation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                alt={product.name}
                className="h-60 w-full object-cover"
                data-strk-img-id={product.imageId}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <h3 id={product.titleId} className="text-xl font-semibold text-slate-950">
                  {product.name}
                </h3>
                <p id={product.descId} className="mt-3 text-sm leading-6 text-slate-600">
                  {product.description}
                </p>
                <div className="mt-6 inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                  Precision engineered
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
