import { useState } from 'react'
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

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
)

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

// Product data
const products = [
  {
    id: 1,
    name: "Double Folding Machine",
    description: "Advanced dual-beam folding system for precise sheet metal manipulation with enhanced capacity.",
    icon: "⚙️"
  },
  {
    id: 2,
    name: "Double Folder",
    description: "Industrial-grade double folder designed for high-volume production environments.",
    icon: "🔧"
  },
  {
    id: 3,
    name: "Sheet Metal Folder",
    description: "Versatile folder capable of handling various sheet metal thicknesses with consistent results.",
    icon: "🛠️"
  },
  {
    id: 4,
    name: "Sheet Metal Folding Machine",
    description: "Precision-engineered folding machine for complex bending operations and intricate profiles.",
    icon: "⚙️"
  },
  {
    id: 5,
    name: "Metal Folder",
    description: "Robust construction with intuitive controls for seamless metal folding operations.",
    icon: "🔩"
  },
  {
    id: 6,
    name: "Metal Folder Machine",
    description: "Heavy-duty machine built to withstand demanding industrial applications.",
    icon: "🏭"
  }
]

// Features data
const features = [
  {
    title: "Precision Engineering",
    description: "Our machines deliver exceptional accuracy with tolerances as tight as ±0.1mm for perfect folds every time.",
    icon: "🎯"
  },
  {
    title: "Durable Construction",
    description: "Built with premium materials and components to ensure long-lasting performance in demanding environments.",
    icon: "🛡️"
  },
  {
    title: "Easy Operation",
    description: "Intuitive controls and user-friendly interfaces minimize training time and maximize productivity.",
    icon: "👆"
  },
  {
    title: "Global Support",
    description: "24/7 technical support and worldwide service network to keep your operations running smoothly.",
    icon: "🌍"
  }
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState(null)

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setFormStatus('submitting')
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 1500)
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <span className="logo-text">ARTITECT</span>
            <span className="logo-subtext">MACHINERY</span>
          </a>
          
          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
            <a href="#products" className="nav-link" onClick={(e) => handleNavClick(e, 'products')}>Products</a>
            <a href="#features" className="nav-link" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
            <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
            <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </nav>

          <a href="#contact" className="cta-button" onClick={(e) => handleNavClick(e, 'contact')}>
            Get Quote
          </a>

          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Precision Sheet Metal<br />
            <span className="hero-title-accent">Folding Solutions</span>
          </h1>
          <p className="hero-subtitle">
            World-class double folding machines and metal folder equipment engineered for excellence. 
            Trusted by industries worldwide for superior quality and reliability.
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary" onClick={(e) => handleNavClick(e, 'products')}>
              View Products
            </a>
            <a href="#contact" className="btn btn-outline" onClick={(e) => handleNavClick(e, 'contact')}>
              Contact Us
            </a>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Products</span>
            <h2 className="section-title">Premium Sheet Metal Equipment</h2>
            <p className="section-subtitle">
              Discover our comprehensive range of folding machines designed to meet the diverse needs of modern manufacturing
            </p>
          </div>
          
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-icon">{product.icon}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <a href="#contact" className="product-link" onClick={(e) => handleNavClick(e, 'contact')}>
                  Request Quote <ChevronRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">The ARTITECT Advantage</h2>
            <p className="section-subtitle">
              We combine cutting-edge technology with decades of industry expertise to deliver exceptional results
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
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <span className="section-tag">About Us</span>
              <h2 className="section-title">Engineering Excellence Since 1985</h2>
              <p className="about-description">
                At ARTITECT MACHINERY, we specialize in manufacturing premium sheet metal folding equipment 
                that sets the industry standard for precision and reliability. Our commitment to innovation 
                has made us a trusted partner for manufacturers worldwide.
              </p>
              <p className="about-description">
                Every machine we produce undergoes rigorous quality testing to ensure it meets our exacting 
                standards. From concept to delivery, we work closely with our clients to provide solutions 
                that enhance their production capabilities.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">35+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Countries Served</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5000+</span>
                  <span className="stat-label">Machines Delivered</span>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="about-image-placeholder">
                <div className="about-image-icon">🏭</div>
                <span>Manufacturing Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Contact Us</span>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to transform your production capabilities? Reach out to our team for personalized assistance
            </p>
          </div>
          
          <div className="contact-content">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Smith"
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your requirements..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus === 'success' && (
                <div className="form-success">
                  <CheckIcon />
                  <span>Thank you! We'll be in touch soon.</span>
                </div>
              )}
            </form>
            
            <div className="contact-info">
              <div className="contact-info-card">
                <h3>Headquarters</h3>
                <p>1234 Industrial Boulevard<br />Manufacturing District<br />Shanghai, China 200000</p>
              </div>
              <div className="contact-info-card">
                <h3>Contact Details</h3>
                <p>
                  <strong>Phone:</strong> +86 21 1234 5678<br />
                  <strong>Email:</strong> info@artitect-machinery.com<br />
                  <strong>Website:</strong> www.artitect-machinery.com
                </p>
              </div>
              <div className="contact-info-card">
                <h3>Business Hours</h3>
                <p>
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <a href="#" className="footer-logo">
                <span className="logo-text">ARTITECT</span>
                <span className="logo-subtext">MACHINERY</span>
              </a>
              <p className="footer-tagline">
                Leading manufacturer of precision sheet metal folding machines since 1985.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Products</h4>
                <a href="#products" onClick={(e) => handleNavClick(e, 'products')}>Double Folding Machine</a>
                <a href="#products" onClick={(e) => handleNavClick(e, 'products')}>Double Folder</a>
                <a href="#products" onClick={(e) => handleNavClick(e, 'products')}>Sheet Metal Folder</a>
                <a href="#products" onClick={(e) => handleNavClick(e, 'products')}>Metal Folding Machine</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a>
                <a href="#features" onClick={(e) => handleNavClick(e, 'features')}>Why Choose Us</a>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
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
