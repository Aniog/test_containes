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

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 17h4V5H2v12h3"></path>
    <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"></path>
    <circle cx="7.5" cy="17.5" r="2.5"></circle>
    <circle cx="17.5" cy="17.5" r="2.5"></circle>
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

// Products data
const products = [
  {
    id: 1,
    name: "Double Folding Machine",
    description: "Precision-engineered for efficient double-fold operations on sheet metal. Ideal for high-volume production with consistent accuracy.",
    keywords: "double folding machine"
  },
  {
    id: 2,
    name: "Double Folder",
    description: "Advanced dual-bending system designed for complex sheet metal profiles. Delivers clean, precise folds with minimal material stress.",
    keywords: "double folder"
  },
  {
    id: 3,
    name: "Sheet Metal Folder",
    description: "Versatile folding solution for various sheet metal thicknesses. User-friendly controls with programmable bending sequences.",
    keywords: "sheet metal folder"
  },
  {
    id: 4,
    name: "Sheet Metal Folding Machine",
    description: "Industrial-grade folding machine with automated positioning. High-speed operation with exceptional fold accuracy.",
    keywords: "sheet metal folding machine"
  },
  {
    id: 5,
    name: "Metal Folder",
    description: "Robust construction for heavy-duty metal folding applications. Adjustable angles and pressure settings for diverse materials.",
    keywords: "metal folder"
  },
  {
    id: 6,
    name: "Metal Folder Machine",
    description: "Computer-controlled folding system with digital precision. Memory function for repeatable production runs.",
    keywords: "metal folder machine"
  }
]

// Features data
const features = [
  {
    icon: <SettingsIcon />,
    title: "Precision Engineering",
    description: "Advanced technology ensures accurate bends with tolerances as low as 0.5mm for consistent quality."
  },
  {
    icon: <ShieldIcon />,
    title: "Durable Construction",
    description: "Built with high-grade steel and components designed to withstand demanding industrial environments."
  },
  {
    icon: <TruckIcon />,
    title: "Global Shipping",
    description: "Worldwide delivery with professional installation and setup services available in all major markets."
  },
  {
    icon: <FactoryIcon />,
    title: "Custom Solutions",
    description: "Tailored machinery configurations to meet your specific production requirements and space constraints."
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
            <span className="logo-accent">MACHINERY</span>
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
            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Premium <span className="hero-highlight">Sheet Metal</span> Folding Solutions
          </h1>
          <p className="hero-subtitle">
            Industry-leading folding machines engineered for precision, durability, and efficiency. 
            Transform your metal fabrication with ARTITECT machinery.
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
        <div className="hero-scroll-indicator">
          <span>Scroll to discover</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Discover our comprehensive range of sheet metal folding machines, 
              designed to meet the highest industrial standards.
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
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
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
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Why Choose ARTITECT</h2>
            <p className="section-subtitle">
              We combine decades of expertise with cutting-edge technology to deliver 
              machinery that exceeds expectations.
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
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">Excellence in Metal Fabrication</h2>
              <p className="about-text">
                For over 20 years, ARTITECT MACHINERY has been at the forefront of sheet metal 
                folding technology. Our commitment to quality, innovation, and customer satisfaction 
                has made us a trusted partner for fabricators worldwide.
              </p>
              <p className="about-text">
                Every machine we produce undergoes rigorous testing to ensure it meets our exacting 
                standards. From concept to delivery, we work closely with our clients to provide 
                solutions that enhance their productivity and profitability.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">20+</span>
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
            <div className="about-image">
              <div className="about-image-placeholder">
                <FactoryIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="contact-content">
            <h2 className="contact-title">Ready to Transform Your Production?</h2>
            <p className="contact-subtitle">
              Contact our expert team today for personalized recommendations and competitive quotes.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <PhoneIcon />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MailIcon />
                <span>sales@artitectmachinery.com</span>
              </div>
              <div className="contact-item">
                <MapPinIcon />
                <span>Industrial District, Manufacturing City, MC 12345</span>
              </div>
            </div>
            <button className="cta-button cta-primary">Request a Quote</button>
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
                <span className="logo-accent">MACHINERY</span>
              </div>
              <p className="footer-description">
                Leading manufacturer of precision sheet metal folding machines 
                for industrial applications worldwide.
              </p>
            </div>
            
            <div className="footer-links">
              <h4 className="footer-heading">Products</h4>
              <ul>
                <li><a href="#products">Double Folding Machine</a></li>
                <li><a href="#products">Double Folder</a></li>
                <li><a href="#products">Sheet Metal Folder</a></li>
                <li><a href="#products">Metal Folder Machine</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4 className="footer-heading">Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4 className="footer-heading">Support</h4>
              <ul>
                <li><a href="#">Technical Support</a></li>
                <li><a href="#">Parts & Service</a></li>
                <li><a href="#">Training</a></li>
                <li><a href="#">Documentation</a></li>
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
