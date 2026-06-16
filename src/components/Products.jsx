import { useEffect, useRef } from 'react'
import { ChevronRight, Gauge, Ruler, Layers } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    subtitle: 'Heavy-Duty Industrial Model DF-5000',
    description:
      'Our flagship double folding machine delivers precise, consistent bends for high-volume sheet metal operations. Engineered with CNC control and hydraulic drive for unmatched reliability.',
    specs: ['CNC Control System', 'Hydraulic Drive', '5000mm Max Length', '±0.1mm Accuracy'],
    iconId: 'prod-icon-double-folding',
    imgId: 'prod-img-double-folding',
    titleId: 'prod-title-double-folding',
    descId: 'prod-desc-double-folding',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    subtitle: 'Compact Model DF-2500',
    description:
      'The compact double folder is ideal for mid-sized workshops. Combines the power of a double-folder design with a space-efficient footprint and intuitive operator controls.',
    specs: ['Touchscreen Interface', 'Pneumatic Clamping', '2500mm Max Length', 'Quick Tool Change'],
    iconId: 'prod-icon-double-folder',
    imgId: 'prod-img-double-folder',
    titleId: 'prod-title-double-folder',
    descId: 'prod-desc-double-folder',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    subtitle: 'Manual & Electric Models',
    description:
      'Versatile sheet metal folders available in manual and powered configurations. Perfect for fabrication shops requiring flexibility across material gauges and bend profiles.',
    specs: ['Manual & Electric Options', 'Adjustable Backgauge', 'Up to 3mm Steel', 'Foot Pedal Control'],
    iconId: 'prod-icon-sheet-folder',
    imgId: 'prod-img-sheet-folder',
    titleId: 'prod-title-sheet-folder',
    descId: 'prod-desc-sheet-folder',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    subtitle: 'Automated Model SMF-4000',
    description:
      'Automated sheet metal folding machine with programmable backgauge and automatic angle correction. Designed for production lines requiring speed and repeatability.',
    specs: ['Auto Angle Correction', 'Programmable Backgauge', '4000mm Capacity', 'Servo Motor Drive'],
    iconId: 'prod-icon-smf',
    imgId: 'prod-img-smf',
    titleId: 'prod-title-smf',
    descId: 'prod-desc-smf',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    subtitle: 'Portable & Benchtop Options',
    description:
      'Lightweight metal folders designed for portability and benchtop use. Essential for on-site fabrication, HVAC installation, and mobile repair services.',
    specs: ['Portable Design', 'Benchtop Mountable', 'Up to 1.5mm Mild Steel', 'No Power Required'],
    iconId: 'prod-icon-metal-folder',
    imgId: 'prod-img-metal-folder',
    titleId: 'prod-title-metal-folder',
    descId: 'prod-desc-metal-folder',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    subtitle: 'CNC Tandem Model MF-6000',
    description:
      'Our largest CNC metal folding machine built for heavy fabrication. Tandem design allows synchronized operation for extra-long sheets with precision across the entire length.',
    specs: ['CNC Tandem System', 'Synchronized Bending', '6000mm Max Length', '12mm Mild Steel'],
    iconId: 'prod-icon-metal-folding',
    imgId: 'prod-img-metal-folding',
    titleId: 'prod-title-metal-folding',
    descId: 'prod-desc-metal-folding',
  },
]

const iconMap = {
  'prod-icon-double-folding': Gauge,
  'prod-icon-double-folder': Layers,
  'prod-icon-sheet-folder': Ruler,
  'prod-icon-smf': Gauge,
  'prod-icon-metal-folder': Layers,
  'prod-icon-metal-folding': Ruler,
}

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" ref={containerRef} className="py-20 lg:py-28 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent-600 tracking-widest uppercase">
            Our Product Range
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-900 mt-3 mb-5 tracking-tight">
            Folding Machines for Every Workshop
          </h2>
          <p className="text-brand-500 text-lg leading-relaxed">
            From compact benchtop folders to heavy-duty CNC tandem machines, we
            manufacture equipment that meets the demands of modern sheet metal
            fabrication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = iconMap[product.iconId] || Gauge
            return (
              <article
                key={product.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-brand-200 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden bg-brand-100">
                  <img
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 text-accent-500" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs font-semibold text-accent-600 tracking-wide uppercase mb-1">
                    {product.subtitle}
                  </p>
                  <h3
                    id={product.titleId}
                    className="text-xl font-bold text-brand-900 mb-3"
                  >
                    {product.title}
                  </h3>
                  <p
                    id={product.descId}
                    className="text-brand-500 text-sm leading-relaxed mb-5 flex-1"
                  >
                    {product.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {product.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-2 text-sm text-brand-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-500 transition-colors"
                  >
                    Request Information
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
