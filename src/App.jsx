import React, { useState } from 'react'
import { Menu, X, ChevronRight, Award, Shield, Clock, Users, Phone, Mail, MapPin } from 'lucide-react'
import './App.css'

const products = [
  {
    id: 1,
    name: "Double Folding Machine",
    category: "Premium Series",
    description: "Our flagship double folding machine delivers unmatched precision for high-volume production. Features synchronized dual folding beams for perfect parallel bends every time.",
    specs: ["Max Sheet Width: 3200mm", "Folding Capacity: 2.0mm Steel", "Dual Beam System", "CNC Control Panel"],
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Double Folder",
    category: "Professional Series",
    description: "Engineered for versatility, the Double Folder combines power and precision. Ideal for workshops requiring consistent, high-quality folds across various material thicknesses.",
    specs: ["Max Sheet Width: 2500mm", "Folding Capacity: 1.5mm Steel", "Manual & Motorized Options", "Adjustable Back Gauge"],
    badge: "Versatile"
  },
  {
    id: 3,
    name: "Sheet Metal Folder",
    category: "Standard Series",
    description: "A reliable workhorse for everyday sheet metal folding. Built with robust construction and intuitive controls, perfect for small to medium fabrication shops.",
    specs: ["Max Sheet Width: 2000mm", "Folding Capacity: 1.2mm Steel", "Heavy-Duty Frame", "Easy Operation"],
    badge: "Reliable"
  },
  {
    id: 4,
    name: "Sheet Metal Folding Machine",
    category: "Industrial Series",
    description: "Heavy-duty folding machine designed for demanding industrial applications. Delivers exceptional accuracy and repeatability for complex fabrication projects.",
    specs: ["Max Sheet Width: 4000mm", "Folding Capacity: 3.0mm Steel", "Hydraulic Drive System", "Digital Angle Display"],
    badge: "Heavy Duty"
  },
  {
    id: 5,
    name: "Metal Folder",
    category: "Compact Series",
    description: "Space-efficient metal folder that doesn't compromise on capability. Perfect for workshops with limited floor space but high standards for quality.",
    specs: ["Max Sheet Width: 1500mm", "Folding Capacity: 1.0mm Steel", "Compact Footprint", "Quick Setup"],
    badge: "Compact"
  },
  {
    id: 6,
    name: "Metal Folder Machine",
    category: "Professional Series",
    description: "Precision-engineered for professional fabricators. Offers superior control and consistent results across a wide range of metal types and thicknesses.",
    specs: ["Max Sheet Width: 2200mm", "Folding Capacity: 1.5mm Steel", "Precision Back Gauge", "Safety Guards"],
    badge: "Professional"
  },
  {
    id: 7,
    name: "Metal Folding Machine",
    category: "Premium Series",
    description: "Our most advanced metal folding machine featuring state-of-the-art controls and exceptional build quality. Designed for manufacturers who demand the best.",
    specs: ["Max Sheet Width: 3000mm", "Folding Capacity: 2.5mm Steel", "Touchscreen Interface", "Programmable Sequences"],
    badge: "Advanced"
  }
]

const features = [
  {
    icon: Award,
    title: "Precision Engineering",
    description: "Every machine is crafted with micron-level accuracy, ensuring consistent, high-quality bends across all production runs."
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Heavy-duty construction using premium materials. Our machines are designed for decades of reliable service in demanding environments."
  },
  {
    icon: Clock,
    title: "Efficient Operation",
    description: "Intuitive controls and fast setup times mean your team can focus on production, not troubleshooting."
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Our technical team provides comprehensive training, installation support, and responsive after-sales service."
  }
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

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

  const openProductModal = (product) => {
    setSelectedProduct(product)
    document.body.style.overflow = 'hidden'
  }

  const closeProductModal = () => {
    setSelectedProduct(null)
    document.body.style.overflow = 'unset'
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      })
      setTimeout(() => {
        setFormSubmitted(false)
      }, 3000)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-navy rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xl tracking-tighter">AM</span>
                </div>
                <div>
                  <div className="font-semibold text-xl tracking-tight text-navy">ARTITECT</div>
                  <div className="text-[10px] text-warm-gray -mt-1 tracking-[2px]">MACHINERY</div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
              <button onClick={() => scrollToSection('features')} className="nav-link">Why Artitect</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">About Us</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </div>

            <div className="hidden md:block">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary text-sm"
              >
                Request Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-navy"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-6 py-6 flex flex-col gap-4">
              <button onClick={() => scrollToSection('products')} className="text-left py-2 text-slate">Products</button>
              <button onClick={() => scrollToSection('features')} className="text-left py-2 text-slate">Why Artitect</button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 text-slate">About Us</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-slate">Contact</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary w-full mt-2"
              >
                Request Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-white/10 rounded text-sm tracking-widest mb-6">
              EST. 1987
            </div>
            <h1 className="text-white mb-6 leading-none">
              Precision.<br />Reliability.<br />Craftsmanship.
            </h1>
            <p className="text-xl text-white/70 mb-10 max-w-xl">
              Premium sheet metal folding machines engineered for professionals who demand excellence in every bend.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('products')}
                className="btn btn-gold text-base"
              >
                Explore Machines
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary border-white text-white hover:bg-white hover:text-navy text-base"
              >
                Speak with an Expert
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-x-12 gap-y-2 text-sm text-white/60">
            <span>Trusted by 2,400+ fabricators</span>
            <span>7-year warranty standard</span>
            <span>Global service network</span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-gold text-sm tracking-[3px] font-medium mb-3">OUR MACHINES</div>
          <h2>Professional Sheet Metal Folding Solutions</h2>
          <p className="mt-4 text-lg text-slate max-w-2xl mx-auto">
            From compact workshops to industrial production lines, we offer a complete range of precision folding machines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card cursor-pointer"
              onClick={() => openProductModal(product)}
            >
              <div className="product-image bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center">
                    <Award className="w-8 h-8 text-navy" />
                  </div>
                  <div className="text-xs tracking-widest text-slate/60 font-medium">ARTITECT MACHINERY</div>
                </div>
                {product.badge && (
                  <div className="product-badge">{product.badge}</div>
                )}
              </div>
              <div className="p-6">
                <div className="text-xs text-gold tracking-widest font-medium mb-1">{product.category}</div>
                <h3 className="text-xl mb-3">{product.name}</h3>
                <p className="text-sm text-slate line-clamp-3 mb-4">{product.description}</p>
                <div className="flex items-center text-sm text-navy font-medium">
                  View Specifications <ChevronRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn btn-secondary"
          >
            Request a Custom Quote
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-gold text-sm tracking-[3px] font-medium mb-3">THE ARTITECT DIFFERENCE</div>
              <h2 className="mb-6">Built for professionals.<br />Designed for results.</h2>
              <p className="text-lg text-slate mb-8">
                Every Artitect machine embodies decades of engineering expertise. We don't just manufacture equipment — we craft tools that empower fabricators to achieve their best work.
              </p>
              <button 
                onClick={() => scrollToSection('about')}
                className="btn btn-primary"
              >
                Learn Our Story
              </button>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="card p-6">
                    <div className="feature-icon mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate">{feature.description}</p>
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
          <div className="text-gold text-sm tracking-[3px] font-medium mb-3">OUR HERITAGE</div>
          <h2 className="mb-6">Three decades of precision craftsmanship</h2>
          <div className="space-y-6 text-lg text-slate">
            <p>
              Founded in 1987, Artitect Machinery began with a simple mission: to build folding machines that professionals could rely on day after day, year after year.
            </p>
            <p>
              Today, our machines are trusted by fabricators across 47 countries. From aerospace components to architectural metalwork, Artitect equipment helps create the structures and products that shape our world.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-semibold text-navy mb-2">2,400+</div>
            <div className="text-sm tracking-widest text-warm-gray">MACHINES INSTALLED</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-semibold text-navy mb-2">47</div>
            <div className="text-sm tracking-widest text-warm-gray">COUNTRIES SERVED</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-semibold text-navy mb-2">99.2%</div>
            <div className="text-sm tracking-widest text-warm-gray">CUSTOMER SATISFACTION</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="text-gold text-sm tracking-[3px] font-medium mb-3">GET IN TOUCH</div>
              <h2 className="text-white mb-6">Let's discuss your next project</h2>
              <p className="text-white/70 text-lg mb-10">
                Our specialists are ready to help you find the perfect folding solution for your needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 mt-1 text-gold" />
                  <div>
                    <div className="text-sm text-white/60">Call us</div>
                    <a href="tel:+18005551234" className="text-white hover:text-gold">+1 (800) 555-1234</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 mt-1 text-gold" />
                  <div>
                    <div className="text-sm text-white/60">Email us</div>
                    <a href="mailto:sales@artitectmachinery.com" className="text-white hover:text-gold">sales@artitectmachinery.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1 text-gold" />
                  <div>
                    <div className="text-sm text-white/60">Visit our showroom</div>
                    <div className="text-white">1240 Industrial Parkway, Cleveland, OH 44114</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 text-charcoal">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl mb-2">Thank you</h3>
                  <p className="text-slate">We've received your inquiry and will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-xl mb-6 text-navy">Request Information</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-slate">Full Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                        className="form-input" 
                        placeholder="John Smith" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-slate">Company</label>
                      <input 
                        type="text" 
                        name="company" 
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="Your Company" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-slate">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                        className="form-input" 
                        placeholder="you@company.com" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-slate">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input" 
                        placeholder="(555) 123-4567" 
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-1.5 text-slate">Tell us about your project</label>
                    <textarea 
                      name="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4} 
                      className="form-input resize-y min-h-[100px]" 
                      placeholder="I'm interested in a folding machine for..."
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    Submit Inquiry
                  </button>
                  <p className="text-xs text-center text-warm-gray mt-4">
                    We typically respond within one business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white/60 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>© {new Date().getFullYear()} Artitect Machinery. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Warranty</a>
            </div>
            <div>Precision since 1987</div>
          </div>
        </div>
      </footer>

      {/* Product Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4"
          onClick={closeProductModal}
        >
          <div 
            className="modal bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-gold text-sm tracking-[2px] font-medium mb-1">{selectedProduct.category}</div>
                  <h2 className="text-3xl">{selectedProduct.name}</h2>
                </div>
                <button 
                  onClick={closeProductModal}
                  className="text-slate hover:text-navy p-1"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="h-px bg-light-gray my-6" />

              <p className="text-lg text-slate mb-8">{selectedProduct.description}</p>

              <div className="mb-8">
                <h4 className="font-semibold mb-4 text-navy">Technical Specifications</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {selectedProduct.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    closeProductModal()
                    scrollToSection('contact')
                  }}
                  className="btn btn-primary flex-1"
                >
                  Request Quote for This Model
                </button>
                <button 
                  onClick={closeProductModal}
                  className="btn btn-secondary flex-1"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
