import React, { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Award, Users, Clock, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "Double Folding Machine",
    description: "Precision-engineered for high-volume production with dual folding capability.",
    specs: ["Max sheet width: 3200mm", "Folding capacity: 2.0mm", "Dual motor system", "CNC control"],
    category: "Industrial"
  },
  {
    id: 2,
    name: "Double Folder",
    description: "Compact and efficient solution for medium-scale metal fabrication workshops.",
    specs: ["Max sheet width: 2500mm", "Folding capacity: 1.5mm", "Manual & auto modes", "Easy setup"],
    category: "Workshop"
  },
  {
    id: 3,
    name: "Sheet Metal Folder",
    description: "Versatile folding system designed for precision sheet metal work.",
    specs: ["Max sheet width: 2000mm", "Folding capacity: 1.2mm", "Adjustable angles", "Safety guards"],
    category: "Precision"
  },
  {
    id: 4,
    name: "Sheet Metal Folding Machine",
    description: "Heavy-duty folding machine built for demanding industrial applications.",
    specs: ["Max sheet width: 4000mm", "Folding capacity: 3.0mm", "Hydraulic drive", "Touchscreen interface"],
    category: "Industrial"
  },
  {
    id: 5,
    name: "Metal Folder",
    description: "Reliable and cost-effective metal folding solution for growing businesses.",
    specs: ["Max sheet width: 1500mm", "Folding capacity: 1.0mm", "Foot pedal control", "Compact design"],
    category: "Workshop"
  },
  {
    id: 6,
    name: "Metal Folder Machine",
    description: "Advanced folding technology with automated features for consistent results.",
    specs: ["Max sheet width: 3000mm", "Folding capacity: 2.5mm", "Programmable stops", "Digital readout"],
    category: "Precision"
  },
  {
    id: 7,
    name: "Metal Folding Machine",
    description: "Professional-grade folding machine engineered for accuracy and durability.",
    specs: ["Max sheet width: 3500mm", "Folding capacity: 2.0mm", "Back gauge system", "LED lighting"],
    category: "Industrial"
  }
]

const features = [
  { icon: Award, title: "Precision Engineering", description: "Every machine is crafted with meticulous attention to detail for unmatched accuracy." },
  { icon: Users, title: "Expert Support", description: "Our dedicated team provides comprehensive training and ongoing technical assistance." },
  { icon: Clock, title: "Reliable Performance", description: "Built to last with premium components and rigorous quality testing." }
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
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setFormSubmitted(false), 3000)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1a252f] rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <div className="font-bold text-xl text-[#1a252f]">ARTITECT</div>
                <div className="text-[10px] text-gray-500 -mt-1">MACHINERY</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('products')} className="nav-link text-sm">Products</button>
              <button onClick={() => scrollToSection('about')} className="nav-link text-sm">About</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link text-sm">Contact</button>
              <button onClick={() => scrollToSection('contact')} className="btn-primary text-sm">Request Quote</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('products')} className="text-left py-2 text-sm">Products</button>
                <button onClick={() => scrollToSection('about')} className="text-left py-2 text-sm">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-sm">Contact</button>
                <button onClick={() => scrollToSection('contact')} className="btn-primary text-sm w-full">Request Quote</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 bg-[#1a252f] text-white">
        <div className="max-w-5xl mx-auto text-center pt-16 pb-8">
          <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm mb-6">
            Est. 1987 • Precision Manufacturing
          </div>
          <h1 className="text-white mb-6">
            Precision Sheet Metal<br />Folding Solutions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Engineered for excellence. Built for professionals who demand reliability, 
            accuracy, and superior craftsmanship in every fold.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('products')} className="btn-accent">
              Explore Our Machines <ArrowRight className="ml-2" size={18} />
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary border-white text-white hover:bg-white hover:text-[#1a252f]">
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-b border-gray-200 py-6 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-sm text-gray-500">
          <div>Trusted by 2,500+ workshops</div>
          <div>50+ countries served</div>
          <div>ISO 9001:2015 Certified</div>
          <div>5-Year Warranty</div>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="section max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-[#c5a46e] font-semibold text-sm tracking-[3px] mb-3">OUR RANGE</div>
          <h2>Premium Folding Machines</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our comprehensive selection of sheet metal folding equipment, 
            designed to meet the diverse needs of modern fabrication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="product-card p-8 flex flex-col">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
                  {product.category}
                </span>
              </div>
              <h3 className="mb-3">{product.name}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
              <ul className="space-y-2 mb-6 text-sm">
                {product.specs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#c5a46e] mt-1">•</span> {spec}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="btn-secondary text-sm w-full"
              >
                Request Information
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-alt">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#c5a46e] font-semibold text-sm tracking-[3px] mb-3">OUR LEGACY</div>
              <h2 className="mb-6">Crafting Excellence Since 1987</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  For nearly four decades, ARTITECT MACHINERY has been at the forefront of 
                  sheet metal fabrication technology. What began as a small workshop has grown 
                  into a globally recognized manufacturer of precision folding equipment.
                </p>
                <p>
                  Our commitment to innovation, quality, and customer satisfaction has earned 
                  us the trust of fabricators, manufacturers, and workshops across 50 countries.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#1a252f] rounded-lg flex items-center justify-center">
                      <feature.icon className="text-white" size={22} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1.5">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-[#c5a46e] font-semibold text-sm tracking-[3px] mb-3">GET IN TOUCH</div>
          <h2>Let's Discuss Your Requirements</h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Our specialists are ready to help you find the perfect folding solution for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Phone className="text-[#1a252f]" size={20} />
              </div>
              <div>
                <div className="font-semibold mb-1">Phone</div>
                <a href="tel:+18005551234" className="text-gray-600 hover:text-[#c5a46e]">+1 (800) 555-1234</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Mail className="text-[#1a252f]" size={20} />
              </div>
              <div>
                <div className="font-semibold mb-1">Email</div>
                <a href="mailto:sales@artitectmachinery.com" className="text-gray-600 hover:text-[#c5a46e]">sales@artitectmachinery.com</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <MapPin className="text-[#1a252f]" size={20} />
              </div>
              <div>
                <div className="font-semibold mb-1">Headquarters</div>
                <div className="text-gray-600">1240 Industrial Parkway<br />Cleveland, OH 44114, USA</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Full Name</label>
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
                  <label className="block text-sm font-medium mb-1.5">Email Address</label>
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
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  className="form-input" 
                  placeholder="+1 (555) 000-0000" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Message</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                  rows={5} 
                  className="form-input resize-y" 
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Message
              </button>
              {formSubmitted && (
                <p className="text-[#059669] text-sm">Thank you! We'll contact you within 24 hours.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a252f] text-white/70 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
