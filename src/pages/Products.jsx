import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Factory, Gauge, Cog, Wrench } from 'lucide-react'

const ALL_PRODUCTS = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    model: 'AM-DF2500',
    tagline: 'Dual-side simultaneous folding for maximum productivity',
    description:
      'The AM-DF2500 is our flagship double folding machine, engineered to fold both sides of a sheet simultaneously. Ideal for panel bending, box forming, and high-volume production lines where speed and accuracy matter.',
    specs: [
      { label: 'Max Bending Length', value: '2500 mm' },
      { label: 'Max Material Thickness', value: '3.0 mm (mild steel)' },
      { label: 'Bending Angle Range', value: '0°–135°' },
      { label: 'CNC Axes', value: '6-axis servo' },
      { label: 'Machine Weight', value: '4,800 kg' },
      { label: 'Control System', value: 'AM-CNC Pro v3' },
    ],
    features: [
      'Dual-side simultaneous folding',
      'CNC precision control with auto-compensation',
      'Quick-change folding beam system',
      'Integrated sheet support tables',
      'Network-enabled for remote diagnostics',
    ],
    imgId: 'am-double-folding-detail-j1k2l3',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    model: 'AM-SMF1500',
    tagline: 'Versatile manual & CNC sheet metal folding',
    description:
      'The AM-SMF1500 bridges the gap between manual craftsmanship and CNC automation. Designed for job shops and medium-volume production, it handles diverse materials with fast changeovers and reliable repeatability.',
    specs: [
      { label: 'Max Bending Length', value: '1500 mm' },
      { label: 'Max Material Thickness', value: '2.0 mm (mild steel)' },
      { label: 'Bending Angle Range', value: '0°–135°' },
      { label: 'Operation Modes', value: 'Manual / Semi-CNC' },
      { label: 'Machine Weight', value: '2,200 kg' },
      { label: 'Back Gauge', value: 'Digital readout ±0.1mm' },
    ],
    features: [
      'Tool-free clamping system',
      'Manual and CNC operating modes',
      'Digital back gauge with memory',
      'Compact footprint — fits any shop',
      'Low maintenance design',
    ],
    imgId: 'am-sheet-metal-folder-detail-m4n5o6',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    model: 'AM-MF3200',
    tagline: 'Heavy-duty industrial folding for high-volume lines',
    description:
      'The AM-MF3200 is a fully hydraulic metal folding machine built for 24/7 production. With a massive welded frame, programmable bend libraries, and integrated safety systems, it delivers maximum uptime in demanding environments.',
    specs: [
      { label: 'Max Bending Length', value: '3200 mm' },
      { label: 'Max Material Thickness', value: '4.0 mm (mild steel)' },
      { label: 'Bending Angle Range', value: '0°–160°' },
      { label: 'Clamping Force', value: '60 tons' },
      { label: 'Machine Weight', value: '8,500 kg' },
      { label: 'Control System', value: 'AM-CNC Pro v3 + IoT' },
    ],
    features: [
      'Heavy-duty welded steel frame',
      'Hydraulic clamping with pressure control',
      'Programmable 99-bend sequences',
      'Integrated safety light curtain',
      'IoT-ready with production analytics',
    ],
    imgId: 'am-metal-folding-detail-p7q8r9',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    model: 'AM-MF1000',
    tagline: 'Compact precision metal folding for tight spaces',
    description:
      'The AM-MF1000 delivers the same precision engineering in a compact, benchtop-ready form factor. Perfect for prototyping, small-batch production, and educational workshops where space is at a premium.',
    specs: [
      { label: 'Max Bending Length', value: '1000 mm' },
      { label: 'Max Material Thickness', value: '1.5 mm (mild steel)' },
      { label: 'Bending Angle Range', value: '0°–135°' },
      { label: 'Operation Mode', value: 'Manual' },
      { label: 'Machine Weight', value: '850 kg' },
      { label: 'Footprint', value: '1200 × 800 mm' },
    ],
    features: [
      'Desktop-friendly compact design',
      'Precision-ground folding beam',
      'Smooth manual operation',
      'Ideal for prototyping & light production',
      'Affordable entry-level pricing',
    ],
    imgId: 'am-metal-folder-detail-s1t2u3',
  },
]

export default function Products() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-xs font-medium text-amber-400 mb-5">
            <Factory className="w-3.5 h-3.5" />
            Our Product Line
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Precision Folding{' '}
            <span className="text-amber-500">Machinery</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            From compact manual folders to fully automated CNC double folding
            machines — explore the complete ARTITECT MACHINERY product range.
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {ALL_PRODUCTS.map((product, idx) => (
              <article
                key={product.id}
                id={`product-${product.id}`}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  idx % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 ${
                    idx % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[product-detail-${product.id}-desc] [product-detail-${product.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>

                {/* Content */}
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-500 bg-amber-50 px-3 py-1 rounded-full">
                      {product.model}
                    </span>
                    <span className="text-xs text-slate-400">{product.tagline}</span>
                  </div>
                  <h2
                    id={`product-detail-${product.id}-title`}
                    className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
                  >
                    {product.name}
                  </h2>
                  <p
                    id={`product-detail-${product.id}-desc`}
                    className="text-slate-500 leading-relaxed mb-8"
                  >
                    {product.description}
                  </p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {product.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="bg-slate-50 rounded-xl px-4 py-3"
                      >
                        <p className="text-xs text-slate-400 mb-0.5">{spec.label}</p>
                        <p className="text-sm font-semibold text-slate-900">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2 mb-8">
                    {product.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-slate-600"
                      >
                        <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-amber-500 transition-all duration-300"
                  >
                    Request a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Note */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gauge className="w-10 h-10 text-amber-500 mx-auto mb-5" />
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Not Sure Which Machine Is Right for You?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Our engineering team will analyze your production requirements and
            recommend the ideal configuration.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-amber-500 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/20"
          >
            Talk to an Engineer
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
