import { Link } from 'react-router-dom'
import { ArrowRight, Sofa, Shirt, Gift, Wrench, Package, Building, Zap, Heart } from 'lucide-react'

const productCategories = [
  {
    icon: Sofa,
    name: 'Furniture',
    items: 'Sofas, Chairs, Tables, Cabinets, Office Furniture',
  },
  {
    icon: Shirt,
    name: 'Textiles & Apparel',
    items: 'Garments, Home Textiles, Bags, Shoes, Accessories',
  },
  {
    icon: Gift,
    name: 'Consumer Goods',
    items: 'Kitchenware, Home Decor, Gifts, Promotional Items',
  },
  {
    icon: Wrench,
    name: 'Hardware & Tools',
    items: 'Hand Tools, Power Tools, Fasteners, Hardware Parts',
  },
  {
    icon: Package,
    name: 'Packaging',
    items: 'Paper Packaging, Plastic Containers, Labels, Tags',
  },
  {
    icon: Building,
    name: 'Industrial',
    items: 'Machinery Parts, Electronic Components, LED Products',
  },
  {
    icon: Zap,
    name: 'Electronics',
    items: 'Consumer Electronics, PCBs, Cables, Power Supplies',
  },
  {
    icon: Heart,
    name: 'Health & Beauty',
    items: 'Cosmetics, Personal Care, Health Supplements, Medical Supplies',
  },
]

export function Products() {
  return (
    <section className="py-20 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Products We Source
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Wide Range of Product Categories
          </h2>
          <p className="text-lg text-neutral-600">
            We have established supplier networks across various industries. 
            If you need it, we can source it from China.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-neutral-50 rounded-2xl p-6 hover:bg-primary-50 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors shadow-sm">
                <category.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-neutral-500">
                {category.items}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-4">
            Don't see your product category? We source more than what's listed.
          </p>
          <Link to="/contact" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
            Request Custom Sourcing
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}