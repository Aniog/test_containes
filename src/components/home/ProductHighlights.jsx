const products = [
  {
    title: 'Double folding machine',
    description:
      'A premium production solution for shops that need efficient bending cycles, stable repeatability, and polished finished work.',
  },
  {
    title: 'Double folder',
    description:
      'A streamlined format for operators who value speed, controlled movement, and dependable results during repeated use.',
  },
  {
    title: 'Sheet metal folder',
    description:
      'Created for precise folding across a wide range of sheet applications with a user-friendly process from setup to finish.',
  },
  {
    title: 'Sheet metal folding machine',
    description:
      'Ideal for modern fabrication environments seeking strong capability, consistent line quality, and clear operating logic.',
  },
  {
    title: 'Metal folder',
    description:
      'A practical and refined option for businesses that need a versatile machine with a confident industrial presence.',
  },
  {
    title: 'Metal folder machine',
    description:
      'Balances robust performance and easy handling to support production teams, custom jobs, and everyday throughput.',
  },
  {
    title: 'Metal folding machine',
    description:
      'A complete category-leading approach centered on precision edges, reliable mechanics, and elegant equipment design.',
  },
]

const ProductHighlights = () => {
  return (
    <section id="products" className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-slate-500">
            Product range
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Built around the exact machinery terms your buyers search for.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-700 md:text-lg">
            ARTITECT MACHINERY showcases a focused range of folding solutions with language that is clear to both technical teams and commercial buyers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="rounded-[1.75rem] border border-slate-200 bg-stone-50 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white"
            >
              <div className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-amber-700">
                ARTITECT series
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                {product.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">{product.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductHighlights
