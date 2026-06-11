import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding',
    title: 'Double Folding Machine',
    description: 'High-precision double folding for complex sheet metal operations.',
    slug: 'double-folding-machine',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile folding solutions for various sheet metal thicknesses.',
    slug: 'sheet-metal-folder',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder Machine',
    description: 'Heavy-duty metal folding for industrial applications.',
    slug: 'metal-folder-machine',
  },
]

export default function ProductsPreview() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle mx-auto">
            Explore our range of professional metal folding machines designed for industrial excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={product.title}
                  data-strk-img-id={`product-preview-${product.id}-d4e5f6`}
                  data-strk-img={`[${product.id}-desc] [${product.id}-title] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 id={`${product.id}-title`} className="text-lg font-semibold uppercase tracking-wide text-slate-900 mb-2">
                  {product.title}
                </h3>
                <p id={`${product.id}-desc`} className="text-slate-600 text-sm mb-4">
                  {product.description}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 text-sm font-semibold uppercase tracking-wider transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn-secondary">
            View All Products <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
