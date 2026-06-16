import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Settings, Wrench, Shield, Truck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Home = () => {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const productsRef = useRef(null)

  useEffect(() => {
    const cleanupFunctions = []

    if (heroRef.current) {
      cleanupFunctions.push(ImageHelper.loadImages(strkImgConfig, heroRef.current))
    }
    if (featuresRef.current) {
      cleanupFunctions.push(ImageHelper.loadImages(strkImgConfig, featuresRef.current))
    }
    if (productsRef.current) {
      cleanupFunctions.push(ImageHelper.loadImages(strkImgConfig, productsRef.current))
    }

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup && cleanup())
    }
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center" ref={heroRef}>
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-001"
          data-strk-bg="precision sheet metal folding machine industrial machinery manufacturing"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/75"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Precision in Every
              <span className="text-blue-400"> Fold</span>
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              ARTITECT MACHINERY delivers world-class sheet metal folding machines
              engineered for accuracy, durability, and superior performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl inline-flex items-center justify-center group"
              >
                Explore Our Machines
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-all inline-flex items-center justify-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white" ref={featuresRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="features-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose ARTITECT?
            </h2>
            <p id="features-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine German engineering precision with modern technology to deliver
              folding machines that exceed industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Precision Engineering</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced CNC controls ensure accurate bends with tolerances up to ±0.1mm
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Operation</h3>
              <p className="text-gray-600 leading-relaxed">
                Intuitive interface and quick-setup features reduce training time and increase productivity
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Built to Last</h3>
              <p className="text-gray-600 leading-relaxed">
                Heavy-duty construction with premium components ensures decades of reliable service
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive warranty and worldwide service network keep your operations running
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-gray-50" ref={productsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="products-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p id="products-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              From compact folders to industrial-grade folding machines, we have the perfect solution for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  alt="Double Folding Machine"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-strk-img-id="product-double-folding-001"
                  data-strk-img="double folding machine sheet metal industrial precision"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Best Seller
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Double Folding Machine</h3>
                <p className="text-gray-600 mb-4">
                  High-speed dual-folding capability for maximum productivity
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Dual folding stations
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Up to 2.5m folding length
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    CNC control system
                  </li>
                </ul>
                <Link
                  to="/products#double-folding"
                  className="block w-full bg-blue-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  alt="Sheet Metal Folder"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-strk-img-id="product-sheet-metal-001"
                  data-strk-img="sheet metal folder bending machine precision industrial"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sheet Metal Folder</h3>
                <p className="text-gray-600 mb-4">
                  Versatile folding solution for all types of sheet metal work
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Universal compatibility
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Quick tool change
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Precision back gauge
                  </li>
                </ul>
                <Link
                  to="/products#sheet-metal"
                  className="block w-full bg-blue-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  alt="Metal Folding Machine"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-strk-img-id="product-metal-folding-001"
                  data-strk-img="metal folding machine industrial heavy duty precision"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    New Model
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Metal Folding Machine</h3>
                <p className="text-gray-600 mb-4">
                  Heavy-duty machine for demanding industrial applications
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Heavy-duty construction
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    High folding capacity
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Advanced safety features
                  </li>
                </ul>
                <Link
                  to="/products#metal-folding"
                  className="block w-full bg-blue-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors group"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Production?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join hundreds of satisfied customers worldwide who trust ARTITECT MACHINERY
            for their sheet metal folding needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl inline-flex items-center justify-center group"
            >
              Request a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-all inline-flex items-center justify-center"
            >
              Download Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
