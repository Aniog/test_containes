import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Gauge, Wrench, Shield, Zap, ArrowRight, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    subtitle: 'AM-DFM Series',
    description:
      'Our flagship double folding machine delivers complex multi-stage bends in a single setup. With CNC backgauge control and hydraulic clamping, the AM-DFM Series handles sheet thicknesses up to 6mm with pinpoint accuracy.',
    features: ['CNC-controlled backgauge', 'Hydraulic clamping system', '6mm max sheet thickness', 'Touch-screen interface'],
    icon: Gauge,
    imgId: 'product-detail-double-fold-1a2b3c',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    subtitle: 'AM-DF Series',
    description:
      'A compact yet powerful double folder perfect for smaller workshops. The AM-DF Series offers quick-change tooling and a space-saving footprint without sacrificing bending precision.',
    features: ['Compact 2.2m footprint', 'Quick-change tooling', 'Manual & semi-auto modes', 'Energy-efficient motor'],
    icon: Wrench,
    imgId: 'product-detail-double-folder-4d5e6f',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    subtitle: 'AM-SMF Series',
    description:
      'Built for daily industrial use, the AM-SMF Series sheet metal folder combines rugged construction with precision-controlled bending angles. Ideal for HVAC, automotive, and general fabrication.',
    features: ['Rugged welded steel frame', 'Precision angle control', 'HVAC & fabrication ready', 'Safety light curtains'],
    icon: Shield,
    imgId: 'product-detail-sheet-folder-7g8h9i',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    subtitle: 'AM-SMFM Series',
    description:
      'The AM-SMFM Series is a fully automated sheet metal folding machine with advanced CNC controls designed for high-volume mass production environments requiring consistent quality.',
    features: ['Full CNC automation', 'High-volume production', 'Automatic tool changer', 'Remote diagnostics'],
    icon: Zap,
    imgId: 'product-detail-sheet-fold-machine-0j1k2l',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    subtitle: 'AM-MF Series',
    description:
      'A heavy-duty metal folder capable of processing thick gauge materials up to 10mm. The AM-MF Series delivers consistent quality output for structural steel and heavy fabrication.',
    features: ['10mm max thickness', 'High-tonnage hydraulics', 'Structural steel ready', 'Wear-resistant blades'],
    icon: Gauge,
    imgId: 'product-detail-metal-folder-3m4n5o',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    subtitle: 'AM-MFM Series',
    description:
      'Versatile metal folder machine featuring quick-change tooling and digital readout displays. The AM-MFM Series adapts to a wide range of materials and bend profiles.',
    features: ['Quick-change tooling', 'Digital readout (DRO)', 'Multi-material support', 'Operator training included'],
    icon: Wrench,
    imgId: 'product-detail-metal-folder-machine-6p7q8r',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    subtitle: 'AM-MFL Series',
    description:
      'Advanced metal folding machine with programmable backgauge and hydraulic drive systems. The AM-MFL Series brings smart automation to your folding workflow.',
    features: ['Programmable backgauge', 'Hydraulic drive system', 'Smart automation', 'Production reporting'],
    icon: Shield,
    imgId: 'product-detail-metal-fold-machine-9s0t1u',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 bg-navy-light/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Product Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
            Our Machinery Lineup
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the complete range of ARTITECT MACHINERY folding equipment,
            each engineered to exacting standards for your production needs.
          </p>
        </div>
      </section>

      {/* Products list */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => {
              const titleId = `detail-title-${product.id}`
              const descId = `detail-desc-${product.id}`
              const isEven = index % 2 === 0
              return (
                <div
                  key={product.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="rounded-xl overflow-hidden bg-gray-100 h-72 md:h-96">
                      <img
                        alt={product.title}
                        data-strk-img-id={product.imgId}
                        data-strk-img={`[${descId}] [${titleId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                        <product.icon size={20} className="text-gold" />
                      </div>
                      <span className="text-sm font-semibold text-gold tracking-wide uppercase">
                        {product.subtitle}
                      </span>
                    </div>
                    <h2
                      id={titleId}
                      className="text-2xl sm:text-3xl font-bold text-navy mb-4"
                    >
                      {product.title}
                    </h2>
                    <p
                      id={descId}
                      className="text-muted leading-relaxed mb-6"
                    >
                      {product.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-navy"
                        >
                          <Check size={16} className="text-gold shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-md font-semibold hover:bg-navy-light transition-colors"
                    >
                      Request Quote
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
