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

const CpuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="14" x2="23" y2="14"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="14" x2="4" y2="14"></line>
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
    <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"></path>
    <circle cx="7.5" cy="17.5" r="2.5"></circle>
    <circle cx="17.5" cy="17.5" r="2.5"></circle>
  </svg>
)

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
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

// Product categories data
const productCategories = [
  {
    id: 1,
    title: "Double Folding Machine",
    description: "Advanced dual-axis folding technology for precise sheet metal bending with superior accuracy.",
    icon: <FactoryIcon />
  },
  {
    id: 2,
    title: "Double Folder",
    description: "High-capacity double folder designed for continuous industrial production workflows.",
    icon: <SettingsIcon />
  },
  {
    id: 3,
    title: "Sheet Metal Folder",
    description: "Versatile folder machines optimized for various sheet metal thicknesses and materials.",
    icon: <CpuIcon />
  },
  {
    id: 4,
    title: "Sheet Metal Folding Machine",
    description: "Industrial-grade folding machines engineered for heavy-duty sheet metal processing.",
    icon: <FactoryIcon />
  },
  {
    id: 5,
    title: "Metal Folder",
    description: "Precision-engineered folders delivering clean folds on aluminum, steel, and alloy metals.",
    icon: <SettingsIcon />
  },
  {
    id: 6,
    title: "Metal Folding Machine",
    description: "Robust machinery built to handle demanding metal fabrication requirements.",
    icon: <CpuIcon />
  }
]

// Featured products
const featuredProducts = [
  {
    id: 1,
    name: "ATF-2000 Double Folder",
    description: "Professional double folding machine with CNC control",
    specs: ["Max bending length: 2000mm", "Bending capacity: 2.0mm", "Motor: 3HP"]
  },
  {
    id: 2,
    name: "ATF-2500 Heavy Duty",
    description: "Industrial sheet metal folding machine",
    specs: ["Max bending length: 2500mm", "Bending capacity: 3.0mm", "Motor: 5HP"]
  },
  {
    id: 3,
    name: "ATF-3200 Pro Series",
    description: "Advanced metal folding with precision control",
    specs: ["Max bending length: 3200mm", "Bending capacity: 4.0mm", "Motor: 7.5HP"]
  }
]

// Features data
const features = [
  {
    title: "Precision Engineering",
    description: "Our machines are manufactured with tight tolerances to ensure accurate, repeatable bends every time. Advanced control systems allow for precise adjustments.",
    icon: <SettingsIcon />
  },
  {
    title: "Durable Construction",
    description: "Built with high-quality steel and components, our folding machines are designed to withstand years of heavy industrial use with minimal maintenance.",
    icon: <ShieldIcon />
  },
  {
    title: "Global Shipping",
    description: "We provide worldwide shipping with professional installation and training services to ensure your team can operate the equipment effectively.",
    icon: <TruckIcon />
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
        <div className="container header-content">
          <div className="logo">
            <span className="logo-text">ARTITECT</span>
            <span className="logo-subtext">MACHINERY</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
            <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary">Contact Us</button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="nav-mobile">
            <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
            <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary">Contact Us</button>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <h1 className="hero-title">
            Premium <span className="text-accent">Sheet Metal</span> Folding Machines
          </h1>
          <p className="hero-subtitle">
            ARTITECT MACHINERY delivers industrial-grade folding solutions. From double folding machines to metal folder equipment, we manufacture precision machinery for metal fabrication professionals worldwide.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('products')} className="btn btn-primary btn-lg">
              View Products <ArrowRight />
            </button>
            <button onClick={() => scrollToSection('about')} className="btn btn-outline btn-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Comprehensive range of sheet metal folding and folder machines engineered for industrial excellence
            </p>
          </div>
          <div className="products-grid">
            {productCategories.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-icon">{product.icon}</div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Machines</h2>
            <p className="section-subtitle">
              Our most popular sheet metal folding machines trusted by fabricators worldwide
            </p>
          </div>
          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="featured-card">
                <div className="featured-image">
                  <div className="featured-image-placeholder">
                    <FactoryIcon />
                  </div>
                </div>
                <div className="featured-content">
                  <h3 className="featured-title">{product.name}</h3>
                  <p className="featured-description">{product.description}</p>
                  <ul className="featured-specs">
                    {product.specs.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                  <button className="btn btn-outline">
                    Request Quote <ArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose ARTITECT</h2>
            <p className="section-subtitle">
              We combine engineering excellence with customer-focused service
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
      <section id="about" className="section section-dark">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About ARTITECT MACHINERY</h2>
              <p>
                With years of experience in industrial metal fabrication equipment, ARTITECT MACHINERY has established itself as a trusted manufacturer of sheet metal folding machines. Our commitment to quality, innovation, and customer satisfaction sets us apart in the industry.
              </p>
              <p>
                We specialize in manufacturing double folding machines, double folders, and sheet metal folding equipment that meets the highest standards of precision and durability. Our products are exported to fabricators worldwide who demand reliable, high-performance machinery.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Countries Served</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Machines Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to upgrade your metal fabrication capabilities? Contact us today for a consultation.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon"><PhoneIcon /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MailIcon /></div>
                <div>
                  <h4>Email</h4>
                  <p>info@artitectmachinery.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MapPinIcon /></div>
                <div>
                  <h4>Location</h4>
                  <p>Industrial District, Manufacturing City</p>
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
              <button type="submit" className="btn btn-primary btn-full">
                Send Message <ArrowRight />
              </button>
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
              <p>Premium sheet metal folding machines for industrial fabrication professionals.</p>
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
