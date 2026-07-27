import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Cpu, Shirt, Home, Wrench, Package, Heart, Gamepad2, Car,
  ArrowRight, CheckCircle
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

const categories = [
  {
    id: 'electronics',
    icon: Cpu,
    name: 'Electronics',
    description: 'Consumer electronics, gadgets, smart devices, and electronic components',
    products: [
      'Smart home devices',
      'Consumer electronics',
      'LED lighting',
      'Electronic components',
      'Mobile accessories',
      'Audio equipment',
    ],
  },
  {
    id: 'textiles',
    icon: Shirt,
    name: 'Textiles & Apparel',
    description: 'Clothing, fabrics, fashion accessories, and textile products',
    products: [
      'Casual wear',
      'Sports apparel',
      'Fashion accessories',
      'Fabrics and materials',
      'Uniforms',
      'Custom printing',
    ],
  },
  {
    id: 'home',
    icon: Home,
    name: 'Home & Garden',
    description: 'Furniture, home decor, kitchenware, and outdoor products',
    products: [
      'Furniture',
      'Home decor',
      'Kitchenware',
      'Bedding and textiles',
      'Outdoor equipment',
      'Storage solutions',
    ],
  },
  {
    id: 'machinery',
    icon: Wrench,
    name: 'Machinery & Parts',
    description: 'Industrial equipment, machinery parts, and tools',
    products: [
      'Industrial machinery',
      'Mechanical parts',
      'Tools and hardware',
      'Agricultural equipment',
      'Construction materials',
      'OEM manufacturing',
    ],
  },
  {
    id: 'packaging',
    icon: Package,
    name: 'Packaging',
    description: 'Custom packaging solutions, boxes, labels, and printing',
    products: [
      'Paper packaging',
      'Plastic packaging',
      'Custom boxes',
      'Labels and stickers',
      'Gift packaging',
      'Eco-friendly options',
    ],
  },
  {
    id: 'health',
    icon: Heart,
    name: 'Health & Beauty',
    description: 'Cosmetics, personal care, wellness products, and supplements',
    products: [
      'Skincare products',
      'Hair care',
      'Makeup and cosmetics',
      'Personal care',
      'Wellness products',
      'Health supplements',
    ],
  },
  {
    id: 'toys',
    icon: Gamepad2,
    name: 'Toys & Games',
    description: 'Educational toys, games, gifts, and promotional items',
    products: [
      'Educational toys',
      'Board games',
      'Electronic toys',
      'Plush toys',
      'Gift items',
      'Promotional products',
    ],
  },
  {
    id: 'automotive',
    icon: Car,
    name: 'Automotive',
    description: 'Vehicle parts, accessories, and automotive components',
    products: [
      'Car accessories',
      'Auto parts',
      'Electronics',
      'Interior accessories',
      'Exterior modifications',
      'Tools and equipment',
    ],
  },
]

const capabilities = [
  'OEM and ODM manufacturing',
  'Custom design and prototyping',
  'Small batch production',
  'Bulk manufacturing',
  'Private labeling',
  'Custom packaging',
]

const ProductsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Products We Source
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              We have expertise across a wide range of product categories from verified Chinese manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">{category.name}</h3>
                <p className="text-text-secondary text-sm mb-4">{category.description}</p>
                <div className="border-t border-border pt-4">
                  <p className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-2">
                    Common Products:
                  </p>
                  <ul className="space-y-1">
                    {category.products.slice(0, 4).map((product, i) => (
                      <li key={i} className="text-sm text-text-secondary flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-success" />
                        {product}
                      </li>
                    ))}
                    {category.products.length > 4 && (
                      <li className="text-sm text-primary font-medium">
                        +{category.products.length - 4} more
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-background-light">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Manufacturing Capabilities
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our verified factories offer a wide range of manufacturing capabilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm border border-border flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-text-primary font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Finding What You Need */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See What You're Looking For?
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto mb-8">
              We have access to thousands of factories across many more categories. 
              Contact us with your specific requirements and we'll find the right supplier.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent-hover">
                Tell Us What You Need
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage