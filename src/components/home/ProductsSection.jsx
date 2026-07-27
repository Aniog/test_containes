import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  { name: 'Electronics & Appliances', description: 'Consumer electronics, smart home devices, components', imgId: 'prod-electronics-7f3d2e' },
  { name: 'Home & Kitchen', description: 'Household items, kitchenware, home decor, furniture', imgId: 'prod-homekitchen-8g4h3f' },
  { name: 'Apparel & Accessories', description: 'Clothing, shoes, bags, fashion accessories', imgId: 'prod-apparel-9h5i4g' },
  { name: 'Industrial & Machinery', description: 'Manufacturing equipment, tools, industrial parts', imgId: 'prod-industrial-1j6k5h' },
  { name: 'Health & Beauty', description: 'Cosmetics, personal care, wellness products, supplements', imgId: 'prod-beauty-2k7l6i' },
  { name: 'Auto Parts & Accessories', description: 'Vehicle components, car accessories, tools', imgId: 'prod-auto-3l8m7j' },
  { name: 'Packaging & Printing', description: 'Custom packaging, labels, boxes, printing services', imgId: 'prod-packaging-4m9n8k' },
  { name: 'Sports & Outdoor', description: 'Fitness equipment, camping gear, outdoor recreation', imgId: 'prod-sports-5n0o9l' },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-4">
            Products We Source
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Across multiple industries, we connect buyers with China&apos;s best manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[product-title-${i}] [product-desc-${i}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-4">
                <h3 id={`product-title-${i}`} className="font-semibold text-navy-700 text-sm mb-1">{cat.name}</h3>
                <p id={`product-desc-${i}`} className="text-xs text-gray-500">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-navy-500 transition-colors"
          >
            View All Categories
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}