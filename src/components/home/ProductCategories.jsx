import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  { id: 'electronics', title: 'Consumer Electronics', desc: 'Headphones, chargers, smart devices, LED lighting, PCB assemblies' },
  { id: 'textiles', title: 'Textiles & Apparel', desc: 'Clothing, uniforms, bags, home textiles, custom fabrics' },
  { id: 'furniture', title: 'Furniture & Home', desc: 'Office furniture, home decor, kitchenware, bathroom fixtures' },
  { id: 'machinery', title: 'Machinery & Parts', desc: 'CNC parts, molds, industrial equipment, auto components' },
  { id: 'packaging', title: 'Packaging & Print', desc: 'Custom boxes, labels, bags, POS displays, promotional items' },
  { id: 'beauty', title: 'Beauty & Health', desc: 'Cosmetics, supplements, medical devices, personal care products' },
  { id: 'toys', title: 'Toys & Sports', desc: 'Toys, fitness equipment, outdoor gear, pet products' },
  { id: 'building', title: 'Building Materials', desc: 'Tiles, hardware, plumbing, solar panels, steel structures' },
]

export default function ProductCategories() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Product Categories</span>
          <h2 id="products-section-title" className="text-3xl md:text-4xl font-bold text-neutral-800 tracking-tight mb-4">
            Products We Source
          </h2>
          <p id="products-section-subtitle" className="text-neutral-600 text-lg leading-relaxed">
            We source across all major product categories from China's manufacturing hubs. If it's made in China, we can find it for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <div key={cat.id} className="group relative rounded-xl overflow-hidden border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] relative">
                <img
                  data-strk-img-id={`product-cat-${cat.id}-img-a1b2`}
                  data-strk-img={`[product-cat-${cat.id}-desc] [product-cat-${cat.id}-title] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 id={`product-cat-${cat.id}-title`} className="text-white font-semibold text-base mb-1">
                  {cat.title}
                </h3>
                <p id={`product-cat-${cat.id}-desc`} className="text-white/70 text-xs leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
