import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision double folding for complex sheet metal profiles with automated angle control.',
    slug: 'double-folding-machine',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Compact and efficient double folder for rapid production of double-seam joints.',
    slug: 'double-folder',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile sheet metal folder capable of handling various thicknesses and material types.',
    slug: 'sheet-metal-folder',
  },
]

export default function HomeProductShowcase() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-[#c87941] font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 id="products-section-title" className="mt-3 text-3xl lg:text-4xl font-bold text-[#1e3a5f]">
            Featured Machinery
          </h2>
          <p className="mt-4 text-lg text-[#6b7280]">
            Explore our range of precision folding machines designed for industrial applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`product-${product.id}-img`}
                  data-strk-img={`[${product.id}-desc] [${product.id}-title] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <h3 id={`${product.id}-title`} className="text-xl font-semibold text-[#1e3a5f] group-hover:text-[#c87941] transition-colors">
                  {product.title}
                </h3>
                <p id={`${product.id}-desc`} className="mt-2 text-[#6b7280] text-sm leading-relaxed">
                  {product.description}
                </p>
                <Link
                  to={`/products#${product.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-[#c87941] font-medium text-sm hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white rounded-lg font-semibold hover:bg-[#2d5a8e] transition-colors"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
