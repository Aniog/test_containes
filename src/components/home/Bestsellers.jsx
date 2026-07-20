import ProductCard from '@/components/products/ProductCard.jsx?velmora=bg-images'

export default function Bestsellers({ products, onAddToCart }) {
  return (
    <section id="shop" className="bg-velmora-ivory py-16 text-velmora-ink sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-ui text-velmora-gold">Most gifted, most worn</p>
            <h2 id="bestsellers-title" className="mt-3 font-serif text-5xl leading-none text-velmora-ink sm:text-6xl">
              Bestsellers
            </h2>
          </div>
          <p id="bestsellers-subtitle" className="max-w-md text-sm leading-7 text-velmora-bronze">
            Signature gold pieces selected for their glow, versatility, and easy gifting under $120.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} scope="bestseller" onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}
