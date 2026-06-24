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
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
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

// Product data
const products = [
  {
    id: 1,
    name: "Double Folding Machine",
    description: "Advanced dual-beam folding system for precise sheet metal manipulation with superior bending accuracy.",
    features: ["CNC Control", "Auto-back gauge", "Multi-axis bending"]
  },
  {
    id: 2,
    name: "Double Folder",
    description: "Industrial-grade double folder designed for high-volume production with exceptional reliability.",
    features: ["High speed operation", "Precision alignment", "Low maintenance"]
  },
  {
    id: 3,
    name: "Sheet Metal Folder",
    description: "Versatile folder suitable for various sheet metal thicknesses and complex folding requirements.",
    features: ["Adjustable bending angle", "Digital readout", "Quick change tooling"]
  },
  {
    id: 4,
    name: "Sheet Metal Folding Machine",
    description: "Heavy-duty folding machine engineered for demanding industrial applications and continuous operation.",
    features: ["Robust construction", "Energy efficient", "Safety interlocks"]
  },
  {
    id: 5,
    name: "Metal Folder",
    description: "Professional metal folding solution offering outstanding precision and repeatability.",
    features: ["Touch screen interface", "Program memory", "Remote diagnostics"]
  },
  {
    id: 6,
    name: "Metal Folder Machine",
    description: "Complete folding system with integrated automation for streamlined production workflows.",
    features: ["Automated loading", "Quality monitoring", "Export capabilities"]
  }
]

// Features data
const features = [
  {
    title: "Precision Engineering",
    description: "Our machines are manufactured with tight tolerances to ensure accurate, repeatable bends every time. Advanced CNC technology delivers sub-millimeter precision.",
    icon: "precision"
  },
  {
    title: "Durability & Reliability",
    description: "Built with high-grade steel and premium components, our equipment is designed for decades of reliable service in demanding industrial environments.",
    icon: "durability"
  },
  {
    title: "User-Friendly Operation",
    description: "Intuitive touch-screen controls and comprehensive training ensure your operators can maximize productivity with minimal learning curve.",
    icon: "user"
  },
  {
    title: "Customization Options",
    description: "We offer tailored solutions to meet your specific requirements, from custom bending lengths to specialized tooling configurations.",
    icon: "custom"
  }
]

// Statistics
const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "5000+", label: "Machines Delivered" },
  { value: "50+", label: "Countries Served" },
  { value: "98%", label: "Customer Satisfaction" }
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
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
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
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
            <button className="nav-close" onClick={() => setMobileMenuOpen(false)}>
              <CloseIcon />
            </button>
            <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products') }}>Products</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features') }}>Features</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a>
          </nav>

          <div className="header-actions">
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              Get Quote
            </button>
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Precision <span className="hero-accent">Sheet Metal</span> Folding Solutions
            </h1>
            <p className="hero-subtitle">
              Leading manufacturer of double folding machines, sheet metal folders, and metal folding equipment. 
              Engineered for excellence, built for performance.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-accent" onClick={() => scrollToSection('products')}>
                Explore Products
              </button>
              <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
                Contact Us
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-machine-illustration">
              <div className="machine-frame">
                <div className="machine-body"></div>
                <div className="machine-arm"></div>
                <div className="machine-base"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Comprehensive range of sheet metal folding solutions designed for industrial excellence
            </p>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <div className="product-image-placeholder">
                    <svg viewBox="0 0 100 60" className="product-svg">
                      <rect x="10" y="20" width="80" height="30" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                      <rect x="15" y="25" width="30" height="20" fill="none" stroke="currentColor" strokeWidth="1"/>
                      <line x1="50" y1="15" x2="50" y2="50" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="50" cy="12" r="4" fill="currentColor" opacity="0.3"/>
                      <rect x="60" y="30" width="25" height="15" fill="none" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <ul className="product-features">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }} className="product-link">
                    Request Details <ChevronRight />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose ARTITECT</h2>
            <p className="section-subtitle">
              We combine traditional craftsmanship with cutting-edge technology
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">
                  {feature.icon === 'precision' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  )}
                  {feature.icon === 'durability' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  )}
                  {feature.icon === 'user' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="8" r="4"/>
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    </svg>
                  )}
                  {feature.icon === 'custom' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
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
      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">About ARTITECT MACHINERY</h2>
              <p className="about-text">
                For over 25 years, ARTITECT MACHINERY has been at the forefront of sheet metal folding technology. 
                Our commitment to precision, quality, and innovation has made us a trusted partner for industries worldwide.
              </p>
              <p className="about-text">
                We specialize in manufacturing double folding machines and sheet metal folding equipment that 
                deliver exceptional performance, reliability, and value. Our team of experienced engineers 
                and technicians ensures every machine meets the highest standards of quality and craftsmanship.
              </p>
              <div className="stats-grid">
                {stats.map((stat, idx) => (
                  <div key={idx} className="stat-item">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-visual">
              <div className="about-image-placeholder">
                <svg viewBox="0 0 200 150" className="about-svg">
                  <rect x="20" y="40" width="160" height="80" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <rect x="30" y="50" width="60" height="50" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <line x1="100" y1="30" x2="100" y2="120" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="100" cy="25" r="8" fill="currentColor" opacity="0.2"/>
                  <rect x="110" y="60" width="60" height="50" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <line x1="40" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to find the perfect folding machine for your needs? Contact us today.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              {formStatus === 'success' ? (
                <div className="form-success">
                  <div className="success-icon">
                    <CheckIcon />
                  </div>
                  <h3>Thank You!</h3>
                  <p>Your inquiry has been submitted successfully. Our team will contact you within 24 hours.</p>
                  <button className="btn btn-primary" onClick={() => setFormStatus('idle')}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
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
                      <label htmlFor="email">Email Address *</label>
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
                  </div>
                  <div className="form-row">
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
                      <label htmlFor="company">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleFormChange}
                        placeholder="Company Name"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
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
                  <button type="submit" className="btn btn-accent btn-full" disabled={formStatus === 'submitting'}>
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
            <div className="contact-info">
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPinIcon />
                  </div>
                  <div>
                    <strong>Address</strong>
                    <p>1234 Industrial Boulevard<br/>Manufacturing District<br/>Shanghai, China</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <PhoneIcon />
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <p>+86 21 1234 5678</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MailIcon />
                  </div>
                  <div>
                    <strong>Email</strong>
                    <p>sales@artitect-machinery.com</p>
                  </div>
                </div>
              </div>
              <div className="contact-info-card">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-about">
              <div className="logo">
                <span className="logo-text">ARTITECT</span>
                <span className="logo-subtext">MACHINERY</span>
              </div>
              <p>Leading manufacturer of precision sheet metal folding machines and equipment since 1999.</p>
            </div>
            <div className="footer-col">
              <h4>Products</h4>
              <ul>
                <li><a href="#products">Double Folding Machine</a></li>
                <li><a href="#products">Double Folder</a></li>
                <li><a href="#products">Sheet Metal Folder</a></li>
                <li><a href="#products">Metal Folding Machine</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#contact">Get Quote</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul className="footer-contact">
                <li>
                  <MapPinIcon />
                  <span>Shanghai, China</span>
                </li>
                <li>
                  <PhoneIcon />
                  <span>+86 21 1234 5678</span>
                </li>
                <li>
                  <MailIcon />
                  <span>sales@artitect-machinery.com</span>
                </li>
              </ul>
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
