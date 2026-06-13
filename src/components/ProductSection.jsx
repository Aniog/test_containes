import { Layers3, Ruler, Settings2 } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'A production-ready machine for accurate double bends, repeatable workflows, and refined sheet metal profiles.',
    features: ['Dual folding capability', 'Operator-friendly setup', 'Consistent finishing'],
    icon: Layers3,
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'A dependable folder for workshops that need smooth control, clean edges, and reliable everyday performance.',
    features: ['Clean bend lines', 'Workshop-ready footprint', 'Easy handling'],
    icon: Ruler,
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'A robust solution for forming metal panels with confidence, stability, and a refined industrial build.',
    features: ['Rigid frame design', 'Precision-focused operation', 'Durable components'],
    icon: Settings2,
  },
]

export default function ProductSection() {
  return (
    <section id="products" className="bg-slate-50 px-6 py-20 text-slate-950 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p id="products-eyebrow" className="text-sm font-semibold uppercase tracking-widest text-amber-700">Product range</p>
          <h2 id="products-title" className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Folding machinery for professional sheet metal applications.
          </h2>
          <p id="products-subtitle" className="mt-5 text-lg leading-8 text-slate-600">
            From double folders to metal folding machines, our product language is simple: strong machines, precise bends, and a user-friendly experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative overflow-hidden bg-slate-900">
                <img
                  alt={product.title}
                  className="aspect-video w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
                  data-strk-img-id={`product-${product.id}-img-c9e1d8`}
                  data-strk-img={`[product-${product.id}-desc] [product-${product.id}-title] [products-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                />
                <div className="absolute left-5 top-5 rounded-2xl bg-amber-400 p-3 text-slate-950 shadow-lg">
                  <product.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-7">
                <h3 id={`product-${product.id}-title`} className="text-2xl font-semibold tracking-tight text-slate-950">{product.title}</h3>
                <p id={`product-${product.id}-desc`} className="mt-3 text-base leading-7 text-slate-600">{product.description}</p>
                <ul className="mt-6 space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
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
