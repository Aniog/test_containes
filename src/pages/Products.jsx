import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Settings, Ruler, Zap, Shield } from 'lucide-react'

const Products = () => {
  const products = [
    {
      id: 'double-folding-machine',
      title: 'Double Folding Machine',
      category: 'Premium Series',
      description: 'Our flagship double folding machine delivers unmatched precision for complex sheet metal bending operations. Features dual-axis control and advanced CNC programming.',
      features: [
        'Dual-axis precision control',
        'CNC programmable operations',
        'Heavy-duty construction',
        'Touchscreen interface',
        'Automatic tool positioning'
      ],
      specs: {
        'Max Material Thickness': '6mm',
        'Max Bending Length': '4000mm',
        'Bending Speed': 'Up to 30°/sec',
        'Motor Power': '15 HP'
      }
    },
    {
      id: 'double-folder',
      title: 'Double Folder',
      category: 'Industrial Series',
      description: 'Robust double folder system designed for high-volume industrial applications. Built to withstand continuous operation in demanding environments.',
      features: [
        'Industrial-grade durability',
        'Quick-change tooling system',
        'Hydraulic clamping',
        'Safety light curtains',
        'Modular design'
      ],
      specs: {
        'Max Material Thickness': '8mm',
        'Max Bending Length': '3200mm',
        'Bending Speed': 'Up to 25°/sec',
        'Motor Power': '20 HP'
      }
    },
    {
      id: 'sheet-metal-folder',
      title: 'Sheet Metal Folder',
      category: 'Professional Series',
      description: 'Advanced sheet metal folder with superior control and repeatability. Perfect for precision fabrication shops and manufacturing facilities.',
      features: [
        'Superior bend accuracy',
        'Easy-to-use controls',
        'Compact footprint',
        'Low maintenance design',
        'Energy efficient operation'
      ],
      specs: {
        'Max Material Thickness': '4mm',
        'Max Bending Length': '2500mm',
        'Bending Speed': 'Up to 35°/sec',
        'Motor Power': '10 HP'
      }
    },
    {
      id: 'metal-folding-machine',
      title: 'Metal Folding Machine',
      category: 'Heavy Duty Series',
      description: 'Heavy-duty metal folding machine built for the most demanding industrial environments. Maximum power and reliability for large-scale operations.',
      features: [
        'Maximum power output',
        'Reinforced frame structure',
        'Advanced safety systems',
        'Remote monitoring capability',
        'Extended warranty options'
      ],
      specs: {
        'Max Material Thickness': '10mm',
        'Max Bending Length': '5000mm',
        'Bending Speed': 'Up to 20°/sec',
        'Motor Power': '30 HP'
      }
    },
    {
      id: 'precision-folder',
      title: 'Precision Folder',
      category: 'Specialty Series',
      description: 'Specialty precision folder for intricate bending operations. Ideal for aerospace, automotive, and high-precision manufacturing industries.',
      features: [
        'Ultra-high precision',
        'Specialized tooling options',
        'Clean room compatible',
        'ISO certified accuracy',
        'Custom solutions available'
      ],
      specs: {
        'Max Material Thickness': '3mm',
        'Max Bending Length': '2000mm',
        'Bending Speed': 'Up to 40°/sec',
        'Motor Power': '7.5 HP'
      }
    },
    {
      id: 'automated-folder',
      title: 'Automated Folder',
      category: 'Smart Series',
      description: 'Fully automated folding solution with Industry 4.0 capabilities. Seamless integration with smart factory systems for maximum efficiency.',
      features: [
        'Fully automated operation',
        'IoT connectivity',
        'Predictive maintenance',
        'Real-time monitoring',
        'API integration ready'
      ],
      specs: {
        'Max Material Thickness': '5mm',
        'Max Bending Length': '3000mm',
        'Bending Speed': 'Up to 28°/sec',
        'Motor Power': '12 HP'
      }
    }
  ]

  const categories = ['All', 'Premium Series', 'Industrial Series', 'Professional Series', 'Heavy Duty Series', 'Specialty Series', 'Smart Series']

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of sheet metal folding machines and double folder systems. 
              Each product is engineered for precision, built for durability, and backed by exceptional support.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-amber-600 hover:text-amber-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:border-amber-300 transition-all"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {product.category}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900">{product.title}</h3>
                    </div>
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Settings className="w-6 h-6 text-slate-700" />
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6">{product.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-slate-200 pt-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Specifications</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(product.specs).map(([key, value], idx) => (
                        <div key={idx} className="bg-slate-50 rounded-lg p-3">
                          <div className="text-xs text-slate-500 mb-1">{key}</div>
                          <div className="font-semibold text-slate-900">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 px-8 py-4 border-t border-slate-200">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all"
                  >
                    Request Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From precision folding to heavy-duty industrial solutions, we have the right machine for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl p-8 border border-amber-200">
              <Ruler className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Precision Series</h3>
              <p className="text-slate-700 mb-4">
                High-precision machines for intricate bending operations requiring micron-level accuracy.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Double Folding Machine
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Precision Folder
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border border-slate-200">
              <Zap className="w-12 h-12 text-slate-700 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Industrial Series</h3>
              <p className="text-slate-700 mb-4">
                Heavy-duty machines built for continuous operation in demanding industrial environments.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Double Folder
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Metal Folding Machine
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-8 border border-blue-200">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Series</h3>
              <p className="text-slate-700 mb-4">
                Next-generation machines with Industry 4.0 capabilities and smart factory integration.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Automated Folder
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Sheet Metal Folder
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing the Right Machine?
          </h2>
          <p className="text-amber-100 mb-8">
            Our team of experts is ready to help you find the perfect folding solution for your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors shadow-lg"
          >
            Contact Our Experts
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products