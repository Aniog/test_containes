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

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
)

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
)

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
)

// Products data
const products = [
  {
    id: 1,
    name: "Double Folding Machine",
    description: "High-precision dual-axis folding for complex sheet metal configurations. Ideal for automotive and aerospace applications.",
    features: ["CNC Control", "Auto-bending", "Precision ±0.1mm"]
  },
  {
    id: 2,
    name: "Double Folder Pro",
    description: "Industrial-grade double folder with advanced automation features. Maximum efficiency for high-volume production.",
    features: ["Touch Screen", "Memory Function", "Fast Setup"]
  },
  {
    id: 3,
    name: "Sheet Metal Folder",
    description: "Versatile folder for various sheet metal thicknesses. Robust construction ensures long-lasting performance.",
    features: ["Heavy Duty", "Adjustable Angles", "Safety Guards"]
  },
  {
    id: 4,
    name: "Sheet Metal Folding Machine",
    description: "Professional folding machine with digital positioning system. Perfect for precision metalworking shops.",
    features: ["Digital Readout", "Programmable", "Energy Efficient"]
  },
  {
    id: 5,
    name: "Metal Folder Elite",
    description: "Premium metal folder with intelligent bending technology. Reduces setup time and increases productivity.",
    features: ["AI Assistance", "Auto-Correction", "Remote Monitoring"]
  },
  {
    id: 6,
    name: "Metal Folding Machine Pro",
    description: "Commercial-grade folding machine designed for continuous operation. Built for demanding manufacturing environments.",
    features: ["24/7 Operation", "Low Maintenance", "High Capacity"]
  }
]

// Features data
const features = [
  {
    title: "Precision Engineering",
    description: "Our machines deliver exceptional accuracy with tolerances as tight as ±0.1mm, ensuring perfect folds every time.",
    icon: "precision"
  },
  {
    title: "Advanced Automation",
    description: "State-of-the-art CNC controls and programmable memory functions streamline your production workflow.",
    icon: "automation"
  },
  {
    title: "Durable Construction",
    description: "Built with premium materials and components, our machines are designed for decades of reliable service.",
    icon: "durability"
  },
  {
    title: "Global Support",
    description: "Our worldwide service network ensures you get prompt support wherever your operations are located.",
    icon: "support"
  }
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('')

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
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setFormStatus(''), 5000)
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
            <a href="#features" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </nav>

          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="cta-button header-cta">
            Get Quote
          </a>

          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
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
            World-class double folding machines and metalworking equipment engineered for excellence. 
            Trusted by manufacturers worldwide since 1985.
          </p>
          <div className="hero-buttons">
            <a href="#products" onClick={(e) => handleNavClick(e, 'products')} className="btn btn-primary">
              Explore Products
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="btn btn-outline">
              Contact Us
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Machines Installed</span>
            </div>
            <div className="stat">
              <span className="stat-number">35+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">25</span>
              <span className="stat-label">Countries Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Industry-leading folding machines designed for precision, durability, and efficiency
            </p>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <div className="product-image-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                      <line x1="6" y1="10" x2="6" y2="14"></line>
                      <line x1="10" y1="10" x2="10" y2="14"></line>
                      <line x1="14" y1="10" x2="14" y2="14"></line>
                      <line x1="18" y1="10" x2="18" y2="14"></line>
                    </svg>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <ul className="product-features">
                    {product.features.map((feature, idx) => (
                      <li key={idx}><CheckIcon /> {feature}</li>
                    ))}
                  </ul>
                  <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="product-link">
                    Request Quote <ChevronRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose ARTITECT</h2>
            <p className="section-subtitle">
              We deliver excellence in every machine we manufacture
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">
                  {feature.icon === 'precision' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  )}
                  {feature.icon === 'automation' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  )}
                  {feature.icon === 'durability' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  )}
                  {feature.icon === 'support' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  )}
                </div>
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
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">About ARTITECT MACHINERY</h2>
              <p className="about-text">
                Since 1985, ARTITECT MACHINERY has been at the forefront of sheet metal folding technology. 
                Our commitment to precision engineering and innovation has made us a trusted partner for 
                manufacturers across automotive, aerospace, construction, and industrial sectors.
              </p>
              <p className="about-text">
                We specialize in manufacturing double folding machines, sheet metal folders, and metal 
                folding equipment that set the industry standard for quality and performance. Every machine 
                we produce undergoes rigorous testing to ensure it meets our exacting standards.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <CheckIcon />
                  <span>ISO 9001 Certified</span>
                </div>
                <div className="about-feature">
                  <CheckIcon />
                  <span>CE Marked Equipment</span>
                </div>
                <div className="about-feature">
                  <CheckIcon />
                  <span>Custom Solutions Available</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-image-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <span>Manufacturing Excellence Since 1985</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to upgrade your production capabilities? Contact us today for a free consultation
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    placeholder="John Smith"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
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
                    rows="5"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full" disabled={formStatus === 'submitting'}>
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                {formStatus === 'success' && (
                  <div className="form-success">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
            <div className="contact-info">
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <div className="contact-info-item">
                  <div className="contact-icon"><PhoneIcon /></div>
                  <div>
                    <span className="contact-label">Phone</span>
                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon"><MailIcon /></div>
                  <div>
                    <span className="contact-label">Email</span>
                    <a href="mailto:info@artitectmachinery.com">info@artitectmachinery.com</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon"><MapPinIcon /></div>
                  <div>
                    <span className="contact-label">Address</span>
                    <span>1234 Industrial Boulevard<br />Manufacturing City, MC 56789</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="logo footer-logo">
                <span className="logo-text">ARTITECT</span>
                <span className="logo-subtext">MACHINERY</span>
              </a>
              <p className="footer-description">
                Leading manufacturer of precision sheet metal folding machines since 1985.
              </p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#products" onClick={(e) => handleNavClick(e, 'products')}>Products</a></li>
                <li><a href="#features" onClick={(e) => handleNavClick(e, 'features')}>Features</a></li>
                <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a></li>
                <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Products</h4>
              <ul>
                <li><a href="#products">Double Folding Machine</a></li>
                <li><a href="#products">Double Folder</a></li>
                <li><a href="#products">Sheet Metal Folder</a></li>
                <li><a href="#products">Metal Folding Machine</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Contact</h4>
              <p><PhoneIcon /> +1 (234) 567-890</p>
              <p><MailIcon /> info@artitectmachinery.com</p>
              <p><MapPinIcon /> Manufacturing City, MC 56789</p>
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
