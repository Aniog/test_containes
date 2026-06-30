import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Electronics & Components',
    items: 'Consumer electronics, PCB assemblies, sensors, LED lighting, power supplies',
    image: 'electronics',
  },
  {
    name: 'Industrial Equipment',
    items: 'Machinery parts, automation components, hydraulic systems, packaging equipment',
    image: 'industrial',
  },
  {
    name: 'Home & Lifestyle',
    items: 'Furniture, kitchenware, home decor, textiles, storage solutions',
    image: 'home',
  },
  {
    name: 'Apparel & Accessories',
    items: 'Garments, bags, shoes, hats, scarves, workwear, uniforms',
    image: 'apparel',
  },
  {
    name: 'Auto Parts & Accessories',
    items: 'Car accessories, motorcycle parts, dash cams, interior accessories',
    image: 'auto',
  },
  {
    name: 'Building & Construction',
    items: 'Hardware, plumbing supplies, construction materials, safety equipment',
    image: 'construction',
  },
  {
    name: 'Packaging & Printing',
    items: 'Boxes, labels, custom packaging, poly bags, display stands',
    image: 'packaging',
  },
  {
    name: 'Health & Safety',
    items: 'PPE, medical supplies, cleaning products, hygiene equipment',
    image: 'health',
  },
]

export default function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Products We Source
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We source across a wide range of categories. If it is manufactured in China, we can help you find
            the right supplier.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-brand-200 hover:shadow-sm transition-all duration-200"
            >
              <h3 className="font-semibold text-gray-900 mb-2">{cat.name}</h3>
              <p className="text-gray-600 text-sm">{cat.items}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products-we-source"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium"
          >
            View All Categories <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}