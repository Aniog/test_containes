import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, cables, chargers, LED products, and electronic components.',
    imgQuery: 'electronic components circuit board manufacturing',
  },
  {
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, bathroom accessories, home decor, and gardening tools.',
    imgQuery: 'modern home furniture interior design products',
  },
  {
    title: 'Apparel & Textiles',
    desc: 'Clothing, fabrics, bags, shoes, accessories, and fashion accessories.',
    imgQuery: 'textile fabric manufacturing apparel factory',
  },
  {
    title: 'Industrial & Machinery',
    desc: 'Metal parts, CNC components, injection molds, pumps, valves, and industrial tools.',
    imgQuery: 'industrial machinery CNC metal parts manufacturing',
  },
  {
    title: 'Promotional & Custom Products',
    desc: 'Custom-branded items, corporate gifts, trade show displays, and promotional merchandise.',
    imgQuery: 'promotional custom branded products corporate gifts',
  },
  {
    title: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare, packaging, beauty tools, and personal care accessories.',
    imgQuery: 'cosmetics skincare beauty products packaging',
  },
]

const ProductsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent-500 uppercase tracking-wider">
            Product Categories
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Products We Source
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We source across a wide range of industries and product categories.
            Whatever you need manufactured, we can find the right supplier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative rounded-xl overflow-hidden bg-gray-900 aspect-[4/3]"
            >
              <img
                data-strk-img-id={`product-${cat.title.replace(/\s+/g, '-').toLowerCase()}-img-k3x7m`}
                data-strk-img={`[product-${cat.title.replace(/\s+/g, '-').toLowerCase()}-desc]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
              />
              <div id={`product-${cat.title.replace(/\s+/g, '-').toLowerCase()}-desc`} className="hidden">{cat.imgQuery}</div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:text-brand-600 transition-colors"
          >
            View All Product Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
