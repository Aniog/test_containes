import { getBestsellers } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { Link } from 'react-router-dom'

export default function BestsellersSection() {
  const bestsellers = getBestsellers()

  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-3">
            Curated Favorites
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-ink">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Link
            to="/shop"
            className="inline-block border-b border-velmora-ink pb-1 text-xs uppercase tracking-[0.2em] text-velmora-ink hover:text-velmora-gold hover:border-velmora-gold transition-colors"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  )
}
