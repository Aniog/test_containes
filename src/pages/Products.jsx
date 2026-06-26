import { useEffect, useRef } from 'react'
import ProductGrid from '@/components/products/ProductGrid'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              id="products-title"
              className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Our Machinery
            </h1>
            <p
              id="products-subtitle"
              className="mt-4 text-lg text-muted-foreground"
            >
              Explore the full ARTITECT MACHINERY lineup, from compact folders to
              heavy-duty CNC folding systems.
            </p>
          </div>
          <div className="mt-12 md:mt-16">
            <ProductGrid />
          </div>
        </div>
      </section>
    </div>
  )
}
