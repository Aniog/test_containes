import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/shop/ProductCard'

export default function Bestsellers() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-manrope text-xs uppercase tracking-[0.2em] text-gold mb-3">Curated for You</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-obsidian text-obsidian font-manrope text-xs uppercase tracking-[0.15em] px-10 py-3.5 hover:bg-obsidian hover:text-cream transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
