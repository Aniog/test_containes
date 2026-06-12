import { MoveDiagonal, Settings2, ShieldCheck } from 'lucide-react'

const products = [
  {
    name: 'Double Folding Machine',
    description: 'A robust solution for high-precision double bending, smooth material control, and professional sheet metal production.',
    imgId: 'product-double-folding-machine-c31e72',
    titleId: 'product-double-folding-machine-title',
    descId: 'product-double-folding-machine-desc',
  },
  {
    name: 'Double Folder',
    description: 'Compact, operator-friendly folding equipment for workshops that need repeatable results without unnecessary complexity.',
    imgId: 'product-double-folder-b84d20',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    name: 'Sheet Metal Folding Machine',
    description: 'Engineered for clean edges, controlled bends, and versatile production across architectural and industrial metalwork.',
    imgId: 'product-sheet-metal-folding-machine-f92a64',
    titleId: 'product-sheet-metal-folding-machine-title',
    descId: 'product-sheet-metal-folding-machine-desc',
  },
]

const features = [
  { icon: MoveDiagonal, label: 'Clean, consistent folds' },
  { icon: Settings2, label: 'Simple production setup' },
  { icon: ShieldCheck, label: 'Built for long service life' },
]

const ProductShowcase = () => {
  return (
    <section id="products" className="bg-slate-50 py-20 text-slate-950 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Products</p>
          <h2 id="products-title" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Machinery for precise metal folding work
          </h2>
          <p id="products-subtitle" className="mt-5 text-lg leading-8 text-slate-600">
            From metal folder machines to full sheet metal folding systems, ARTITECT MACHINERY focuses on reliable performance and approachable operation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <img
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                data-strk-img-id={product.imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}] [products-subtitle] [products-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
              />
              <div className="p-7">
                <h3 id={product.titleId} className="text-2xl font-semibold tracking-tight text-slate-950">{product.name}</h3>
                <p id={product.descId} className="mt-4 text-base leading-7 text-slate-600">{product.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 text-slate-900">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-amber-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-base font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
