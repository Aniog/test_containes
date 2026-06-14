import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, Check, Mail, Phone, MapPin, ChevronDown } from 'lucide-react'
import './App.css'

const products = [
  {
    id: 1,
    name: 'Double Folding Machine',
    description: 'Precision folding for industrial applications with dual-beam technology for enhanced accuracy.',
    icon: '⚙️'
  },
  {
    id: 2,
    name: 'Double Folder',
    description: 'High-capacity sheet metal processing with automated feeding and stacking systems.',
    icon: '🔄'
  },
  {
    id: 3,
    name: 'Sheet Metal Folder',
    description: 'Professional-grade bending solutions with CNC control for complex geometries.',
    icon: '📐'
  },
  {
    id: 4,
    name: 'Sheet Metal Folding Machine',
    description: 'Automated folding technology with programmable angles and material memory.',
    icon: '⚡'
  },
  {
    id: 5,
    name: 'Metal Folder',
    description: 'Heavy-duty construction designed for continuous industrial operation.',
    icon: '🏗️'
  },
  {
    id: 6,
    name: 'Metal Folder Machine',
    description: 'Industrial performance with advanced servo drives and precision guides.',
    icon: '🔧'
  },
  {
    id: 7,
    name: 'Metal Folding Machine',
    description: 'Advanced control systems with touch-screen interface and remote diagnostics.',
    icon: '🎛️'
  }
]

const benefits = [
  'Industry-leading precision with ±0.5° angle accuracy',
  'Heavy-duty construction for 24/7 operation',
  'Advanced CNC controls with touch-screen interface',
  'Energy-efficient servo drive systems',
  'Comprehensive warranty and technical support',
  'Custom configurations for specific requirements'
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [formStatus, setFormStatus] = useState('idle')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">
          <a href="#" className="logo">
            <span className="logo-text">ARTITECT</span>
            <span className="logo-subtext">MACHINERY</span>
          </a>
          
          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#products" onClick={(e) => handleNavClick(e, 'products')}>Products</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </nav>

          <div className="header-actions">
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="btn btn-primary">
              Get Quote
            </a>
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Precision Sheet Metal<br />
            <span>Folding Solutions</span>
          </h1>
          <p className="hero-subtitle">
            ARTITECT MACHINERY delivers industrial-grade folding machines engineered for precision, 
            durability, and optimal performance. Trusted by manufacturers worldwide.
          </p>
          <div className="hero-buttons">
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="btn btn-primary btn-lg">
              Request a Quote
              <ArrowRight size={20} />
            </a>
            <a href="#products" onClick={(e) => handleNavClick(e, 'products')} className="btn btn-outline btn-lg">
              View Products
            </a>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Comprehensive range of sheet metal folding machines designed for industrial excellence
            </p>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-icon">{product.icon}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="product-link">
                  Request Info <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <div className="about-image-placeholder">
                <span>Industrial Excellence</span>
              </div>
            </div>
            <div className="about-content">
              <h2 className="section-title">About ARTITECT MACHINERY</h2>
              <p className="about-text">
                With decades of experience in metal fabrication equipment, ARTITECT MACHINERY 
                has established itself as a leading manufacturer of sheet metal folding machines. 
                Our commitment to precision engineering and innovative design has made us a trusted 
                partner for industries worldwide.
              </p>
              <p className="about-text">
                We specialize in manufacturing double folding machines, sheet metal folders, and 
                metal folding equipment that deliver exceptional accuracy, reliability, and performance. 
                Every machine is built with premium components and undergoes rigorous quality testing.
              </p>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <Check size={18} className="check-icon" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">Get In Touch</h2>
              <p className="contact-intro">
                Ready to find the perfect folding machine for your needs? Contact our expert team 
                for personalized consultation and competitive quotes.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <Mail size={20} />
                  <span>sales@artitectmachinery.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={20} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <MapPin size={20} />
                  <span>Industrial District, Manufacturing City</span>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={4}
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full" disabled={formStatus === 'submitting'}>
                  {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="logo">
                <span className="logo-text">ARTITECT</span>
                <span className="logo-subtext">MACHINERY</span>
              </a>
              <p className="footer-tagline">
                Leading manufacturer of precision sheet metal folding machines since 1985.
              </p>
            </div>
            <div className="footer-links">
              <h4>Products</h4>
              <a href="#products">Double Folding Machine</a>
              <a href="#products">Sheet Metal Folder</a>
              <a href="#products">Metal Folder Machine</a>
              <a href="#products">Metal Folding Machine</a>
            </div>
            <div className="footer-links">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
              <a href="#contact">Get Quote</a>
            </div>
            <div className="footer-links">
              <h4>Support</h4>
              <a href="#contact">Technical Support</a>
              <a href="#contact">Parts & Service</a>
              <a href="#contact">Training</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
