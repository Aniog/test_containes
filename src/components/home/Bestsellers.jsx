import { Link } from 'react-router-dom'
import SectionIntro from '@/components/common/SectionIntro.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products.js'

export default function Bestsellers({ onAdd }) {
  return (
    <section className="bg-velmora-ivory px-4 py-20 text-velmora-espresso sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro eyebrow="Bestsellers" title="Quiet pieces with a lasting glow.">
            <p>Our most-loved demi-fine gold jewelry, designed to feel refined every day and memorable when gifted.</p>
          </SectionIntro>
          <Link to="/shop" className="inline-flex self-start rounded-full border border-velmora-gold px-6 py-3 text-xs font-bold uppercase tracking-refined text-velmora-espresso transition hover:bg-velmora-gold hover:text-velmora-espresso md:self-auto">
            View all jewelry
          </Link>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} context="bestseller" compact />)}
        </div>
      </div>
    </section>
  )
}
