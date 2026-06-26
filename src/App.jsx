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

const XIcon = () => (
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

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
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

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
)

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
)

// Product data
const products = [
  {
    id: 1,
    title: "Double Folding Machine",
    description: "High-precision double folding machine for complex sheet metal bending operations. Features dual-beam technology for enhanced accuracy and efficiency.",
    keywords: ["double folding machine", "double folder"]
  },
  {
    id: 2,
    title: "Sheet Metal Folder",
    description: "Professional-grade sheet metal folder designed for industrial applications. Delivers consistent, clean folds with minimal operator intervention.",
    keywords: ["sheet metal folder", "sheet metal folding machine"]
  },
  {
    id: 3,
    title: "Metal Folder Machine",
    description: "Advanced metal folder machine with automated positioning and precision control systems. Ideal for high-volume production environments.",
    keywords: ["metal folder", "metal folder machine"]
  },
  {
    id: 4,
    title: "Metal Folding Machine",
    description: "Versatile metal folding machine capable of handling various metal thicknesses. Built with robust components for long-term reliability.",
    keywords: ["metal folding machine", "metal folder"]
  }
]

// Features data
const features = [
  {
    icon: <SettingsIcon />,
    title: "Advanced Technology",
    description: "Our machines incorporate the latest advancements in sheet metal processing technology for superior performance."
  },
  {
    icon: <ShieldIcon />,
    title: "Built to Last",
    description: "Industrial-grade construction ensures durability and reliability in demanding manufacturing environments."
  },
  {
    icon: <UsersIcon />,
    title: "Expert Support",
    description: "Our team of experienced engineers provides comprehensive technical support and training."
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

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
            <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </nav>

          {/* CTA Button */}
          <button onClick={() => scrollToSection('contact')} className="cta-button">
            Get Quote
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="nav-mobile">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
            <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Precision <span className="hero-accent">Sheet Metal</span> Folding Solutions
          </h1>
          <p className="hero-subtitle">
            Leading manufacturer of double folding machines, sheet metal folders, and metal folding equipment. 
            Engineered for excellence, built for performance.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('products')} className="btn-primary">
              View Products
              <ChevronRight />
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary">
              Contact Us
            </button>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Products</span>
            <h2 className="section-title">Premium Sheet Metal Folding Equipment</h2>
            <p className="section-description">
              Discover our comprehensive range of folding machines designed to meet the diverse needs 
              of the sheet metal fabrication industry.
            </p>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-image">
                  <div className="product-image-placeholder">
                    <FactoryIcon />
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-keywords">
                    {product.keywords.map((keyword, idx) => (
                      <span key={idx} className="keyword-tag">{keyword}</span>
                    ))}
                  </div>
                  <button className="product-link">
                    Learn More <ChevronRight />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Excellence in Every Detail</h2>
            <p className="section-description">
              We combine cutting-edge technology with decades of industry expertise to deliver 
              machines that exceed expectations.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
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
            <div className="about-image">
              <div className="about-image-placeholder">
                <FactoryIcon />
              </div>
            </div>
            <div className="about-content">
              <span className="section-tag">About ARTITECT</span>
              <h2 className="section-title">Industry Leaders in Metal Folding Technology</h2>
              <p className="about-text">
                With years of experience in the sheet metal fabrication industry, ARTITECT MACHINERY 
                has established itself as a trusted name in precision metal folding equipment.
              </p>
              <p className="about-text">
                Our commitment to quality, innovation, and customer satisfaction has made us a 
                preferred choice for businesses seeking reliable folding solutions. We understand 
                the demands of modern manufacturing and continuously evolve our products to meet 
                changing industry needs.
              </p>
              <ul className="about-list">
                <li>Decades of combined industry experience</li>
                <li>Global customer base across multiple continents</li>
                <li>Comprehensive after-sales support</li>
                <li>Customization options for specific requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-tag">Get In Touch</span>
              <h2 className="section-title">Ready to Transform Your Production?</h2>
              <p className="contact-description">
                Contact us today to discuss your sheet metal folding requirements. Our team 
                is ready to help you find the perfect solution for your needs.
              </p>
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
                  <span>123 Industrial Way, Manufacturing City, MC 12345</span>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <h3 className="form-title">Send Us a Message</h3>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Select Product Interest</option>
                    <option value="double-folding">Double Folding Machine</option>
                    <option value="sheet-metal-folder">Sheet Metal Folder</option>
                    <option value="metal-folder">Metal Folder Machine</option>
                    <option value="metal-folding">Metal Folding Machine</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn-primary form-submit">
                  Send Message
                  <ChevronRight />
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
              <div className="logo">
                <span className="logo-text">ARTITECT</span>
                <span className="logo-subtext">MACHINERY</span>
              </div>
              <p className="footer-description">
                Leading manufacturer of precision sheet metal folding machines and equipment 
                for the global fabrication industry.
              </p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <button onClick={() => scrollToSection('home')}>Home</button>
              <button onClick={() => scrollToSection('products')}>Products</button>
              <button onClick={() => scrollToSection('features')}>Features</button>
              <button onClick={() => scrollToSection('about')}>About</button>
              <button onClick={() => scrollToSection('contact')}>Contact</button>
            </div>
            <div className="footer-links">
              <h4>Products</h4>
              <button>Double Folding Machine</button>
              <button>Sheet Metal Folder</button>
              <button>Metal Folder Machine</button>
              <button>Metal Folding Machine</button>
            </div>
            <div className="footer-contact">
              <h4>Contact</h4>
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
                <span>123 Industrial Way</span>
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
