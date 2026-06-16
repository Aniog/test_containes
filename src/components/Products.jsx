import { ArrowRight, CheckCircle } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    subtitle: 'High-Precision Sheet Metal Bending',
    description: 'Our flagship double folding machine delivers exceptional accuracy for complex sheet metal operations. Engineered with dual-action folding capability for maximum efficiency.',
    features: ['Dual-action folding mechanism', 'CNC-controlled precision', 'Heavy-duty steel frame', 'Quick-change tooling system'],
    specs: { capacity: 'Up to 4mm', length: 'Up to 4000mm', accuracy: '±0.1mm' },
    imgId: 'product-double-folding-d4e5f6',
    titleId: 'product-double-folding-title',
    descId: 'product-double-folding-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    subtitle: 'Versatile Metal Bending Solutions',
    description: 'Professional-grade sheet metal folder designed for high-volume production environments. Perfect for HVAC, roofing, and general metal fabrication applications.',
    features: ['Hydraulic bending system', 'Digital angle display', 'Adjustable clamping pressure', 'Safety interlock system'],
    specs: { capacity: 'Up to 3mm', length: 'Up to 3200mm', accuracy: '±0.15mm' },
    imgId: 'product-sheet-metal-folder-g7h8i9',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    subtitle: 'Industrial-Grade Performance',
    description: 'Robust metal folding machine built for demanding industrial applications. Features advanced control systems and durable construction for years of reliable operation.',
    features: ['Programmable controls', 'Automatic back gauge', 'Multi-axis movement', 'Emergency stop system'],
    specs: { capacity: 'Up to 6mm', length: 'Up to 6000mm', accuracy: '±0.05mm' },
    imgId: 'product-metal-folding-j1k2l3',
    titleId: 'product-metal-folding-title',
    descId: 'product-metal-folding-desc',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-primary/10 text-brand-primary font-semibold px-4 py-1 rounded-full text-sm mb-4">Our Products</span>
          <h2 className="section-title">Professional Folding Machines</h2>
          <p className="section-subtitle">Engineered for precision, built for durability. Explore our range of sheet metal folding solutions designed for every industrial need.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article key={product.id} className="group bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <div
                  className="w-full h-full"
                  data-strk-bg-id={product.imgId}
                  data-strk-bg={`[${product.descId}] [${product.titleId}] [products-title]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                ></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-secondary text-brand-dark font-semibold px-3 py-1 rounded-full text-sm">
                    {product.specs.capacity}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 id={product.titleId} className="text-xl font-bold text-slate-900 mb-1 group-hover:text-brand-primary transition-colors">
                  {product.title}
                </h3>
                <p id={product.descId} className="text-brand-secondary font-medium text-sm mb-3">{product.subtitle}</p>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{product.description}</p>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-white rounded-lg p-2 text-center">
                    <p className="text-xs text-slate-500">Capacity</p>
                    <p className="font-semibold text-sm text-slate-900">{product.specs.capacity}</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 text-center">
                    <p className="text-xs text-slate-500">Length</p>
                    <p className="font-semibold text-sm text-slate-900">{product.specs.length}</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 text-center">
                    <p className="text-xs text-slate-500">Accuracy</p>
                    <p className="font-semibold text-sm text-slate-900">{product.specs.accuracy}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-brand-secondary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-accent transition-colors group/link">
                  Request Quote
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
