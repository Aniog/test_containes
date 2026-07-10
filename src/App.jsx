import React, { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Award, Users, Clock, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "Double Folding Machine",
    description: "Precision-engineered for high-volume production with dual folding capability.",
    specs: ["Max thickness: 4mm", "Working length: 3000mm", "Dual motor drive", "CNC control system"],
    category: "Production"
  },
  {
    id: 2,
    name: "Double Folder",
    description: "Compact yet powerful folding solution for medium-scale operations.",
    specs: ["Max thickness: 3mm", "Working length: 2500mm", "Manual & auto modes", "Quick setup"],
    category: "Workshop"
  },
  {
    id: 3,
    name: "Sheet Metal Folder",
    description: "Versatile folding machine designed for diverse sheet metal applications.",
    specs: ["Max thickness: 2.5mm", "Working length: 2000mm", "Adjustable angles", "Safety guards"],
    category: "General"
  },
  {
    id: 4,
    name: "Sheet Metal Folding Machine",
    description: "Heavy-duty folding system built for demanding industrial environments.",
    specs: ["Max thickness: 6mm", "Working length: 4000mm", "Hydraulic clamping", "Touchscreen HMI"],
    category: "Industrial"
  },
  {
    id: 5,
    name: "Metal Folder",
    description: "Reliable and efficient folding equipment for professional fabricators.",
    specs: ["Max thickness: 2mm", "Working length: 1500mm", "Foot pedal control", "Portable design"],
    category: "Workshop"
  },
  {
    id: 6,
    name: "Metal Folder Machine",
    description: "Advanced folding technology with precision control and repeatability.",
    specs: ["Max thickness: 3.5mm", "Working length: 3200mm", "Servo drive system", "Programmable stops"],
    category: "Production"
  },
  {
    id: 7,
    name: "Metal Folding Machine",
    description: "Premium folding solution combining power, precision, and ease of use.",
    specs: ["Max thickness: 5mm", "Working length: 3500mm", "Backgauge system", "Remote diagnostics"],
    category: "Industrial"
  }
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition - bodyRect - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-[#e8ebed] z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1a252f] rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-xl tracking-[2px] text-[#1a252f]">ARTITECT MACHINERY</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            <button onClick={() => scrollToSection('contact')} className="btn-primary">Request Quote</button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#e8ebed] bg-white px-6 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('products')} className="nav-link text-left py-2">Products</button>
            <button onClick={() => scrollToSection('about')} className="nav-link text-left py-2">About</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-left py-2">Contact</button>
            <button onClick={() => scrollToSection('contact')} className="btn-primary w-full">Request Quote</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center pt-20 px-6 bg-gradient-to-b from-[#f8f9fb] to-white">
        <div className="max-w-4xl text-center">
          <div className="inline-block px-4 py-1.5 bg-[#e8ebed] rounded-full text-sm font-medium text-[#4a5568] mb-6">
            EST. 1987
          </div>
          <h1 className="mb-6">Precision Sheet Metal<br />Folding Equipment</h1>
          <p className="text-xl text-[#4a5568] max-w-2xl mx-auto mb-10">
            Engineered for professionals who demand excellence. Discover our range of premium folding machines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('products')} className="btn-primary">
              Explore Products <ArrowRight className="ml-2" size={18} />
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary">
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-[#e8ebed] bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-[#4a5568]">
          <div className="flex items-center gap-2"><Award size={20} /> ISO 9001 Certified</div>
          <div className="flex items-center gap-2"><Users size={20} /> 2,500+ Clients Worldwide</div>
          <div className="flex items-center gap-2"><Clock size={20} /> 35+ Years Experience</div>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="section max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#2c5f7c] font-semibold tracking-widest text-sm">OUR RANGE</span>
          <h2 className="mt-3">Premium Folding Solutions</h2>
          <p className="mt-4 text-lg text-[#4a5568] max-w-2xl mx-auto">
            Each machine is crafted with precision engineering and built to deliver exceptional performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <div className="text-center px-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1a252f] flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">A</span>
                  </div>
                  <span className="text-sm font-medium text-[#4a5568]">{product.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3">{product.name}</h3>
                <p className="text-[#4a5568] mb-4">{product.description}</p>
                <ul className="space-y-1.5 mb-6 text-sm text-[#4a5568]">
                  {product.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#2c5f7c] mt-1">•</span> {spec}
                    </li>
                  ))}
                </ul>
                <button onClick={() => scrollToSection('contact')} className="btn-secondary w-full">
                  Request Information
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white border-y border-[#e8ebed]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#2c5f7c] font-semibold tracking-widest text-sm">OUR LEGACY</span>
              <h2 className="mt-3 mb-6">Crafting Excellence Since 1987</h2>
              <div className="space-y-4 text-[#4a5568]">
                <p>
                  For nearly four decades, ARTITECT MACHINERY has been at the forefront of sheet metal fabrication technology. Our commitment to precision, durability, and innovation has made us a trusted partner for fabricators worldwide.
                </p>
                <p>
                  Every machine we produce embodies our dedication to engineering excellence. From small workshops to large-scale industrial operations, our equipment delivers consistent, reliable performance.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card text-center">
                <div className="text-4xl font-bold text-[#1a252f] mb-2">35+</div>
                <div className="text-[#4a5568]">Years of Excellence</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-[#1a252f] mb-2">50</div>
                <div className="text-[#4a5568]">Countries Served</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-[#1a252f] mb-2">12</div>
                <div className="text-[#4a5568]">Product Lines</div>
              </div>
              <div className="card text-center">
                <div className="text-4xl font-bold text-[#1a252f] mb-2">98%</div>
                <div className="text-[#4a5568]">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#2c5f7c] font-semibold tracking-widest text-sm">WHY CHOOSE US</span>
          <h2 className="mt-3">Built for Professionals</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Award, title: "Precision Engineering", desc: "Every component machined to tolerances measured in microns." },
            { icon: Users, title: "Expert Support", desc: "Dedicated technical team available for installation and training." },
            { icon: Clock, title: "Proven Reliability", desc: "Machines designed for decades of continuous operation." }
          ].map((feature, idx) => (
            <div key={idx} className="card text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#e8ebed] flex items-center justify-center">
                <feature.icon size={28} className="text-[#2c5f7c]" />
              </div>
              <h3 className="mb-3">{feature.title}</h3>
              <p className="text-[#4a5568]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-[#1a252f] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#e8ebed] font-semibold tracking-widest text-sm">GET IN TOUCH</span>
            <h2 className="mt-3 text-white">Let's Discuss Your Requirements</h2>
            <p className="mt-4 text-lg text-[#e8ebed]">Our specialists are ready to help you find the perfect solution.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex gap-4">
                <Phone className="text-[#2c5f7c] flex-shrink-0 mt-1" size={20} />
                <div>
                  <div className="font-medium mb-1">Phone</div>
                  <a href="tel:+18005551234" className="text-[#e8ebed]">+1 (800) 555-1234</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-[#2c5f7c] flex-shrink-0 mt-1" size={20} />
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <a href="mailto:sales@artitectmachinery.com" className="text-[#e8ebed]">sales@artitectmachinery.com</a>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="text-[#2c5f7c] flex-shrink-0 mt-1" size={20} />
                <div>
                  <div className="font-medium mb-1">Headquarters</div>
                  <div className="text-[#e8ebed]">1240 Industrial Parkway<br />Cleveland, OH 44114, USA</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project or requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <button type="submit" className="btn-primary w-full" disabled={formSubmitted}>
                  {formSubmitted ? 'Thank you! We will contact you soon.' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f161d] text-[#e8ebed] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Warranty</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
