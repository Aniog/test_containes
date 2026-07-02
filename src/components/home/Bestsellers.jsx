import { Link } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers({ onAddToCart }) {
  return (
    <section id="bestsellers" className="bg-velmora-ivory py-20 text-velmora-ink sm:py-28">
      <div className="section-shell">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Most loved</p>
            <h2 className="serif-title mt-3 text-5xl sm:text-6xl">Bestsellers</h2>
          </div>
          <Link to="/shop" className="outline-button self-start sm:self-auto">View All</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}
