import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'df-2000',
    name: 'DF-2000 Pro',
    category: 'Double Folding Machine',
    description: 'Our flagship double folding machine with advanced CNC control, delivering unmatched precision for high-volume sheet metal production lines.',
    specs: ['Max thickness: 2.0mm', 'Bending length: 2000mm', 'CNC-controlled back gauge'],
    titleId: 'product-df-2000-title',
    descId: 'product-df-2000-desc',
    imgId: 'product-df-2000-img-9c3e7a',
  },
  {
    id: 'df-3200',
    name: 'DF-3200 Elite',
    category: 'Double Folder',
    description: 'Extended-length double folder designed for architectural panels, HVAC ducting, and large-format fabrication with full automation capability.',
    specs: ['Max thickness: 2.5mm', 'Bending length: 3200mm', 'Automatic tool change'],
    titleId: 'product-df-3200-title',
    descId: 'product-df-3200-desc',
    imgId: 'product-df-3200-img-4b1d8e',
  },
  {
    id: 'sf-1300',
    name: 'SF-1300 Compact',
    category: 'Sheet Metal Folder',
    description: 'Compact sheet metal folder ideal for workshops and small production facilities. Easy setup with manual or semi-automatic operation.',
    specs: ['Max thickness: 1.5mm', 'Bending length: 1300mm', 'Manual & semi-auto modes'],
    titleId: 'product-sf-1300-title',
    descId: 'product-sf-1300-desc',
    imgId: 'product-sf-1300-img-7f2a5d',
  },
  {
    id: 'mf-2500',
    name: 'MF-2500 Industrial',
    category: 'Metal Folding Machine',
    description: 'Heavy-duty metal folding machine built for continuous industrial use. Features servo-driven bending beams for maximum repeatability.',
    specs: ['Max thickness: 3.0mm', 'Bending length: 2500mm', 'Servo-driven beams'],
    titleId: 'product-mf-2500-title',
    descId: 'product-mf-2500-desc',
    imgId: 'product-mf-2500-img-e1c63f',
  },
]

const sectionTitleId = 'products-section-title'

export default function Products() {
  return (
    <section id="products" className="bg-surface py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 block">
            Our Machines
          </span>
          <h2
            id={sectionTitleId}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal mb-4"
          >
            Engineered for Excellence
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            From compact workshop folders to full-scale industrial folding systems,
            every ARTITECT machine is built to deliver precise, repeatable results.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-primary-light">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [${sectionTitleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  id={product.titleId}
                  className="text-xl font-bold text-charcoal mb-2 group-hover:text-primary transition-colors"
                >
                  {product.name}
                </h3>
                <p
                  id={product.descId}
                  className="text-muted text-sm leading-relaxed mb-4"
                >
                  {product.description}
                </p>

                {/* Specs */}
                <ul className="space-y-1.5 mb-5">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-charcoal">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  Request specifications
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
