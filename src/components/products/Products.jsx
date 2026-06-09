import { useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folder-pro',
    title: 'Double Folder Pro',
    subtitle: 'Professional Double Folding Machine',
    description: 'Our flagship double folding machine delivers precise, repeatable bends on both sides of sheet metal in a single pass. Ideal for high-volume production environments.',
    features: ['Dual-head folding system', 'CNC-controlled positioning', 'Up to 4mm mild steel capacity', 'Automatic angle correction'],
    imgId: 'product-double-folder-pro',
    titleId: 'product-double-folder-pro-title',
    descId: 'product-double-folder-pro-desc',
  },
  {
    id: 'sheet-metal-folder-x1',
    title: 'Sheet Metal Folder X1',
    subtitle: 'Versatile Sheet Metal Folding Machine',
    description: 'The X1 sheet metal folding machine handles a wide range of materials and thicknesses with ease. Built for workshops that demand flexibility without compromising accuracy.',
    features: ['Multi-material compatibility', 'Quick-change tooling system', 'Programmable bend sequences', 'Energy-efficient hydraulics'],
    imgId: 'product-sheet-metal-folder-x1',
    titleId: 'product-sheet-metal-folder-x1-title',
    descId: 'product-sheet-metal-folder-x1-desc',
  },
  {
    id: 'metal-folder-compact',
    title: 'Metal Folder Compact',
    subtitle: 'Space-Saving Metal Folder Machine',
    description: 'Engineered for workshops with limited space, the Compact metal folder machine packs full-size performance into a smaller footprint without any trade-offs in precision.',
    features: ['Compact design, full power', 'Foot-pedal operation', 'Manual & CNC modes', 'Rapid setup changeover'],
    imgId: 'product-metal-folder-compact',
    titleId: 'product-metal-folder-compact-title',
    descId: 'product-metal-folder-compact-desc',
  },
  {
    id: 'metal-folding-machine-elite',
    title: 'Metal Folding Machine Elite',
    subtitle: 'Premium Metal Folding Machine',
    description: 'The Elite series represents the pinnacle of our metal folding machine lineup. Featuring advanced automation, real-time monitoring, and the highest throughput in its class.',
    features: ['Full automation suite', 'Real-time quality monitoring', 'Industry 4.0 connectivity', 'Lifetime frame warranty'],
    imgId: 'product-metal-folding-machine-elite',
    titleId: 'product-metal-folding-machine-elite-title',
    descId: 'product-metal-folding-machine-elite-desc',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" className="py-24 lg:py-32 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-accent-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Our Product Range
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-950 mb-5">
            Precision Metal Folding{' '}
            <span className="text-accent-600">Solutions</span>
          </h2>
          <p className="text-steel-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to fully automated production lines,
            we build the right machine for every application.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, idx) => (
            <article
              key={product.id}
              className="group bg-brand-50 rounded-2xl overflow-hidden border border-brand-100 hover:border-accent-200 hover:shadow-xl hover:shadow-accent-500/5 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64 lg:h-72">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full tracking-wide uppercase">
                    {product.subtitle.split(' ').slice(0, 2).join(' ')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 id={product.titleId} className="text-xl lg:text-2xl font-bold text-brand-950 mb-2">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-steel-500 leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-brand-700">
                      <CheckCircle2 size={16} className="text-accent-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-accent-600 font-semibold text-sm hover:text-accent-700 transition-colors group/link"
                >
                  Request Specifications
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
