import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight, 
  CheckCircle2, 
  Search,
  Factory,
  PackageCheck,
  Truck,
  Star
} from 'lucide-react'

const Products = () => {
  const categories = [
    {
      name: 'Electronics & Components',
      icon: '⚡',
      description: 'Consumer electronics, electronic components, circuit boards, sensors, and related accessories.',
      products: ['Smart home devices', 'Wearable technology', 'LED lighting', 'Power banks', 'Audio equipment', 'Electronic components'],
      certifications: ['CE', 'FCC', 'RoHS', 'ISO 9001']
    },
    {
      name: 'Home & Garden',
      icon: '🏠',
      description: 'Home decor, furniture, kitchenware, garden tools, and home improvement products.',
      products: ['Home decor items', 'Kitchen utensils', 'Garden tools', 'Storage solutions', 'Lighting fixtures', 'Textiles'],
      certifications: ['CE', 'FDA', 'LFGB']
    },
    {
      name: 'Apparel & Textiles',
      icon: '👕',
      description: 'Clothing, footwear, bags, accessories, and textile products for all ages and styles.',
      products: ['Casual wear', 'Sportswear', 'Workwear', 'Bags & luggage', 'Footwear', 'Fashion accessories'],
      certifications: ['OEKO-TEX', 'BSCI', 'WRAP']
    },
    {
      name: 'Toys & Gifts',
      icon: '🎁',
      description: 'Toys, games, promotional items, gifts, and seasonal products for retail and corporate use.',
      products: ['Educational toys', 'Outdoor toys', 'Promotional gifts', 'Seasonal items', 'Board games', 'Crafts'],
      certifications: ['EN71', 'ASTM F963', 'CPC']
    },
    {
      name: 'Auto Parts',
      icon: '🚗',
      description: 'Automotive components, replacement parts, accessories, and aftermarket products.',
      products: ['Engine parts', 'Brake systems', 'Suspension components', 'Electrical parts', 'Body parts', 'Interior accessories'],
      certifications: ['IATF 16949', 'CE', 'E-mark']
    },
    {
      name: 'Industrial Equipment',
      icon: '⚙️',
      description: 'Machinery, tools, equipment, and industrial components for manufacturing and construction.',
      products: ['Power tools', 'Construction equipment', 'Industrial machinery', 'Safety equipment', 'Measuring tools', 'Hardware'],
      certifications: ['CE', 'ISO 9001', 'CCC']
    },
    {
      name: 'Health & Beauty',
      icon: '💄',
      description: 'Personal care, cosmetics, skincare, and health products for retail and professional use.',
      products: ['Skincare products', 'Hair care', 'Makeup', 'Personal care', 'Health supplements', 'Beauty tools'],
      certifications: ['FDA', 'GMP', 'ISO 22716']
    },
    {
      name: 'Sports & Outdoors',
      icon: '⚽',
      description: 'Sports equipment, outdoor gear, fitness products, and recreational items.',
      products: ['Fitness equipment', 'Camping gear', 'Sports accessories', 'Cycling products', 'Water sports', 'Outdoor clothing'],
      certifications: ['CE', 'EN', 'ISO 9001']
    }
  ]

  const capabilities = [
    {
      title: 'Custom Manufacturing',
      description: 'We work with factories that can produce custom designs and OEM/ODM products.',
      icon: Factory
    },
    {
      title: 'Quality Assurance',
      description: 'Every product category has specific QC checkpoints and quality standards.',
      icon: PackageCheck
    },
    {
      title: 'Certification Support',
      description: 'We help ensure products meet required certifications for your market.',
      icon: CheckCircle2
    },
    {
      title: 'Global Shipping',
      description: 'We coordinate shipping to any destination with full logistics support.',
      icon: Truck
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We source a wide range of products across multiple industries. 
              Our experienced team understands the unique requirements of each product category.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <Link to="/contact">
                  Tell Us What You Need
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Sourcing Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have the expertise and network to source almost any product from China.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <capability.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click on a category to learn more about our sourcing expertise in that area.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{category.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Common Products:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.products.map((product, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Relevant Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.certifications.map((cert, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Inquire about this category
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Finding What You Need */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
            <Search className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We source many more product categories than what's listed here. 
            If you have a specific product in mind, let us know and we'll find the right suppliers for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">
                Contact Us About Your Product
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/how-it-works">Learn How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source Your Product from China?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us what you're looking for, and we'll provide a customized sourcing solution.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
            <Link to="/contact">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Products
