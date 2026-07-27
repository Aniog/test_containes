import { Link } from 'react-router-dom'

const categories = [
  { title: 'Electronics & Components', desc: 'PCBs, semiconductors, connectors, cables, consumer electronics', imgId: 'prod-electronics-s1t2u3' },
  { title: 'Industrial Machinery', desc: 'CNC parts, molds, automation equipment, bearings, hydraulic components', imgId: 'prod-machinery-v4w5x6' },
  { title: 'Metal Parts & Fabrication', desc: 'Stamping, casting, CNC machining, sheet metal, welding assemblies', imgId: 'prod-metal-y7z8a9' },
  { title: 'Plastic & Rubber Products', desc: 'Injection molding, extrusion, silicone, rubber gaskets and seals', imgId: 'prod-plastic-b0c1d2' },
  { title: 'Textiles & Apparel', desc: 'Garments, home textiles, technical fabrics, bags, accessories', imgId: 'prod-textiles-e3f4g5' },
  { title: 'Home & Kitchen Products', desc: 'Housewares, kitchenware, furniture hardware, storage solutions', imgId: 'prod-home-h6i7j8' },
  { title: 'Packaging & Printing', desc: 'Custom boxes, labels, flexible packaging, corrugated cartons', imgId: 'prod-packaging-k9l0m1' },
  { title: 'Auto Parts & Accessories', desc: 'Aftermarket parts, EV components, accessories, tooling', imgId: 'prod-auto-n2o3p4' },
]

export default function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title">Products We Source</h2>
        <p className="section-subtitle">
          We have experience across a wide range of industries and product categories.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-neutral-50 border border-neutral-200 rounded-xl p-6 hover:border-brand-300 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-base font-semibold text-neutral-900 mb-2 group-hover:text-brand-500 transition-colors">
                {cat.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-neutral-400 mb-4">Don&apos;t see your product category? Contact us &mdash; we likely can help.</p>
          <Link to="/products" className="btn-secondary">
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  )
}