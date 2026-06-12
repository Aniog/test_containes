import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-capacity double folding machine for industrial sheet metal processing with automated bending sequences.',
    specs: ['Up to 3200mm width', '6mm max thickness', 'CNC controlled'],
    imgId: 'prod-img-df1-a8c3',
    titleId: 'prod-df1-title',
    descId: 'prod-df1-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Precision sheet metal folder designed for complex profiles and repeatable accuracy in production environments.',
    specs: ['Servo-electric drive', '±0.1mm accuracy', 'Quick tool change'],
    imgId: 'prod-img-smf-b9d4',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'Versatile metal folding machine suitable for HVAC, roofing, cladding, and general fabrication work.',
    specs: ['Hydraulic clamping', 'Programmable angles', 'Safety certified'],
    imgId: 'prod-img-mfm-c2e5',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Compact double folder with dual bending beams for simultaneous up and down folding operations.',
    specs: ['Dual beam system', 'Touch screen HMI', 'Low maintenance'],
    imgId: 'prod-img-dfl-d4f6',
    titleId: 'prod-dfl-title',
    descId: 'prod-dfl-desc',
  },
]

const ProductsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" className="py-20 md:py-28 bg-slate-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            Our Product Range
          </p>
          <h2
            id="products-section-title"
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            Precision Folding Solutions
          </h2>
          <p
            id="products-section-subtitle"
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            From compact workshops to large-scale production lines, our machines
            deliver consistent quality and unmatched reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-slate-800 mb-2"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-slate-600 mb-4 leading-relaxed"
                >
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:text-gold-light transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
