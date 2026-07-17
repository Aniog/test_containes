import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers({ onAddToCart }) {
  return (
    <section id="bestsellers" className="bg-velmora-porcelain px-4 py-20 text-velmora-espresso sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 border-b border-velmora-linen pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl leading-tight text-velmora-espresso sm:text-6xl">Pieces with a waiting list glow</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-cocoa">
            Five refined signatures for gifting, layering, and self-purchase — all under $120.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} priority />
          ))}
        </div>
      </div>
    </section>
  )
}
