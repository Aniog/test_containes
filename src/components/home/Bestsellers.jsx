import ProductCard from '../product/ProductCard'

export default function Bestsellers({ products, onAddToCart }) {
  return (
    <section id="shop" className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Signature shine</p>
            <h2 id="bestsellers-title" className="mt-3 font-serif text-5xl leading-none text-velmora-espresso md:text-6xl">Bestsellers</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-espresso/70">
            Our most-gifted pieces, chosen for their sculptural glow, easy wear, and premium finish under $120.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} priority={index < 2} />
          ))}
        </div>
      </div>
    </section>
  )
}
