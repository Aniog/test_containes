import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import products from '@/data/products'

const bestsellerIds = ['vivid-aura-jewels', 'majestic-flora-nectar', 'golden-sphere-huggies', 'amber-lace-earrings', 'royal-heirloom-set']

export default function BestsellersGrid() {
  const containerRef = useRef(null)
  const bestsellers = bestsellerIds.map((id) => products.find((p) => p.id === id)).filter(Boolean)

  return (
    <section className="section-pad py-20 md:py-28 max-w-[1440px] mx-auto" ref={containerRef}>
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl md:text-4xl text-velvet-800 mb-3">Our Bestsellers</h2>
        <p className="text-velvet-500 font-sans text-sm max-w-md mx-auto leading-relaxed">
          The pieces our community reaches for again and again. Heirloom-quality demi-fine at an accessible price.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-14">
        <Link to="/shop" className="btn-outline">
          View All Pieces
        </Link>
      </div>
    </section>
  )
}
