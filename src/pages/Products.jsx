import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Settings, Cog, Layers, Zap } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Products = () => {
  const heroRef = useRef(null)
  const productsRef = useRef(null)

  useEffect(() => {
    const cleanupFunctions = []

    if (heroRef.current) {
      cleanupFunctions.push(ImageHelper.loadImages(strkImgConfig, heroRef.current))
    }
    if (productsRef.current) {
      cleanupFunctions.push(ImageHelper.loadImages(strkImgConfig, productsRef.current))
    }

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup && cleanup())
    }
  }, [])

  const products = [
    {
      id: 'double-folding',
      name: 'Double Folding Machine',
      description: 'Our flagship double folding machine delivers unmatched productivity with dual folding stations for simultaneous processing.',
      features: [
        'Dual folding stations for maximum efficiency',
        'Folding length up to 2.5 meters',
        'Advanced CNC control system',
        'Automatic tool change capability',
        'Precision accuracy ±0.1mm',
        'Production speed up to 1.5m/second'
      ],
      specs: {
        'Max Folding Length': '2,500mm',
        'Max Material Thickness': '3.0mm (Steel)',
        'Folding Angle': '0-135°',
        'Motor Power': '7.5kW',
        'Weight': '3,200kg'
      }
    },
    {
      id: 'sheet-metal',
      name: 'Sheet Metal Folder',
      description: 'Versatile and precise sheet metal folder designed for workshops of all sizes. Perfect for both prototyping and production.',
      features: [
        'Universal material compatibility',
        'Quick-change tooling system',
        'Precision back gauge with DRO',
        'Adjustable clamping pressure',
        'Foot pedal operation standard',
        'Compact footprint design'
      ],
      specs: {
        'Max Folding Length': '1,250mm - 3,100mm',
        'Max Material Thickness': '2.5mm (Steel)',
        'Folding Angle': '0-150°',
        'Motor Power': '4.0kW',
        'Weight': '1,800kg'
      }
    },
    {
      id: 'metal-folding',
      name: 'Metal Folding Machine',
      description: 'Heavy-duty metal folding machine built for demanding industrial environments. Engineered for continuous operation.',
      features: [
        'Heavy-duty steel construction',
        'High-capacity material handling',
        'Advanced safety systems',
        'Hydraulic clamping system',
        'Touchscreen CNC interface',
        'Remote diagnostics ready'
      ],
      specs: {
        'Max Folding Length': '3,100mm',
        'Max Material Thickness': '4.0mm (Steel)',
        'Folding Angle': '0-130°',
        'Motor Power': '11kW',
        'Weight': '5,500kg'
      }
    },
    {
      id: 'double-folder',
      name: 'Double Folder',
      description: 'Specialized double folder for high-volume production. Features synchronized dual-folding technology.',
      features: [
        'Synchronized dual stations',
        'High-speed operation',
        'Automatic part ejection',
        'Recipe storage for 500+ jobs',
        'Integrated quality control',
        'Industry 4.0 ready'
      ],
      specs: {
        'Max Folding Length': '2,000mm',
        'Max Material Thickness': '2.0mm (Steel)',
        'Folding Angle': '0-140°',
        'Motor Power': '9.0kW',
        'Weight': '4,100kg'
      }
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-800" ref={heroRef}>
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            data-strk-bg-id="products-hero-bg-001"
            data-strk-bg="industrial sheet metal machinery folding machines manufacturing equipment"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="products-hero-title" className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Products
          </h1>
          <p id="products-hero-subtitle" className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our complete range of precision sheet metal folding machines,
            engineered to meet the highest industry standards.
          </p>
        </div>
      </section>

      {/* Products List */}
      <section className="py-24 bg-white" ref={productsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div key={product.id} id={product.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                {/* Product Image */}
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      alt={product.name}
                      className="w-full h-full object-cover"
                      data-strk-img-id={`product-detail-${product.id}-001`}
                      data-strk-img={`${product.name} sheet metal folding machine industrial precision manufacturing`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specifications */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Object.entries(product.specs).map(([key, value]) => (
                          <div key={key}>
                            <dt className="text-sm text-gray-600 font-medium">{key}</dt>
                            <dd className="text-lg font-semibold text-gray-900">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center inline-flex items-center justify-center group"
                    >
                      Request Quote
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-colors text-center"
                    >
                      Download Brochure
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Compare Our Models</h2>
            <p className="text-xl text-gray-600">Find the perfect machine for your needs</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Model</th>
                  <th className="px-6 py-4 text-center font-bold">Max Length</th>
                  <th className="px-6 py-4 text-center font-bold">Max Thickness</th>
                  <th className="px-6 py-4 text-center font-bold">Power</th>
                  <th className="px-6 py-4 text-center font-bold">Weight</th>
                  <th className="px-6 py-4 text-center font-bold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product, idx) => (
                  <tr key={product.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{product.name}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{product.specs['Max Folding Length']}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{product.specs['Max Material Thickness']}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{product.specs['Motor Power']}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{product.specs['Weight']}</td>
                    <td className="px-6 py-4 text-center">
                      <Link
                        to={`/products#${product.id}`}
                        className="text-blue-700 hover:text-blue-900 font-semibold transition-colors"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Help Choosing?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Our experts are ready to help you select the perfect machine for your specific requirements.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl inline-flex items-center group"
          >
            Contact Our Experts
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products
