import { Link } from 'react-router-dom'
import { Shirt, Sofa, Zap, Smartphone, Cog, Package } from 'lucide-react'

const categories = [
  { icon: Shirt, title: 'Apparel & Textiles', description: 'Garments, fabrics, accessories, and fashion items from Chinese manufacturers.' },
  { icon: Sofa, title: 'Home & Furniture', description: 'Indoor and outdoor furniture, home decor, kitchenware, and household goods.' },
  { icon: Zap, title: 'Electronics', description: 'Consumer electronics, components, accessories, and smart devices.' },
  { icon: Smartphone, title: 'Phone & Computer Accessories', description: 'Phone cases, chargers, cables, peripherals, and tech accessories.' },
  { icon: Cog, title: 'Industrial Equipment', description: 'Machinery parts, tools, industrial supplies, and manufacturing equipment.' },
  { icon: Package, title: 'Gift & Promotional Items', description: 'Custom gifts, promotional products, packaging, and branded merchandise.' },
]

export default function ProductsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <h2 className="section-title">Products We Source</h2>
        <p className="section-subtitle">
          We source across a wide range of industries. If it can be manufactured in China, we can help source it.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {categories.map((cat, index) => {
            const Icon = cat.icon
            return (
              <div key={index} className="card">
                <div className="w-12 h-12 bg-accent/5 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cat.description}</p>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="btn-primary">
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  )
}