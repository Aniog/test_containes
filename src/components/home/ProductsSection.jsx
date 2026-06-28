import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'

const products = [
  { name: 'Electronics & Components', imgId: 'product-electronics-1a2b3c' },
  { name: 'Machinery & Industrial', imgId: 'product-machinery-2b3c4d' },
  { name: 'Textiles & Apparel', imgId: 'product-textiles-3c4d5e' },
  { name: 'Home & Furniture', imgId: 'product-furniture-4d5e6f' },
  { name: 'Packaging Materials', imgId: 'product-packaging-5e6f7g' },
  { name: 'Automotive Parts', imgId: 'product-automotive-6f7g8h' },
  { name: 'Tools & Hardware', imgId: 'product-tools-7g8h9i' },
  { name: 'Consumer Goods', imgId: 'product-consumer-8h9i0j' },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2 block">
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            We have experience sourcing across a wide range of product categories from verified Chinese manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative overflow-hidden rounded-lg bg-white border border-border-light hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[product-title-${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3
                  id={`product-title-${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="text-sm font-semibold text-slate-900 text-center"
                >
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-md hover:bg-slate-50 transition-colors"
          >
            View All Product Categories
          </Link>
        </div>
      </div>
    </section>
  )
}
