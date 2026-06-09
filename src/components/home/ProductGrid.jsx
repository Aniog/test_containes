import SectionHeading from './SectionHeading'

const products = [
  {
    name: 'Double Folding Machine',
    summary:
      'A premium option for high-precision folding workflows where consistency and clean results matter most.',
    tags: ['Precision bends', 'Stable output', 'Premium finish'],
  },
  {
    name: 'Double Folder',
    summary:
      'Designed for fast handling and repeatable folding performance in demanding workshop environments.',
    tags: ['Operator friendly', 'Reliable cycle flow', 'Workshop ready'],
  },
  {
    name: 'Sheet Metal Folder',
    summary:
      'A practical solution for shaping sheet metal panels with confidence across everyday fabrication tasks.',
    tags: ['Versatile use', 'Simple control', 'Clean edges'],
  },
  {
    name: 'Sheet Metal Folding Machine',
    summary:
      'Balances production strength and elegant engineering for teams that need both efficiency and finish quality.',
    tags: ['Production support', 'Strong structure', 'Consistent folding'],
  },
  {
    name: 'Metal Folder',
    summary:
      'An accessible machine category for businesses seeking straightforward capability with a refined product experience.',
    tags: ['Easy adoption', 'Dependable build', 'Everyday output'],
  },
  {
    name: 'Metal Folding Machine',
    summary:
      'A complete folding system approach for manufacturers focused on accurate form, speed, and durability.',
    tags: ['Modern fabrication', 'Accurate forming', 'Built to last'],
  },
]

const ProductGrid = () => (
  <section id="machines" className="bg-stone-50 py-16 lg:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeading
        eyebrow="Machines"
        title="A focused range for serious sheet metal production"
        description="We position every product category clearly so visitors can understand the difference between each folding solution at a glance."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.name}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-200/70"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
                Product
              </p>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                Industrial
              </span>
            </div>
            <h3 className="mt-5 font-serif text-2xl text-slate-900">
              {product.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {product.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default ProductGrid
