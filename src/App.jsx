import React, { useState } from 'react'
import { Menu, X, ChevronRight, Award, Shield, Clock, Users, Phone, Mail, MapPin } from 'lucide-react'
import './App.css'

const products = [
  {
    id: 1,
    name: "Double Folding Machine",
    category: "Premium Series",
    description: "Our flagship double folding machine delivers unmatched precision for high-volume production. Features synchronized dual folding beams for perfect parallel bends every time.",
    specs: ["Max Sheet Width: 3200mm", "Folding Capacity: 2.0mm Steel", "Dual Beam System", "CNC Control"],
    icon: "⚙️"
  },
  {
    id: 2,
    name: "Double Folder",
    category: "Industrial Series",
    description: "Versatile double folder designed for demanding industrial applications. Combines power and precision in a compact footprint for maximum workshop efficiency.",
    specs: ["Max Sheet Width: 2500mm", "Folding Capacity: 1.5mm Steel", "Heavy-Duty Frame", "Manual & Motorized Options"],
    icon: "🔧"
  },
  {
    id: 3,
    name: "Sheet Metal Folder",
    category: "Professional Series",
    description: "Precision-engineered sheet metal folder ideal for fabrication shops and metalworking professionals. Delivers clean, accurate bends across a wide range of materials.",
    specs: ["Max Sheet Width: 2000mm", "Folding Capacity: 1.2mm Steel", "Adjustable Back Gauge", "Quick-Change Tooling"],
    icon: "📐"
  },
  {
    id: 4,
    name: "Sheet Metal Folding Machine",
    category: "Standard Series",
    description: "Reliable sheet metal folding machine built for consistent daily use. Perfect balance of performance and value for growing fabrication businesses.",
    specs: ["Max Sheet Width: 1500mm", "Folding Capacity: 1.0mm Steel", "Foot Pedal Operation", "Compact Design"],
    icon: "🛠️"
  },
  {
    id: 5,
    name: "Metal Folder",
    category: "Workshop Series",
    description: "Compact yet powerful metal folder designed for smaller workshops and specialized applications. Exceptional build quality in a space-saving package.",
    specs: ["Max Sheet Width: 1200mm", "Folding Capacity: 0.8mm Steel", "Lightweight Construction", "Portable Design"],
    icon: "🔩"
  },
  {
    id: 6,
    name: "Metal Folder Machine",
    category: "Entry Series",
    description: "Professional-grade metal folder machine offering excellent value for entry-level and mid-range production needs. Built to ARTITECT's exacting standards.",
    specs: ["Max Sheet Width: 1000mm", "Folding Capacity: 0.6mm Steel", "Simple Controls", "Low Maintenance"],
    icon: "⚡"
  },
  {
    id: 7,
    name: "Metal Folding Machine",
    category: "Universal Series",
    description: "Our most adaptable metal folding machine, engineered for versatility across multiple industries. Handles everything from HVAC components to architectural panels.",
    specs: ["Max Sheet Width: 2800mm", "Folding Capacity: 1.8mm Steel", "Multi-Angle Capability", "Extended Warranty"],
    icon: "🏭"
  }
]

const features = [
  {
    icon: Award,
    title: "Precision Engineering",
    description: "Every machine is crafted with micron-level accuracy, ensuring consistent, high-quality bends across thousands of cycles."
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Heavy-duty steel construction and premium components deliver decades of reliable service in demanding industrial environments."
  },
  {
    icon: Clock,
    title: "Fast Setup & Operation",
    description: "Intuitive controls and quick-change tooling mean your team spends more time producing and less time adjusting."
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Our technical team provides comprehensive training, installation support, and responsive after-sales service worldwide."
  }
]

const stats = [
  { number: "35+", label: "Years of Excellence" },
  { number: "1200+", label: "Machines Installed" },
  { number: "45", label: "Countries Served" },
  { number: "99.2%", label: "Customer Satisfaction" }
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition - bodyRect - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 800))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      product: '',
      message: ''
    })

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false)
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-[#f8f6f3]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-9 h-9 bg-[#1a252f] rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl tracking-tighter">AM</span>
              </div>
              <div>
                <div className="font-semibold text-xl tracking-tight text-[#1a252f]">ARTITECT</div>
                <div className="text-[10px] text-[#6b7280] -mt-1.5 tracking-[2px]">MACHINERY</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
              <button onClick={() => scrollToSection('features')} className="nav-link">Why ARTITECT</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">About Us</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </div>

            <div className="hidden md:block">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary btn-sm"
              >
                Request Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#1a252f]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mobile-menu bg-white border-t border-[#e5e0d8]">
            <div className="px-6 py-6 flex flex-col gap-4">
              <button onClick={() => scrollToSection('products')} className="text-left py-2 text-[#1f2937]">Products</button>
              <button onClick={() => scrollToSection('features')} className="text-left py-2 text-[#1f2937]">Why ARTITECT</button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 text-[#1f2937]">About Us</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-[#1f2937]">Contact</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary mt-2 w-full"
              >
                Request Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 bg-[#1a252f] text-white">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm tracking-[2px] mb-6">
              EST. 1991
            </div>
            <h1 className="text-white mb-6 leading-[1.05]">
              Precision Sheet Metal<br />Folding Machines
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10 leading-relaxed">
              Engineered for accuracy. Built for durability. Trusted by fabricators worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('products')}
                className="btn btn-accent text-base"
              >
                Explore Our Machines <ChevronRight className="ml-2" size={18} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn-outline border-white text-white hover:bg-white hover:text-[#1a252f] text-base"
              >
                Speak with an Engineer
              </button>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="border-t border-white/10 bg-black/20">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-12 gap-y-4 text-sm text-white/60 tracking-widest">
              <div>ISO 9001 CERTIFIED</div>
              <div>CE MARKED</div>
              <div>5-YEAR WARRANTY</div>
              <div>24/7 TECHNICAL SUPPORT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-[#e5e0d8] bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-[#b8976e] text-sm tracking-[3px] font-medium mb-3">OUR RANGE</div>
          <h2>Precision Folding Solutions</h2>
          <p className="mt-4 text-[#6b7280] max-w-2xl mx-auto text-lg">
            From compact workshop folders to heavy-duty industrial folding machines, 
            we manufacture equipment for every scale of operation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card flex flex-col">
              <div className="product-card-image">
                <div className="text-center">
                  <div className="text-5xl mb-3 opacity-40">{product.icon}</div>
                  <div className="text-xs tracking-[2px] text-[#6b7280] font-medium">{product.category}</div>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="mb-3">{product.name}</h3>
                <p className="text-[#6b7280] text-[15px] mb-6 flex-1 leading-relaxed">
                  {product.description}
                </p>
                <div className="space-y-2 mb-6">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <ChevronRight size={16} className="mt-0.5 text-[#b8976e] flex-shrink-0" />
                      <span className="text-[#4b5563]">{spec}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn btn-outline w-full"
                >
                  Request Information
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-white border-y border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#b8976e] text-sm tracking-[3px] font-medium mb-3">THE ARTITECT DIFFERENCE</div>
              <h2 className="mb-6">Why Leading Fabricators Choose ARTITECT</h2>
              <p className="text-lg text-[#6b7280] leading-relaxed">
                For over three decades, we've refined every detail of our folding machines. 
                The result is equipment that delivers exceptional performance day after day, 
                year after year.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="feature-card">
                    <div className="w-12 h-12 rounded-full bg-[#f8f6f3] flex items-center justify-center mb-5">
                      <Icon size={22} className="text-[#b8976e]" />
                    </div>
                    <h3 className="mb-3 text-lg">{feature.title}</h3>
                    <p className="text-[#6b7280] text-[15px] leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#b8976e] text-sm tracking-[3px] font-medium mb-3">OUR HERITAGE</div>
          <h2 className="mb-6">Craftsmanship Meets Innovation</h2>
          <div className="space-y-5 text-lg text-[#6b7280] leading-relaxed">
            <p>
              Founded in 1991, ARTITECT MACHINERY began with a simple mission: to build folding machines 
              that fabricators could rely on without compromise. Today, that commitment continues in every 
              machine we produce.
            </p>
            <p>
              Our engineering team combines decades of hands-on fabrication experience with modern 
              manufacturing techniques. Each machine is assembled by skilled technicians who take pride 
              in their work, and rigorously tested before it leaves our facility.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-[#e5e0d8] grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-4">🇩🇪</div>
            <h4 className="font-semibold mb-2">German Engineering</h4>
            <p className="text-sm text-[#6b7280]">Precision components sourced from leading European manufacturers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🏭</div>
            <h4 className="font-semibold mb-2">In-House Production</h4>
            <p className="text-sm text-[#6b7280]">Complete control over quality from raw materials to final assembly</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h4 className="font-semibold mb-2">Global Network</h4>
            <p className="text-sm text-[#6b7280]">Authorized service partners in 45 countries for local support</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white border-t border-[#e5e0d8]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="text-[#b8976e] text-sm tracking-[3px] font-medium mb-3">GET IN TOUCH</div>
              <h2 className="mb-6">Let's Discuss Your Project</h2>
              <p className="text-[#6b7280] mb-10 leading-relaxed">
                Whether you're looking for a specific machine or need guidance selecting the right 
                equipment for your application, our team is ready to help.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f8f6f3] flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-[#b8976e]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#6b7280]">Call Us</div>
                    <a href="tel:+493012345678" className="font-medium">+49 30 123 456 78</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f8f6f3] flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[#b8976e]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#6b7280]">Email Us</div>
                    <a href="mailto:sales@artitect-machinery.com" className="font-medium">sales@artitect-machinery.com</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f8f6f3] flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#b8976e]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#6b7280]">Headquarters</div>
                    <div className="font-medium">Industriestraße 45<br />12345 Berlin, Germany</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitSuccess ? (
                <div className="success-message">
                  <strong>Thank you for your inquiry.</strong> Our sales team will contact you within 24 hours.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label" htmlFor="company">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="+49 123 456 789"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="product">Product of Interest</label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Select a machine type...</option>
                      {products.map(p => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="form-input resize-y min-h-[120px]"
                      placeholder="Tell us about your project requirements, material types, production volume, or any specific questions..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn btn-primary w-full sm:w-auto px-10 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                  <p className="text-xs text-[#6b7280]">We typically respond within one business day.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a252f] text-white/70 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg tracking-tighter">AM</span>
              </div>
              <div>
                <div className="font-semibold text-white tracking-tight">ARTITECT MACHINERY</div>
                <div className="text-[10px] text-white/40 -mt-1 tracking-[2px]">PRECISION SINCE 1991</div>
              </div>
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()} ARTITECT Machinery GmbH. All rights reserved.
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row gap-y-2 justify-between text-sm">
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Warranty Information</a>
            </div>
            <div className="text-white/50">
              Berlin, Germany
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
