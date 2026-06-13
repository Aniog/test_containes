import { useEffect, useRef } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    subtitle: 'High-speed dual-edge folding for mass production',
    description:
      'Our flagship double folding machine simultaneously folds both edges of sheet metal panels, doubling throughput while maintaining micron-level precision.',
    features: [
      'Dual-edge synchronous folding',
      'Up to 15 m/min folding speed',
      'CNC programmable controls',
      'Automatic material thickness detection',
    ],
    imgId: 'product-double-folding',
    titleId: 'product-double-folding-title',
    descId: 'product-double-folding-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    subtitle: 'Versatile folding for medium to heavy-gauge metal',
    description:
      'Engineered for maximum versatility, the Double Folder handles a wide range of metal thicknesses and folding angles for custom fabrication work.',
    features: [
      'Handles 0.5mm - 6mm sheet metal',
      'Adjustable folding angle 0-180°',
      'Quick-change tooling system',
      'Touchscreen HMI interface',
    ],
    imgId: 'product-double-folder',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    subtitle: 'Precision folding for thin-gauge applications',
    description:
      'A specialized folder optimized for thin-gauge sheet metal work, ideal for HVAC, architectural cladding, and light industrial applications.',
    features: [
      'For sheets 0.3mm - 3mm thickness',
      'Servo-electric precision drive',
      'Compact footprint design',
      'Energy-efficient operation',
    ],
    imgId: 'product-sheet-folder',
    titleId: 'product-sheet-folder-title',
    descId: 'product-sheet-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    subtitle: 'Heavy-duty industrial metal folding system',
    description:
      'Built for the toughest industrial environments, this heavy-duty system folds thick metal plates with unparalleled force and repeatability.',
    features: [
      'Up to 200 tons folding force',
      'Handles plates up to 12mm thick',
      'Automated back gauge system',
      'Industrial safety certified',
    ],
    imgId: 'product-metal-folding',
    titleId: 'product-metal-folding-title',
    descId: 'product-metal-folding-desc',
  },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" className="py-20 md:py-28 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-18">
          <span className="text-[11px] font-semibold text-brand-gold tracking-[0.2em] uppercase">
            Our Product Line
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 mt-3">
            Precision Folding Machinery
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From light-gauge sheet metal folders to heavy-duty industrial folding systems,
            we have the right machine for your production needs.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-brand-surface rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] bg-brand-dark overflow-hidden">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-heading]`}
                  data-strk-img-ratio="16x10"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 id={product.titleId} className="text-xl font-bold text-brand-navy mb-1">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-sm text-brand-gold font-medium mb-3">
                  {product.subtitle}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors"
                >
                  Request Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <h2 id="products-heading" className="sr-only">
        Precision Folding Machinery
      </h2>
    </section>
  )
}