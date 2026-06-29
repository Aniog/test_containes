import { useState, useEffect, useRef } from 'react'
import {
  Menu,
  X,
  ChevronDown,
  Settings,
  Zap,
  Shield,
  Award,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Gauge,
  Wrench,
  Cpu
} from 'lucide-react'
import './App.css'

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
    { label: 'Products', href: '#products' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#1a1f2e] shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <div className="w-10 h-10 bg-gradient-to-br from-[#c4a052] to-[#a8853a] rounded flex items-center justify-center">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-bold text-lg tracking-wide" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              ARTITECT<span className="text-[#c4a052]">MACHINERY</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-white/90 hover:text-[#c4a052] transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-5 py-2.5 rounded text-sm font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[#1a1f2e] border-t border-white/10 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left text-white/90 hover:text-[#c4a052] py-2 text-base"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#contact')}
            className="w-full bg-[#3b82f6] text-white py-3 rounded font-semibold mt-2"
          >
            Get Quote
          </button>
        </div>
      </div>
    </nav>
  )
}

// Hero Section
const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center bg-[#0d1117] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #c4a052 1px, transparent 1px), linear-gradient(-45deg, #c4a052 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#1a1f2e] to-[#0d1117]" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#c4a052]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-[#c4a052] rounded-full animate-pulse" />
            <span className="text-white/70 text-sm">Precision Engineering Since 1995</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Precision Sheet Metal
            <span className="block text-[#c4a052]">Folding Solutions</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up animate-delay-200 text-lg text-white/70 mb-10 max-w-xl leading-relaxed">
            Industry-leading double folding machines engineered for accuracy, durability, and performance. 
            Trusted by manufacturers worldwide for precision metal fabrication.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up animate-delay-300 flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('#products')}
              className="inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-4 rounded font-semibold transition-all hover:shadow-xl hover:shadow-blue-500/25 group"
            >
              View Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-[#c4a052] text-white px-8 py-4 rounded font-semibold transition-all hover:bg-white/5"
            >
              Contact Us
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-in-up animate-delay-400 mt-16 pt-8 border-t border-white/10">
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: '500+', label: 'Machines Delivered' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '25+', label: 'Years Experience' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl sm:text-3xl font-bold text-[#c4a052]">{stat.value}</div>
                  <div className="text-sm text-white/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/30" />
      </div>
    </section>
  )
}

// Products Section
const Products = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const products = [
    {
      icon: Settings,
      title: 'Double Folding Machine',
      description: 'High-precision dual-beam folding for complex sheet metal fabrication with superior accuracy and repeatability.',
      features: ['CNC Control', 'Auto-Back Gauge', 'Multi-axis Bending']
    },
    {
      icon: Gauge,
      title: 'Sheet Metal Folder',
      description: 'Versatile folding solutions for various metal thicknesses and profiles, ideal for medium to high-volume production.',
      features: ['Variable Speed', 'Quick Changeover', 'Robust Frame']
    },
    {
      icon: Cpu,
      title: 'CNC Folding Machine',
      description: 'Computer-controlled precision folding with programming capabilities for complex part geometries.',
      features: ['Touch Screen HMI', '3D Simulation', 'Auto Sequence']
    },
    {
      icon: Wrench,
      title: 'Metal Folder Machine',
      description: 'Industrial-grade folding equipment built for continuous operation in demanding manufacturing environments.',
      features: ['Heavy Duty Build', 'Low Maintenance', 'Energy Efficient']
    },
  ]

  return (
    <section id="products" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="reveal text-[#c4a052] font-semibold text-sm tracking-wider uppercase">Our Products</span>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-[#1a1f2e] mt-4 mb-6">
            Precision-Engineered Folding Solutions
          </h2>
          <p className="reveal text-[#64748b] text-lg">
            From compact workshop folders to heavy industrial CNC machines, we offer a complete range of sheet metal folding equipment.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="reveal group bg-[#f8f9fb] rounded-xl p-6 border border-transparent hover:border-[#c4a052]/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#1a1f2e] to-[#2d3548] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <product.icon className="w-7 h-7 text-[#c4a052]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1f2e] mb-3">{product.title}</h3>
              <p className="text-[#64748b] text-sm mb-4 leading-relaxed">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#64748b]">
                    <CheckCircle className="w-4 h-4 text-[#c4a052] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Features Section
const Features = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Zap,
      title: 'High-Speed Operation',
      description: 'Advanced servo systems deliver rapid cycle times without compromising precision, maximizing your production output.'
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Heavy-duty welded steel frames and premium components ensure decades of reliable service in industrial environments.'
    },
    {
      icon: Settings,
      title: 'Easy Operation',
      description: 'Intuitive touchscreen interfaces and user-friendly controls minimize training time and operator errors.'
    },
    {
      icon: Award,
      title: 'Precision Accuracy',
      description: 'Tight tolerances and superior build quality deliver consistent, accurate bends within 0.1mm specification.'
    },
  ]

  return (
    <section id="features" ref={sectionRef} className="py-20 lg:py-32 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="reveal text-[#c4a052] font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
            <h2 className="reveal text-3xl sm:text-4xl font-bold text-[#1a1f2e] mt-4 mb-6">
              Engineering Excellence in Every Machine
            </h2>
            <p className="reveal text-[#64748b] text-lg mb-10">
              Our folding machines combine decades of engineering expertise with cutting-edge technology to deliver equipment that exceeds industry standards.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="reveal flex gap-5"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-[#1a1f2e] rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#c4a052]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1a1f2e] mb-1">{feature.title}</h3>
                    <p className="text-[#64748b] text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="reveal relative">
            <div className="aspect-square bg-gradient-to-br from-[#1a1f2e] to-[#2d3548] rounded-2xl p-8 lg:p-12">
              {/* Machine Illustration */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-full max-w-sm">
                  {/* Abstract Machine Representation */}
                  <div className="bg-[#0d1117] rounded-xl p-6 border border-[#c4a052]/20">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-[#c4a052] text-sm font-medium">System Active</span>
                      </div>
                      <span className="text-white/50 text-sm">v3.2.1</span>
                    </div>
                    <div className="space-y-4">
                      {[
                        { label: 'Bending Angle', value: '90.0°' },
                        { label: 'Material Thickness', value: '3.0 mm' },
                        { label: 'Cycle Time', value: '2.4 s' },
                      ].map((metric, i) => (
                        <div key={i} className="flex justify-between items-center">
                          <span className="text-white/60 text-sm">{metric.label}</span>
                          <span className="text-[#c4a052] font-mono font-semibold">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 h-2 bg-[#1a1f2e] rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-[#c4a052] to-[#a8853a] rounded-full" />
                    </div>
                    <div className="mt-2 text-center text-white/40 text-xs">Production Efficiency</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c4a052]/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

// About Section
const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Users, value: '500+', label: 'Clients Worldwide' },
    { icon: Settings, value: '25+', label: 'Years Experience' },
    { icon: Clock, value: '98%', label: 'Uptime Guarantee' },
    { icon: Award, value: '15+', label: 'Industry Awards' },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-[#1a1f2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="reveal text-[#c4a052] font-semibold text-sm tracking-wider uppercase">About Artitect</span>
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-white mt-4 mb-6">
            Precision Machinery Backed by Experience
          </h2>
          <p className="reveal text-white/60 text-lg">
            Since 1995, Artitect Machinery has been at the forefront of sheet metal folding technology. 
            Our commitment to quality, innovation, and customer success has made us a trusted partner 
            for manufacturers across industries worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="reveal text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#c4a052]/30 transition-all"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-[#c4a052]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-[#c4a052]" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-[#c4a052] mb-2">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
const Contact = () => {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus('success')
    setFormData({ name: '', email: '', company: '', message: '' })

    setTimeout(() => setSubmitStatus(null), 5000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="reveal text-[#c4a052] font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
            <h2 className="reveal text-3xl sm:text-4xl font-bold text-[#1a1f2e] mt-4 mb-6">
              Ready to Upgrade Your Production?
            </h2>
            <p className="reveal text-[#64748b] text-lg mb-10">
              Contact our team for expert consultation on choosing the right folding machine for your needs. 
              We provide comprehensive support from selection to installation.
            </p>

            <div className="reveal space-y-6">
              {[
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                { icon: Mail, label: 'Email', value: 'sales@artitectmachinery.com' },
                { icon: MapPin, label: 'Address', value: '1234 Industrial Park Drive, Manufacturing City, MC 12345' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f8f9fb] rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#c4a052]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#64748b]">{item.label}</div>
                    <div className="text-[#1a1f2e] font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="bg-[#f8f9fb] rounded-2xl p-8">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1a1f2e] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-transparent'} bg-white focus:border-[#3b82f6] focus:ring-2 focus:ring-blue-500/20 outline-none transition-all`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1a1f2e] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-transparent'} bg-white focus:border-[#3b82f6] focus:ring-2 focus:ring-blue-500/20 outline-none transition-all`}
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="company" className="block text-sm font-medium text-[#1a1f2e] mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-transparent bg-white focus:border-[#3b82f6] focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  placeholder="Your company name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-[#1a1f2e] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-transparent'} bg-white focus:border-[#3b82f6] focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none`}
                  placeholder="Tell us about your requirements..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#3b82f6] hover:bg-[#2563eb] disabled:bg-blue-400 text-white py-4 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 text-sm">Thank you! We'll be in touch within 24 hours.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#0d1117] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c4a052] to-[#a8853a] rounded flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                ARTITECT<span className="text-[#c4a052]">MACHINERY</span>
              </span>
            </div>
            <p className="text-white/50 text-sm max-w-md leading-relaxed">
              Leading manufacturer of precision sheet metal folding machines. Quality engineering 
              for industries worldwide since 1995.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Products', 'Features', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                    className="text-white/50 hover:text-[#c4a052] text-sm transition-colors"
                  >
                    {link}
                  </button>
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
                'Sheet Metal Folder',
                'CNC Folding Machine',
                'Metal Folder Machine',
              ].map((product) => (
                <li key={product}>
                  <span className="text-white/50 text-sm">{product}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-[#c4a052] text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-[#c4a052] text-sm transition-colors">Terms of Service</a>
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
      <Hero />
      <Products />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
