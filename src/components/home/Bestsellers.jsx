import ProductCard from '@/components/common/ProductCard.jsx'
import { products } from '@/data/products.js'
export default function Bestsellers({ onAdd }) {
  return (
    <section id="shop" className="bg-velmora-ivory py-16 text-velmora-ink md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-velmora-line pb-7 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Most loved</p><h2 id="bestsellers-title" className="mt-3 font-serif text-5xl text-velmora-ink md:text-6xl">Bestsellers</h2></div><p id="bestsellers-subtitle" className="max-w-md text-sm leading-7 text-velmora-muted">Five signature pieces chosen for glow, comfort, and gift-ready polish.</p></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{products.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} context="bestseller" />)}</div>
      </div>
    </section>
  )
}
