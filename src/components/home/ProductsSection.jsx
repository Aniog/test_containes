import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const productCategories = [
  {
    name: 'Electronics & Gadgets',
    description: 'Consumer electronics, phone accessories, LED products, and smart devices.',
    image: 'electronics',
  },
  {
    name: 'Home & Garden',
    description: 'Furniture, kitchenware, home decor, and gardening tools.',
    image: 'home-garden',
  },
  {
    name: 'Apparel & Textiles',
    description: 'Clothing, fabrics, bags, and fashion accessories.',
    image: 'apparel',
  },
  {
    name: 'Machinery & Parts',
    description: 'Industrial equipment, auto parts, and custom metal components.',
    image: 'machinery',
  },
  {
    name: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare products, and beauty tools.',
    image: 'beauty',
  },
  {
    name: 'Promotional Items',
    description: 'Custom branded merchandise, corporate gifts, and event giveaways.',
    image: 'promotional',
  },
]

const ProductsSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Product Categories
          </span>
          <h2 className="section-title">Products We Source</h2>
          <p className="section-subtitle mx-auto">
            We source a wide range of products across multiple industries. 
            Tell us what you need — we can find it.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl 
                        transition-all duration-300 border border-gray-100"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 
                            group-hover:from-primary group-hover:to-primary-600 transition-all duration-500 
                            flex items-center justify-center">
                <span className="text-primary-600 group-hover:text-white text-4xl font-bold transition-colors">
                  {category.name.split(' ')[0]}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy mb-2">{category.name}</h3>
                <p className="text-navy-500 text-sm mb-4">{category.description}</p>
                <Link 
                  to="/products" 
                  className="text-primary font-semibold text-sm inline-flex items-center gap-2 
                           hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/products" className="btn-secondary inline-flex items-center gap-2">
            View All Product Categories
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
