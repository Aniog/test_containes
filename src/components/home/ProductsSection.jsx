import { Link } from 'react-router-dom'
import { ArrowRight, Ruler, Layers, Settings } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description:
      'High-capacity double folding system designed for continuous industrial operation with precise angle control.',
    features: ['Hydraulic drive', 'CNC programmable', 'Up to 6mm mild steel'],
    imgId: 'prod-double-folding-a1b2c3',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description:
      'Compact double folder unit ideal for workshop environments requiring versatile bending capabilities.',
    features: ['Manual & foot-pedal', 'Quick tool change', 'Space-saving design'],
    imgId: 'prod-double-folder-d4e5f6',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description:
      'Robust sheet metal folder built for accurate, repeatable bends across a wide range of gauges.',
    features: ['Digital readout', 'Segmented top blade', 'Safety interlocks'],
    imgId: 'prod-sheet-folder-g7h8i9',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description:
      'Automated folding machine with servo-electric backgauge for complex multi-stage sequences.',
    features: ['Servo control', 'Multi-axis backgauge', 'Remote diagnostics'],
    imgId: 'prod-sheet-folding-j0k1l2',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description:
      'A versatile metal folder engineered for both thin-gauge architectural panels and heavier structural work.',
    features: ['Adjustable clamping', 'Wide throat depth', 'Heavy-duty frame'],
    imgId: 'prod-metal-folder-m3n4o5',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description:
      'Full-featured metal folding machine delivering industrial throughput with operator-friendly controls.',
    features: ['Touchscreen HMI', 'Automatic crowning', 'Energy-efficient motor'],
    imgId: 'prod-metal-folding-p6q7r8',
  },
]

const iconMap = [Ruler, Layers, Settings]

export default function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Our Machinery
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Built for Precision, Designed for Performance
          </h2>
          <p className="text-muted leading-relaxed">
            From compact workshop folders to full-scale automated folding lines, our
            machines deliver consistent, repeatable results shift after shift.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, idx) => {
            const Icon = iconMap[idx % iconMap.length]
            return (
              <article
                key={product.id}
                className="group bg-surface rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] bg-primary/5 overflow-hidden">
                  <img
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[prod-desc-${product.id}] [prod-title-${product.id}] industrial machinery`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute top-4 left-4 w-8 h-8 bg-accent/90 rounded-md flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    id={`prod-title-${product.id}`}
                    className="text-lg font-bold mb-2"
                  >
                    {product.title}
                  </h3>
                  <p
                    id={`prod-desc-${product.id}`}
                    className="text-muted text-sm leading-relaxed mb-4"
                  >
                    {product.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold hover:text-accent-hover transition-colors"
                  >
                    Inquire Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
