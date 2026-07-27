import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  { id: 'electronics', title: 'Electronics & Components', desc: 'PCB assemblies, consumer electronics, IoT devices, cables, and connectors.' },
  { id: 'machinery', title: 'Machinery & Industrial Parts', desc: 'CNC machined parts, metal fabrication, pumps, valves, and industrial equipment.' },
  { id: 'textiles', title: 'Textiles & Apparel', desc: 'Garments, fabrics, home textiles, sportswear, bags, and accessories.' },
  { id: 'plastics', title: 'Plastics & Molding', desc: 'Injection molding, blow molding, extrusion, thermoforming, and 3D printing.' },
  { id: 'furniture', title: 'Furniture & Home Goods', desc: 'Indoor and outdoor furniture, kitchenware, storage solutions, and decor.' },
  { id: 'packaging', title: 'Packaging & Printing', desc: 'Custom packaging, paper products, labels, gift boxes, and printed materials.' },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="py-20 md:py-28 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">
            What We Source
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
            Products We Source
          </h2>
          <p className="mt-4 text-navy-500 text-lg">
            We have extensive experience across a wide range of product categories and industries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-brand-100 transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                <img
                  alt={cat.title}
                  data-strk-img-id={`product-cat-${cat.id}-e2d8f4`}
                  data-strk-img={`[product-title-${cat.id}] product manufacturing China`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <h3 id={`product-title-${cat.id}`} className="text-lg font-semibold text-navy-900 mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-navy-500 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
          >
            See All Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}