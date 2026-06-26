import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  { id: 'electronics', title: 'Electronics & Accessories', desc: 'Consumer electronics, mobile accessories, smart devices, and components.' },
  { id: 'home-garden', title: 'Home & Garden', desc: 'Furniture, kitchenware, home decor, garden tools, and storage solutions.' },
  { id: 'textiles', title: 'Textiles & Apparel', desc: 'Clothing, fabrics, home textiles, bags, shoes, and fashion accessories.' },
  { id: 'hardware', title: 'Hardware & Tools', desc: 'Power tools, hand tools, fasteners, building materials, and industrial supplies.' },
  { id: 'packaging', title: 'Packaging & Printing', desc: 'Custom packaging, labels, printed materials, and branded merchandise.' },
  { id: 'machinery', title: 'Machinery & Parts', desc: 'Industrial machinery, spare parts, automation equipment, and custom fabrication.' },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Products We Source</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            We Source Across Industries
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our expertise spans a wide range of product categories. Whatever you need manufactured,
            we can find the right factory in China.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/products"
              className="group bg-surface rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div
                data-strk-bg-id={`product-cat-bg-${cat.id}-a1b2c3`}
                data-strk-bg={`[product-cat-title-${cat.id}] factory product china manufacturing`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="600"
                style={{ paddingTop: '66%', backgroundSize: 'cover', backgroundPosition: 'center' }}
                className="relative"
              >
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors" />
              </div>
              <div className="p-5">
                <h3
                  id={`product-cat-title-${cat.id}`}
                  className="font-bold text-navy mb-1.5 group-hover:text-accent transition-colors"
                >
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 text-navy font-semibold text-sm rounded-lg border-2 border-gray-200 hover:border-navy transition-colors"
          >
            View All Product Categories
          </Link>
        </div>
      </div>
    </section>
  )
}
