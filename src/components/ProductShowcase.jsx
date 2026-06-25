import { Gauge, Layers3, Settings2 } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    description: 'A professional double folding solution for repeatable bends, efficient workflow, and clean sheet metal finishing.',
    features: ['Dual-direction folding', 'Fast setup adjustments', 'Smooth production flow'],
    icon: Gauge,
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    description: 'A dependable folder for workshops that need precise angles, strong clamping, and simple operator controls.',
    features: ['Stable clamping', 'Accurate angle control', 'Workshop-friendly footprint'],
    icon: Layers3,
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    description: 'Built for durable everyday use across roofing, panels, cabinets, HVAC parts, and custom fabrication.',
    features: ['Heavy-duty frame', 'Consistent bend quality', 'Serviceable structure'],
    icon: Settings2,
  },
]

export default function ProductShowcase() {
  return (
    <section id="products" className="bg-slate-50 py-16 text-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Product focus</p>
          <h2 id="products-title" className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Folding machinery designed around the operator.
          </h2>
          <p id="products-subtitle" className="mt-5 text-lg leading-8 text-slate-600">
            From double folders to sheet metal folding machines, each ARTITECT product is presented with clarity so your team can choose the right equipment faster.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon
            const titleId = `product-${product.id}-title`
            const descId = `product-${product.id}-desc`

            return (
              <article key={product.id} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    data-strk-img-id={`artitect-product-${product.id}-img-73b1c8`}
                    data-strk-img={`[${descId}] [${titleId}] [products-subtitle] [products-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute left-5 top-5 rounded-2xl bg-slate-950/85 p-3 text-amber-300 shadow-lg backdrop-blur">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 id={titleId} className="text-2xl font-semibold tracking-tight text-slate-950">{product.name}</h3>
                  <p id={descId} className="mt-4 text-base leading-7 text-slate-600">{product.description}</p>
                  <ul className="mt-6 space-y-3 text-sm font-medium text-slate-700">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-amber-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
