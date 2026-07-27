import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, Cpu, Home, Shirt, Wrench, Sparkles, Gift } from 'lucide-react'

const categories = [
  {
    icon: <Cpu className="w-8 h-8" />,
    name: 'Electronics & Gadgets',
    description: 'Consumer electronics, phone accessories, LED products, power banks, smart devices, and more.',
    products: ['Phone cases and accessories', 'LED lighting products', 'Power banks and chargers', 'Smart home devices', 'Bluetooth speakers'],
  },
  {
    icon: <Home className="w-8 h-8" />,
    name: 'Home & Garden',
    description: 'Furniture, kitchenware, home decor, gardening tools, storage solutions, and household items.',
    products: ['Kitchen utensils and gadgets', 'Storage and organization', 'Garden tools and equipment', 'Home decor items', 'Cleaning supplies'],
  },
  {
    icon: <Shirt className="w-8 h-8" />,
    name: 'Apparel & Textiles',
    description: 'Clothing, fabrics, bags, shoes, fashion accessories, and textile products.',
    products: ['Casual and workwear clothing', 'Bags and luggage', 'Shoes and footwear', 'Scarves and accessories', 'Custom embroidery and printing'],
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    name: 'Machinery & Parts',
    description: 'Industrial equipment, automotive parts, metal components, and custom manufacturing.',
    products: ['CNC machined parts', 'Metal stamping components', 'Plastic injection parts', 'Industrial machinery', 'Auto parts and accessories'],
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    name: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare, haircare products, beauty tools, and personal care items.',
    products: ['Skincare products', 'Makeup and cosmetics', 'Hair care products', 'Beauty tools and accessories', 'Personal hygiene items'],
  },
  {
    icon: <Gift className="w-8 h-8" />,
    name: 'Promotional & Custom Items',
    description: 'Custom branded merchandise, corporate gifts, event giveaways, and promotional products.',
    products: ['Custom branded merchandise', 'Corporate gifts', 'Event giveaways', 'Custom packaging', 'Logo printing services'],
  },
]

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-primary py-20 md:py-28">
        <div className="container-custom text-center">
          <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm mb-6">
            Product Categories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Products We Source
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We source a wide range of products across multiple industries. 
            If you can describe it, we can find it.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="card-hover group">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center 
                              text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{category.name}</h3>
                <p className="text-navy-500 mb-6">{category.description}</p>
                
                <h4 className="font-semibold text-navy text-sm mb-3">Common Products:</h4>
                <ul className="space-y-2">
                  {category.products.map((product, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-navy-600">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Don't See Your Product?</h2>
              <p className="text-navy-500 text-lg mb-6">
                We source virtually any product from China. Our extensive supplier network 
                covers thousands of manufacturers across all industries.
              </p>
              <p className="text-navy-500 mb-8">
                Whether you need custom manufactured items, specialized components, or niche 
                products, our team can help you find the right suppliers and manage the 
                entire sourcing process.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Ask About Your Product
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl h-80 
                          flex items-center justify-center">
              <Package className="w-24 h-24 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Source Products?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Tell us what products you're looking for and we'll find the right suppliers for you.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
