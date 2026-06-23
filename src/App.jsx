import { useState, useEffect } from 'react'
import './App.css'

// Icons
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
)

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const FactoryIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20h20"></path>
    <path d="M5 20V8l4-4v16"></path>
    <path d="M13 20V4l6 4v12"></path>
    <path d="M9 20v-4h6v4"></path>
  </svg>
)

const SettingsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
)

const ShieldIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
)

const UsersIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
)

// Product data
const products = [
  {
    id: 1,
    name: "Double Folding Machine",
    description: "High-precision double folding machine for complex sheet metal bending operations. Features dual-beam design for enhanced accuracy and efficiency.",
    keywords: ["double folding machine", "double folder"]
  },
  {
    id: 2,
    name: "Sheet Metal Folder",
    description: "Professional-grade sheet metal folder designed for precise bends and consistent results. Ideal for manufacturing and fabrication shops.",
    keywords: ["sheet metal folder", "sheet metal folding machine"]
  },
  {
    id: 3,
    name: "Metal Folder Machine",
    description: "Industrial metal folder machine with advanced control systems. Delivers exceptional bending accuracy for various metal thicknesses.",
    keywords: ["metal folder", "metal folder machine"]
  },
  {
    id: 4,
    name: "Metal Folding Machine",
    description: "Versatile metal folding machine suitable for aluminum, steel, and other metals. Robust construction for heavy-duty industrial use.",
    keywords: ["metal folding machine", "metal folder"]
  }
]

// Features data
const features = [
  {
    icon: <SettingsIcon />,
    title: "Precision Engineering",
    description: "Our machines are built with exceptional accuracy to ensure perfect bends every time."
  },
  {
    icon: <ShieldIcon />,
    title: "Durable Construction",
    description: "Industrial-grade materials and components for long-lasting performance."
  },
  {
    icon: <UsersIcon />,
    title: "Expert Support",
    description: "Dedicated technical support and training to maximize your productivity."
  },
  {
    icon: <FactoryIcon />,
    title: "Custom Solutions",
    description: "Tailored configurations to meet your specific production requirements."
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
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__container">
          <div className="header__logo">
            <span className="header__logo-text">ARTITECT</span>
            <span className="header__logo-sub">MACHINERY</span>
          </div>
          
          <nav className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`}>
            <button className="header__nav-link" onClick={() => scrollToSection('products')}>Products</button>
            <button className="header__nav-link" onClick={() => scrollToSection('features')}>Features</button>
            <button className="header__nav-link" onClick={() => scrollToSection('about')}>About</button>
            <button className="header__nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>

          <button 
            className="header__cta"
            onClick={() => scrollToSection('contact')}
          >
            Get Quote
          </button>

          <button 
            className="header__mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero__background">
          <div className="hero__pattern"></div>
        </div>
        <div className="container hero__container">
          <div className="hero__content">
            <h1 className="hero__title">
              Premium <span className="hero__title-accent">Sheet Metal</span> Folding Solutions
            </h1>
            <p className="hero__subtitle">
              ARTITECT MACHINERY delivers industrial-grade double folding machines, metal folder machines, and sheet metal folding equipment engineered for precision and reliability.
            </p>
            <div className="hero__buttons">
              <button className="btn btn--primary" onClick={() => scrollToSection('products')}>
                View Products
                <ArrowRightIcon />
              </button>
              <button className="btn btn--secondary" onClick={() => scrollToSection('contact')}>
                Contact Us
              </button>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__image-placeholder">
              <FactoryIcon />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products section" id="products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Industry-leading sheet metal folding machines designed for precision and durability
            </p>
          </div>
          
          <div className="products__grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-card__image">
                  <div className="product-card__image-placeholder">
                    <FactoryIcon />
                  </div>
                </div>
                <div className="product-card__content">
                  <h3 className="product-card__title">{product.name}</h3>
                  <p className="product-card__description">{product.description}</p>
                  <button className="product-card__link" onClick={() => scrollToSection('contact')}>
                    Request Details
                    <ArrowRightIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section" id="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose ARTITECT</h2>
            <p className="section-subtitle">
              We combine advanced engineering with decades of industry expertise
            </p>
          </div>
          
          <div className="features__grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-card__icon">
                  {feature.icon}
                </div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about section" id="about">
        <div className="container">
          <div className="about__grid">
            <div className="about__visual">
              <div className="about__image-placeholder">
                <FactoryIcon />
              </div>
            </div>
            <div className="about__content">
              <h2 className="section-title">About ARTITECT MACHINERY</h2>
              <p className="about__text">
                With years of experience in the sheet metal machinery industry, ARTITECT MACHINERY has established itself as a trusted name in manufacturing high-quality folding machines. Our commitment to precision, durability, and customer satisfaction sets us apart.
              </p>
              <p className="about__text">
                We specialize in double folding machines, metal folder machines, and sheet metal folding equipment that meets the demanding standards of modern manufacturing. Every machine is engineered to deliver exceptional performance and reliability.
              </p>
              
              <div className="about__stats">
                <div className="about__stat">
                  <span className="about__stat-number">500+</span>
                  <span className="about__stat-label">Machines Delivered</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-number">15+</span>
                  <span className="about__stat-label">Years Experience</span>
                </div>
                <div className="about__stat">
                  <span className="about__stat-number">98%</span>
                  <span className="about__stat-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact section" id="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to find the perfect folding machine for your needs? Contact us today.
            </p>
          </div>
          
          <div className="contact__wrapper">
            <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__label">Name</label>
                  <input type="text" id="name" className="contact__input" placeholder="Your name" />
                </div>
                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__label">Email</label>
                  <input type="email" id="email" className="contact__input" placeholder="your@email.com" />
                </div>
              </div>
              <div className="contact__form-group">
                <label htmlFor="phone" className="contact__label">Phone</label>
                <input type="tel" id="phone" className="contact__input" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="contact__form-group">
                <label htmlFor="message" className="contact__label">Message</label>
                <textarea id="message" className="contact__textarea" rows="5" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button type="submit" className="btn btn--primary btn--full">
                Send Message
                <ArrowRightIcon />
              </button>
            </form>
            
            <div className="contact__info">
              <div className="contact__info-item">
                <h4>Email</h4>
                <p>info@artitectmachinery.com</p>
              </div>
              <div className="contact__info-item">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="contact__info-item">
                <h4>Address</h4>
                <p>123 Industrial Way<br />Manufacturing City, MC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <div className="footer__logo">
                <span className="footer__logo-text">ARTITECT</span>
                <span className="footer__logo-sub">MACHINERY</span>
              </div>
              <p className="footer__tagline">Premium sheet metal folding solutions since 2009</p>
            </div>
            
            <div className="footer__links">
              <h4>Products</h4>
              <ul>
                <li><button onClick={() => scrollToSection('products')}>Double Folding Machine</button></li>
                <li><button onClick={() => scrollToSection('products')}>Sheet Metal Folder</button></li>
                <li><button onClick={() => scrollToSection('products')}>Metal Folder Machine</button></li>
                <li><button onClick={() => scrollToSection('products')}>Metal Folding Machine</button></li>
              </ul>
            </div>
            
            <div className="footer__links">
              <h4>Company</h4>
              <ul>
                <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </div>
          </div>
          
          <div className="footer__bottom">
            <p>&copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
