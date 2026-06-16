import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding',
    name: 'Double Folding Machine',
    subtitle: 'High-performance dual-blade precision folding',
    description: 'Our flagship double folding machine delivers unmatched precision for complex sheet metal operations. Perfect for high-volume production environments.',
    specs: ['Max thickness: 6mm', 'Bending length: 3200mm', 'CNC controlled'],
    imgId: 'product-df-highlight',
    titleId: 'product-df-title',
    descId: 'product-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    subtitle: 'Versatile folding for every workshop',
    description: 'Compact yet powerful sheet metal folder designed for workshops of all sizes. Easy operation with professional-grade results every time.',
    specs: ['Max thickness: 4mm', 'Bending length: 2500mm', 'Manual/CNC'],
    imgId: 'product-smf-highlight',
    titleId: 'product-smf-title',
    descId: 'product-smf-desc',
  },
  {
    id: 'metal-folding',
    name: 'Metal Folding Machine',
    subtitle: 'Industrial strength for heavy-duty applications',
    description: 'Built for the toughest jobs. This metal folding machine handles thick gauge materials with ease and consistent accuracy.',
    specs: ['Max thickness: 10mm', 'Bending length: 4000mm', 'Full CNC'],
    imgId: 'product-mf-highlight',
    titleId: 'product-mf-title',
    descId: 'product-mf-desc',
  },
]

export default function ProductHighlights() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-500 text-sm font-semibold uppercase tracking-widest">Our Products</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-steel-900 mt-4 mb-6">
            Engineered for{' '}
            <span className="text-brand-500">Excellence</span>
          </h2>
          <p className="text-steel-500 text-lg leading-relaxed">
            From double folding machines to precision metal folders, every ARTITECT machine is
            designed and built to deliver superior performance and reliability.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-steel-200 overflow-hidden hover:shadow-xl hover:border-steel-300 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-steel-100">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 id={product.titleId} className="text-xl font-bold text-steel-900 mb-2">
                  {product.name}
                </h3>
                <p id={product.descId} className="text-accent-500 text-sm font-medium mb-3">
                  {product.subtitle}
                </p>
                <p className="text-steel-500 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs font-medium bg-brand-50 text-brand-600 px-3 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <Link to="/products">
                  <Button variant="ghost" className="gap-2 text-brand-500 hover:text-brand-600 px-0 font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/products">
            <Button size="lg" variant="default" className="gap-2">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
