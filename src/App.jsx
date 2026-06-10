import { useState, useEffect } from 'react'
import './App.css'

// Header Component
const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">ARTITECT</span>
          <span className="logo-subtext">MACHINERY</span>
        </div>
        <nav className="nav">
          <a href="#products" className="nav-link">Products</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  )
}

// Hero Component
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Precision Metal Folding<br />
          <span className="hero-title-accent">Solutions</span>
        </h1>
        <p className="hero-subtitle">
          Industry-leading double folding machines and sheet metal folding equipment. 
          Engineered for precision, built for performance.
        </p>
        <div className="hero-cta">
          <a href="#products" className="btn btn-primary">View Products</a>
          <a href="#contact" className="btn btn-secondary">Get Quote</a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

// Product Card Component
const ProductCard = ({ product, index }) => {
  return (
    <div className="product-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="product-image">
        <div className="product-image-placeholder">
          <svg viewBox="0 0 100 100" className="product-icon">
            <rect x="15" y="30" width="70" height="40" fill="none" stroke="currentColor" strokeWidth="2"/>
            <line x1="15" y1="40" x2="85" y2="40" stroke="currentColor" strokeWidth="2"/>
            <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="2"/>
            <line x1="15" y1="60" x2="85" y2="60" stroke="currentColor" strokeWidth="2"/>
            <circle cx="75" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-specs">
          {product.specs.map((spec, i) => (
            <span key={i} className="spec-tag">{spec}</span>
          ))}
        </div>
        <a href="#contact" className="product-cta">Request Quote</a>
      </div>
    </div>
  )
}

// Products Section
const Products = () => {
  const products = [
    {
      name: "Double Folding Machine DFM-2000",
      description: "High-precision double folding machine for complex sheet metal operations. Features dual-axis control and automatic material feeding.",
      specs: ["Max Length: 2000mm", "Max Thickness: 3mm", "CNC Control"]
    },
    {
      name: "Double Folder DF-1500",
      description: "Professional-grade double folder with advanced bending accuracy. Ideal for high-volume production environments.",
      specs: ["Max Length: 1500mm", "Max Thickness: 2.5mm", "Auto-Feeding"]
    },
    {
      name: "Sheet Metal Folder SMF-2500",
      description: "Heavy-duty sheet metal folder designed for industrial applications. Superior durability and consistent performance.",
      specs: ["Max Length: 2500mm", "Max Thickness: 4mm", "Hydraulic Drive"]
    },
    {
      name: "Metal Folding Machine MFM-1800",
      description: "Versatile metal folding machine with programmable bending sequences. Perfect for custom fabrication shops.",
      specs: ["Max Length: 1800mm", "Max Thickness: 3mm", "Touch Screen"]
    }
  ]

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Discover our range of precision-engineered folding machines designed to meet the demands of modern metal fabrication.
          </p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Feature Card Component
const FeatureCard = ({ feature, index }) => {
  return (
    <div className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="feature-icon">
        {feature.icon}
      </div>
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-description">{feature.description}</p>
    </div>
  )
}

// Features Section
const Features = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Precision Engineering",
      description: "Our machines are engineered with tight tolerances to ensure accurate bends every time, reducing material waste and rework."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      ),
      title: "Energy Efficient",
      description: "Advanced power management systems reduce energy consumption without compromising performance, lowering your operating costs."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8M12 17v4"/>
        </svg>
      ),
      title: "Smart Controls",
      description: "Intuitive CNC controls with touch-screen interfaces make operation simple while providing advanced programming capabilities."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      title: "Durable Construction",
      description: "Built with high-grade steel and quality components, our machines are designed for years of reliable service in demanding environments."
    }
  ]

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We combine decades of industry experience with cutting-edge technology to deliver exceptional folding solutions.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

// About Section
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About ARTITECT MACHINERY</h2>
            <p className="about-description">
              With over 20 years of experience in the metal fabrication industry, ARTITECT MACHINERY has established itself as a trusted name in sheet metal folding technology. Our commitment to quality, innovation, and customer satisfaction sets us apart.
            </p>
            <p className="about-description">
              We specialize in manufacturing precision double folding machines, sheet metal folders, and metal folding equipment that meet the highest industry standards. Every machine is built with meticulous attention to detail, ensuring reliability and performance in demanding production environments.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">20+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Machines Installed</span>
              </div>
              <div className="stat">
                <span className="stat-number">30+</span>
                <span className="stat-label">Countries Served</span>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-image-placeholder">
              <svg viewBox="0 0 200 200" className="about-icon">
                <rect x="40" y="60" width="120" height="80" fill="none" stroke="currentColor" strokeWidth="2"/>
                <line x1="40" y1="80" x2="160" y2="80" stroke="currentColor" strokeWidth="2"/>
                <line x1="40" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="2"/>
                <line x1="40" y1="120" x2="160" y2="120" stroke="currentColor" strokeWidth="2"/>
                <circle cx="140" cy="100" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="140" cy="100" r="5" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to find the perfect folding machine for your needs? Contact us today for a free consultation and quote.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <p>info@artitectmachinery.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h4>Location</h4>
                <p>Industrial District, Manufacturing City</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="form-success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="success-icon">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <path d="M22 4L12 14.01l-3-3"/>
                </svg>
                <h3>Thank You!</h3>
                <p>We've received your inquiry and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-text">ARTITECT</span>
              <span className="logo-subtext">MACHINERY</span>
            </div>
            <p className="footer-tagline">Precision Metal Folding Solutions</p>
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
            <div className="footer-column">
              <h4>Contact</h4>
              <p>info@artitectmachinery.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 ARTITECT MACHINERY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Products />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
