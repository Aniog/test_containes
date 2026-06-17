import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Check, ArrowRight } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    tagline: 'High-speed dual-axis precision folder',
    description:
      'Industrial-grade double folding machine engineered for simultaneous multi-bend operations. Ideal for high-volume production of enclosures, panels, and structural components.',
    features: ['Dual-axis synchronous folding', 'CNC programmable controls', 'Up to 12 bends per minute'],
    imgId: 'product-dfm-a1b2c3',
    titleId: 'product-dfm-title',
    descId: 'product-dfm-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    tagline: 'Compact dual-operation bending system',
    description:
      'Space-efficient double folder combining two folding stations in one footprint. Perfect for job shops requiring versatility without sacrificing floor space.',
    features: ['Twin folding stations', 'Quick tooling changeover', 'Touchscreen HMI control'],
    imgId: 'product-df-b2c3d4',
    titleId: 'product-df-title',
    descId: 'product-df-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    tagline: 'Versatile clamping folder for precision work',
    description:
      'Professional sheet metal folder designed for accurate bending of thin to medium-gauge materials. Known for its reliability and consistent repeatability.',
    features: ['Adjustable clamping beam', 'Back gauge positioning', 'Overload protection system'],
    imgId: 'product-smf-c3d4e5',
    titleId: 'product-smf-title',
    descId: 'product-smf-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    tagline: 'Full-featured production folding center',
    description:
      'Advanced sheet metal folding machine with servo-electric drive for energy-efficient, high-precision bending. Handles complex geometries with ease.',
    features: ['Servo-electric drive', 'Multi-axis back gauge', 'Automated tool changer'],
    imgId: 'product-smfm-d4e5f6',
    titleId: 'product-smfm-title',
    descId: 'product-smfm-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    tagline: 'Heavy-duty straight folder for thick gauge',
    description:
      'Robust metal folder built for forming heavy-gauge steel and aluminum. Features a rigid box-frame construction for deflection-free bending.',
    features: ['Box-frame steel construction', 'High tonnage clamping', 'Programmable bend sequences'],
    imgId: 'product-mf-e5f6g7',
    titleId: 'product-mf-title',
    descId: 'product-mf-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    tagline: 'Automated folder with smart controls',
    description:
      'Intelligent metal folder machine with IoT connectivity and real-time process monitoring. Designed for Industry 4.0 manufacturing environments.',
    features: ['IoT-enabled monitoring', 'Real-time diagnostics', 'Remote service access'],
    imgId: 'product-mfm-f6g7h8',
    titleId: 'product-mfm-title',
    descId: 'product-mfm-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    tagline: 'Flagship folding system for maximum output',
    description:
      'Our flagship metal folding machine delivering the highest throughput and precision in its class. The ultimate solution for demanding fabrication operations.',
    features: ['Maximum bending length 6000mm', '±0.1mm repeatability', 'Energy recovery system'],
    imgId: 'product-mfm2-g7h8i9',
    titleId: 'product-mfm2-title',
    descId: 'product-mfm2-desc',
  },
]

export default function ProductsSection() {
  const gridRef = useRef(null)

  useEffect(() => {
    if (gridRef.current) {
      return ImageHelper.loadImages(strkImgConfig, gridRef.current)
    }
  }, [])

  return (
    <section id="products" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-gold text-xs tracking-[0.25em] uppercase font-medium">
            Our Product Line
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-4 mb-4">
            Precision Folding Machinery
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            From compact folders to industrial folding systems — every machine is built to the
            highest standards of precision engineering.
          </p>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Product grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-slate-50 border border-slate-100 hover:border-brand-gold/40 transition-all duration-500"
            >
              {/* Image area */}
              <div className="relative overflow-hidden bg-slate-100 aspect-[4/3]">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <span className="text-brand-gold text-xs tracking-[0.2em] uppercase font-medium">
                  {product.tagline}
                </span>
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-brand-navy mt-2 mb-3"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-slate-500 text-sm leading-relaxed mb-4"
                >
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase font-medium text-brand-navy hover:text-brand-gold transition-colors group/link"
                >
                  Inquire Now
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}