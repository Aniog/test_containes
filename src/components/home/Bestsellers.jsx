import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const Bestsellers = () => {
  const containerRef = useRef(null)
  const [sectionRef, revealed] = useScrollReveal(containerRef)
  const bestsellers = products.filter(p => p.bestseller)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 sm:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 reveal ${revealed ? 'revealed' : ''}`}>
          <h2 className="font-serif text-3xl sm:text-4xl text-velmora-charcoal tracking-wide">Bestsellers</h2>
          <div className={`w-12 h-px bg-velmora-gold mx-auto mt-4 ${revealed ? 'line-expand' : ''}`} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 sm:gap-x-6">
          {bestsellers.map((product, i) => (
            <div key={product.id} className={`reveal reveal-delay-${i + 1} ${revealed ? 'revealed' : ''}`}>
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
