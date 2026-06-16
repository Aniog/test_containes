import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/lib/products'

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div>
      <section className="bg-brand-950 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-gold-500 tracking-[0.2em] uppercase mb-3 block">
              Our Products
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
              Metal Folding Machines
            </h1>
            <p className="text-brand-300 leading-relaxed">
              Discover our comprehensive range of precision-engineered folding machinery. From manual folders to fully automated CNC systems, we have the right solution for your workshop.
            </p>
          </div>
        </div>
      </section>

      <section ref={containerRef} className="py-16 md:py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`bg-white rounded-sm border border-brand-100 overflow-hidden ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-[4/3] lg:aspect-auto bg-brand-100 relative overflow-hidden">
                    <img
                      alt={product.name}
                      data-strk-img-id={product.imageId}
                      data-strk-img={product.imageQuery}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-block self-start text-[10px] font-semibold tracking-[0.15em] uppercase text-gold-600 bg-gold-50 px-2.5 py-1 rounded-sm mb-4">
                      {product.category}
                    </span>
                    <h2
                      id={`${product.id}-title`}
                      className="font-serif text-2xl md:text-3xl font-semibold text-brand-900 mb-4"
                    >
                      {product.name}
                    </h2>
                    <p className="text-brand-500 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
                      {product.specs.slice(0, 4).map((spec) => (
                        <div key={spec.label} className="py-1.5 border-b border-brand-100">
                          <div className="text-[10px] text-brand-400 uppercase tracking-wide mb-0.5">
                            {spec.label}
                          </div>
                          <div className="text-sm font-semibold text-brand-800">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 mb-8">
                      {product.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-brand-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 self-start px-6 py-3 bg-brand-900 hover:bg-brand-800 text-white font-semibold text-sm rounded-sm transition-colors duration-200"
                    >
                      Request Information
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
