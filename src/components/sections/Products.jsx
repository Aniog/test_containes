import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard, { products } from '@/components/products/ProductCard'

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" className="py-16 md:py-24 bg-surface" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 id="products-title" className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            Metal Folding Machines
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Explore our comprehensive range of precision metal folding equipment,
            engineered for reliability and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
