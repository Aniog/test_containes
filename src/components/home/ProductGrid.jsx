const products = [
  {
    title: 'Double folding machine',
    description: 'High-efficiency equipment for precise multi-side bending with dependable repeatability.',
  },
  {
    title: 'Double folder',
    description: 'A streamlined solution for faster part turnover and cleaner production flow.',
  },
  {
    title: 'Sheet metal folder',
    description: 'Built for accurate bends across demanding fabrication and enclosure work.',
  },
  {
    title: 'Sheet metal folding machine',
    description: 'Stable, operator-friendly machinery for consistent large-format and detailed folds.',
  },
  {
    title: 'Metal folder',
    description: 'Durable performance for workshops seeking practical reliability every day.',
  },
  {
    title: 'Metal folding machine',
    description: 'Designed to balance elegant engineering, productivity, and easy control.',
  },
]

const ProductGrid = () => {
  return (
    <section id="machines" className="bg-stone-100 py-16 text-slate-900 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Core product range</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Machinery options tailored for modern metal folding operations.
            </h2>
            <p className="text-base leading-7 text-slate-600 md:text-lg">
              From double folding machines to versatile sheet metal folders, our product line is built to support quality finishes, dependable throughput, and a user-friendly working rhythm.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-300 bg-white px-5 py-4 text-sm text-slate-700">
            Product focus: industrial folding accuracy, easy operation, long service life.
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.title} className="rounded-2xl border border-slate-200 bg-white p-7">
              <p className="text-xs uppercase tracking-[0.24em] text-amber-600">ARTITECT series</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{product.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{product.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
