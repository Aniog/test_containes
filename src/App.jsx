import { useState, useEffect } from 'react'
import './App.css'

// Icons as components
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

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
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
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
)

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
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

const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
)

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

  const products = [
    {
      id: 1,
      title: "Double Folding Machine",
      description: "High-precision double folding machine for complex sheet metal operations. Features advanced control systems and exceptional bending accuracy.",
      keywords: "double folding machine"
    },
    {
      id: 2,
      title: "Double Folder",
      description: "Industrial-grade double folder designed for high-volume production. Robust construction with automated feeding systems.",
      keywords: "double folder"
    },
    {
      id: 3,
      title: "Sheet Metal Folder",
      description: "Versatile sheet metal folder suitable for various thicknesses. Easy operation with digital positioning controls.",
      keywords: "sheet metal folder"
    },
    {
      id: 4,
      title: "Sheet Metal Folding Machine",
      description: "Professional sheet metal folding machine with CNC control. Precision bending for industrial manufacturing.",
      keywords: "sheet metal folding machine"
    },
    {
      id: 5,
      title: "Metal Folder",
      description: "Heavy-duty metal folder for industrial applications. Superior durability and consistent performance.",
      keywords: "metal folder"
    },
    {
      id: 6,
      title: "Metal Folder Machine",
      description: "Advanced metal folder machine with smart automation. Energy-efficient with high production output.",
      keywords: "metal folder machine"
    }
  ]

  const features = [
    {
      icon: <SettingsIcon />,
      title: "Advanced Technology",
      description: "State-of-the-art control systems and precision engineering for optimal performance."
    },
    {
      icon: <ShieldIcon />,
      title: "Durability & Reliability",
      description: "Built with premium materials to withstand demanding industrial environments."
    },
    {
      icon: <UsersIcon />,
      title: "Expert Support",
      description: "Dedicated technical team providing installation, training, and ongoing support."
    },
    {
      icon: <WrenchIcon />,
      title: "Custom Solutions",
      description: "Tailored machinery solutions to meet your specific production requirements."
    }
  ]

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
            <button className="nav-link" onClick={() => scrollToSection('home')}>Home</button>
            <button className="nav-link" onClick={() => scrollToSection('products')}>Products</button>
            <button className="nav-link" onClick={() => scrollToSection('features')}>Features</button>
            <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
            <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>

          <button className="cta-button header-cta" onClick={() => scrollToSection('contact')}>
            Get Quote
          </button>

          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Precision <span className="hero-accent">Sheet Metal</span> Folding Solutions
          </h1>
          <p className="hero-subtitle">
            Leading manufacturer of industrial folding machines. From double folding machines to metal folder solutions, we deliver excellence in sheet metal fabrication.
          </p>
          <div className="hero-buttons">
            <button className="cta-button cta-primary" onClick={() => scrollToSection('products')}>
              Explore Products
            </button>
            <button className="cta-button cta-secondary" onClick={() => scrollToSection('contact')}>
              Contact Us
            </button>
          </div>
        </div>
        <div className="hero-scroll-indicator" onClick={() => scrollToSection('products')}>
          <span>Scroll to explore</span>
          <ChevronDown />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Discover our comprehensive range of sheet metal folding machines designed for precision, durability, and efficiency.
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
                  <button className="product-link" onClick={() => scrollToSection('contact')}>
                    Request Quote
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </article>
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
              We combine decades of industry experience with cutting-edge technology to deliver exceptional machinery solutions.
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
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
        <div className="section-container">
          <div className="about-grid">
            <div className="about-image">
              <div className="about-image-placeholder">
                <FactoryIcon />
              </div>
            </div>
            <div className="about-content">
              <h2 className="section-title">Excellence in Metal Fabrication</h2>
              <p className="about-text">
                At ARTITECT MACHINERY, we specialize in manufacturing premium sheet metal folding machines that set industry standards for precision and reliability. Our commitment to quality craftsmanship and innovation has made us a trusted partner for businesses worldwide.
              </p>
              <p className="about-text">
                From double folding machines to specialized metal folder equipment, our products are engineered to deliver exceptional performance in demanding industrial environments. We understand that every operation has unique requirements, which is why we offer tailored solutions and comprehensive support.
              </p>
              
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Countries Served</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Machines Installed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to find the perfect folding machine for your needs? Contact our expert team today.
            </p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-info-item">
                <h3>Visit Our Facility</h3>
                <p>123 Industrial Avenue<br />Manufacturing District<br />City, State 12345</p>
              </div>
              <div className="contact-info-item">
                <h3>Contact Information</h3>
                <p>Email: info@artitectmachinery.com<br />Phone: +1 (555) 123-4567</p>
              </div>
              <div className="contact-info-item">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell us about your requirements..." required></textarea>
              </div>
              <button type="submit" className="cta-button cta-primary form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="logo">
                <span className="logo-text">ARTITECT</span>
                <span className="logo-subtext">MACHINERY</span>
              </div>
              <p className="footer-description">
                Leading manufacturer of precision sheet metal folding machines. Quality engineering for industrial excellence.
              </p>
            </div>
            
            <div className="footer-links">
              <h4>Products</h4>
              <ul>
                <li><button onClick={() => scrollToSection('products')}>Double Folding Machine</button></li>
                <li><button onClick={() => scrollToSection('products')}>Double Folder</button></li>
                <li><button onClick={() => scrollToSection('products')}>Sheet Metal Folder</button></li>
                <li><button onClick={() => scrollToSection('products')}>Metal Folding Machine</button></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
                <li><button onClick={() => scrollToSection('features')}>Features</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Support</h4>
              <ul>
                <li><button onClick={() => scrollToSection('contact')}>Get Quote</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Technical Support</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Service & Maintenance</button></li>
              </ul>
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
