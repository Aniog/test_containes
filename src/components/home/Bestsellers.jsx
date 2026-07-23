import ProductCard from '@/components/product/ProductCard'

export default function Bestsellers({ products, onAddToCart }) {
  return (
    <section id="shop" className="bg-velmora-porcelain py-16 text-velmora-ink md:py-24">
      <div className="velmora-container">
        <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Bestsellers</p>
            <h2 className="serif-display mt-3 text-5xl text-velmora-ink md:text-7xl">Polished by demand</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-clay">The pieces our community reaches for first: golden huggies, crystalline details, and gift-ready sets.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}
