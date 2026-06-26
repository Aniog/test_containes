import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const HomePage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    return cleanup
  }, [])

  const features = [
    {
      title: 'Precision Engineering',
      description: 'Industry-leading accuracy with advanced CNC controls',
      icon: '⚙️'
    },
    {
      title: 'Durability Guaranteed',
      description: 'Built to last with premium materials and expert craftsmanship',
      icon: '🛡️'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services',
      icon: '🔧'
    }
  ]

  const stats = [
    { value: '500+', label: 'Machines Sold' },
    { value: '25+', label: 'Years Experience' },
    { value: '50+', label: 'Countries Served' },
    { value: '99%', label: 'Customer Satisfaction' }
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            data-strk-bg-id="hero-bg-001"
            data-strk-bg="Precision sheet metal folding machines industrial manufacturing"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Precision Sheet Metal
              <span className="text-orange-500"> Folding Machines</span>
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              ARTITECT MACHINERY delivers industry-leading folding solutions for professional fabricators worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold text-center transition-colors"
              >
                Explore Our Products
              </Link>
              <a 
                href="#quote" 
                className="border-2 border-white hover:border-orange-500 hover:text-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold text-center transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="featured-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Products
            </h2>
            <p id="featured-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover our range of precision-engineered folding machines designed for efficiency and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-slate-200">
                <img 
                  alt="Double Folding Machine"
                  data-strk-img-id="product-double-folding-001"
                  data-strk-img="[product-double-title] [product-double-desc] [featured-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 id="product-double-title" className="text-xl font-semibold mb-2 text-slate-900">
                  Double Folding Machine
                </h3>
                <p id="product-double-desc" className="text-slate-600 mb-4">
                  High-precision dual-folding capability for complex sheet metal projects
                </p>
                <Link 
                  to="/products" 
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-slate-200">
                <img 
                  alt="Sheet Metal Folder"
                  data-strk-img-id="product-sheet-folder-002"
                  data-strk-img="[product-sheet-title] [product-sheet-desc] [featured-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 id="product-sheet-title" className="text-xl font-semibold mb-2 text-slate-900">
                  Sheet Metal Folder
                </h3>
                <p id="product-sheet-desc" className="text-slate-600 mb-4">
                  Versatile folding solution for all your sheet metal fabrication needs
                </p>
                <Link 
                  to="/products" 
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-slate-200">
                <img 
                  alt="Metal Folding Machine"
                  data-strk-img-id="product-metal-folding-003"
                  data-strk-img="[product-metal-title] [product-metal-desc] [featured-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 id="product-metal-title" className="text-xl font-semibold mb-2 text-slate-900">
                  Metal Folding Machine
                </h3>
                <p id="product-metal-desc" className="text-slate-600 mb-4">
                  Heavy-duty construction for continuous industrial folding operations
                </p>
                <Link 
                  to="/products" 
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/products" 
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg text-lg font-semibold inline-block transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Upgrade Your Fabrication Process?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact our team of experts today to find the perfect folding machine for your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#quote" 
              className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Get a Free Quote
            </a>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
