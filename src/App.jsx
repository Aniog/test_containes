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

const ArrowRight = () => (
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

// Products data
const products = [
  {
    id: 1,
    name: "Double Folding Machine",
    description: "High-precision dual-axis folding system for complex sheet metal operations. Features automatic material handling and programmable bending sequences.",
    keywords: "double folding machine"
  },
  {
    id: 2,
    name: "Double Folder",
    description: "Industrial-grade double folder with advanced control systems. Designed for high-volume production with exceptional accuracy and repeatability.",
    keywords: "double folder"
  },
  {
    id: 3,
    name: "Sheet Metal Folder",
    description: "Versatile sheet metal folding machine suitable for various gauge materials. Compact design with powerful performance capabilities.",
    keywords: "sheet metal folder"
  },
  {
    id: 4,
    name: "Sheet Metal Folding Machine",
    description: "Professional sheet metal folding equipment with CNC control. Features intuitive programming and fast setup times for increased productivity.",
    keywords: "sheet metal folding machine"
  },
  {
    id: 5,
    name: "Metal Folder",
    description: "Heavy-duty metal folder engineered for demanding industrial applications. Robust construction ensures long-term reliability.",
    keywords: "metal folder"
  },
  {
    id: 6,
    name: "Metal Folder Machine",
    description: "Advanced metal folder machine with precision guides and hydraulic clamping. Ideal for aerospace, automotive, and architectural metalwork.",
    keywords: "metal folder machine"
  },
  {
    id: 7,
    name: "Metal Folding Machine",
    description: "Premium metal folding machine with intelligent control systems. Delivers consistent, accurate folds across a wide range of material thicknesses.",
    keywords: "metal folding machine"
  }
]

// Features data
const features = [
  {
    icon: <SettingsIcon />,
    title: "Advanced Technology",
    description: "State-of-the-art control systems and precision engineering ensure optimal performance and accuracy in every operation."
  },
  {
    icon: <AwardIcon />,
    title: "Quality Certified",
    description: "All machines meet international quality standards and come with comprehensive certification and warranty coverage."
  },
  {
    icon: <UsersIcon />,
    title: "Expert Support",
    description: "Our dedicated team provides installation, training, and ongoing technical support to maximize your investment."
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
            <button className="nav-link" onClick={() => scrollToSection('products')}>Products</button>
            <button className="nav-link" onClick={() => scrollToSection('features')}>Features</button>
            <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
            <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Precision <span className="accent">Metal Folding</span> Solutions
          </h1>
          <p className="hero-subtitle">
            World-class sheet metal folding machines engineered for excellence. 
            Trusted by industries worldwide for superior quality and reliability.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('products')}>
              Explore Products
              <ArrowRight />
            </button>
            <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
              Get Quote
            </button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Machines Installed</span>
          </div>
          <div className="stat">
            <span className="stat-number">30+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Countries Served</span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our <span className="accent">Products</span></h2>
            <p className="section-subtitle">
              Comprehensive range of sheet metal folding solutions designed to meet diverse industrial requirements
            </p>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <FactoryIcon />
                </div>
                <div className="product-content">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <button className="product-link">
                    Learn More <ArrowRight />
                  </button>
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
            <h2 className="section-title">Why Choose <span className="accent">ARTITECT</span></h2>
            <p className="section-subtitle">
              We combine innovation, quality, and customer-focused service to deliver exceptional value
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
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About <span className="accent">ARTITECT</span></h2>
              <p>
                With over 30 years of expertise in metalworking machinery, ARTITECT MACHINERY has established itself as a global leader in sheet metal folding technology. Our commitment to precision engineering and innovation has made us the preferred choice for manufacturers across aerospace, automotive, construction, and architectural industries.
              </p>
              <p>
                We specialize in manufacturing double folding machines, double folders, and sheet metal folding equipment that set the standard for quality, durability, and performance. Every machine is built with meticulous attention to detail and undergoes rigorous testing to ensure it meets our exacting standards.
              </p>
              <ul className="about-list">
                <li><CheckIcon /> ISO 9001:2015 Certified Manufacturing</li>
                <li><CheckIcon /> Customizable Solutions for Specific Needs</li>
                <li><CheckIcon /> Global Service Network</li>
                <li><CheckIcon /> Continuous Innovation & Improvement</li>
              </ul>
            </div>
            <div className="about-image">
              <div className="about-image-placeholder">
                <FactoryIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2 className="section-title">Get In <span className="accent">Touch</span></h2>
              <p>
                Ready to transform your metalworking capabilities? Contact our expert team for personalized consultation and competitive quotes.
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
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-text">ARTITECT</span>
                <span className="logo-subtext">MACHINERY</span>
              </div>
              <p className="footer-tagline">Precision Metal Folding Solutions Since 1994</p>
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
            <p>&copy; 2024 ARTITECT MACHINERY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
