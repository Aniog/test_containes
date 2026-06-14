import { useState, useEffect } from 'react'
import './App.css'

// Icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
)

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
)

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
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo">
          ARTITECT <span className="logo-accent">MACHINERY</span>
        </a>
        
        <div className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      <div className="container hero-content">
        <h1 className="hero-title">
          Precision Metal Folding <span className="title-accent">Solutions</span>
        </h1>
        <p className="hero-subtitle">
          Industry-leading sheet metal folding machines engineered for excellence. 
          From double folding machines to specialized metal folder solutions.
        </p>
        <div className="hero-cta">
          <a href="#products" className="btn btn-primary">
            Explore Our Products
            <ChevronDown />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

// Products Data
const products = [
  {
    id: 1,
    name: 'Double Folding Machine',
    description: 'Advanced dual-axis folding for complex sheet metal operations with superior precision and control.',
    icon: '⚙️'
  },
  {
    id: 2,
    name: 'Double Folder',
    description: 'Precision folding with enhanced capacity and control for high-volume manufacturing.',
    icon: '🔧'
  },
  {
    id: 3,
    name: 'Sheet Metal Folder',
    description: 'Versatile folding solutions for various sheet metal thicknesses and configurations.',
    icon: '📐'
  },
  {
    id: 4,
    name: 'Sheet Metal Folding Machine',
    description: 'High-performance folding with digital precision and automated controls.',
    icon: '🎯'
  },
  {
    id: 5,
    name: 'Metal Folder',
    description: 'Industrial-grade folding for heavy-duty applications and continuous operation.',
    icon: '🏭'
  },
  {
    id: 6,
    name: 'Metal Folder Machine',
    description: 'Reliable performance with minimal maintenance and maximum uptime.',
    icon: '⚡'
  },
  {
    id: 7,
    name: 'Metal Folding Machine',
    description: 'Engineered for accuracy and repeatability in every production cycle.',
    icon: '🔩'
  }
]

// Products Section
const Products = () => {
  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Comprehensive range of metal folding solutions designed for industrial excellence
          </p>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-icon">{product.icon}</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <a href="#contact" className="product-link">
                Request Details <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// About Section
const About = () => {
  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '500+', label: 'Clients Worldwide' },
    { value: '99%', label: 'Customer Satisfaction' },
    { value: '50+', label: 'Countries Served' }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">Engineering Excellence Since 1998</h2>
            <p className="about-text">
              At ARTITECT MACHINERY, we specialize in manufacturing premium sheet metal folding 
              machines that set industry standards for precision, durability, and performance.
            </p>
            <p className="about-text">
              Our commitment to innovation and quality has made us a trusted partner for 
              manufacturing companies worldwide. Every machine is engineered with meticulous 
              attention to detail, ensuring optimal performance and longevity.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Advanced Engineering</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Premium Quality Materials</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Global Support Network</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Customization Options</span>
              </div>
            </div>
          </div>
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to find the perfect folding solution for your needs? Contact us today.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-full"
                disabled={formStatus === 'submitting' || formStatus === 'success'}
              >
                {formStatus === 'submitting' ? 'Sending...' : 
                 formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <p className="form-success">Thank you! We'll be in touch soon.</p>
              )}
            </form>
          </div>

          <div className="contact-info">
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              
              <div className="info-item">
                <span className="info-label">Address</span>
                <span className="info-value">1234 Industrial Avenue<br />Manufacturing District<br />Shanghai, China</span>
              </div>
              
              <div className="info-item">
                <span className="info-label">Phone</span>
                <span className="info-value">+86 21 1234 5678</span>
              </div>
              
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">info@artitectmachinery.com</span>
              </div>
              
              <div className="info-item">
                <span className="info-label">Business Hours</span>
                <span className="info-value">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 1:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              ARTITECT <span className="logo-accent">MACHINERY</span>
            </a>
            <p className="footer-tagline">
              Precision metal folding solutions for industrial excellence.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-links">
            <h4>Products</h4>
            <a href="#products">Double Folding Machine</a>
            <a href="#products">Sheet Metal Folder</a>
            <a href="#products">Metal Folding Machine</a>
            <a href="#products">View All</a>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>+86 21 1234 5678</p>
            <p>info@artitectmachinery.com</p>
            <p>Shanghai, China</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 ARTITECT MACHINERY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main App
function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
