import ProductCard from '@/components/product/ProductCard.jsx'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function Bestsellers({ products, onAddToCart }) {
  const containerRef = useStrkImages([])

  return (
    <section ref={containerRef} id="bestsellers" className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Most loved</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold leading-tight md:text-6xl">Bestsellers</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-taupe">
            Signature gold pieces chosen for everyday polish, giftable meaning, and a refined glow.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
        </div>
      </div>
    </section>
  )
}
