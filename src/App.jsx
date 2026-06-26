import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, CheckCircle, Zap, Shield, Wrench, Clock, Award, Users, Mail, Phone, MapPin, ArrowRight, Star } from 'lucide-react'

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1a1a2e] rounded-lg flex items-center justify-center">
              <span className="text-[#c9a227] font-bold text-xl">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#1a1a2e] font-extrabold text-lg leading-tight tracking-tight">ARTITECT</span>
              <span className="text-[#c9a227] font-medium text-xs tracking-widest">MACHINERY</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#1a1a2e] font-medium hover:text-[#c9a227] transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c9a227] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="bg-[#c9a227] hover:bg-[#e0b82d] text-[#1a1a2e] font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a227]/20"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#1a1a2e] p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[#1a1a2e] font-medium hover:text-[#c9a227] transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#c9a227] hover:bg-[#e0b82d] text-[#1a1a2e] font-semibold px-6 py-3 rounded-lg text-center transition-all duration-300 mt-2"
            >
              Get Quote
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1a1a2e] via-[#252542] to-[#1a1a2e] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#c9a227]/5 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#c9a227]/10 border border-[#c9a227]/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#c9a227] rounded-full animate-pulse" />
              <span className="text-[#c9a227] text-sm font-medium">Premium Industrial Equipment</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Precision Metal
              <span className="block text-[#c9a227]">Folding Solutions</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Discover our premium range of double folding machines, sheet metal folders, and industrial metalworking equipment. Engineered for precision, built for performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a227] hover:bg-[#e0b82d] text-[#1a1a2e] font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#c9a227]/30 group"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-[#c9a227] text-white hover:text-[#c9a227] font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Contact Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-[#c9a227]">25+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#c9a227]">500+</div>
                <div className="text-gray-400 text-sm">Machines Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#c9a227]">99%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square">
              {/* Machine Illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#252542] to-[#1a1a2e] rounded-3xl border border-white/10 overflow-hidden">
                <div className="absolute inset-4 bg-gradient-to-br from-[#2a2a4a] to-[#1a1a2e] rounded-2xl flex items-center justify-center">
                  {/* Abstract Machine Representation */}
                  <svg viewBox="0 0 400 400" className="w-3/4 h-3/4" fill="none">
                    <rect x="50" y="200" width="300" height="40" rx="4" fill="#c9a227" opacity="0.8"/>
                    <rect x="80" y="160" width="240" height="50" rx="4" fill="#3a3a5a"/>
                    <rect x="100" y="100" width="200" height="60" rx="4" fill="#4a4a6a"/>
                    <rect x="120" y="60" width="160" height="40" rx="4" fill="#5a5a7a"/>
                    <circle cx="200" cy="280" r="80" stroke="#c9a227" strokeWidth="4" fill="none" opacity="0.3"/>
                    <circle cx="200" cy="280" r="60" stroke="#c9a227" strokeWidth="3" fill="none" opacity="0.2"/>
                    <rect x="170" y="270" width="60" height="20" rx="2" fill="#c9a227"/>
                    <line x1="200" y1="200" x2="200" y2="250" stroke="#c9a227" strokeWidth="3"/>
                    <circle cx="200" cy="280" r="10" fill="#c9a227"/>
                  </svg>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#c9a227]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#1a1a2e]">ISO Certified</div>
                    <div className="text-sm text-gray-500">Quality Assured</div>
                  </div>
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
const ProductsSection = () => {
  const containerRef = useRef(null)

  const products = [
    {
      id: 'double-folding',
      name: 'Double Folding Machine',
      description: 'Heavy-duty double-action folding for complex sheet metal fabrication with superior precision and repeatability.',
      features: ['Dual-axis control', 'CNC compatible', 'Auto sheet positioning'],
      titleId: 'product-double-folding-title',
      descId: 'product-double-folding-desc',
      imgId: 'product-double-folding-img'
    },
    {
      id: 'double-folder',
      name: 'Double Folder',
      description: 'Professional-grade double folder designed for high-volume production with minimal maintenance requirements.',
      features: ['High speed operation', 'Easy adjustment', 'Durable construction'],
      titleId: 'product-double-folder-title',
      descId: 'product-double-folder-desc',
      imgId: 'product-double-folder-img'
    },
    {
      id: 'sheet-metal-folder',
      name: 'Sheet Metal Folder',
      description: 'Versatile folder for various sheet metal applications, ideal for workshop and industrial environments.',
      features: ['Multi-angle bending', 'Quick change tooling', 'Sturdy frame'],
      titleId: 'product-sheet-metal-title',
      descId: 'product-sheet-metal-desc',
      imgId: 'product-sheet-metal-img'
    },
    {
      id: 'metal-folding-machine',
      name: 'Metal Folding Machine',
      description: 'Industrial metal folding machine with advanced features for precision bending of various metal thicknesses.',
      features: ['Digital controls', 'Powerful motor', 'Long service life'],
      titleId: 'product-metal-folding-title',
      descId: 'product-metal-folding-desc',
      imgId: 'product-metal-folding-img'
    }
  ]

  useEffect(() => {
    const loadImages = async () => {
      if (window.ImageHelper && containerRef.current) {
        try {
          await window.ImageHelper.loadImages(window.strkImgConfig, containerRef.current)
        } catch (e) {
          console.log('Image loading not available')
        }
      }
    }
    loadImages()
  }, [])

  return (
    <section id="products" className="py-24 bg-[#f8f9fa]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">Our Products</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a2e] mt-4 mb-6">
            Premium Metalworking Equipment
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our comprehensive range of precision-engineered folding and bending solutions for industrial applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Product Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4a] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 150" className="w-2/3 h-2/3 opacity-80">
                    <rect x="20" y="100" width="160" height="15" rx="2" fill="#c9a227"/>
                    <rect x="35" y="75" width="130" height="30" rx="2" fill="#3a3a5a"/>
                    <rect x="50" y="50" width="100" height="25" rx="2" fill="#4a4a6a"/>
                    <rect x="65" y="30" width="70" height="20" rx="2" fill="#5a5a7a"/>
                  </svg>
                </div>
                <div className="absolute inset-0 bg-[#c9a227]/0 group-hover:bg-[#c9a227]/10 transition-all duration-300" />
              </div>

              <div className="p-6">
                <h3 id={product.titleId} className="text-xl font-bold text-[#1a1a2e] mb-3 group-hover:text-[#c9a227] transition-colors">
                  {product.name}
                </h3>
                <p id={product.descId} className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-[#c9a227]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1a1a2e] hover:bg-[#252542] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 group"
          >
            Request Full Catalog
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Precision Engineering',
      description: 'Every machine delivers exceptional accuracy with tight tolerances for flawless metal fabrication.'
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Industrial-grade components ensure long-term reliability and minimal maintenance requirements.'
    },
    {
      icon: Wrench,
      title: 'Easy Maintenance',
      description: 'Designed for straightforward service and parts replacement to minimize downtime.'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Efficient production and logistics ensure quick delivery to your facility.'
    },
    {
      icon: Award,
      title: 'Quality Certified',
      description: 'ISO certified manufacturing processes guarantee consistent quality standards.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated technical team provides comprehensive installation and after-sales support.'
    }
  ]

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a2e] mt-4 mb-6">
              Engineering Excellence in Every Machine
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              With over two decades of experience, we understand what industrial clients need: reliability, precision, and value. Our commitment to quality drives every design decision.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-[#f8f9fa] rounded-lg px-4 py-2">
                <Star className="w-5 h-5 text-[#c9a227]" />
                <span className="font-medium text-[#1a1a2e]">5-Star Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-[#f8f9fa] rounded-lg px-4 py-2">
                <Award className="w-5 h-5 text-[#c9a227]" />
                <span className="font-medium text-[#1a1a2e]">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-[#f8f9fa] rounded-lg px-4 py-2">
                <Shield className="w-5 h-5 text-[#c9a227]" />
                <span className="font-medium text-[#1a1a2e]">2-Year Warranty</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#f8f9fa] rounded-xl hover:bg-[#1a1a2e] group transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#c9a227] transition-colors">
                  <feature.icon className="w-6 h-6 text-[#c9a227] group-hover:text-[#1a1a2e] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
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
    <section id="about" className="py-24 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">About ARTITECT</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-4 mb-6">
              Building Trust Through Quality Since 1998
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              ARTITECT MACHINERY has been at the forefront of metalworking equipment manufacturing for over 25 years. Our commitment to precision engineering and customer satisfaction has made us a trusted name in the industry.
            </p>
            <p className="text-gray-400 mb-8">
              We specialize in designing and manufacturing double folding machines and sheet metal processing equipment that meet the highest international standards. Every machine that leaves our facility represents our dedication to quality, innovation, and reliability.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-[#c9a227] pl-4">
                <div className="text-3xl font-bold text-[#c9a227]">25+</div>
                <div className="text-gray-400">Years of Excellence</div>
              </div>
              <div className="border-l-4 border-[#c9a227] pl-4">
                <div className="text-3xl font-bold text-[#c9a227]">500+</div>
                <div className="text-gray-400">Clients Worldwide</div>
              </div>
              <div className="border-l-4 border-[#c9a227] pl-4">
                <div className="text-3xl font-bold text-[#c9a227]">30+</div>
                <div className="text-gray-400">Countries Served</div>
              </div>
              <div className="border-l-4 border-[#c9a227] pl-4">
                <div className="text-3xl font-bold text-[#c9a227]">50+</div>
                <div className="text-gray-400">Expert Engineers</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#252542] to-[#1a1a2e] rounded-3xl p-8 border border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#2a2a4a] rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-[#c9a227]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="w-8 h-8 text-[#c9a227]" />
                  </div>
                  <div className="font-bold text-white">Manufacturing</div>
                  <div className="text-sm text-gray-400">State-of-the-art facility</div>
                </div>
                <div className="bg-[#2a2a4a] rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-[#c9a227]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-[#c9a227]" />
                  </div>
                  <div className="font-bold text-white">Quality</div>
                  <div className="text-sm text-gray-400">ISO certified processes</div>
                </div>
                <div className="bg-[#2a2a4a] rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-[#c9a227]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-[#c9a227]" />
                  </div>
                  <div className="font-bold text-white">Innovation</div>
                  <div className="text-sm text-gray-400">R&D focused team</div>
                </div>
                <div className="bg-[#2a2a4a] rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-[#c9a227]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-[#c9a227]" />
                  </div>
                  <div className="font-bold text-white">Support</div>
                  <div className="text-sm text-gray-400">Global service network</div>
                </div>
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
      setFormData({ name: '', email: '', company: '', phone: '', message: '', product: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-[#c9a227] font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a2e] mt-4 mb-6">
              Request a Quote Today
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Ready to upgrade your metalworking capabilities? Contact our team for product information, pricing, and technical specifications.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#c9a227]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1a1a2e]">Phone</div>
                  <div className="text-gray-600">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#c9a227]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1a1a2e]">Email</div>
                  <div className="text-gray-600">sales@artitectmachinery.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c9a227]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#c9a227]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1a1a2e]">Address</div>
                  <div className="text-gray-600">1234 Industrial Drive<br/>Manufacturing District, MD 56789</div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 p-6 bg-white rounded-xl border border-gray-100">
              <h3 className="font-semibold text-[#1a1a2e] mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Monday - Friday</span>
                  <span className="text-[#1a1a2e] font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Saturday</span>
                  <span className="text-[#1a1a2e] font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sunday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-[#1a1a2e] mb-6">Send Us a Message</h3>
            
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Thank you! We'll be in touch shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1a1a2e] mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a1a2e] mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1a1a2e] mb-1">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all"
                    placeholder="Your Company Ltd."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a1a2e] mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a1a2e] mb-1">Product Interest</label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all bg-white"
                >
                  <option value="">Select a product category</option>
                  <option value="double-folding">Double Folding Machine</option>
                  <option value="double-folder">Double Folder</option>
                  <option value="sheet-metal-folder">Sheet Metal Folder</option>
                  <option value="metal-folding">Metal Folding Machine</option>
                  <option value="other">Other / Multiple Products</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1a1a2e] mb-1">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-[#c9a227] hover:bg-[#e0b82d] disabled:bg-gray-300 text-[#1a1a2e] font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a227]/20 flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#1a1a2e]/30 border-t-[#1a1a2e] rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#c9a227] rounded-lg flex items-center justify-center">
                <span className="text-[#1a1a2e] font-bold text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-lg leading-tight tracking-tight">ARTITECT</span>
                <span className="text-[#c9a227] font-medium text-xs tracking-widest">MACHINERY</span>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Premium metalworking equipment manufacturer. Precision engineering for industrial excellence since 1998.
            </p>
            <div className="flex gap-4">
              {['linkedin', 'twitter', 'facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-[#c9a227] rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <div className="w-5 h-5 bg-gray-400 group-hover:bg-[#1a1a2e] rounded" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Products', 'Features', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-[#c9a227] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Metal Folding Machine'
              ].map((product) => (
                <li key={product}>
                  <a href="#products" className="text-gray-400 hover:text-[#c9a227] transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-[#c9a227] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-[#c9a227] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
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
