import ProductCard from '@/components/product/ProductCard'

const Bestsellers = ({ products, onAddToCart }) => (
  <section id="shop" className="bg-velmora-parchment px-4 py-20 text-velmora-ink sm:px-6 lg:px-8 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 flex flex-col gap-5 border-b border-velmora-line pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Most loved</p>
          <h2 className="mt-3 font-serif text-5xl text-velmora-ink sm:text-6xl">Bestsellers</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-velmora-taupe">
          The pieces customers wear on repeat: luminous, giftable, and designed to layer with what you already love.
        </p>
      </div>
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />
        ))}
      </div>
    </div>
  </section>
)

export default Bestsellers
