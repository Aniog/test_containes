import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Bestsellers() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-warm-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-stone">
            Shop the Favorites
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Bestsellers
          </h2>
        </div>

        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              query={`[product-name-${product.id}] [bestsellers-title] [section-subtitle]`}
            />
          ))}
        </div>
      </div>

      {/* Hidden referenced text for image queries */}
      <span id="bestsellers-title" className="sr-only">
        Bestsellers
      </span>
      <span id="section-subtitle" className="sr-only">
        Demi-Fine Gold Jewelry
      </span>
      {products.map((product) => (
        <span key={product.id} id={`product-name-${product.id}`} className="sr-only">
          {product.name}
        </span>
      ))}
    </section>
  )
}
