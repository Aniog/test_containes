import { useState, useEffect } from 'react'
import './App.css'

// Product data
const products = [
  {
    id: 1,
    name: 'Double Folding Machine',
    description: 'Advanced dual-beam folding system for precise sheet metal加工 with enhanced capacity and speed.',
    icon: '⚙️'
  },
  {
    id: 2,
    name: 'Double Folder',
    description: 'High-efficiency double folder designed for continuous industrial production cycles.',
    icon: '🔧'
  },
  {
    id: 3,
    name: 'Sheet Metal Folder',
    description: 'Professional-grade folder for precise sheet metal bending and folding operations.',
    icon: '🛠️'
  },
  {
    id: 4,
    name: 'Sheet Metal Folding Machine',
    description: 'Versatile folding machine with computer-controlled precision for complex bending tasks.',
    icon: '⚙️'
  },
  {
    id: 5,
    name: 'Metal Folder',
    description: 'Heavy-duty metal folder built to withstand demanding manufacturing environments.',
    icon: '🔩'
  },
  {
    id: 6,
    name: 'Metal Folder Machine',
    description: 'Automated folder machine with smart controls for consistent, repeatable results.',
    icon: '⚙️'
  },
  {
    id: 7,
    name: 'Metal Folding Machine',
    description: 'Industrial-strength folding machine delivering exceptional accuracy and durability.',
    icon: '🔧'
  }
]

// Features data
const features = [
  {
    title: 'Precision Engineering',
    description: 'Our machines deliver exceptional accuracy with tolerances as tight as ±0.1mm, ensuring perfect folds every time.',
    icon: '🎯'
  },
  {
    title: 'Built to Last',
    description: 'Constructed with premium materials and components, our equipment is designed for decades of reliable service.',
    icon: '💪'
  },
  {
    title: 'Energy Efficient',
    description: 'Advanced power management systems reduce energy consumption while maximizing production output.',
    icon: '⚡'
  },
  {
    title: 'Expert Support',
    description: 'Our dedicated team provides comprehensive training, maintenance, and technical assistance.',
    icon: '🤝'
  }
]

// Stats data
const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '5000+', label: 'Machines Installed' },
  { value: '50+', label: 'Countries Served' },
  { value: '98%', label: 'Customer Satisfaction' }
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

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 1500)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <span className="logo-text">ARTITECT</span>
            <span className="logo-subtext">MACHINERY</span>
          </div>
          
          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
            <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </nav>

          <button 
            className="cta-button header-cta"
            onClick={() => scrollToSection('contact')}
          >
            Get Quote
          </button>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Precision <span className="hero-accent">Sheet Metal</span> Folding Solutions
          </h1>
          <p className="hero-subtitle">
            World-class folding machines engineered for excellence. From double folding machines to metal folder systems, we deliver industrial-grade equipment that transforms your manufacturing capabilities.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('products')} className="cta-button cta-primary">
              View Products
            </button>
            <button onClick={() => scrollToSection('contact')} className="cta-button cta-secondary">
              Contact Us
            </button>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Comprehensive range of sheet metal folding solutions designed to meet diverse industrial requirements
            </p>
          </div>
          
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-icon">{product.icon}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <button className="product-link">
                  Learn More <span className="arrow">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Why Choose ARTITECT</h2>
            <p className="section-subtitle">
              We combine cutting-edge technology with decades of industry expertise
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Crafting Industrial Excellence Since 1998</h2>
              <p className="about-description">
                At ARTITECT MACHINERY, we specialize in designing and manufacturing premium sheet metal folding equipment. Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for manufacturers worldwide.
              </p>
              <p className="about-description">
                Every machine we produce undergoes rigorous testing and quality control to ensure it meets the highest standards of precision and reliability. We understand that your production capabilities depend on equipment you can trust.
              </p>
            </div>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="section-title">Get In Touch</h2>
              <p className="contact-subtitle">
                Ready to enhance your manufacturing capabilities? Contact our team for personalized consultation and quotes.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">info@artitectmachinery.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Industrial District, Manufacturing City</span>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
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
                  rows="4"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="cta-button cta-primary form-submit"
                disabled={formStatus === 'submitting' || formStatus === 'success'}
              >
                {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-text">ARTITECT</span>
                <span className="logo-subtext">MACHINERY</span>
              </div>
              <p className="footer-tagline">Precision Sheet Metal Solutions</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Products</h4>
                <button onClick={() => scrollToSection('products')}>View All</button>
                <button onClick={() => scrollToSection('products')}>Folding Machines</button>
                <button onClick={() => scrollToSection('products')}>Folder Systems</button>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <button onClick={() => scrollToSection('about')}>About Us</button>
                <button onClick={() => scrollToSection('contact')}>Contact</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 ARTITECT MACHINERY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
