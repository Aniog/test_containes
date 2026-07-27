import React from 'react'
import { Link } from 'react-router-dom'
import { Smartphone, Home, Shirt, Cog, Package, Gift } from 'lucide-react'

const categories = [
  {
    icon: Smartphone,
    title: 'Electronics',
    description: 'Consumer electronics, components, and tech accessories',
    items: ['LED lights', 'Phone accessories', 'Audio equipment', 'Power banks'],
    imageId: 'electronics-category-img',
    imageRatio: '4x3',
  },
  {
    icon: Home,
    title: 'Home & Garden',
    description: 'Furniture, decor, kitchenware, and garden tools',
    items: ['Furniture sets', 'Kitchen appliances', 'Garden tools', 'Home decor'],
    imageId: 'home-garden-category-img',
    imageRatio: '4x3',
  },
  {
    icon: Shirt,
    title: 'Fashion & Apparel',
    description: 'Clothing, bags, shoes, and fashion accessories',
    items: ['Men\'s clothing', 'Women\'s fashion', 'Bags & luggage', 'Shoes'],
    imageId: 'fashion-category-img',
    imageRatio: '4x3',
  },
  {
    icon: Cog,
    title: 'Industrial Parts',
    description: 'Machinery parts, hardware, and industrial components',
    items: ['Auto parts', 'Hardware tools', 'Machinery components', 'Fasteners'],
    imageId: 'industrial-category-img',
    imageRatio: '4x3',
  },
  {
    icon: Package,
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, and printing solutions',
    items: ['Custom boxes', 'Labels & stickers', 'Bags & pouches', 'Gift wrapping'],
    imageId: 'packaging-category-img',
    imageRatio: '4x3',
  },
  {
    icon: Gift,
    title: 'Promotional Products',
    description: 'Custom branded items for marketing and giveaways',
    items: ['Custom pens', 'Branded mugs', 'Promotional bags', 'Corporate gifts'],
    imageId: 'promotional-category-img',
    imageRatio: '4x3',
  },
]

export default function ProductsWeSource() {
  return (
    <section className="section bg-white" id="products">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Products We Source</h2>
          <p className="section-subtitle">
            We source a wide range of products across multiple industries
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div 
                className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden"
                data-strk-bg-id={category.imageId}
                data-strk-bg={`[products-title] [${category.title.toLowerCase()}-title]`}
                data-strk-bg-ratio={category.imageRatio}
                data-strk-bg-width="600"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <category.icon className="w-12 h-12 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2" id={`${category.title.toLowerCase()}-title`}>
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="bg-white text-gray-600 text-xs px-3 py-1 rounded-full border border-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hidden element for interpolation */}
        <h2 id="products-title" className="sr-only">Products We Source</h2>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
          >
            View All Product Categories
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
