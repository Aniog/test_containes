import React from 'react'
import { Link } from 'react-router-dom'
import { Package, ArrowRight } from 'lucide-react'

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Products We Source</h1>
          <p className="text-xl text-blue-100">
            Extensive experience across diverse product categories
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Electronics & Gadgets',
                desc: 'Consumer electronics, electronic components, gadgets, and accessories from leading manufacturers.',
                examples: ['Smartphones', 'Tablets', 'Wearables', 'Electronic Components'],
              },
              {
                name: 'Home & Garden',
                desc: 'Home improvement products, furniture, decor, gardening tools, and outdoor equipment.',
                examples: ['Furniture', 'Lighting', 'Kitchenware', 'Garden Tools'],
              },
              {
                name: 'Fashion & Accessories',
                desc: 'Apparel, footwear, bags, jewelry, and fashion accessories for all markets.',
                examples: ['Clothing', 'Shoes', 'Bags', 'Jewelry'],
              },
              {
                name: 'Machinery & Equipment',
                desc: 'Industrial machinery, manufacturing equipment, and automation solutions.',
                examples: ['Industrial Machines', 'Power Tools', 'Automation Equipment', 'Spare Parts'],
              },
              {
                name: 'Automotive Parts',
                desc: 'Vehicle components, replacement parts, and aftermarket accessories.',
                examples: ['Engine Parts', 'Body Parts', 'Electrical Components', 'Accessories'],
              },
              {
                name: 'Medical Devices',
                desc: 'Medical equipment, devices, and healthcare products with proper certifications.',
                examples: ['Diagnostic Equipment', 'Surgical Instruments', 'Medical Supplies', 'Healthcare Devices'],
              },
              {
                name: 'Toys & Gifts',
                desc: 'Toys, games, promotional gifts, and seasonal products meeting safety standards.',
                examples: ['Children Toys', 'Board Games', 'Promotional Gifts', 'Seasonal Items'],
              },
              {
                name: 'Furniture & Decor',
                desc: 'Residential and commercial furniture, home decor, and interior products.',
                examples: ['Office Furniture', 'Home Furniture', 'Decor Items', 'Textiles'],
              },
              {
                name: 'Packaging & Printing',
                desc: 'Packaging materials, printed products, labels, and custom packaging solutions.',
                examples: ['Product Packaging', 'Labels', 'Printed Materials', 'Custom Boxes'],
              },
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.desc}</p>
                <div className="space-y-1">
                  <div className="text-sm font-medium text-gray-700">Examples:</div>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, idx) => (
                      <span key={idx} className="text-sm bg-white px-3 py-1 rounded-full text-gray-600">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our sourcing expertise spans across multiple industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Retail & E-commerce',
              'Manufacturing',
              'Healthcare',
              'Automotive',
              'Construction',
              'Hospitality',
              'Education',
              'Technology',
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center font-medium text-gray-900">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We source a wide range of products. Contact us to discuss your specific requirements.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
