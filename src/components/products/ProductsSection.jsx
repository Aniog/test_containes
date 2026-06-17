import { useEffect, useRef } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    desc: 'High-speed automated double folding machine for precision sheet metal bending with dual-axis control system.',
    features: ['Dual-axis CNC control', 'Up to 12 m/min folding speed', '±0.1mm precision', 'Automated back gauge'],
    imgId: 'prod-double-folding-a1b2c3',
    titleId: 'prod-title-double-folding',
    descId: 'prod-desc-double-folding',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    desc: 'Versatile double folder designed for complex folding operations on medium to large sheet metal workpieces.',
    features: ['Servo-electric drive', 'Touchscreen HMI panel', 'Tool-less quick change', 'Energy-efficient operation'],
    imgId: 'prod-double-folder-d4e5f6',
    titleId: 'prod-title-double-folder',
    descId: 'prod-desc-double-folder',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    desc: 'Heavy-duty sheet metal folder engineered for consistent, high-quality bends across a wide range of material thicknesses.',
    features: ['Up to 6mm mild steel capacity', 'Segmented clamping beam', 'Manual or CNC modes', 'Safety light curtain'],
    imgId: 'prod-sheet-folder-g7h8i9',
    titleId: 'prod-title-sheet-folder',
    descId: 'prod-desc-sheet-folder',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    desc: 'Industrial sheet metal folding machine combining hydraulic power with CNC precision for demanding production environments.',
    features: ['Hybrid hydraulic-servo system', 'Programmable bend sequences', 'Back gauge with 6 axes', 'Remote diagnostics'],
    imgId: 'prod-sheet-machine-j0k1l2',
    titleId: 'prod-title-sheet-machine',
    descId: 'prod-desc-sheet-machine',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    desc: 'Compact metal folder ideal for workshops and light industrial use, delivering professional-grade folds with minimal setup.',
    features: ['Space-saving design', 'Quick-release clamping', 'Adjustable folding angle', 'Rugged steel construction'],
    imgId: 'prod-metal-folder-m3n4o5',
    titleId: 'prod-title-metal-folder',
    descId: 'prod-desc-metal-folder',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    desc: 'All-round metal folder machine built for versatility, handling aluminum, steel, and stainless steel with consistent quality.',
    features: ['Multi-material capability', 'Variable folding speed', 'Digital angle display', 'CE certified safety'],
    imgId: 'prod-metal-machine-p6q7r8',
    titleId: 'prod-title-metal-machine',
    descId: 'prod-desc-metal-machine',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    desc: 'Premium metal folding machine featuring advanced automation and Industry 4.0 connectivity for smart manufacturing.',
    features: ['Industry 4.0 ready', 'IoT monitoring & alerts', 'Auto tool recognition', 'Predictive maintenance'],
    imgId: 'prod-metal-folding-s9t0u1',
    titleId: 'prod-title-metal-folding',
    descId: 'prod-desc-metal-folding',
  },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" className="py-20 md:py-28 bg-brand-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-display font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Our Product Line
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Precision Folding Solutions
          </h2>
          <p className="font-body text-lg text-brand-600 leading-relaxed">
            From compact workshop folders to fully automated industrial folding lines,
            ARTITECT MACHINERY offers a complete range of sheet metal folding equipment
            engineered for excellence.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-brand-100 hover:border-brand-200 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="aspect-[4/3] bg-brand-100 overflow-hidden">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 md:p-7">
                <h3 id={product.titleId} className="font-display text-xl font-bold text-primary mb-2">
                  {product.title}
                </h3>
                <p id={product.descId} className="font-body text-brand-600 text-sm leading-relaxed mb-4">
                  {product.desc}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-brand-700">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span className="font-body">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm font-body hover:text-primary-light transition-colors group/link"
                >
                  Request Info
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