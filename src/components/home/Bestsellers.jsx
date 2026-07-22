import ProductCard from '@/components/products/ProductCard'

export default function Bestsellers({ products, onAdd }) {
  return (
    <section id="bestsellers" className="bg-velmora-porcelain py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 border-b border-velmora-mist pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-champagne">Most Loved</p>
            <h2 className="mt-3 font-serif text-5xl text-velmora-espresso md:text-6xl">Bestsellers</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-taupe">Five luminous signatures, designed to layer beautifully and arrive gift-ready.</p>
        </div>
        <div className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}
        </div>
      </div>
    </section>
  )
}
