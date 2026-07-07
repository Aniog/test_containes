import ProductCard from '@/components/shop/ProductCard.jsx'

export default function Bestsellers({ products, onAddToCart }) {
  return (
    <section id="bestsellers" className="bg-velmora-ivory px-5 py-16 text-velmora-ink md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl leading-none md:text-6xl">Jewelry with a quiet glow</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-bronze">
            Our most reached-for pieces, designed to layer beautifully and arrive gift-ready.
          </p>
        </div>
        <div className="grid gap-x-5 gap-y-11 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}
