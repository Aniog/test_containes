import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Check, Settings, Zap, Shield } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    subtitle: 'Industrial-grade precision for complex sheet metal folds',
    desc: 'Our flagship double folder delivers unmatched accuracy for heavy-duty sheet metal fabrication. Designed for continuous production environments.',
    imgId: 'prod-dfm-a1b2c3',
    titleId: 'prod-dfm-title',
    descId: 'prod-dfm-desc',
    features: ['Automatic folding sequence', 'CNC-controlled back gauge', 'Up to 6mm mild steel capacity', 'Touchscreen interface'],
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    subtitle: 'Versatile folding for workshops of every size',
    desc: 'A robust metal folder machine that combines power with precision. Ideal for HVAC, roofing, and general sheet metal work.',
    imgId: 'prod-smf-d4e5f6',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
    features: ['Manual & semi-automatic modes', 'Quick-change tooling system', 'Compact footprint', 'Heavy-duty clamping'],
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    subtitle: 'High-speed production folding at scale',
    desc: 'Engineered for high-volume metal folding with rapid cycle times. The ultimate solution for manufacturers who demand speed without sacrificing quality.',
    imgId: 'prod-mfm-g7h8i9',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
    features: ['High-speed servo drive', 'Automatic angle correction', 'Programmable bend sequences', 'Remote diagnostics'],
  },
]

const features = [
  { icon: Settings, label: 'Precision Engineering', desc: 'Micron-level accuracy on every fold' },
  { icon: Zap, label: 'High Efficiency', desc: 'Optimized cycle times for maximum throughput' },
  { icon: Shield, label: 'Built to Last', desc: 'Heavy-duty construction for decades of service' },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="products" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-gold text-xs lg:text-sm font-semibold tracking-[0.25em] uppercase">
            Our Machines
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy">
            Precision Metal Folding Solutions
          </h2>
          <p className="mt-4 text-charcoal/60 max-w-2xl mx-auto text-base lg:text-lg">
            From compact workshop folders to fully automated production lines — every ARTITECT machine is built with the same commitment to excellence.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>

              {/* Product Info */}
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <span className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                  {product.subtitle}
                </span>
                <h3 id={product.titleId} className="text-xl lg:text-2xl font-serif font-bold text-navy mb-3">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-sm text-charcoal/60 leading-relaxed mb-5">
                  {product.desc}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal/70">
                      <Check size={16} className="text-gold mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full px-5 py-2.5 border border-gold text-gold text-sm font-semibold rounded-lg hover:bg-gold hover:text-white transition-colors"
                >
                  Inquire About This Machine
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-navy/5 text-navy mb-4">
                <feat.icon size={24} />
              </div>
              <h4 className="text-lg font-serif font-bold text-navy mb-2">{feat.label}</h4>
              <p className="text-sm text-charcoal/50">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}