import React from 'react'
import { Link } from 'react-router-dom'
import {
  Cpu,
  Home,
  Shirt,
  Wrench,
  Package,
  Sofa,
  ArrowRight,
  Sparkles,
  Baby,
  Car,
} from 'lucide-react'

const productCategories = [
  {
    icon: Cpu,
    title: 'Electronics & Gadgets',
    description: 'Consumer electronics, smart devices, accessories, and components.',
    items: ['LED lighting', 'Phone accessories', 'Smart home devices', 'Audio equipment'],
    image: 'electronics',
  },
  {
    icon: Home,
    title: 'Home & Garden',
    description: 'Furniture, decor, kitchenware, and outdoor living products.',
    items: ['Kitchen appliances', 'Home decor', 'Garden tools', 'Storage solutions'],
    image: 'home-garden',
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    description: 'Clothing, fabrics, bags, shoes, and fashion accessories.',
    items: ['Custom clothing', 'Work uniforms', 'Bags & luggage', 'Fashion accessories'],
    image: 'apparel',
  },
  {
    icon: Wrench,
    title: 'Industrial & Tools',
    description: 'Machinery, hardware, tools, and industrial equipment.',
    items: ['Power tools', 'Hardware parts', 'Safety equipment', 'Machinery'],
    image: 'industrial',
  },
  {
    icon: Sparkles,
    title: 'Beauty & Health',
    description: 'Cosmetics, skincare, wellness products, and personal care items.',
    items: ['Skincare products', 'Makeup', 'Health supplements', 'Personal care'],
    image: 'beauty',
  },
  {
    icon: Package,
    title: 'Custom Products',
    description: 'OEM/ODM manufacturing with your branding and specifications.',
    items: ['Private label', 'Custom packaging', 'Branded products', 'Prototype development'],
    image: 'custom',
  },
]

const ProductsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-primary text-sm font-medium mb-4">
            Products We Source
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Wide Range of Product Categories
          </h2>
          <p className="text-lg text-muted-foreground">
            We source products across diverse industries. Whatever you need to import from China,
            we have the expertise and supplier network to deliver.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-16 w-16 text-primary/20" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent h-20" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors group"
          >
            Explore All Product Categories
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
