import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

export default function BestsellersSection({ onAddToCart }) {
  return (
    <section className="bg-velmora-cream py-20 text-velmora-ink sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-velmora-linen pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-sage">Most loved</p>
            <h2 className="mt-3 font-serifDisplay text-5xl font-light text-velmora-ink">Bestsellers</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-espresso/75">Pieces our customers reach for every morning and wrap for the people they love most.</p>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
        </div>
      </div>
    </section>
  )
}
