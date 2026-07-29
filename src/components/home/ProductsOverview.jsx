import { Link } from 'react-router-dom'

const categories = [
  { id: 'electronics', name: 'Consumer Electronics', examples: 'Headphones, chargers, smart devices' },
  { id: 'textiles', name: 'Textiles & Apparel', examples: 'Clothing, bags, home textiles' },
  { id: 'furniture', name: 'Furniture & Home', examples: 'Office furniture, lighting, decor' },
  { id: 'packaging', name: 'Packaging & Printing', examples: 'Custom boxes, labels, bags' },
  { id: 'industrial', name: 'Industrial & Hardware', examples: 'Tools, fasteners, machinery parts' },
  { id: 'beauty', name: 'Beauty & Personal Care', examples: 'Cosmetics, skincare, packaging' },
  { id: 'toys', name: 'Toys & Baby Products', examples: 'Plush toys, strollers, accessories' },
  { id: 'auto', name: 'Auto Parts & Accessories', examples: 'Interior parts, LED lights, covers' },
]

const ProductsOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Products We Source
          </h2>
          <p id="products-subtitle" className="mt-4 text-text-body text-lg">
            We source across a wide range of product categories from China's manufacturing hubs.
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-4" />
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-surface rounded-lg p-5 border border-border hover:border-primary/30 transition-colors">
              <h3 className="font-semibold text-text-primary text-sm">{cat.name}</h3>
              <p className="mt-1 text-text-muted text-xs">{cat.examples}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-medium transition-colors"
          >
            See full product categories →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsOverview
