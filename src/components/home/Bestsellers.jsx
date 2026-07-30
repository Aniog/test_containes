import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const bestsellerIds = [
  'vivid-aura-jewels',
  'majestic-flora-nectar',
  'golden-sphere-huggies',
  'amber-lace-earrings',
  'royal-heirloom-set',
]

export default function Bestsellers() {
  const containerRef = useRef(null)
  const bestsellers = bestsellerIds.map((id) => products.find((p) => p.id === id)).filter(Boolean)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl lg:text-4xl text-charcoal tracking-wide">Bestsellers</h2>
        <div className="mt-4 mx-auto w-12 h-px bg-gold" />
        <p className="mt-4 text-sm text-stone font-light tracking-wide">The pieces everyone is wearing</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
