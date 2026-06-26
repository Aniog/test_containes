import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Phone, Mail, MapPin, ArrowRight, CheckCircle, Settings, Shield, Zap, Users, Award, Clock } from 'lucide-react'

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--color-primary)' }}>
              <span className="text-white font-bold text-lg">AM</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg tracking-tight" style={{ color: 'var(--color-primary)' }}>ARTITECT</span>
              <span className="font-light text-lg tracking-wider" style={{ color: 'var(--color-secondary)' }}> MACHINERY</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium transition-colors hover:opacity-70"
                style={{ color: 'var(--color-secondary)' }}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary">
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} style={{ color: 'var(--color-primary)' }} />
            ) : (
              <Menu size={24} style={{ color: 'var(--color-primary)' }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium py-2 transition-colors"
                  style={{ color: 'var(--color-secondary)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="btn btn-primary mt-2">
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20" style={{ background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full" style={{ background: 'var(--color-primary)' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full" style={{ background: 'var(--color-accent)' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(26, 54, 93, 0.1)' }}>
              <span className="w-2 h-2 rounded-full" style={{ background: 'var(--color-accent)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--color-primary)' }}>Premium Industrial Equipment</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: 'var(--color-primary)' }}>
              Precision Engineering for
              <span className="block" style={{ color: 'var(--color-accent)' }}>Superior Quality</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-xl" style={{ color: 'var(--color-text-secondary)' }}>
              Leading manufacturer of precision double folding machines and sheet metal processing equipment. Engineered for excellence, built to last.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#products" className="btn btn-primary text-lg px-8 py-4">
                Explore Products
                <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn btn-secondary text-lg px-8 py-4">
                Contact Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <div>
                <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>25+</div>
                <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>500+</div>
                <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Machines Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>99%</div>
                <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)' }}>
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <Settings size={64} className="text-white" />
                  </div>
                  <p className="text-white text-xl font-medium">Double Folding Machine</p>
                  <p className="text-white/70 mt-2">Industrial Grade Precision</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--color-accent)' }}>
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-bold" style={{ color: 'var(--color-text)' }}>ISO Certified</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Products Section
function ProductsSection() {
  const products = [
    {
      id: 'double-folder',
      title: 'Double Folding Machine',
      description: 'Professional-grade double folder for precise sheet metal bending. Features advanced control systems and superior clamping technology.',
      features: ['CNC Control System', 'Auto Sheet Positioning', 'Precision Bending up to 135°'],
      category: 'Primary Product'
    },
    {
      id: 'sheet-metal-folder',
      title: 'Sheet Metal Folder',
      description: 'Versatile sheet metal folding equipment suitable for various industrial applications. Built for durability and consistent performance.',
      features: ['Heavy-Duty Construction', 'Easy Operation Panel', 'Adjustable Clamping Pressure'],
      category: 'Core Product'
    },
    {
      id: 'metal-folding-machine',
      title: 'Metal Folding Machine',
      description: 'Industrial metal folding machine designed for high-volume production environments. Exceptional accuracy and repeatability.',
      features: ['High-Speed Operation', 'Multi-Axis Control', 'Energy Efficient'],
      category: 'Core Product'
    },
    {
      id: 'metal-folder-machine',
      title: 'Metal Folder Machine',
      description: 'Robust metal folder machine engineered for demanding workshop conditions. Low maintenance with maximum uptime.',
      features: ['Industrial Grade Motors', 'Digital Readout Display', 'Quick-Change Tools'],
      category: 'Industrial Grade'
    }
  ]

  return (
    <section id="products" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4" style={{ background: 'rgba(201, 162, 39, 0.1)', color: 'var(--color-accent)' }}>
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            Precision Sheet Metal Equipment
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Discover our comprehensive range of folding machines engineered for accuracy, reliability, and industrial performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="card p-8 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'var(--color-primary)', color: 'white' }}>
                {product.category}
              </span>

              <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
                {product.title}
              </h3>

              <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                {product.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} style={{ color: 'var(--color-success)' }} />
                    <span style={{ color: 'var(--color-text)' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-semibold transition-all group-hover:gap-4"
                style={{ color: 'var(--color-primary)' }}
              >
                Request Quote
                <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            Need custom specifications or have questions?
          </p>
          <a href="#contact" className="btn btn-primary text-lg px-8 py-4">
            Talk to Our Experts
          </a>
        </div>
      </div>
    </section>
  )
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Settings,
      title: 'Advanced Technology',
      description: 'State-of-the-art CNC controls and precision engineering for unmatched accuracy in every bend.'
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Heavy-duty construction using premium materials ensures years of reliable operation.'
    },
    {
      icon: Zap,
      title: 'Energy Efficient',
      description: 'Optimized power consumption without compromising performance or productivity.'
    },
    {
      icon: Users,
      title: 'Easy Operation',
      description: 'Intuitive interfaces and ergonomic designs minimize training time and maximize efficiency.'
    },
    {
      icon: Clock,
      title: 'Low Maintenance',
      description: 'Quality components and smart design reduce downtime and maintenance costs.'
    },
    {
      icon: Award,
      title: 'Quality Certified',
      description: 'ISO certified manufacturing with rigorous quality control at every stage.'
    }
  ]

  return (
    <section id="features" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4" style={{ background: 'rgba(201, 162, 39, 0.1)', color: 'var(--color-accent)' }}>
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            Engineered for Excellence
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Our machines combine cutting-edge technology with proven reliability to deliver exceptional results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-8 text-center hover:border-transparent"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)' }}>
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
                {feature.title}
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="section" style={{ background: 'var(--color-surface)' }}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4" style={{ background: 'rgba(201, 162, 39, 0.1)', color: 'var(--color-accent)' }}>
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
              A Legacy of Precision Engineering
            </h2>
            <p className="text-lg mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              For over two decades, ARTITECT MACHINERY has been at the forefront of sheet metal folding technology. Our commitment to quality, innovation, and customer satisfaction has made us a trusted name in the industry worldwide.
            </p>
            <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
              We combine traditional craftsmanship with modern manufacturing techniques to produce machines that meet the highest standards of precision and durability. Every machine that leaves our facility is a testament to our dedication to excellence.
            </p>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-success)' }} />
                <div>
                  <div className="font-semibold" style={{ color: 'var(--color-text)' }}>Global Reach</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Serving clients in 40+ countries</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-success)' }} />
                <div>
                  <div className="font-semibold" style={{ color: 'var(--color-text)' }}>Expert Support</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>24/7 technical assistance</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-success)' }} />
                <div>
                  <div className="font-semibold" style={{ color: 'var(--color-text)' }}>Custom Solutions</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Tailored to your needs</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-success)' }} />
                <div>
                  <div className="font-semibold" style={{ color: 'var(--color-text)' }}>Fast Delivery</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Efficient logistics network</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)' }}>
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <Settings size={48} className="text-white" />
                  </div>
                  <p className="text-white text-xl font-medium">Manufacturing Excellence</p>
                  <p className="text-white/70 mt-2">State-of-the-art production facility</p>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 text-center">
              <div className="text-4xl font-bold" style={{ color: 'var(--color-accent)' }}>25+</div>
              <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    product: ''
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', message: '', product: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="section" style={{ background: 'var(--color-primary)' }}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="text-white">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4" style={{ background: 'rgba(255,255,255,0.2)' }}>
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="text-lg mb-8 text-white/80">
              Ready to transform your sheet metal processing capabilities? Get in touch with our team to discuss your requirements and find the perfect solution for your needs.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <a href="tel:+1234567890" className="text-white/80 hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:info@artitectmachinery.com" className="text-white/80 hover:text-white transition-colors">
                    info@artitectmachinery.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Address</div>
                  <p className="text-white/80">
                    123 Industrial Drive<br />
                    Manufacturing District<br />
                    City, State 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
              Request a Quote
            </h3>

            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(56, 161, 105, 0.1)' }}>
                  <CheckCircle size={32} style={{ color: 'var(--color-success)' }} />
                </div>
                <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>Message Sent!</h4>
                <p style={{ color: 'var(--color-text-secondary)' }}>We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm font-medium"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
                      style={{ borderColor: 'var(--color-border)', '--tw-ring-color': 'var(--color-primary)' }}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
                      style={{ borderColor: 'var(--color-border)', '--tw-ring-color': 'var(--color-primary)' }}
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
                      style={{ borderColor: 'var(--color-border)', '--tw-ring-color': 'var(--color-primary)' }}
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
                      style={{ borderColor: 'var(--color-border)', '--tw-ring-color': 'var(--color-primary)' }}
                      placeholder="Company Inc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                    Interested In
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
                    style={{ borderColor: 'var(--color-border)', '--tw-ring-color': 'var(--color-primary)' }}
                  >
                    <option value="">Select a product</option>
                    <option value="double-folding">Double Folding Machine</option>
                    <option value="sheet-metal">Sheet Metal Folder</option>
                    <option value="metal-folding">Metal Folding Machine</option>
                    <option value="metal-folder">Metal Folder Machine</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 resize-none"
                    style={{ borderColor: 'var(--color-border)', '--tw-ring-color': 'var(--color-primary)' }}
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Submit Request
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-12" style={{ background: 'var(--color-primary-dark)' }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <span className="text-white font-bold text-lg">AM</span>
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white">ARTITECT</span>
              <span className="font-light text-lg tracking-wider text-white/70"> MACHINERY</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a>
            <a href="#products" className="text-white/70 hover:text-white transition-colors">Products</a>
            <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
            <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white/50">
            © 2024 ARTITECT MACHINERY. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
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
