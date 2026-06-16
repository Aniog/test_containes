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
    description: "High-precision dual-axis folding for complex sheet metal operations with superior accuracy.",
    imageId: "double-folding-machine-img"
  },
  {
    id: 2,
    name: "Double Folder",
    description: "Industrial-grade double folder designed for continuous heavy-duty production cycles.",
    imageId: "double-folder-img"
  },
  {
    id: 3,
    name: "Sheet Metal Folder",
    description: "Versatile folder machine perfect for various sheet metal thicknesses and materials.",
    imageId: "sheet-metal-folder-img"
  },
  {
    id: 4,
    name: "Sheet Metal Folding Machine",
    description: "Advanced CNC-controlled folding machine with programmable bending sequences.",
    imageId: "sheet-metal-folding-machine-img"
  },
  {
    id: 5,
    name: "Metal Folder",
    description: "Robust construction folder engineered for long-lasting performance in demanding environments.",
    imageId: "metal-folder-img"
  },
  {
    id: 6,
    name: "Metal Folder Machine",
    description: "Precision-engineered machine delivering consistent folds across all metal types.",
    imageId: "metal-folder-machine-img"
  },
  {
    id: 7,
    name: "Metal Folding Machine",
    description: "State-of-the-art folding technology with intelligent control systems for optimal results.",
    imageId: "metal-folding-machine-img"
  }
]

// Features data
const features = [
  {
    icon: "precision",
    title: "Precision Engineering",
    description: "Our machines deliver exceptional accuracy with tolerances as low as 0.1mm for perfect folds every time."
  },
  {
    icon: "durability",
    title: "Built to Last",
    description: "Industrial-grade components ensure maximum durability and minimal maintenance requirements."
  },
  {
    icon: "efficiency",
    title: "High Efficiency",
    description: "Optimized workflows and smart automation reduce production time and increase output."
  },
  {
    icon: "support",
    title: "Expert Support",
    description: "Our dedicated team provides comprehensive training, maintenance, and technical assistance."
  }
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
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

          <button className="cta-button header-cta">
            Get Quote
          </button>

          <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(true)}>
            <MenuIcon />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background" 
          data-strk-bg-id="hero-bg-8f2a9c"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600">
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 id="hero-title">Precision Sheet Metal Folding Solutions</h1>
          <p id="hero-subtitle">Industry-leading folding machines engineered for excellence. Trusted by manufacturers worldwide since 1985.</p>
          <div className="hero-buttons">
            <button className="cta-button cta-primary" onClick={() => scrollToSection('products')}>
              Explore Products
            </button>
            <button className="cta-button cta-secondary" onClick={() => scrollToSection('contact')}>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Our Products</h2>
            <p>Discover our comprehensive range of sheet metal folding solutions</p>
          </div>
          
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img
                    alt={product.name}
                    className="product-image"
                    data-strk-img-id={product.imageId}
                    data-strk-img={`[product-${product.id}-name] [product-${product.id}-desc] products-title`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  />
                </div>
                <div className="product-info">
                  <h3 id={`product-${product.id}-name`}>{product.name}</h3>
                  <p id={`product-${product.id}-desc`}>{product.description}</p>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }} className="product-link">
                    Learn More <ArrowRightIcon />
                  </a>
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
            <h2 id="features-title">Why Choose ARTITECT</h2>
            <p id="features-subtitle">Excellence in every detail</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon === 'precision' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  )}
                  {feature.icon === 'durability' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  )}
                  {feature.icon === 'efficiency' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
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
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container about-container">
          <div className="about-image">
            <div className="about-image-placeholder"
              data-strk-bg-id="about-bg-6d34fa"
              data-strk-bg="[about-title] [about-subtitle]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800">
            </div>
          </div>
          <div className="about-content">
            <h2 id="about-title">About ARTITECT MACHINERY</h2>
            <p id="about-subtitle">Decades of Excellence in Metal Fabrication</p>
            <p>Since 1985, ARTITECT MACHINERY has been at the forefront of sheet metal folding technology. Our commitment to precision, innovation, and customer satisfaction has made us a trusted partner for manufacturers around the globe.</p>
            <p>We specialize in designing and manufacturing high-quality folding machines that deliver exceptional performance, reliability, and longevity. Our team of expert engineers continuously innovates to bring you the latest advancements in metal fabrication technology.</p>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">39+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Countries Served</span>
              </div>
              <div className="stat">
                <span className="stat-number">5000+</span>
                <span className="stat-label">Machines Installed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Ready to transform your production capabilities? Contact us today for a personalized consultation.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <PhoneIcon />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <MailIcon />
                  <span>info@artitectmachinery.com</span>
                </div>
                <div className="contact-item">
                  <MapPinIcon />
                  <span>1234 Industrial Way, Manufacturing City, MC 56789</span>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" placeholder="Tell us about your requirements..." required></textarea>
                </div>
                <button type="submit" className="cta-button cta-primary form-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-text">ARTITECT</span>
                <span className="logo-subtext">MACHINERY</span>
              </div>
              <p>Leading manufacturer of precision sheet metal folding machines since 1985.</p>
            </div>
            
            <div className="footer-links">
              <h4>Products</h4>
              <ul>
                <li><a href="#products">Double Folding Machine</a></li>
                <li><a href="#products">Sheet Metal Folder</a></li>
                <li><a href="#products">Metal Folding Machine</a></li>
                <li><a href="#products">View All</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#features">Why Choose Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Support</h4>
              <ul>
                <li><a href="#contact">Technical Support</a></li>
                <li><a href="#contact">Training</a></li>
                <li><a href="#contact">Spare Parts</a></li>
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
