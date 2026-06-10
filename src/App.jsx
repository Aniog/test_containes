import React, { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import { 
  Menu, 
  X, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  CheckCircle,
  Clock,
  Award,
  Truck
} from 'lucide-react'

function App() {
  const containerRef = useRef(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const containerRef = useRef(null)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const products = [
    {
      id: 'double-folder',
      title: 'Double Folding Machine',
      description: 'Advanced dual-axis folding capability for complex sheet metal operations with precision control.',
      icon: '🔧'
    },
    {
      id: 'sheet-metal-folder',
      title: 'Sheet Metal Folder',
      description: 'Professional-grade folder designed for efficient sheet metal processing with consistent results.',
      icon: '⚙️'
    },
    {
      id: 'metal-folding-machine',
      title: 'Metal Folding Machine',
      description: 'High-performance machine for bending and folding various metal thicknesses with accuracy.',
      icon: '🔩'
    },
    {
      id: 'double-folding-machine',
      title: 'Double Folder',
      description: 'Versatile double folder system for simultaneous folding operations and increased productivity.',
      icon: '🛠️'
    },
    {
      id: 'metal-folder',
      title: 'Metal Folder',
      description: 'Durable metal folder built for industrial applications with robust construction.',
      icon: '⚡'
    },
    {
      id: 'metal-folder-machine',
      title: 'Metal Folder Machine',
      description: 'Complete folding solution combining precision engineering with user-friendly controls.',
      icon: '🎯'
    }
  ]

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'Engineered with the highest standards for durability and long-lasting performance.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Efficient Operations',
      description: 'Optimized for speed and precision to maximize your production output.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Reliable Performance',
      description: 'Consistent results you can trust, backed by years of industry expertise.'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Global Shipping',
      description: 'Worldwide delivery and installation support for all our machinery.'
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <span className="font-['Playfair_Display'] text-2xl font-bold text-[#1a1a2e]">
                  ARTITECT
                </span>
                <span className="font-['Playfair_Display'] text-2xl font-light text-[#e94560] ml-1">
                  MACHINERY
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#products" className="text-[#1a1a2e] hover:text-[#e94560] transition-colors font-medium">
                Products
              </a>
              <a href="#features" className="text-[#1a1a2e] hover:text-[#e94560] transition-colors font-medium">
                Features
              </a>
              <a href="#contact" className="text-[#1a1a2e] hover:text-[#e94560] transition-colors font-medium">
                Contact
              </a>
              <a 
                href="#contact" 
                className="bg-[#e94560] text-white px-6 py-2.5 rounded-md hover:bg-[#d63850] transition-colors font-medium"
              >
                Get Quote
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#products" className="block text-[#1a1a2e] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                Products
              </a>
              <a href="#features" className="block text-[#1a1a2e] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                Features
              </a>
              <a href="#contact" className="block text-[#1a1a2e] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
              <a 
                href="#contact" 
                className="block bg-[#e94560] text-white px-6 py-3 rounded-md text-center font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-20">
        <div 
          className="relative bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] py-20 lg:py-32"
          data-strk-bg-id="hero-bg-001"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa]/90 to-[#e9ecef]/90"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">
              <h1 
                id="hero-title"
                className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a2e] leading-tight"
              >
                Precision Metal <span className="text-[#e94560]">Folding</span> Solutions
              </h1>
              <p 
                id="hero-subtitle"
                className="mt-6 text-lg sm:text-xl text-[#6c757d] leading-relaxed"
              >
                Leading manufacturer of premium sheet metal folding machines. 
                From double folding machines to metal folder solutions — engineered for excellence.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#products" 
                  className="inline-flex items-center justify-center bg-[#e94560] text-white px-8 py-4 rounded-md hover:bg-[#d63850] transition-all font-semibold text-lg"
                >
                  View Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center border-2 border-[#1a1a2e] text-[#1a1a2e] px-8 py-4 rounded-md hover:bg-[#1a1a2e] hover:text-white transition-all font-semibold text-lg"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1a1a2e]">
              Our Products
            </h2>
            <div className="w-24 h-1 bg-[#e94560] mx-auto mt-4"></div>
            <p className="mt-4 text-[#6c757d] text-lg max-w-2xl mx-auto">
              Discover our comprehensive range of sheet metal folding machines, 
              engineered for precision and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="group bg-white border border-[#dee2e6] rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1a1a2e] mb-3">
                  {product.title}
                </h3>
                <p className="text-[#6c757d] leading-relaxed mb-4">
                  {product.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-[#e94560] font-medium hover:underline"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#1a1a2e]">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-[#e94560] mx-auto mt-4"></div>
            <p className="mt-4 text-[#6c757d] text-lg max-w-2xl mx-auto">
              Decades of experience delivering exceptional metal folding solutions worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e94560]/10 text-[#e94560] mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#1a1a2e] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#6c757d] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-white">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-[#e94560] mx-auto mt-4"></div>
            <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to find the perfect folding machine for your needs? Contact us today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e94560]/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#e94560]" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <p className="text-gray-300">info@artitectmachinery.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e94560]/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#e94560]" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Phone</h4>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e94560]/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#e94560]" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Location</h4>
                <p className="text-gray-300">Industrial District, USA</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="mailto:info@artitectmachinery.com"
              className="inline-flex items-center justify-center bg-[#e94560] text-white px-10 py-4 rounded-md hover:bg-[#d63850] transition-colors font-semibold text-lg"
            >
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#16213e] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <a href="#" className="flex items-center">
                <span className="font-['Playfair_Display'] text-xl font-bold text-white">
                  ARTITECT
                </span>
                <span className="font-['Playfair_Display'] text-xl font-light text-[#e94560] ml-1">
                  MACHINERY
                </span>
              </a>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Your trusted partner for premium sheet metal folding machines. 
                Quality engineering since 1995.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#products" className="text-gray-400 hover:text-[#e94560] transition-colors">Products</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-[#e94560] transition-colors">Features</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-[#e94560] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@artitectmachinery.com
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Industrial District, USA
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

import React from 'react'

export default App
