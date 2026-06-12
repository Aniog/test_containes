import { CheckCircle2 } from 'lucide-react'

const products = [
  {
    title: 'Double Folding Machine',
    description: 'A refined solution for fast, accurate folding from both directions with repeatable output.',
    imageId: 'product-double-folding-machine-41d8aa',
    titleId: 'product-double-folding-title',
    descId: 'product-double-folding-desc',
    features: ['Two-way folding workflow', 'Consistent bend quality', 'Operator-friendly controls'],
  },
  {
    title: 'Sheet Metal Folder',
    description: 'Reliable folding for common fabrication work, panels, flashings, trims, and metal components.',
    imageId: 'product-sheet-metal-folder-72e0bc',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
    features: ['Clean edge forming', 'Stable clamping support', 'Versatile shop use'],
  },
  {
    title: 'Metal Folding Machine',
    description: 'Durable machinery built to support demanding production environments and confident operators.',
    imageId: 'product-metal-folding-machine-95c4df',
    titleId: 'product-metal-folding-machine-title',
    descId: 'product-metal-folding-machine-desc',
    features: ['Robust construction', 'Smooth daily operation', 'Long-term production value'],
  },
]

const productTags = [
  'Double folder',
  'Sheet metal folding machine',
  'Metal folder',
  'Metal folder machine',
  'Metal folding machine',
]

export default function ProductSection() {
  return (
    <section id="products" className="bg-ivory py-16 text-graphite md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-steel">Product range</p>
          <h2 id="products-heading" className="mt-4 text-3xl font-black tracking-tight text-graphite sm:text-5xl">
            Folding machines made easy to choose and easy to operate.
          </h2>
          <p className="mt-5 text-lg leading-8 text-graphite/70">
            From double folders to sheet metal folding machines, ARTITECT MACHINERY helps teams match the right system to their production goals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.title} className="overflow-hidden rounded-3xl border border-graphite/10 bg-white text-graphite shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <img
                alt={`${product.title} by ARTITECT MACHINERY`}
                className="h-56 w-full bg-mist object-cover"
                data-strk-img-id={product.imageId}
                data-strk-img={`[${product.descId}] [${product.titleId}] [products-heading]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3Crect width='4' height='3' fill='%23E8EDF0'/%3E%3C/svg%3E"
              />
              <div className="p-7">
                <h3 id={product.titleId} className="text-2xl font-black tracking-tight text-graphite">{product.title}</h3>
                <p id={product.descId} className="mt-3 text-base leading-7 text-graphite/70">{product.description}</p>
                <ul className="mt-6 space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm font-semibold text-graphite/80">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-steel" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {productTags.map((tag) => (
            <span key={tag} className="rounded-full border border-steel/20 bg-white px-4 py-2 text-sm font-bold text-steel shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
