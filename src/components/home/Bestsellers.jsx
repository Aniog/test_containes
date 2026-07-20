import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const Bestsellers = () => {
  const containerRef = useRef(null)
  const [revealRef, isVisible] = useScrollReveal(containerRef)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className={`text-center mb-12 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-warm-black">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, i) => (
            <div key={product.id} className={`reveal-hidden ${isVisible ? 'reveal-visible' : ''} reveal-delay-${Math.min(i + 1, 5)}`}>
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
