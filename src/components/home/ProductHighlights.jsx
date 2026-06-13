import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    tagline: 'Precision in every crease',
    desc: 'Our flagship double folding machine delivers exceptional accuracy for high-volume sheet metal folding operations. Ideal for HVAC, automotive, and architectural metalwork.',
    specs: ['Max Length: 3200mm', 'Max Thickness: 1.5mm Steel', 'CNC Backgauge'],
    imgId: 'product-double-folding-d4e5f6',
    titleId: 'hl-double-title',
    descId: 'hl-double-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    tagline: 'Versatile bending solution',
    desc: 'A robust manual and semi-automatic sheet metal folder designed for workshops that demand flexibility without compromising on bend quality.',
    specs: ['Max Length: 2500mm', 'Max Thickness: 2.0mm Steel', 'Segmented Clamping'],
    imgId: 'product-sheet-metal-g7h8i9',
    titleId: 'hl-sheet-title',
    descId: 'hl-sheet-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    tagline: 'Heavy-duty industrial workhorse',
    desc: 'Built for continuous production environments, this metal folding machine handles the toughest jobs with minimal downtime and maximum precision.',
    specs: ['Max Length: 4000mm', 'Max Thickness: 3.0mm Steel', 'Hydraulic Drive'],
    imgId: 'product-metal-folding-j0k1l2',
    titleId: 'hl-metal-title',
    descId: 'hl-metal-desc',
  },
]

export default function ProductHighlights() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-semibold text-sm uppercase tracking-wider">
            Our Machines
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-primary-dark tracking-tight">
            Folding Solutions That Deliver
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-brand-accent/20 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                <div
                  className="w-full h-full"
                  data-strk-bg-id={`${product.imgId}`}
                  data-strk-bg={`[${product.descId}] [${product.titleId}]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span id={product.titleId} className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
                  {product.tagline}
                </span>
                <h3 className="mt-1 text-xl font-bold text-brand-primary-dark">
                  {product.title}
                </h3>
                <p id={product.descId} className="mt-3 text-[#5A6278] text-sm leading-relaxed">
                  {product.desc}
                </p>
                <ul className="mt-4 space-y-1.5 flex-1">
                  {product.specs.map((spec) => (
                    <li key={spec} className="text-xs text-[#5A6278] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/products"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary-dark transition-colors shadow-md"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}