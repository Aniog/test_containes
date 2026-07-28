import { products } from '@/data/siteContent'

const ProductGrid = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <article key={product.title} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-blue">Products we source</p>
          <h3 className="mt-4 text-xl font-semibold text-brand-navy">{product.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
        </article>
      ))}
    </div>
  )
}

export default ProductGrid
