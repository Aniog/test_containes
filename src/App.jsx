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
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
)

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
)

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 17h4V5H2v12h3"></path>
    <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"></path>
    <path d="M14 17h1"></path>
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
    description: "High-precision double bending capability for complex sheet metal fabrication. Features dual-axis control and automatic material feeding.",
    features: ["Double bending capability", "Automatic feeding", "CNC control system", "High precision"]
  },
  {
    id: 2,
    name: "Double Folder",
    description: "Industrial-grade double folder designed for continuous operation in manufacturing environments. Robust construction with minimal maintenance.",
    features: ["Continuous operation", "Robust construction", "Low maintenance", "Variable speed control"]
  },
  {
    id: 3,
    name: "Sheet Metal Folder",
    description: "Versatile sheet metal folding solution suitable for various thicknesses. Adjustable bending angles with digital readouts.",
    features: ["Adjustable angles", "Digital readouts", "Multiple material support", "Quick change tooling"]
  },
  {
    id: 4,
    name: "Sheet Metal Folding Machine",
    description: "Heavy-duty folding machine engineered for high-volume production. Features hydraulic clamping and precision guides.",
    features: ["Hydraulic clamping", "Precision guides", "High volume capable", "Energy efficient"]
  },
  {
    id: 5,
    name: "Metal Folder",
    description: "Professional metal folding equipment with intuitive controls. Ideal for workshops and small to medium manufacturing operations.",
    features: ["Intuitive controls", "Compact design", "Easy operation", "Quick setup"]
  },
  {
    id: 6,
    name: "Metal Folder Machine",
    description: "Advanced metal folder with programmable bending sequences. Memory function stores up to 100 different bending programs.",
    features: ["Programmable sequences", "Memory function", "100 program storage", "Touch screen interface"]
  },
  {
    id: 7,
    name: "Metal Folding Machine",
    description: "Premium metal folding machine with laser-guided accuracy. Real-time monitoring and adaptive bending force control.",
    features: ["Laser guidance", "Real-time monitoring", "Adaptive force control", "Premium finish"]
  }
]

// Features data
const features = [
  {
    icon: <SettingsIcon />,
    title: "Advanced Technology",
    description: "State-of-the-art CNC systems and precision engineering ensure accurate bending results every time."
  },
  {
    icon: <ShieldIcon />,
    title: "Durable Construction",
    description: "Built with high-grade steel and components designed for years of reliable industrial use."
  },
  {
    icon: <TruckIcon />,
    title: "Global Shipping",
    description: "We deliver and install our machines worldwide with professional setup and training included."
  },
  {
    icon: <FactoryIcon />,
    title: "Custom Solutions",
    description: "Tailored machinery solutions to meet your specific production requirements and constraints."
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
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">ARTITECT</span>
            <span className="logo-subtext">MACHINERY</span>
          </div>
          
          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Home</a>
            <a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products') }}>Products</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features') }}>Features</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Precision <span className="accent">Sheet Metal</span> Folding Solutions
          </h1>
          <p className="hero-subtitle">
            World-class double folding machines and metal working equipment for industrial manufacturing. 
            Engineered for accuracy, built for performance.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('products')}>
              View Products
              <ArrowRightIcon />
            </button>
            <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
              Get Quote
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
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Comprehensive range of sheet metal folding machines designed for industrial excellence
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
                  <ul className="product-features">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="product-btn">
                    Learn More
                    <ArrowRightIcon />
                  </button>
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
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              Industry-leading expertise and commitment to quality in every machine we manufacture
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

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="contact-title">Ready to Transform Your Production?</h2>
              <p className="contact-subtitle">
                Contact our expert team for personalized recommendations and competitive quotes on our sheet metal folding machines.
              </p>
              <div className="contact-details">
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
                  <span>1234 Industrial Way, Manufacturing City, MC 56789</span>
                </div>
              </div>
            </div>
            <div className="contact-cta">
              <button className="btn btn-primary btn-large">
                Request a Quote
                <ArrowRightIcon />
              </button>
              <p className="cta-note">Response within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-text">ARTITECT</span>
                <span className="logo-subtext">MACHINERY</span>
              </div>
              <p className="footer-tagline">
                Leading manufacturer of precision sheet metal folding machines since 1985.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Products</h4>
                <a href="#products">Double Folding Machine</a>
                <a href="#products">Sheet Metal Folder</a>
                <a href="#products">Metal Folder</a>
                <a href="#products">Metal Folding Machine</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#home">About Us</a>
                <a href="#features">Services</a>
                <a href="#contact">Contact</a>
                <a href="#home">Careers</a>
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
