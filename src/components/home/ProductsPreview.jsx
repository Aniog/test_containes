import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/lib/products'

export default function ProductsPreview() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const previewProducts = products.slice(0, 3)

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-semibold text-gold-600 tracking-[0.2em] uppercase mb-3 block">
              Our Products
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-brand-950">
              Metal Folding Solutions
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-gold-600 transition-colors group"
          >
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewProducts.map((product) => (
            <Link
              key={product.id}
              to="/products"
              className="group block bg-white rounded-sm border border-brand-100 overflow-hidden hover:shadow-xl hover:shadow-brand-100/60 transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-brand-100 relative overflow-hidden">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imageId}
                  data-strk-img={product.imageQuery}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-950/0 group-hover:bg-brand-950/10 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gold-600 bg-gold-50 px-2 py-0.5 rounded-sm">
                    {product.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-brand-300 group-hover:text-gold-500 transition-colors" />
                </div>
                <h3
                  id={`${product.id}-title`}
                  className="font-serif text-lg font-semibold text-brand-900 mb-2 group-hover:text-gold-700 transition-colors"
                >
                  {product.name}
                </h3>
                <p className="text-sm text-brand-500 leading-relaxed line-clamp-2">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
