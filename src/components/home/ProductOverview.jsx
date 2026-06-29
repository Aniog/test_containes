import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding',
    title: 'Double Folding Machines',
    desc: 'Heavy-duty double folders for precise, repeatable bends in sheet metal. Ideal for high-volume production environments.',
    imgId: 'product-double-folder-001',
    titleId: 'prod-double-folding-title',
    descId: 'prod-double-folding-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folders',
    desc: 'Versatile sheet metal folding machines with intuitive controls. Perfect for workshops and custom fabrication.',
    imgId: 'product-sheet-folder-002',
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
  },
  {
    id: 'metal-folding',
    title: 'Metal Folding Machines',
    desc: 'Engineered for precision and durability. Our metal folding equipment handles a wide range of materials and thicknesses.',
    imgId: 'product-metal-folding-003',
    titleId: 'prod-metal-folding-title',
    descId: 'prod-metal-folding-desc',
  },
]

export default function ProductOverview() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-warm-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Our Products
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy tracking-tight">
            Engineered for Excellence
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
            From double folding machines to versatile metal folders — explore
            our full range of precision sheet metal equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden bg-stone-200">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 id={product.titleId} className="text-lg font-semibold text-navy mb-2">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-sm text-text-secondary leading-relaxed mb-4">
                  {product.desc}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold/80 transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-navy text-warm-white hover:bg-navy/90 transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}