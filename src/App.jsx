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

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
)

// Products data
const products = [
  {
    id: 1,
    name: "Double Folding Machine",
    description: "High-precision dual-axis folding for complex sheet metal operations with automated control systems.",
    keywords: "double folding machine"
  },
  {
    id: 2,
    name: "Double Folder",
    description: "Industrial-grade double folder with synchronized folding mechanism for consistent results.",
    keywords: "double folder"
  },
  {
    id: 3,
    name: "Sheet Metal Folder",
    description: "Professional sheet metal folding equipment designed for accuracy and repeatability.",
    keywords: "sheet metal folder"
  },
  {
    id: 4,
    name: "Sheet Metal Folding Machine",
    description: "Advanced CNC-controlled folding machine with touch screen interface and programmable sequences.",
    keywords: "sheet metal folding machine"
  },
  {
    id: 5,
    name: "Metal Folder",
    description: "Heavy-duty metal folder capable of handling various thicknesses with precision bending.",
    keywords: "metal folder"
  },
  {
    id: 6,
    name: "Metal Folder Machine",
    description: "Versatile folder machine with adjustable angles and automatic material feeding system.",
    keywords: "metal folder machine"
  },
  {
    id: 7,
    name: "Metal Folding Machine",
    description: "Robust metal folding machine with hydraulic drive and digital angle measurement.",
    keywords: "metal folding machine"
  }
]

// Features data
const features = [
  {
    icon: <SettingsIcon />,
    title: "Advanced Technology",
    description: "State-of-the-art CNC controls and precision engineering ensure accurate, repeatable results."
  },
  {
    icon: <ShieldIcon />,
    title: "Durable Construction",
    description: "Built with high-quality materials and components for long-lasting industrial performance."
  },
  {
    icon: <ClockIcon />,
    title: "Efficient Operations",
    description: "Optimized workflows and automated features maximize productivity and reduce downtime."
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
            Precision Sheet Metal<br />
            <span className="hero-title-accent">Folding Solutions</span>
          </h1>
          <p className="hero-subtitle">
            Industry-leading folding machines engineered for accuracy, durability, and efficiency. 
            Trusted by manufacturers worldwide since 1985.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('products')}>
              View Products
              <ArrowRight />
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Get Quote
            </button>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <button onClick={() => scrollToSection('products')}>
            <ChevronDown />
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Products</span>
            <h2 className="section-title">Premium Folding Equipment</h2>
            <p className="section-description">
              Discover our comprehensive range of sheet metal folding machines, 
              engineered to meet the highest industrial standards.
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
                    Learn More <ArrowRight />
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
            <h2 className="section-title">Built for Performance</h2>
            <p className="section-description">
              Our commitment to quality and innovation sets us apart in the industry.
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
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <span className="section-tag">About ARTITECT</span>
              <h2 className="section-title">Decades of Excellence in Metal Fabrication</h2>
              <p>
                Since 1985, ARTITECT MACHINERY has been at the forefront of sheet metal 
                folding technology. Our commitment to precision engineering and customer 
                satisfaction has made us a trusted partner for manufacturers around the world.
              </p>
              <p>
                We specialize in designing and manufacturing high-quality folding machines 
                that deliver exceptional performance, reliability, and longevity. Our team 
                of experienced engineers continuously innovates to meet the evolving needs 
                of the metal fabrication industry.
              </p>
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
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Contact Us</span>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-description">
              Ready to find the perfect folding machine for your needs? 
              Contact our expert team today.
            </p>
          </div>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject">
                <option value="">Select a product interest</option>
                <option value="double-folding-machine">Double Folding Machine</option>
                <option value="double-folder">Double Folder</option>
                <option value="sheet-metal-folder">Sheet Metal Folder</option>
                <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                <option value="metal-folder">Metal Folder</option>
                <option value="metal-folder-machine">Metal Folder Machine</option>
                <option value="metal-folding-machine">Metal Folding Machine</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell us about your requirements..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              Send Message
              <ArrowRight />
            </button>
          </form>
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
              <p className="footer-tagline">
                Leading manufacturer of precision sheet metal folding machines since 1985.
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Products</h4>
                <ul>
                  <li><button onClick={() => scrollToSection('products')}>Double Folding Machine</button></li>
                  <li><button onClick={() => scrollToSection('products')}>Sheet Metal Folder</button></li>
                  <li><button onClick={() => scrollToSection('products')}>Metal Folding Machine</button></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
                  <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Contact Info</h4>
                <ul>
                  <li>info@artitectmachinery.com</li>
                  <li>+1 (555) 123-4567</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
