import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Ruler, Layers, Settings, ArrowRight, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    tagline: 'Industrial-grade double folding with CNC precision.',
    description:
      'Our flagship double folding machine is engineered for high-volume production environments. It features a hydraulic drive system, programmable CNC controller, and heavy-duty frame capable of handling up to 6mm mild steel with consistent accuracy.',
    specs: [
      'Max bending length: 3200mm',
      'Max thickness (mild steel): 6mm',
      'Backgauge range: 1000mm',
      'Main motor: 11kW',
      'Hydraulic system pressure: 25MPa',
    ],
    features: [
      'CNC programmable controller',
      'Hydraulic clamping & folding',
      'Automatic angle measurement',
      'Safety light curtains',
      'Remote diagnostics port',
    ],
    imgId: 'products-double-folding-a1b2c3',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    tagline: 'Versatile compact folder for workshops and job shops.',
    description:
      'The double folder is a versatile, compact unit perfect for smaller workshops that still demand professional-grade results. Switch between manual and foot-pedal operation, and enjoy fast tool changes that minimize downtime.',
    specs: [
      'Max bending length: 2000mm',
      'Max thickness (mild steel): 3mm',
      'Clamping force: 15 tons',
      'Weight: 850kg',
      'Power: 4kW',
    ],
    features: [
      'Manual & foot-pedal modes',
      'Quick-release top blade',
      'Segmented bottom dies',
      'Space-saving footprint',
      'Cast-iron construction',
    ],
    imgId: 'products-double-folder-d4e5f6',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    tagline: 'Accurate, repeatable bends for every gauge.',
    description:
      'Built for shops that process a wide variety of sheet metal gauges, this folder delivers accurate, repeatable bends shift after shift. The digital readout and segmented top blade make setup fast and intuitive.',
    specs: [
      'Max bending length: 2500mm',
      'Max thickness (mild steel): 4mm',
      'Opening height: 200mm',
      'Approach speed: 120mm/s',
      'Working voltage: 380V / 3-phase',
    ],
    features: [
      'Digital angle readout',
      'Segmented top blade',
      'Safety interlock system',
      'Adjustable backgauge',
      'Rugged welded frame',
    ],
    imgId: 'products-sheet-folder-g7h8i9',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    tagline: 'Automated folding with multi-axis backgauge control.',
    description:
      'Take productivity to the next level with automated folding sequences and a servo-electric multi-axis backgauge. This machine handles complex multi-stage bends with minimal operator intervention.',
    specs: [
      'Max bending length: 4000mm',
      'Max thickness (mild steel): 5mm',
      'Backgauge axes: X, R, Z1, Z2',
      'Repositioning speed: 300mm/s',
      'Control: 15-inch touchscreen HMI',
    ],
    features: [
      'Servo-electric backgauge',
      'Multi-axis positioning',
      'Automatic crowning',
      'Offline programming support',
      'Remote diagnostics & support',
    ],
    imgId: 'products-sheet-folding-j0k1l2',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    tagline: 'One machine, a wide range of metals and thicknesses.',
    description:
      'From thin architectural panels to heavier structural components, the metal folder adapts to your material with adjustable clamping pressure and generous throat depth. Its heavy-duty frame stays rigid under load.',
    specs: [
      'Max bending length: 3000mm',
      'Max thickness (mild steel): 5mm',
      'Throat depth: 400mm',
      'Clamping pressure: 30 tons',
      'Motor: 7.5kW',
    ],
    features: [
      'Adjustable clamping pressure',
      'Wide throat depth',
      'Heavy-duty steel frame',
      'Quick blade adjustment',
      'Foot-pedal & manual controls',
    ],
    imgId: 'products-metal-folder-m3n4o5',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    tagline: 'Full-featured automation with operator-friendly HMI.',
    description:
      'This full-featured metal folding machine combines industrial throughput with an intuitive touchscreen interface. The energy-efficient motor and automatic crowning system reduce power use while maintaining part quality.',
    specs: [
      'Max bending length: 3500mm',
      'Max thickness (mild steel): 6mm',
      'Backgauge travel: 1200mm',
      'Main motor: 11kW (energy efficient)',
      'Machine weight: 4200kg',
    ],
    features: [
      '15-inch touchscreen HMI',
      'Automatic crowning compensation',
      'Energy-efficient servo motor',
      'Tool library with presets',
      'Production logging & reporting',
    ],
    imgId: 'products-metal-folding-p6q7r8',
  },
]

const iconMap = [Ruler, Layers, Settings]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-20 md:py-28">
        <div className="container-main">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Product Catalog
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground-inverse mb-4">
            Our Machinery
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Browse our complete range of double folding machines, metal folders, and
            sheet metal folding equipment. Every model is built to deliver precision,
            reliability, and long service life.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-main space-y-16 md:space-y-24">
          {products.map((product, idx) => {
            const Icon = iconMap[idx % iconMap.length]
            const isEven = idx % 2 === 0
            return (
              <article
                key={product.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-primary/5 border border-border">
                    <img
                      alt={product.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[prod-detail-desc-${product.id}] [prod-detail-title-${product.id}] industrial machinery`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-accent rounded-md flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h2
                    id={`prod-detail-title-${product.id}`}
                    className="text-2xl md:text-3xl font-extrabold mb-3"
                  >
                    {product.title}
                  </h2>
                  <p className="text-accent font-medium mb-4">{product.tagline}</p>
                  <p
                    id={`prod-detail-desc-${product.id}`}
                    className="text-muted leading-relaxed mb-6"
                  >
                    {product.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-3">
                        Specifications
                      </h4>
                      <ul className="space-y-2">
                        {product.specs.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sm text-muted">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-muted">
                            <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-md transition-colors"
                  >
                    Request a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
