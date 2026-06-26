import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    description: 'PCBs, sensors, connectors, displays, and consumer electronics.',
    imgId: 'cat-electronics-d4e5f6',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
  },
  {
    id: 'machinery',
    title: 'Machinery & Equipment',
    description: 'Industrial machinery, CNC equipment, and automation systems.',
    imgId: 'cat-machinery-g7h8i9',
    titleId: 'cat-machinery-title',
    descId: 'cat-machinery-desc',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    description: 'Fabrics, garments, home textiles, and fashion accessories.',
    imgId: 'cat-textiles-j1k2l3',
    titleId: 'cat-textiles-title',
    descId: 'cat-textiles-desc',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    description: 'Furniture, kitchenware, garden tools, and home decor items.',
    imgId: 'cat-home-m4n5o6',
    titleId: 'cat-home-title',
    descId: 'cat-home-desc',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    description: 'OEM and aftermarket parts, electric vehicle components.',
    imgId: 'cat-auto-p7q8r9',
    titleId: 'cat-auto-title',
    descId: 'cat-auto-desc',
  },
  {
    id: 'building-materials',
    title: 'Building Materials',
    description: 'Tiles, fixtures, hardware, and construction materials.',
    imgId: 'cat-building-s1t2u3',
    titleId: 'cat-building-title',
    descId: 'cat-building-desc',
  },
]

export default function ProductsWeSource() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Product Categories</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">
            Products We Source
          </h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            We source across a wide range of industries, connecting you with specialized manufacturers in China.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-lg font-bold text-neutral-900 mb-2">{cat.title}</h3>
                <p id={cat.descId} className="text-neutral-500 text-sm leading-relaxed">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
          >
            View all product categories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
