import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, Home, Shirt, Smartphone, Car, Dumbbell, Gift, Droplets, Scissors, Sofa, Heart } from 'lucide-react'

const Products = () => {
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    if (window.ImageHelper && containerRef.current) {
      window.ImageHelper.loadImages(window.strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Products We Source</h1>
          <p className="text-lg text-gray-600">
            Extensive experience across diverse product categories and industries
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                category: 'Electronics & Gadgets',
                items: ['Consumer Electronics', 'Smart Home Devices', 'Accessories & Parts', 'Audio & Video Equipment'],
                description: 'From consumer electronics to electronic components, we source reliable suppliers for all your tech needs.',
              },
              {
                icon: Home,
                category: 'Home & Garden',
                items: ['Furniture', 'Home Decor', 'Kitchenware', 'Garden Tools'],
                description: 'Everything for the home, from furniture and decor to kitchen tools and garden equipment.',
              },
              {
                icon: Shirt,
                category: 'Fashion & Accessories',
                items: ['Apparel', 'Bags & Luggage', 'Jewelry', 'Footwear'],
                description: 'Clothing, bags, accessories, and footwear for all markets and price points.',
              },
              {
                icon: Droplets,
                category: 'Health & Beauty',
                items: ['Skincare', 'Cosmetics', 'Personal Care', 'Wellness Products'],
                description: 'Health, beauty, and personal care products with proper certifications and quality control.',
              },
              {
                icon: Dumbbell,
                category: 'Sports & Outdoor',
                items: ['Fitness Equipment', 'Outdoor Gear', 'Sports Accessories', 'Camping Equipment'],
                description: 'Sports equipment, outdoor gear, and fitness products for active lifestyles.',
              },
              {
                icon: Gift,
                category: 'Toys & Gifts',
                items: ['Toys & Games', 'Promotional Gifts', 'Crafts', 'Seasonal Products'],
                description: 'Toys, gifts, and promotional products with safety certifications and quality assurance.',
              },
              {
                icon: Car,
                category: 'Automotive & Motors',
                items: ['Auto Parts', 'Accessories', 'Motorcycle Parts', 'Tools & Equipment'],
                description: 'Automotive parts, accessories, and tools with proper fit and quality verification.',
              },
              {
                icon: Package,
                category: 'Industrial & Commercial',
                items: ['Machinery', 'Tools & Hardware', 'Packaging Materials', 'Office Supplies'],
                description: 'Industrial equipment, tools, packaging, and B2B supplies for various industries.',
              },
              {
                icon: Sofa,
                category: 'Furniture & Textiles',
                items: ['Home Furniture', 'Office Furniture', 'Textiles & Fabrics', 'Upholstery'],
                description: 'Furniture for home and office, plus textiles and fabrics for various applications.',
              },
              {
                icon: Heart,
                category: 'Pet Supplies',
                items: ['Pet Toys', 'Pet Accessories', 'Pet Care Products', 'Aquarium & Terrarium'],
                description: 'Pet products, toys, accessories, and care items for all types of pets.',
              },
              {
                icon: Scissors,
                category: 'Packaging & Printing',
                items: ['Custom Packaging', 'Labels & Tags', 'Printed Materials', 'Displays & POS'],
                description: 'Custom packaging solutions, labels, printed materials, and retail displays.',
              },
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <product.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.category}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="space-y-1">
                  {product.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'Retail & E-commerce',
              'Wholesale & Distribution',
              'Manufacturing',
              'Construction',
              'Hospitality',
              'Healthcare',
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-sm font-medium text-gray-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Sourcing Capabilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Low Minimum Order Quantity (MOQ)',
                description: 'We can help negotiate flexible MOQs with suppliers, making it easier for small and medium businesses to source from China.',
              },
              {
                title: 'Customization & OEM',
                description: 'Support for custom designs, private labeling, and OEM manufacturing to help you create unique products for your market.',
              },
              {
                title: 'Quality Certifications',
                description: 'We work with suppliers who hold relevant certifications (ISO, CE, FDA, etc.) and can arrange third-party testing as needed.',
              },
              {
                title: 'Flexible Order Sizes',
                description: 'Whether you need a sample order, small batch, or full container load, we can accommodate your order size.',
              },
            ].map((capability, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Don't See Your Product Category?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We source across many industries. Contact us to discuss your specific product needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Discuss Your Product
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
