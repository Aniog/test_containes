import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Bestsellers() {
  return (
    <section id="bestsellers" className="bg-velmora-cream px-5 py-16 text-velmora-obsidian md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 border-b border-velmora-espresso/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-gold">Most loved</p>
            <h2 className="mt-3 font-serifDisplay text-5xl leading-none md:text-7xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="font-sansBody text-xs font-extrabold uppercase tracking-nav text-velmora-bronze transition hover:text-velmora-gold">
            View all jewelry
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
