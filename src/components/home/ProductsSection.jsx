import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = [
  { name: 'Electronics & Components', image: 'electronics' },
  { name: 'Home & Kitchenware', image: 'kitchenware' },
  { name: 'Industrial Equipment', image: 'industrial' },
  { name: 'Furniture & Decor', image: 'furniture' },
  { name: 'Apparel & Textiles', image: 'apparel' },
  { name: 'Auto Parts & Accessories', image: 'auto-parts' },
  { name: 'Packaging Materials', image: 'packaging' },
  { name: 'Medical & Healthcare', image: 'medical' },
  { name: 'Toys & Sporting Goods', image: 'toys' },
  { name: 'Building Materials', image: 'building' },
  { name: 'Personal Care & Cosmetics', image: 'cosmetics' },
  { name: 'Pet Products', image: 'pet' },
]

export default function ProductsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We source across a wide range of categories, leveraging deep supplier networks in key Chinese manufacturing regions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white rounded-xl border border-slate-200 p-5 text-center hover:shadow-md hover:border-brand-200 transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-100 transition-colors">
                <span className="text-brand-700 font-bold text-sm">{cat.name.substring(0, 2)}</span>
              </div>
              <h3 className="text-sm font-medium text-slate-900 leading-tight">{cat.name}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="text-brand-700 hover:text-brand-800 font-semibold inline-flex items-center gap-2 transition-colors"
          >
            View Full Product Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}