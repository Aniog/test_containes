import { useState, useEffect } from 'react'
import './App.css'

// Product data
const products = [
  {
    id: 1,
    name: "Double Folding Machine",
    description: "High-precision dual-beam folding for complex sheet metal operations",
    features: ["Dual-beam system", "CNC control", "Auto tool change"],
    category: "double-folding"
  },
  {
    id: 2,
    name: "Double Folder",
    description: "Industrial-grade double folder for heavy-duty metalworking",
    features: ["Heavy duty construction", "Digital positioning", "High torque motor"],
    category: "double-folder"
  },
  {
    id: 3,
    name: "Sheet Metal Folder",
    description: "Professional sheet metal folding with exceptional accuracy",
    features: ["Precision guides", "Variable angle", "Quick setup"],
    category: "sheet-metal-folder"
  },
  {
    id: 4,
    name: "Sheet Metal Folding Machine",
    description: "Advanced folding technology for industrial applications",
    features: ["Computerized control", "Safety guards", "Energy efficient"],
    category: "sheet-metal-folding"
  },
  {
    id: 5,
    name: "Metal Folder",
    description: "Versatile metal folder for workshop and factory use",
    features: ["Robust frame", "Easy operation", "Low maintenance"],
    category: "metal-folder"
  },
  {
    id: 6,
    name: "Metal Folder Machine",
    description: "Automated metal folding with smart control systems",
    features: ["PLC control", "Touch screen", "Production tracking"],
    category: "metal-folder-machine"
  },
  {
    id: 7,
    name: "Metal Folding Machine",
    description: "Premium metal folding machine for manufacturing excellence",
    features: ["Industrial grade", "Customizable", "Warranty included"],
    category: "metal-folding"
  }
]

const features = [
  {
    icon: "precision",
    title: "Precision Engineering",
    description: "Our machines deliver accuracy within 0.1mm, ensuring perfect folds every time."
  },
  {
    icon: "durability",
    title: "Built to Last",
    description: "Industrial-grade components and robust construction for years of reliable service."
  },
  {
    icon: "support",
    title: "Expert Support",
    description: "24/7 technical support and comprehensive training for your operators."
  },
  {
    icon: "innovation",
    title: "Innovation",
    description: "Continuous R&D ensures you get the latest folding technology available."
  }
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
            <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link nav-cta">Contact</button>
          </nav>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Premium <span className="hero-accent">Sheet Metal</span> Folding Solutions
          </h1>
          <p className="hero-subtitle">
            Engineering excellence for metalworking professionals. 
            Discover our range of precision folding machines designed for industrial performance.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('products')} className="btn btn-primary">
              View Products
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
              Get Quote
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Machines Delivered</span>
            </div>
            <div className="stat">
              <span className="stat-number">25+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Products</span>
            <h2 className="section-title">Precision Sheet Metal Folding Machines</h2>
            <p className="section-subtitle">
              Industry-leading folding solutions engineered for maximum productivity and accuracy
            </p>
          </div>
          
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <div className="product-image-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                </div>
                <div className="product-content">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <ul className="product-features">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <button className="product-btn">Request Details</button>
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
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">The ARTITECT Advantage</h2>
            <p className="section-subtitle">
              We combine cutting-edge technology with unmatched expertise
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
                  {feature.icon === 'support' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  )}
                  {feature.icon === 'innovation' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
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
              <span className="section-tag">About ARTITECT</span>
              <h2 className="section-title">Engineering Excellence Since 1998</h2>
              <p className="about-text">
                For over 25 years, ARTITECT MACHINERY has been at the forefront of sheet metal 
                folding technology. Our commitment to precision, durability, and innovation has 
                made us a trusted partner for metalworking professionals worldwide.
              </p>
              <p className="about-text">
                We specialize in manufacturing premium folding machines that combine advanced 
                technology with practical design. Every machine is built to exacting standards 
                and undergoes rigorous testing to ensure optimal performance.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <span className="about-feature-icon">✓</span>
                  <span>ISO 9001 Certified</span>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon">✓</span>
                  <span>CE Marked Equipment</span>
                </div>
                <div className="about-feature">
                  <span className="about-feature-icon">✓</span>
                  <span>Global Service Network</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-image-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="2" y="7" width="20" height="14" rx="2"/>
                  <path d="M16 3v4M8 3v4"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <span className="section-tag">Get In Touch</span>
              <h2 className="section-title">Ready to Transform Your Production?</h2>
              <p className="contact-text">
                Contact our expert team today for personalized recommendations and competitive quotes.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Industrial Zone, Manufacturing City</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>sales@artitectmachinery.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <h3>Request a Quote</h3>
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
                  <select>
                    <option value="">Select Product Interest</option>
                    <option value="double-folding">Double Folding Machine</option>
                    <option value="double-folder">Double Folder</option>
                    <option value="sheet-metal-folder">Sheet Metal Folder</option>
                    <option value="sheet-metal-folding">Sheet Metal Folding Machine</option>
                    <option value="metal-folder">Metal Folder</option>
                    <option value="metal-folder-machine">Metal Folder Machine</option>
                    <option value="metal-folding">Metal Folding Machine</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full">Send Inquiry</button>
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
              <p className="footer-tagline">
                Premium sheet metal folding solutions for industrial professionals.
              </p>
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
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Technical Support</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Warranty Info</a></li>
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
