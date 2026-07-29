import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  { id: 'electronics', title: 'Electronics & Components', titleId: 'prod-electronics-title' },
  { id: 'textiles', title: 'Textiles & Apparel', titleId: 'prod-textiles-title' },
  { id: 'furniture', title: 'Furniture & Home Decor', titleId: 'prod-furniture-title' },
  { id: 'machinery', title: 'Machinery & Equipment', titleId: 'prod-machinery-title' },
  { id: 'packaging', title: 'Packaging & Printing', titleId: 'prod-packaging-title' },
  { id: 'automotive', title: 'Auto Parts & Accessories', titleId: 'prod-automotive-title' },
  { id: 'construction', title: 'Building Materials', titleId: 'prod-construction-title' },
  { id: 'consumer', title: 'Consumer Goods & Gifts', titleId: 'prod-consumer-title' },
]

const ProductsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="products-section-title" className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We source across a wide range of industries. If it is made in China, we can help you find it.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="relative group overflow-hidden rounded-xl aspect-[4/3]">
              <img
                data-strk-img-id={`prod-cat-${cat.id}-a1b2c3`}
                data-strk-img={`[${cat.titleId}] [products-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 id={cat.titleId} className="text-white font-semibold text-sm md:text-base">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
