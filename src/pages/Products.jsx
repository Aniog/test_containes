import { Link } from 'react-router-dom'
import { ArrowRight, Check, Factory, Settings, Gauge, Layers } from 'lucide-react'

const allProducts = [
  {
    id: 'double-folding',
    name: 'Double Folding Machine',
    series: 'DFM Series',
    tagline: 'Precision dual-fold for complex profiles',
    description:
      'Our double folding machine delivers industry-leading accuracy for complex sheet metal folding operations. Designed for high-volume production with rapid cycle times and minimal setup.',
    specs: [
      'Max folding length: 3200mm',
      'Material thickness: 0.5mm – 3.0mm',
      'Fold angle range: 0° – 135°',
      'CNC-controlled backgauge',
      'Hydraulic clamping system',
      'Touchscreen HMI interface',
    ],
    image: 'double-folding',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    series: 'SMF Series',
    tagline: 'Heavy-duty industrial folding',
    description:
      'Engineered for demanding fabrication environments, the SMF series provides robust, reliable sheet metal folding with exceptional repeatability across long production runs.',
    specs: [
      'Max folding length: 2500mm',
      'Material thickness: 0.4mm – 2.5mm',
      'Fold angle range: 0° – 150°',
      'Segmented clamping beam',
      'Manual or CNC backgauge options',
      'Heavy-duty steel frame',
    ],
    image: 'sheet-metal-folder',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder Machine',
    series: 'MFM Series',
    tagline: 'Versatile all-purpose metal folding',
    description:
      'A flexible solution suitable for workshops of all sizes. The MFM series handles a wide range of materials including steel, aluminum, copper, and brass with consistent quality.',
    specs: [
      'Max folding length: 2000mm',
      'Material thickness: 0.3mm – 2.0mm',
      'Fold angle range: 0° – 135°',
      'Quick-change tooling system',
      'Manual or powered backgauge',
      'Compact footprint design',
    ],
    image: 'metal-folder',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    series: 'DF Series',
    tagline: 'Compact dual-action folding',
    description:
      'The DF Series double folder combines two folding actions in one compact machine. Perfect for shops that need dual-fold capability without the footprint of larger equipment.',
    specs: [
      'Max folding length: 1500mm',
      'Material thickness: 0.4mm – 2.0mm',
      'Fold angle range: 0° – 135°',
      'Dual-beam folding mechanism',
      'Pneumatic clamping system',
      'Compact workshop-friendly size',
    ],
    image: 'double-folder',
  },
  {
    id: 'metal-folding',
    name: 'Metal Folding Machine',
    series: 'MF Series',
    tagline: 'Entry-level precision folding',
    description:
      'The MF Series offers professional-grade metal folding at an accessible price point. Ideal for small to medium workshops looking to bring folding capabilities in-house.',
    specs: [
      'Max folding length: 1250mm',
      'Material thickness: 0.3mm – 1.6mm',
      'Fold angle range: 0° – 135°',
      'Manual backgauge with scale',
      'Lightweight yet rigid frame',
      'Tool-free setup adjustments',
    ],
    image: 'metal-folding',
  },
]

export default function Products() {
  return (
    <div>
      {/* Header */}
      <section className="bg-brand-charcoal py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Our <span className="text-brand-gold">Machinery</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Explore our complete range of precision sheet metal folding machines. Each model is engineered for reliability, accuracy, and ease of use.
          </p>
        </div>
      </section>

      {/* Product list */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {allProducts.map((product, idx) => (
              <div
                key={product.id}
                id={product.id}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image placeholder */}
                <div className="w-full lg:w-1/2 aspect-[4/3] bg-slate-100 rounded-2xl flex items-center justify-center">
                  <Factory className="w-20 h-20 text-slate-300" />
                </div>

                {/* Details */}
                <div className="w-full lg:w-1/2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold mb-3">
                    <Settings className="w-3.5 h-3.5" />
                    {product.series}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    {product.name}
                  </h2>
                  <p className="mt-1 text-brand-gold font-medium">{product.tagline}</p>
                  <p className="mt-4 text-slate-600 leading-relaxed">{product.description}</p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.specs.map((spec) => (
                      <div key={spec} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-600">{spec}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-brand-gold hover:bg-brand-gold-light transition-colors"
                    >
                      Request a Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Need help choosing the right machine?
          </h2>
          <p className="mt-3 text-slate-600 max-w-lg mx-auto">
            Our engineering team can help you select the ideal folding solution for your specific materials and production requirements.
          </p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-brand-gold hover:bg-brand-gold-light transition-colors"
            >
              Speak with an Engineer
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
