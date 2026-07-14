import ProductCard from '@/components/common/ProductCard.jsx'
import LuxuryButton from '@/components/common/LuxuryButton.jsx'
import { products } from '@/data/products.js'

export default function Bestsellers() {
  return (
    <section id="shop" className="bg-velmora-cream px-4 py-20 text-velmora-ink sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-velmora-champagne/30 pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-antique">Bestsellers</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold leading-none text-velmora-ink sm:text-6xl">
              Golden pieces, chosen often.
            </h2>
          </div>
          <LuxuryButton to="/shop" variant="outline" className="self-start text-velmora-ink">
            View All
          </LuxuryButton>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} priority="-home" />
          ))}
        </div>
      </div>
    </section>
  )
}
