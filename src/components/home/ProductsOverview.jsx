import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Shirt, Home, Sparkles, Package, Wrench, Tent, Car } from 'lucide-react'
import { PRODUCT_CATEGORIES } from '@/content/site'

const ICONS = {
  'consumer-electronics': Cpu,
  apparel: Shirt,
  'home-goods': Home,
  beauty: Sparkles,
  packaging: Package,
  industrial: Wrench,
  'sports-outdoor': Tent,
  'auto-parts': Car,
}

const ProductsOverview = () => (
  <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {PRODUCT_CATEGORIES.map((p) => {
        const Icon = ICONS[p.id] || Package
        return (
          <div key={p.id} className="card h-full">
            <div className="w-11 h-11 inline-flex items-center justify-center rounded-md bg-primary-50 text-primary mb-4">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-primary mb-1.5">{p.title}</h3>
            <p className="text-sm text-primary-600 leading-relaxed mb-3">{p.desc}</p>
            <p className="text-xs text-primary-500">
              <span className="font-semibold uppercase tracking-wider">Examples: </span>
              {p.examples.join(', ')}
            </p>
          </div>
        )
      })}
    </div>
    <div className="mt-10 text-center">
      <Link to="/products" className="btn-secondary">
        See all categories
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
)

export default ProductsOverview
