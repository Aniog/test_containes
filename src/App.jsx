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

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
)

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const FactoryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
    <path d="M17 18h1"></path>
    <path d="M12 18h1"></path>
    <path d="M7 18h1"></path>
  </svg>
)

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
    <path d="M12 2v2"></path>
    <path d="M12 22v-2"></path>
    <path d="m17 20.66-1-1.73"></path>
    <path d="M11 10.27 7 3.34"></path>
    <path d="m20.66 17-1.73-1"></path>
    <path d="m3.34 7 1.73 1"></path>
    <path d="M14 12h8"></path>
    <path d="M2 12h2"></path>
    <path d="m20.66 7-1.73 1"></path>
    <path d="m3.34 17 1.73-1"></path>
    <path d="m17 3.34-1 1.73"></path>
    <path d="m11 13.73-4 6.93"></path>
  </svg>
)

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"></circle>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
  </svg>
)

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
)

// Product data
const products = [
  {
    id: 1,
    name: "Double Folding Machine",
    description: "High-precision double folding machine for complex sheet metal bending operations. Features advanced control systems and exceptional durability.",
    keywords: "double folding machine"
  },
  {
    id: 2,
    name: "Double Folder",
    description: "Professional-grade double folder designed for efficient and accurate sheet metal folding. Ideal for high-volume production environments.",
    keywords: "double folder"
  },
  {
    id: 3,
    name: "Sheet Metal Folder",
    description: "Versatile sheet metal folder with adjustable bending angles and robust construction. Perfect for various industrial applications.",
    keywords: "sheet metal folder"
  },
  {
    id: 4,
    name: "Sheet Metal Folding Machine",
    description: "Advanced sheet metal folding machine with CNC control and automated positioning. Delivers consistent, high-quality results.",
    keywords: "sheet metal folding machine"
  },
  {
    id: 5,
    name: "Metal Folder",
    description: "Heavy-duty metal folder engineered for precision and reliability. Suitable for demanding manufacturing operations.",
    keywords: "metal folder"
  },
  {
    id: 6,
    name: "Metal Folder Machine",
    description: "Industrial metal folder machine with ergonomic design and easy operation. Built to withstand continuous use.",
    keywords: "metal folder machine"
  }
]

// Features data
const features = [
  {
    icon: <FactoryIcon />,
    title: "Industrial Grade Quality",
    description: "Built with premium materials and components to withstand demanding production environments."
  },
  {
    icon: <SettingsIcon />,
    title: "Advanced Technology",
    description: "Incorporating the latest innovations in control systems and precision engineering."
  },
  {
    icon: <AwardIcon />,
    title: "Industry Expertise",
    description: "Years of experience in manufacturing sheet metal processing equipment."
  },
  {
    icon: <UsersIcon />,
    title: "Customer Support",
    description: "Dedicated technical support and maintenance services for all our products."
  }
]

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <span className="logo-text">ARTITECT</span>
            <span className="logo-subtext">MACHINERY</span>
          </div>
          
          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <button className="nav-link" onClick={() => scrollToSection('products')}>Products</button>
            <button className="nav-link" onClick={() => scrollToSection('features')}>Features</button>
            <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
            <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>

          <button className="cta-button header-cta" onClick={() => scrollToSection('contact')}>
            Get Quote
          </button>

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
            Leading manufacturer of double folding machines, sheet metal folders, and metal folding equipment. 
            Engineered for excellence, built for performance.
          </p>
          <div className="hero-buttons">
            <button className="cta-button primary" onClick={() => scrollToSection('products')}>
              Explore Products
            </button>
            <button className="cta-button secondary" onClick={() => scrollToSection('contact')}>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Discover our range of premium sheet metal folding machines designed for precision and durability
            </p>
          </div>
          
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <div className="product-image-placeholder">
                    <FactoryIcon />
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <button className="product-link">
                    Learn More <ArrowRightIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              We combine innovation, quality, and customer-focused service to deliver exceptional machinery
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
              <h2 className="section-title">About ARTITECT MACHINERY</h2>
              <p>
                At ARTITECT MACHINERY, we specialize in manufacturing high-quality sheet metal folding machines 
                that meet the demanding needs of modern manufacturing. Our products include double folding machines, 
                double folders, sheet metal folders, and metal folding equipment.
              </p>
              <p>
                With a commitment to precision engineering and innovative design, we have established ourselves 
                as a trusted name in the sheet metal processing industry. Our machines are built to deliver 
                exceptional performance, reliability, and longevity.
              </p>
              <ul className="about-list">
                <li><CheckIcon /> Premium quality industrial machinery</li>
                <li><CheckIcon /> Advanced technology and innovation</li>
                <li><CheckIcon /> Comprehensive customer support</li>
                <li><CheckIcon /> Global reach and local service</li>
              </ul>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Machines Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Countries Served</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Customer Satisfaction</span>
              </div>
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
              <p>
                Ready to find the perfect sheet metal folding machine for your needs? 
                Contact us today for a free consultation and quote.
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
                  <span className="contact-value">Industrial District, USA</span>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button type="submit" className="cta-button primary full-width">
                Send Message
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
              <p className="footer-tagline">
                Premium sheet metal folding machines for modern manufacturing.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Products</h4>
                <a href="#products">Double Folding Machine</a>
                <a href="#products">Double Folder</a>
                <a href="#products">Sheet Metal Folder</a>
                <a href="#products">Metal Folding Machine</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#about">About Us</a>
                <a href="#features">Features</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 ARTITECT MACHINERY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
