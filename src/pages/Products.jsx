import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const categories = [
    {
      name: 'Electronics & Gadgets',
      description: 'From consumer electronics to electronic components, we help you source reliable electronic products.',
      subcategories: ['Smartphones & Accessories', 'Consumer Electronics', 'Electronic Components', 'LED & Lighting', 'Audio Equipment'],
      imgId: 'product-cat-electronics-001',
      imgDesc: 'Electronics and gadgets sourcing'
    },
    {
      name: 'Home & Garden',
      description: 'Furniture, home decor, kitchenware, and outdoor products from verified suppliers.',
      subcategories: ['Furniture', 'Home Decor', 'Kitchen & Dining', 'Garden Tools', 'Outdoor Furniture'],
      imgId: 'product-cat-home-002',
      imgDesc: 'Home and garden products'
    },
    {
      name: 'Fashion & Accessories',
      description: 'Clothing, shoes, bags, and fashion accessories with quality and style.',
      subcategories: ['Apparel & Clothing', 'Shoes & Footwear', 'Bags & Luggage', 'Jewelry & Accessories', 'Textiles & Fabrics'],
      imgId: 'product-cat-fashion-003',
      imgDesc: 'Fashion and accessories'
    },
    {
      name: 'Industrial Equipment',
      description: 'Machinery, tools, and industrial supplies for manufacturing and construction.',
      subcategories: ['Machinery & Equipment', 'Power Tools', 'Construction Materials', 'Safety Equipment', 'Industrial Supplies'],
      imgId: 'product-cat-industrial-004',
      imgDesc: 'Industrial equipment and machinery'
    },
    {
      name: 'Automotive Parts',
      description: 'Auto parts, accessories, and components for various vehicle makes and models.',
      subcategories: ['Engine Parts', 'Body Parts', 'Electrical Parts', 'Accessories', 'Maintenance Supplies'],
      imgId: 'product-cat-auto-005',
      imgDesc: 'Automotive parts and accessories'
    },
    {
      name: 'Packaging & Printing',
      description: 'Custom packaging solutions, printed materials, and branding services.',
      subcategories: ['Custom Packaging', 'Printed Boxes', 'Labels & Stickers', 'Promotional Materials', 'Business Printing'],
      imgId: 'product-cat-packaging-006',
      imgDesc: 'Packaging and printing services'
    },
    {
      name: 'Toys & Gifts',
      description: 'Toys, games, promotional gifts, and seasonal products from certified factories.',
      subcategories: ['Toys & Games', 'Promotional Gifts', 'Seasonal Products', 'Pet Products', 'Baby & Kids Items'],
      imgId: 'product-cat-toys-007',
      imgDesc: 'Toys and gift items'
    },
    {
      name: 'Health & Beauty',
      description: 'Beauty products, personal care items, and health supplements (with proper certifications).',
      subcategories: ['Beauty Products', 'Personal Care', 'Health Supplements', 'Sport & Fitness', 'Wellness Products'],
      imgId: 'product-cat-health-008',
      imgDesc: 'Health and beauty products'
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="products-hero-title" className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p id="products-hero-subtitle" className="text-xl text-blue-100">
              Extensive experience across diverse product categories with verified supplier networks
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  data-strk-img-id={category.imgId}
                  data-strk-img={`[products-hero-subtitle] [products-hero-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={category.imgDesc}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {category.name}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-700 mb-2">Subcategories:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {category.subcategories.map((sub, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Capabilities */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="capabilities-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Capabilities
            </h2>
            <p id="capabilities-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
              We adapt to your specific product requirements and business model
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">OEM & ODM</h3>
              <p className="text-gray-600">
                We help with product customization, private labeling, and new product development from concept to production.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Small to Large Orders</h3>
              <p className="text-gray-600">
                From prototype samples to container loads, we work with suppliers who accommodate various order quantities.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Standards</h3>
              <p className="text-gray-600">
                We ensure products meet your specified quality standards, certifications, and compliance requirements.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Packaging & Branding</h3>
              <p className="text-gray-600">
                Custom packaging design, private labeling, and branded materials to enhance your product presentation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Certifications</h3>
              <p className="text-gray-600">
                We work with suppliers who hold relevant certifications (CE, FCC, RoHS, ISO, etc.) for your target markets.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Testing & Compliance</h3>
              <p className="text-gray-600">
                Arrange third-party testing, certification support, and compliance documentation for your products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="products-cta-title" className="text-3xl md:text-4xl font-bold mb-6">
            Don't See Your Product Category?
          </h2>
          <p id="products-cta-subtitle" className="text-xl text-blue-100 mb-8">
            We have experience across many industries. Contact us to discuss your specific sourcing needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
