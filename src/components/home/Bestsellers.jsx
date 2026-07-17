import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight } from 'lucide-react'
import { PRODUCTS } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/ui/ProductCard'
import strkImgConfig from '@/strk-img-config.json'

export default function Bestsellers() {
  const containerRef = useRef(null)
  const { addItem, openCart } = useCart()
  // Show products with "Bestseller" badge; backfill with top-rated if fewer than 5
  const bestsellers = PRODUCTS.filter((p) => p.badge === 'Bestseller')
  const rest = PRODUCTS.filter((p) => p.badge !== 'Bestseller')
  const products = [...bestsellers, ...rest].slice(0, 5)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleAdd = (product) => {
    addItem(product.id, 'gold', 1)
    openCart()
  }

  return (
    <section
      id="bestsellers"
      ref={containerRef}
      className="py-20 md:py-28 bg-cream"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <div>
            <p id="bestsellers-eyebrow" className="eyebrow">
              The Edit
            </p>
            <h2
              id="bestsellers-title"
              className="mt-4 font-serif text-4xl md:text-5xl lg:text-[56px] text-espresso font-light leading-[1.1] tracking-tight"
            >
              <em className="italic font-serif font-light">Bestsellers</em>
              <span className="font-serif"> · the pieces you keep coming back to</span>
            </h2>
          </div>
          <Link
            to="/shop"
            className="mt-6 md:mt-0 text-link inline-flex items-center gap-2"
          >
            View All <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-6 lg:gap-x-8">
          {products.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAdd}
              priority={idx < 2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
