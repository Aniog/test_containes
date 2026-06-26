const products = [
  {
    id: 'double-folding',
    title: 'Double Folding Machine',
    description: 'High-precision double folding system for complex metal profiles with automated angle control.',
    features: ['Automated angle control', 'High-speed operation', 'Precision bending'],
    imgId: 'product-double-folding-x1y2z3',
    titleId: 'product-double-folding-title',
    descId: 'product-double-folding-desc',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double folder for creating precise double seams and hems in sheet metal applications.',
    features: ['Double seam capability', 'Adjustable pressure', 'Quick setup'],
    imgId: 'product-double-folder-a4b5c6',
    titleId: 'product-double-folder-title',
    descId: 'product-double-folder-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Professional-grade sheet metal folder designed for consistent, repeatable bends across various materials.',
    features: ['Material versatility', 'Consistent results', 'Heavy-duty construction'],
    imgId: 'product-sheet-metal-folder-d7e8f9',
    titleId: 'product-sheet-metal-folder-title',
    descId: 'product-sheet-metal-folder-desc',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Advanced folding machine with CNC controls for complex sheet metal fabrication tasks.',
    features: ['CNC controlled', 'Complex geometries', 'High repeatability'],
    imgId: 'product-sheet-metal-folding-g1h2i3',
    titleId: 'product-sheet-metal-folding-title',
    descId: 'product-sheet-metal-folding-desc',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Robust metal folder built for demanding industrial environments and continuous operation.',
    features: ['Industrial grade', 'Continuous operation', 'Low maintenance'],
    imgId: 'product-metal-folder-j4k5l6',
    titleId: 'product-metal-folder-title',
    descId: 'product-metal-folder-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Complete metal folder machine solution with integrated safety features and operator controls.',
    features: ['Integrated safety', 'Operator friendly', 'Complete solution'],
    imgId: 'product-metal-folder-machine-m7n8o9',
    titleId: 'product-metal-folder-machine-title',
    descId: 'product-metal-folder-machine-desc',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'State-of-the-art metal folding machine delivering exceptional accuracy for precision manufacturing.',
    features: ['Exceptional accuracy', 'Precision manufacturing', 'Advanced controls'],
    imgId: 'product-metal-folding-machine-p1q2r3',
    titleId: 'product-metal-folding-machine-title',
    descId: 'product-metal-folding-machine-desc',
  },
]

export default function ProductCard({ product }) {
  return (
    <article className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-border">
      <div className="aspect-[4/3] overflow-hidden bg-surface">
        <img
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [products-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </div>
      <div className="p-6">
        <h3 id={product.titleId} className="text-xl font-semibold text-primary mb-2">
          {product.title}
        </h3>
        <p id={product.descId} className="text-muted text-sm leading-relaxed mb-4">
          {product.description}
        </p>
        <ul className="space-y-2">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-primary/80">
              <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export { products }
