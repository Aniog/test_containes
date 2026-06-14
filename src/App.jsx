import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Phone, Mail, MapPin, ArrowRight, Check, Settings, Shield, Award, Truck, Wrench, Users, Clock } from 'lucide-react'

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#c9a227] to-[#b8922a] rounded-lg flex items-center justify-center">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-[#1a1f36]' : 'text-white'}`}>ARTITECT</span>
              <span className={`block text-xs tracking-widest ${isScrolled ? 'text-[#6b7280]' : 'text-white/80'}`}>MACHINERY</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-[#c9a227] ${isScrolled ? 'text-[#1a1f36]' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm">
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-[#1a1f36]' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-[#1a1f36]' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-xl mt-2 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-[#1a1f36] font-medium hover:text-[#c9a227]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm mt-4 inline-block">
              Get Quote
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#c9a227] rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Premium Industrial Equipment</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Precision Metal
              <br />
              <span className="gradient-text">Folding Solutions</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
              Experience industrial excellence with ARTITECT MACHINERY. Our precision-engineered 
              folding machines deliver unmatched accuracy and durability for your metalworking needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="btn-primary inline-flex items-center justify-center gap-2">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="btn-secondary inline-flex items-center justify-center gap-2" style={{ borderColor: 'white', color: 'white' }}>
                Contact Us
              </a>
            </div>
          </div>

          <div className="relative animate-slide-in-right delay-200">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#c9a227]/20 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-[#2d3555] to-[#1a1f36] rounded-3xl p-8 border border-white/10">
                <img
                  data-strk-img-id="hero-machine-a1b2c3"
                  data-strk-img="[hero-title] [hero-subtitle]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect fill='%232d3555' width='800' height='450'/%3E%3Ctext x='400' y='200' text-anchor='middle' fill='%23c9a227' font-family='Inter' font-size='24'%3EPrecision Metal Folding Machine%3C/text%3E%3Ctext x='400' y='240' text-anchor='middle' fill='%23ffffff' font-family='Inter' font-size='14' opacity='0.7'%3EIndustrial Grade Equipment%3C/text%3E%3C/svg%3E"
                  alt="ARTITECT Metal Folding Machine"
                  className="w-full rounded-2xl"
                />
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#c9a227]">25+</div>
                    <div className="text-sm text-white/60">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#c9a227]">50+</div>
                    <div className="text-sm text-white/60">Countries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#c9a227]">100%</div>
                    <div className="text-sm text-white/60">Quality Assured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  )
}

// Products Section
const ProductsSection = () => {
  const products = [
    {
      id: 'double-folder',
      title: 'Double Folding Machine',
      description: 'Advanced dual-axis folding system for complex metal shapes with precision control and high repeatability.',
      features: ['CNC Control System', 'Auto Sheet Positioning', 'Multi-angle Bending'],
      imageId: 'product-double-folder-d4e5f6'
    },
    {
      id: 'sheet-metal-folder',
      title: 'Sheet Metal Folder',
      description: 'Heavy-duty folder designed for high-volume production with exceptional durability and minimal maintenance.',
      features: ['Hydraulic Drive', 'Quick Change Tooling', 'Digital Readout'],
      imageId: 'product-sheet-metal-g7h8i9'
    },
    {
      id: 'metal-folding-machine',
      title: 'Metal Folding Machine',
      description: 'Versatile folding solution suitable for various metal types and thicknesses with adjustable parameters.',
      features: ['Variable Speed', 'Touch Screen Interface', 'Energy Efficient'],
      imageId: 'product-metal-folder-j1k2l3'
    },
    {
      id: 'industrial-folder',
      title: 'Industrial Metal Folder',
      description: 'Built for demanding industrial environments with reinforced construction and extended operational life.',
      features: ['Industrial Grade Motors', 'Heavy-duty Frame', 'Low Noise Operation'],
      imageId: 'product-industrial-m4n5o6'
    }
  ]

  return (
    <section id="products" className="py-20 lg:py-32 section-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#c9a227] font-semibold tracking-wider uppercase text-sm">Our Products</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1f36] mt-4 mb-6">
            Premium Metal Working Equipment
          </h2>
          <p className="text-[#6b7280] max-w-2xl mx-auto text-lg">
            Discover our comprehensive range of precision-engineered folding machines designed for industrial excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-gray-100"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#f8f9fc] to-[#e4e8ef] p-4">
                <img
                  data-strk-img-id={product.imageId}
                  data-strk-img={`[product-${product.id}-title] [product-${product.id}-desc]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23e4e8ef' width='400' height='300'/%3E%3Ctext x='200' y='140' text-anchor='middle' fill='%231a1f36' font-family='Inter' font-size='16'%3EMetal Folding Machine%3C/text%3E%3Ctext x='200' y='165' text-anchor='middle' fill='%236b7280' font-family='Inter' font-size='12'%3EIndustrial Equipment%3C/text%3E%3C/svg%3E"
                  alt={product.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="p-6">
                <h3 id={`product-${product.id}-title`} className="text-xl font-bold text-[#1a1f36] mb-2">
                  {product.title}
                </h3>
                <p id={`product-${product.id}-desc`} className="text-[#6b7280] text-sm mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-[#1a1f36]">
                      <Check className="w-4 h-4 text-[#c9a227] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center text-[#c9a227] font-semibold hover:text-[#b8922a] transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: Settings,
      title: 'Precision Engineering',
      description: 'Every machine is engineered with micron-level precision for flawless metal forming operations.'
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Industrial-grade components ensure decades of reliable service with minimal maintenance.'
    },
    {
      icon: Award,
      title: 'Quality Certified',
      description: 'ISO certified manufacturing process guarantees consistent quality across all products.'
    },
    {
      icon: Truck,
      title: 'Global Shipping',
      description: 'We deliver and install equipment worldwide with comprehensive technical support.'
    },
    {
      icon: Wrench,
      title: 'Easy Maintenance',
      description: 'Designed for simple maintenance with accessible components and clear documentation.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Our team of engineers provides 24/7 technical assistance and training programs.'
    }
  ]

  return (
    <section id="features" className="py-20 lg:py-32 section-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#c9a227] font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1f36] mt-4 mb-6">
              Engineering Excellence for Over 25 Years
            </h2>
            <p className="text-[#6b7280] text-lg mb-8 leading-relaxed">
              At ARTITECT MACHINERY, we combine traditional craftsmanship with cutting-edge technology 
              to deliver folding machines that exceed industry standards. Our commitment to quality 
              and innovation has made us a trusted partner for metalworking professionals worldwide.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-[#c9a227] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#1a1f36]">Fast Delivery</h4>
                  <p className="text-sm text-[#6b7280]">Efficient production & shipping</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-[#c9a227] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#1a1f36]">Warranty</h4>
                  <p className="text-sm text-[#6b7280]">Comprehensive coverage</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg card-hover border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#c9a227]/10 to-[#c9a227]/5 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#c9a227]" />
                </div>
                <h4 className="font-bold text-[#1a1f36] mb-2">{feature.title}</h4>
                <p className="text-sm text-[#6b7280]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 section-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#c9a227]/10 to-transparent rounded-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-4xl font-bold text-[#c9a227] mb-2">25+</div>
                  <div className="text-white/70">Years of Excellence</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-4xl font-bold text-[#c9a227] mb-2">500+</div>
                  <div className="text-white/70">Machines Delivered</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-4xl font-bold text-[#c9a227] mb-2">50+</div>
                  <div className="text-white/70">Countries Worldwide</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-4xl font-bold text-[#c9a227] mb-2">99%</div>
                  <div className="text-white/70">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[#c9a227] font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Your Trusted Partner in Metal Working
            </h2>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Founded with a vision to revolutionize metal folding technology, ARTITECT MACHINERY has grown 
              from a small workshop to a global leader in precision engineering. Our journey is marked by 
              continuous innovation, unwavering quality, and a deep understanding of industrial needs.
            </p>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Every machine that leaves our facility represents our commitment to excellence - from concept 
              design to final delivery. We invest in research and development to stay at the forefront of 
              metalworking technology, ensuring our customers always have access to the most advanced solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <Check className="w-4 h-4 text-[#c9a227]" />
                <span className="text-white text-sm">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <Check className="w-4 h-4 text-[#c9a227]" />
                <span className="text-white text-sm">CE Marked Equipment</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <Check className="w-4 h-4 text-[#c9a227]" />
                <span className="text-white text-sm">Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 section-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[#c9a227] font-semibold tracking-wider uppercase text-sm">Contact Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1f36] mt-4 mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="text-[#6b7280] text-lg mb-8">
              Ready to upgrade your metal working capabilities? Our team is here to help you find the perfect solution for your needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#c9a227]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1f36]">Phone</h4>
                  <p className="text-[#6b7280]">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#c9a227]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1f36]">Email</h4>
                  <p className="text-[#6b7280]">info@artitectmachinery.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#c9a227]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#c9a227]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1f36]">Address</h4>
                  <p className="text-[#6b7280]">1234 Industrial Boulevard<br />Manufacturing District, MD 56789</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f8f9fc] rounded-3xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1a1f36] mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a1f36] mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1a1f36] mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all"
                    placeholder="Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a1f36] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a1f36] mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-center text-sm">
                  Thank you! We'll get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1f36] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c9a227] to-[#b8922a] rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight">ARTITECT</span>
                <span className="block text-xs tracking-widest text-white/60">MACHINERY</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Leading manufacturer of precision metal folding machines. Quality engineering for industrial excellence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#products" className="hover:text-[#c9a227] transition-colors">Double Folding Machine</a></li>
              <li><a href="#products" className="hover:text-[#c9a227] transition-colors">Sheet Metal Folder</a></li>
              <li><a href="#products" className="hover:text-[#c9a227] transition-colors">Metal Folding Machine</a></li>
              <li><a href="#products" className="hover:text-[#c9a227] transition-colors">Industrial Folder</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#about" className="hover:text-[#c9a227] transition-colors">About Us</a></li>
              <li><a href="#features" className="hover:text-[#c9a227] transition-colors">Our Features</a></li>
              <li><a href="#contact" className="hover:text-[#c9a227] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#c9a227] transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@artitectmachinery.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>1234 Industrial Boulevard<br />Manufacturing District, MD 56789</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm">
            © {currentYear} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/40 hover:text-[#c9a227] transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-[#c9a227] transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  useEffect(() => {
    // Load images when component mounts
    const loadImages = async () => {
      if (window.ImageHelper && window.strkImgConfig) {
        try {
          await window.ImageHelper.loadImages(window.strkImgConfig, document.body)
        } catch (e) {
          console.log('Image loading skipped:', e.message)
        }
      }
    }
    loadImages()
  }, [])

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
