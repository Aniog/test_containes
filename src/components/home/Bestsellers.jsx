import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const sectionTitleId = 'bestsellers-title'
  const sectionSubtitleId = 'bestsellers-subtitle'
  const queryContext = `[${sectionSubtitleId}] [${sectionTitleId}]`

  return (
    <section ref={containerRef} className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p
            id={sectionSubtitleId}
            className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold"
          >
            Curated Favorites
          </p>
          <h2
            id={sectionTitleId}
            className="font-serif text-4xl md:text-5xl"
          >
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              queryContext={queryContext}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
