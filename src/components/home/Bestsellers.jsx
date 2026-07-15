import { useEffect, useRef } from 'react'
import { products } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Bestsellers() {
  const containerRef = useRef(null)
  const [titleRef, titleVisible] = useScrollAnimation(0.2)
  const [gridRef, gridVisible] = useScrollAnimation(0.1)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      // Image loading would happen here
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`animate-fade-up ${titleVisible ? 'visible' : ''}`}>
          <h2 id="product-card-title" className="section-title">Bestsellers</h2>
          <p className="section-subtitle">
            Our most-loved pieces, chosen by women who know that everyday luxury matters.
          </p>
        </div>

        <div ref={gridRef} className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 ${gridVisible ? 'visible' : ''}`}>
          {products.map((product, index) => (
            <div key={product.id} className={`animate-fade-up delay-${(index + 1) * 100} ${gridVisible ? 'visible' : ''}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 animate-fade-up ${gridVisible ? 'visible' : ''} delay-500`}>
          <a
            href="/shop"
            className="btn-secondary inline-block"
          >
            View All Pieces
          </a>
        </div>
      </div>
    </section>
  )
}
