import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  { name: 'Electronics & Components', descId: 'prod-electronics-desc', imgId: 'prod-electronics-a1b2c3' },
  { name: 'Machinery & Industrial', descId: 'prod-machinery-desc', imgId: 'prod-machinery-d4e5f6' },
  { name: 'Textiles & Apparel', descId: 'prod-textiles-desc', imgId: 'prod-textiles-g7h8i9' },
  { name: 'Home & Furniture', descId: 'prod-home-desc', imgId: 'prod-home-j0k1l2' },
  { name: 'Packaging Materials', descId: 'prod-packaging-desc', imgId: 'prod-packaging-m3n4o5' },
  { name: 'Consumer Goods', descId: 'prod-consumer-desc', imgId: 'prod-consumer-p6q7r8' },
  { name: 'Automotive Parts', descId: 'prod-automotive-desc', imgId: 'prod-automotive-s9t0u1' },
  { name: 'Medical & Health', descId: 'prod-medical-desc', imgId: 'prod-medical-v2w3x4' },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Products We Source
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We source across a wide range of product categories with deep supplier networks in each sector.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center text-brand font-semibold hover:text-brand-light transition-colors shrink-0"
          >
            See All Categories
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-slate-900">{product.name}</h3>
                <p id={product.descId} className="mt-1 text-sm text-slate-500">
                  Verified suppliers ready for your inquiry.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
