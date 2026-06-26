import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import { Menu, X, ChevronRight, Phone, Mail, MapPin, ArrowRight, CheckCircle, Shield, Wrench, Settings, Star, ChevronDown } from 'lucide-react'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const products = [
    {
      id: 'double-folding-machine',
      title: 'Double Folding Machine',
      description: 'High-precision double folding system for complex sheet metal operations with automated angle control.',
      features: ['Dual-axis precision', 'Automated angle control', 'Heavy-duty construction'],
      imgId: 'product-double-folding-a1b2c3',
      titleId: 'product-double-folding-title',
      descId: 'product-double-folding-desc',
    },
    {
      id: 'sheet-metal-folder',
      title: 'Sheet Metal Folder',
      description: 'Professional-grade sheet metal folding solution designed for consistent, repeatable bends across all materials.',
      features: ['Quick-change tooling', 'Digital angle display', 'Wide material range'],
      imgId: 'product-sheet-metal-folder-d4e5f6',
      titleId: 'product-sheet-metal-title',
      descId: 'product-sheet-metal-desc',
    },
    {
      id: 'metal-folding-machine',
      title: 'Metal Folding Machine',
      description: 'Versatile metal folding machine engineered for high-volume production with exceptional accuracy and speed.',
      features: ['High-speed operation', 'Programmable settings', 'Minimal maintenance'],
      imgId: 'product-metal-folding-g7h8i9',
      titleId: 'product-metal-folding-title',
      descId: 'product-metal-folding-desc',
    },
  ]

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Built to Last',
      description: 'Industrial-grade components ensure decades of reliable operation in demanding environments.',
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Precision Engineering',
      description: 'Micrometer-level accuracy in every fold, backed by advanced calibration systems.',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Easy Maintenance',
      description: 'Modular design allows quick part replacement and minimal downtime for servicing.',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Industry Leading',
      description: 'Trusted by manufacturers worldwide for consistent quality and superior performance.',
    },
  ]

  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '5000+', label: 'Machines Delivered' },
    { value: '80+', label: 'Countries Served' },
    { value: '99.8%', label: 'Precision Rate' },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className={`text-2xl font-extrabold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                ARTITECT
              </div>
              <div className={`text-sm font-medium ${scrolled ? 'text-slate-600' : 'text-white/80'}`}>
                MACHINERY
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['Products', 'Features', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${scrolled ? 'text-slate-700' : 'text-white/90'}`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-slate-900' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {['Products', 'Features', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg font-medium"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-1a2b3c"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Industry Leading Since 1998</span>
            </div>
            
            <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Precision Metal
              <span className="block text-blue-400">Folding Solutions</span>
            </h1>
            
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
              Engineered for excellence. Our double folding machines and sheet metal folders deliver unmatched precision, reliability, and performance for industrial manufacturing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('products')}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/25"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">Industrial Folding Machines</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover our range of precision-engineered folding machines designed for demanding industrial applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <h3 id={product.titleId} className="text-xl font-bold text-slate-900 mb-3">{product.title}</h3>
                  <p id={product.descId} className="text-slate-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">Built for Excellence</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every ARTITECT machine is engineered with precision, durability, and performance at its core.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
                Decades of Engineering Excellence
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                ARTITECT MACHINERY has been at the forefront of sheet metal folding technology for over 25 years. Our commitment to innovation and quality has made us a trusted partner for manufacturers worldwide.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                From our state-of-the-art manufacturing facility, we design and build double folding machines, sheet metal folders, and metal folding systems that set the industry standard for precision and reliability.
              </p>
              
              <div className="space-y-4">
                {[
                  'ISO 9001:2015 Certified Manufacturing',
                  '24/7 Technical Support Worldwide',
                  'Custom Engineering Solutions Available',
                  'Comprehensive Training Programs',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <span id="about-title" className="sr-only">ARTITECT MACHINERY Manufacturing Facility</span>
              <span id="about-desc" className="sr-only">Sheet metal folding technology engineering</span>
              <div
                className="aspect-[4/3] rounded-2xl overflow-hidden"
                data-strk-bg-id="about-bg-4d5e6f"
                data-strk-bg="[about-title] [about-desc]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-extrabold">25+</div>
                <div className="text-blue-100 font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Upgrade Your Production Line?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Contact our team for a customized quote and discover how ARTITECT machinery can transform your manufacturing capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/25"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">Get in Touch</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Have questions about our machines? Our team is ready to help you find the perfect solution.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Phone</h3>
                <p className="text-slate-600">+1 (555) 123-4567</p>
                <p className="text-slate-500 text-sm mt-1">Mon-Fri 8am-6pm EST</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-600">info@artitect.com</p>
                <p className="text-slate-500 text-sm mt-1">Response within 24 hours</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Location</h3>
                <p className="text-slate-600">1234 Industrial Parkway</p>
                <p className="text-slate-500 text-sm mt-1">Manufacturing District, USA</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Request a Quote</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Your Company"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">Product Interest</label>
                    <select
                      id="product"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                    >
                      <option value="">Select a product</option>
                      <option value="double-folding">Double Folding Machine</option>
                      <option value="sheet-metal">Sheet Metal Folder</option>
                      <option value="metal-folding">Metal Folding Machine</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your requirements..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/25"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-extrabold">ARTITECT</span>
                <span className="text-sm text-slate-400">MACHINERY</span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md mb-6">
                Leading manufacturer of precision sheet metal folding machines. Delivering excellence in industrial engineering since 1998.
              </p>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'YouTube'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
                    aria-label={social}
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Products</h4>
              <ul className="space-y-3">
                {['Double Folding Machine', 'Sheet Metal Folder', 'Metal Folding Machine', 'Custom Solutions', 'Spare Parts'].map((item) => (
                  <li key={item}>
                    <a href="#products" className="text-slate-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'News', 'Contact', 'Support'].map((item) => (
                  <li key={item}>
                    <a href="#about" className="text-slate-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 ARTITECT MACHINERY. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
