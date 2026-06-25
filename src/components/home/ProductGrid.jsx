const products = [
  {
    name: 'Double Folding Machine',
    description: 'For high-throughput lines that need strong repeatability, efficient handling, and refined bend accuracy.',
  },
  {
    name: 'Double Folder',
    description: 'A clean, production-friendly solution for teams seeking fast setup, dependable motion, and operator comfort.',
  },
  {
    name: 'Sheet Metal Folder',
    description: 'Ideal for fabrication shops that value stable folding quality, versatile material support, and easy control.',
  },
  {
    name: 'Sheet Metal Folding Machine',
    description: 'Built to help modern manufacturers scale output while keeping workflows precise, smooth, and consistent.',
  },
  {
    name: 'Metal Folder',
    description: 'A practical option for accurate bending tasks where durability, usability, and floor efficiency all matter.',
  },
  {
    name: 'Metal Folder Machine',
    description: 'Designed for steady industrial performance with intuitive operation and premium mechanical confidence.',
  },
  {
    name: 'Metal Folding Machine',
    description: 'A reliable choice for businesses that want elegant engineering without sacrificing everyday usability.',
  },
]

const ProductGrid = () => {
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Product range</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-slate-950 md:text-4xl">A focused lineup for modern sheet metal forming operations.</h2>
        <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">Each machine category is presented with a premium, easy-to-understand experience so buyers can quickly identify the right fit for their production goals.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <article key={product.name} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <span className="w-fit rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">0{index + 1}</span>
            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-slate-950">{product.name}</h3>
            <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{product.description}</p>
            <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5 text-sm text-slate-500">
              <span>Elegant build</span>
              <span>User-friendly flow</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductGrid
