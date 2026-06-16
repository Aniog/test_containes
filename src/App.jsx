import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Phone, Mail, MapPin, ArrowRight, CheckCircle, Cog, Shield, Wrench, Clock, Star } from 'lucide-react'
import './App.css'

const patternSvg = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`

const dotPatternSvg = `data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E`

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const products = [
    {
      id: 'double-folding-machine',
      title: 'Double Folding Machine',
      subtitle: 'Premium Series',
      description: 'Advanced dual-beam folding technology for precision sheet metal processing with superior accuracy and repeatability.',
      features: ['CNC Control System', '2-8mm Capacity', 'Auto Backgauge', 'Touch Panel Interface'],
      badge: 'Best Seller'
    },
    {
      id: 'double-folder',
      title: 'Double Folder',
      subtitle: 'Industrial Grade',
      description: 'Heavy-duty construction designed for high-volume production environments with minimal maintenance requirements.',
      features: ['Robust Steel Frame', 'Hydraulic Drive', 'Safety Guards', 'CE Certified'],
      badge: 'Popular'
    },
    {
      id: 'sheet-metal-folder',
      title: 'Sheet Metal Folder',
      subtitle: 'Versatile Line',
      description: 'Flexible solutions for various sheet metal folding applications, from HVAC to automotive industries.',
      features: ['Quick Change Tooling', 'Variable Speed', 'Compact Design', 'Easy Operation'],
      badge: null
    },
    {
      id: 'metal-folding-machine',
      title: 'Metal Folding Machine',
      subtitle: 'Professional Line',
      description: 'Engineered for precision metal folding with exceptional durability and long service life.',
      features: ['Precision Guides', 'Powerful Motors', 'Digital Display', 'Ergonomic Controls'],
      badge: 'New'
    },
    {
      id: 'metal-folder-machine',
      title: 'Metal Folder Machine',
      subtitle: 'Heavy Duty',
      description: 'Built to handle the toughest metal folding jobs with unmatched reliability and performance.',
      features: ['Industrial Transmission', 'Reinforced Bed', 'Anti-Chip Design', 'Low Noise'],
      badge: null
    },
    {
      id: 'metal-folder',
      title: 'Metal Folder',
      subtitle: 'Standard Series',
      description: 'Reliable and efficient metal folding solution perfect for workshops and light industrial use.',
      features: ['Simple Controls', 'Affordable', 'Portable Options', 'Quick Setup'],
      badge: null
    }
  ]

  const features = [
    {
      icon: Cog,
      title: 'Precision Engineering',
      description: 'Every machine is manufactured with micron-level tolerance for flawless accuracy.'
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Industrial-grade components ensure decades of reliable service.'
    },
    {
      icon: Wrench,
      title: 'Easy Maintenance',
      description: 'Designed for simple servicing with accessible components.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance when you need it most.'
    }
  ]

  const testimonials = [
    {
      name: 'Robert Thompson',
      role: 'Production Manager',
      company: 'Thompson Metalworks',
      text: 'ARTITECT machines have transformed our workshop. The precision and reliability are unmatched.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Owner',
      company: 'Precision Sheet Metal Co.',
      text: 'After 5 years of daily use, our ARTITECT folder still performs like new. Outstanding quality.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Plant Director',
      company: 'Industrial Fabrics Inc.',
      text: 'The support team is exceptional. They helped us optimize our production workflow significantly.',
      rating: 5
    }
  ]

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'features', label: 'Why Us' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative">
                <span className={`text-2xl font-bold tracking-tight transition-colors ${
                  scrolled ? 'text-navy-800' : 'text-white'
                }`}>
                  ARTITECT
                </span>
                <span className={`ml-1 text-lg font-medium transition-colors ${
                  scrolled ? 'text-gold-500' : 'text-gold-400'
                }`}>
                  MACHINERY
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                    activeSection === link.id 
                      ? 'text-gold-500' 
                      : scrolled ? 'text-navy-800' : 'text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all hover:shadow-lg"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-navy-800' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white rounded-xl shadow-xl mt-2 overflow-hidden">
              <div className="py-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left px-6 py-3 text-navy-800 hover:bg-gray-50 hover:text-gold-500 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="px-6 pt-4">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-medium transition-all"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-steel-600" />
        <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `url(${patternSvg})` }} />
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="w-2 h-2 bg-gold-500 rounded-full mr-2 animate-pulse" />
              <span className="text-gold-400 text-sm font-medium">Premium Industrial Machinery</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Precision Metal<br />
              <span className="text-gold-500">Folding Solutions</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Discover industrial-grade folding machines engineered for exceptional accuracy, 
              durability, and performance. Trusted by metalworking professionals worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('products')}
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-gold-500/25 flex items-center justify-center group"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-white/10"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400 text-sm">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">99%</div>
                <div className="text-gray-400 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-500 font-semibold text-sm tracking-wider uppercase">Our Products</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mt-2 mb-4">
              Premium Metal Folding Equipment
            </h2>
            <p className="text-steel-400 text-lg">
              From compact workshop folders to heavy industrial machines, we offer a complete range 
              of sheet metal folding solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <article 
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Product Image Placeholder */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-navy-800 to-steel-500 overflow-hidden">
                  <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `url(${dotPatternSvg})` }} />
                  
                  {/* Machine Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cog className="w-24 h-24 text-white/20 group-hover:text-white/40 transition-colors duration-300" />
                  </div>

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-gold-500 text-xs font-semibold tracking-wider uppercase">
                    {product.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-navy-800 mt-1 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-steel-400 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-steel-500">
                        <CheckCircle className="w-4 h-4 text-gold-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-navy-800 hover:bg-navy-900 text-white py-3 rounded-xl font-medium transition-all group flex items-center justify-center"
                  >
                    Request Quote
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold-500 font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mt-2 mb-6">
                Engineering Excellence,<br />
                <span className="text-gold-500">Lasting Quality</span>
              </h2>
              <p className="text-steel-400 text-lg mb-8 leading-relaxed">
                Every ARTITECT machine is built with one goal: to exceed your expectations in precision, 
                reliability, and performance. Our commitment to quality is unwavering.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                      <feature.icon className="w-6 h-6 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-800 mb-1">{feature.title}</h4>
                      <p className="text-steel-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-navy-800 to-steel-500 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `url(${dotPatternSvg})` }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Cog className="w-32 h-32 text-white/20 mx-auto mb-4" />
                    <span className="text-white/40 text-lg font-medium">Precision in Every Detail</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="text-3xl font-bold text-navy-800">ISO 9001</div>
                <div className="text-steel-400 text-sm">Certified Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold-500 font-semibold text-sm tracking-wider uppercase">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
              Trusted by Professionals
            </h2>
            <p className="text-gray-400 text-lg">
              See what our customers say about their experience with ARTITECT machinery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-steel-400 text-sm">{testimonial.role}</div>
                  <div className="text-gold-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* About Image Placeholder */}
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-800 to-steel-500 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `url(${dotPatternSvg})` }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-24 h-24 text-white/20 mx-auto mb-4" />
                    <span className="text-white/40 text-lg font-medium">Our Story</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-gold-500 font-semibold text-sm tracking-wider uppercase">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mt-2 mb-6">
                A Legacy of<br />
                <span className="text-gold-500">Precision & Excellence</span>
              </h2>
              <div className="space-y-6 text-steel-400 leading-relaxed">
                <p>
                  Founded with a vision to revolutionize the metalworking industry, ARTITECT MACHINERY 
                  has grown from a small workshop to a global leader in folding machine manufacturing.
                </p>
                <p>
                  Our commitment to precision engineering and customer satisfaction has earned us the 
                  trust of businesses across 50+ countries. Every machine we produce embodies our 
                  dedication to quality and innovation.
                </p>
                <p>
                  We believe in building lasting partnerships with our clients, providing not just 
                  equipment, but comprehensive solutions that drive business success.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-navy-800">25+</div>
                  <div className="text-steel-400 text-xs mt-1">Years</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-navy-800">500+</div>
                  <div className="text-steel-400 text-xs mt-1">Machines</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-navy-800">50+</div>
                  <div className="text-steel-400 text-xs mt-1">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-gold-500 font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mt-2 mb-6">
                Ready to Transform<br />
                <span className="text-gold-500">Your Production?</span>
              </h2>
              <p className="text-steel-400 text-lg mb-10 leading-relaxed">
                Contact our team of experts to discuss your requirements and discover 
                the perfect ARTITECT solution for your business.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800 mb-1">Phone</h4>
                    <p className="text-steel-400">+1 (555) 123-4567</p>
                    <p className="text-steel-400">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800 mb-1">Email</h4>
                    <p className="text-steel-400">sales@artitectmachinery.com</p>
                    <p className="text-steel-400">support@artitectmachinery.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800 mb-1">Address</h4>
                    <p className="text-steel-400">1234 Industrial Boulevard</p>
                    <p className="text-steel-400">Manufacturing District, CA 90210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">Request a Quote</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-navy-800 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-navy-800 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-800 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-navy-800 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all"
                    placeholder="Your Company Inc."
                  />
                </div>

                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-navy-800 mb-2">
                    Product Interest
                  </label>
                  <select
                    id="product"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select a product</option>
                    <option value="double-folding-machine">Double Folding Machine</option>
                    <option value="double-folder">Double Folder</option>
                    <option value="sheet-metal-folder">Sheet Metal Folder</option>
                    <option value="metal-folding-machine">Metal Folding Machine</option>
                    <option value="metal-folder-machine">Metal Folder Machine</option>
                    <option value="metal-folder">Metal Folder</option>
                    <option value="other">Other / Multiple Products</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-800 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg flex items-center justify-center group"
                >
                  Submit Request
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-white tracking-tight">ARTITECT</span>
                <span className="ml-1 text-lg font-medium text-gold-500">MACHINERY</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Leading manufacturer of precision metal folding machines. We deliver industrial-grade 
                equipment trusted by professionals worldwide for over 25 years.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-gold-500 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-3">
                <li><button className="text-gray-400 hover:text-gold-500 transition-colors">Double Folding Machine</button></li>
                <li><button className="text-gray-400 hover:text-gold-500 transition-colors">Sheet Metal Folder</button></li>
                <li><button className="text-gray-400 hover:text-gold-500 transition-colors">Metal Folding Machine</button></li>
                <li><button className="text-gray-400 hover:text-gold-500 transition-colors">View All Products</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2026 ARTITECT MACHINERY. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-500 hover:text-gold-500 transition-colors text-sm">
                Privacy Policy
              </button>
              <button className="text-gray-500 hover:text-gold-500 transition-colors text-sm">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
