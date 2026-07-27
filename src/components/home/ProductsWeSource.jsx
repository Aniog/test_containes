import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Cpu, Home, Shirt, Cog, Package, Sparkles,
  ArrowRight 
} from 'lucide-react'

const productCategories = [
  {
    icon: Cpu,
    title: 'Electronics',
    description: 'Consumer electronics, components, accessories, and smart devices',
    items: ['LED lights', 'Phone accessories', 'Power banks', 'Audio equipment'],
  },
  {
    icon: Home,
    title: 'Home & Garden',
    description: 'Furniture, decor, kitchenware, and outdoor living products',
    items: ['Furniture', 'Kitchen appliances', 'Garden tools', 'Home decor'],
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    description: 'Clothing, fabrics, bags, and fashion accessories',
    items: ['T-shirts', 'Workwear', 'Bags', 'Fashion accessories'],
  },
  {
    icon: Cog,
    title: 'Machinery & Parts',
    description: 'Industrial equipment, spare parts, and manufacturing tools',
    items: ['CNC parts', 'Industrial tools', 'Machine components', 'Hardware'],
  },
  {
    icon: Package,
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, promotional materials, and printing',
    items: ['Custom boxes', 'Labels', 'Promotional items', 'Print materials'],
  },
  {
    icon: Sparkles,
    title: 'Custom Products',
    description: 'OEM/ODM manufacturing for unique product requirements',
    items: ['Custom molds', 'Private label', 'Prototype development', 'Bulk orders'],
  },
]

export default function ProductsWeSource() {
  return (
    <section className="section-padding bg-white" id="products">
      <div className="container-custom">
        <div className="section-title">
          <h2>Products We Source</h2>
          <p>
            From consumer electronics to industrial machinery, we source a wide range 
            of products from verified Chinese manufacturers.
          </p>
        </div>

        <div className="grid-3">
          {productCategories.map((category) => (
            <div
              key={category.title}
              className="card group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="card-padding">
                <div className="w-14 h-14 bg-accent-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <category.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="heading-4 text-foreground mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center px-3 py-1 bg-gray-100 text-sm text-muted-foreground rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn-primary text-lg px-8 py-4">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
