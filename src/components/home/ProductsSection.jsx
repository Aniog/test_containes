import { Link } from 'react-router-dom'
import { Shirt, Cpu, Package, Home, Heart, Wrench } from 'lucide-react'

const categories = [
  { icon: Shirt, title: 'Apparel & Fashion', items: 'Clothing, accessories, textiles, footwear' },
  { icon: Cpu, title: 'Electronics', items: 'Consumer electronics, components, gadgets' },
  { icon: Package, title: 'Home & Living', items: 'Furniture, kitchenware, decor, lighting' },
  { icon: Home, title: 'Industrial Equipment', items: 'Machinery, tools, hardware, parts' },
  { icon: Heart, title: 'Health & Beauty', items: 'Cosmetics, supplements, personal care' },
  { icon: Wrench, title: 'Auto Parts & Accessories', items: 'Vehicle parts, accessories, tools' },
]

export default function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4" id="products-section-title">
            Products We Source
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We source across a wide range of industries. If it is manufactured in China, we can help you find it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-neutral-50 rounded-xl p-6 border border-neutral-100 hover:shadow-md hover:border-brand-100 transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                <cat.icon className="w-6 h-6 text-brand-500" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{cat.title}</h3>
              <p className="text-sm text-neutral-500">{cat.items}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:text-brand-600 transition-colors"
          >
            View All Categories &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}