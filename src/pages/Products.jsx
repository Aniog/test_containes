import { Link } from 'react-router-dom'
import { ChevronRight, ArrowRight } from 'lucide-react'

const productLines = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    tagline: 'Dual-fold precision for complex profiles',
    description:
      'Our flagship double folding machines perform two folds simultaneously, dramatically reducing cycle times while maintaining exceptional accuracy. Ideal for HVAC ductwork, architectural panels, and automotive components.',
    specs: ['Max sheet length: 4,000 mm', 'Max thickness: 2.5 mm steel', 'CNC backgauge system', 'Dual-beam folding'],
    titleId: 'prod-double-folding-title',
    descId: 'prod-double-folding-desc',
    imgId: 'prod-double-folding-img-aa1bb2',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    tagline: 'Compact power for versatile production',
    description:
      'A compact yet powerful solution for shops that need double-folding capability in a smaller footprint. Perfect for mid-volume production runs and quick-changeover environments.',
    specs: ['Max sheet length: 2,500 mm', 'Max thickness: 1.5 mm steel', 'Manual/CNC hybrid control', 'Rapid tool change'],
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
    imgId: 'prod-double-folder-img-cc3dd4',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    tagline: 'All-around bending excellence',
    description:
      'Designed for general-purpose sheet metal bending across a wide range of materials and thicknesses. The sheet metal folder delivers consistent results from prototype to full production.',
    specs: ['Max sheet length: 3,200 mm', 'Max thickness: 3.0 mm steel', 'Programmable angle control', 'Segmented tooling'],
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
    imgId: 'prod-sheet-metal-folder-img-ee5ff6',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    tagline: 'Industrial-grade production workhorse',
    description:
      'Built for 24/7 operation in high-volume manufacturing environments. The sheet metal folding machine combines speed, power, and precision for the most demanding applications.',
    specs: ['Max sheet length: 6,000 mm', 'Max thickness: 4.0 mm steel', 'Full CNC with touchscreen', 'Automatic tool changer'],
    titleId: 'prod-sheet-metal-folding-title',
    descId: 'prod-sheet-metal-folding-desc',
    imgId: 'prod-sheet-metal-folding-img-gg7hh8',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    tagline: 'Reliable everyday bending',
    description:
      'A reliable, straightforward metal folder that delivers day-in, day-out performance. Simple operation, minimal maintenance, and consistent results for standard fabrication tasks.',
    specs: ['Max sheet length: 2,000 mm', 'Max thickness: 2.0 mm steel', 'Manual backgauge', 'Quick-set clamping'],
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
    imgId: 'prod-metal-folder-img-ii9jj0',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    tagline: 'Advanced automation for modern shops',
    description:
      'The metal folder machine integrates smart automation features for shops looking to increase efficiency. Programmable settings, memory recall, and intuitive controls reduce operator fatigue.',
    specs: ['Max sheet length: 3,000 mm', 'Max thickness: 2.5 mm steel', 'Servo-driven folding beam', 'Touchscreen interface'],
    titleId: 'prod-metal-folder-machine-title',
    descId: 'prod-metal-folder-machine-desc',
    imgId: 'prod-metal-folder-machine-img-kk1ll2',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    tagline: 'The complete folding solution',
    description:
      'Our most versatile metal folding machine, capable of handling complex multi-bend sequences with ease. The ultimate choice for fabricators who demand the very best in accuracy and throughput.',
    specs: ['Max sheet length: 4,000 mm', 'Max thickness: 3.0 mm steel', '5-axis CNC control', 'Automated part handling'],
    titleId: 'prod-metal-folding-title',
    descId: 'prod-metal-folding-desc',
    imgId: 'prod-metal-folding-img-mm3nn4',
  },
]

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Our Product Line
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            From compact double folders to full-scale industrial sheet metal folding machines,
            find the perfect solution for your fabrication needs.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productLines.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-brand-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[16/9] bg-brand-surface overflow-hidden">
                  <img
                    alt={product.title}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold mb-2">
                    {product.tagline}
                  </p>
                  <h2 id={product.titleId} className="text-2xl font-bold text-brand-navy">
                    {product.title}
                  </h2>
                  <p id={product.descId} className="mt-3 text-brand-text-secondary leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-brand-border pt-5">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-brand-text-secondary">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-brand-border">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-brand-gold text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-brand-navy transition-colors"
                    >
                      Request Quote
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Need Help Choosing the Right Machine?
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Our experts can help you select the ideal folding machine for your specific application and budget.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-brand-gold text-white font-medium px-8 py-3.5 rounded-lg hover:bg-white hover:text-brand-navy transition-all"
          >
            Speak with an Expert
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}