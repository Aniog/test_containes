import { useState, useEffect } from 'react'
import './App.css'
import { 
  Menu, X, ChevronDown, ChevronRight, Phone, Mail, MapPin, 
  CheckCircle, Cog, Shield, Truck, Wrench, Award, Users, Clock
} from 'lucide-react'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ['home', 'products', 'features', 'about', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const products = [
    {
      id: 1,
      name: 'Double Folding Machine',
      description: 'High-precision double-action folding for complex sheet metal operations with superior accuracy.',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop',
      features: ['CNC Control', '3m-4m Length', 'Multi-axis Bending']
    },
    {
      id: 2,
      name: 'Sheet Metal Folder',
      description: 'Professional-grade folder designed for high-volume production with minimal setup time.',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop',
      features: ['Fast Setup', 'Heavy Duty', 'Precision Guides']
    },
    {
      id: 3,
      name: 'Metal Folding Machine',
      description: 'Versatile folding solution for various metal types and thicknesses with intuitive controls.',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop',
      features: ['Variable Speed', 'Digital Display', 'Easy Operation']
    },
    {
      id: 4,
      name: 'Heavy Duty Folder',
      description: 'Industrial-strength machine built for the toughest sheet metal folding applications.',
      image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&h=400&fit=crop',
      features: ['Steel Construction', 'High Capacity', 'Long Life']
    }
  ]

  const features = [
    { icon: Cog, title: 'Precision Engineering', description: 'Advanced CNC technology ensures millimeter-accurate bends every time.' },
    { icon: Shield, title: 'Built to Last', description: 'Heavy-duty construction with premium materials for years of reliable service.' },
    { icon: Truck, title: 'Global Shipping', description: 'We deliver and install our machines worldwide with full technical support.' },
    { icon: Wrench, title: 'Easy Maintenance', description: 'Designed for simple maintenance with accessible components and clear documentation.' },
    { icon: Award, title: 'Quality Certified', description: 'ISO certified manufacturing with rigorous quality control at every stage.' },
    { icon: Users, title: 'Expert Support', description: 'Dedicated technical team available to assist with setup, training, and troubleshooting.' }
  ]

  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '50+', label: 'Countries Served' },
    { number: '5000+', label: 'Machines Delivered' },
    { number: '99%', label: 'Customer Satisfaction' }
  ]

  return (
    <div className="website">
      {/* Header */}
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="header__container">
          <div className="header__logo" onClick={() => scrollToSection('home')}>
            <span className="header__logo-text">ARTITECT</span>
            <span className="header__logo-sub">MACHINERY</span>
          </div>

          <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
            <button 
              className={`header__nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
            <button 
              className={`header__nav-link ${activeSection === 'products' ? 'active' : ''}`}
              onClick={() => scrollToSection('products')}
            >
              Products
            </button>
            <button 
              className={`header__nav-link ${activeSection === 'features' ? 'active' : ''}`}
              onClick={() => scrollToSection('features')}
            >
              Features
            </button>
            <button 
              className={`header__nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button 
              className={`header__nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </nav>

          <button className="header__cta" onClick={() => scrollToSection('contact')}>
            Get a Quote
          </button>

          <button 
            className="header__mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-menu__nav">
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('products')}>Products</button>
            <button onClick={() => scrollToSection('features')}>Features</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero__bg">
          <div className="hero__gradient"></div>
        </div>
        <div className="hero__content">
          <h1 className="hero__title">
            Precision Metal Folding
            <span className="hero__title-accent">for Industrial Excellence</span>
          </h1>
          <p className="hero__subtitle">
            Premium double folding machines and sheet metal folders engineered for accuracy, 
            durability, and performance. Trusted by manufacturers worldwide.
          </p>
          <div className="hero__actions">
            <button className="btn btn--primary" onClick={() => scrollToSection('products')}>
              Explore Products
              <ChevronRight size={20} />
            </button>
            <button className="btn btn--secondary" onClick={() => scrollToSection('contact')}>
              Contact Us
            </button>
          </div>
        </div>
        <div className="hero__scroll">
          <span>Scroll to explore</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Products</span>
            <h2 className="section-title">Professional Sheet Metal Folding Solutions</h2>
            <p className="section-subtitle">
              From compact folders to heavy-duty folding machines, we offer a complete range 
              of equipment for every industrial application.
            </p>
          </div>
          
          <div className="products__grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-card__image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-card__overlay"></div>
                </div>
                <div className="product-card__content">
                  <h3 className="product-card__title">{product.name}</h3>
                  <p className="product-card__description">{product.description}</p>
                  <ul className="product-card__features">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircle size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn--outline">
                    Learn More
                    <ChevronRight size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header section-header--light">
            <span className="section-tag section-tag--light">Why Choose Us</span>
            <h2 className="section-title">Built for Performance, Designed for You</h2>
            <p className="section-subtitle section-subtitle--light">
              Every machine we produce reflects our commitment to quality, innovation, and customer success.
            </p>
          </div>

          <div className="features__grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-card__icon">
                  <feature.icon size={32} />
                </div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <span className="stat-item__number">{stat.number}</span>
                <span className="stat-item__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about__grid">
            <div className="about__image">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=700&fit=crop" 
                alt="ARTITECT Manufacturing Facility"
              />
              <div className="about__image-accent"></div>
            </div>
            <div className="about__content">
              <span className="section-tag">About Us</span>
              <h2 className="section-title">Over 25 Years of Engineering Excellence</h2>
              <p className="about__text">
                Founded with a vision to revolutionize sheet metal processing, ARTITECT MACHINERY 
                has grown from a small workshop to a global leader in folding machine manufacturing.
              </p>
              <p className="about__text">
                Our commitment to precision engineering, combined with cutting-edge technology 
                and traditional craftsmanship, produces machines that set the industry standard 
                for accuracy and reliability.
              </p>
              <div className="about__highlights">
                <div className="about__highlight">
                  <Clock size={24} />
                  <div>
                    <strong>24/7 Support</strong>
                    <span>Round-the-clock technical assistance</span>
                  </div>
                </div>
                <div className="about__highlight">
                  <Award size={24} />
                  <div>
                    <strong>5 Year Warranty</strong>
                    <span>Comprehensive coverage on all machines</span>
                  </div>
                </div>
              </div>
              <button className="btn btn--primary" onClick={() => scrollToSection('contact')}>
                Partner With Us
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Ready to Upgrade Your Workshop?</h2>
            <p className="section-subtitle">
              Contact our team for product information, custom solutions, or to schedule a demonstration.
            </p>
          </div>

          <div className="contact__grid">
            <div className="contact__info">
              <h3>Contact Information</h3>
              <div className="contact__item">
                <MapPin size={20} />
                <div>
                  <strong>Address</strong>
                  <span>Industrial Zone, Manufacturing District, Germany</span>
                </div>
              </div>
              <div className="contact__item">
                <Phone size={20} />
                <div>
                  <strong>Phone</strong>
                  <span>+49 (0) 123 456 7890</span>
                </div>
              </div>
              <div className="contact__item">
                <Mail size={20} />
                <div>
                  <strong>Email</strong>
                  <span>sales@artitect-machinery.com</span>
                </div>
              </div>
              <div className="contact__hours">
                <h4>Business Hours</h4>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>

            <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Your name" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+1 234 567 8900" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="interest">Interested In</label>
                <select id="interest">
                  <option value="">Select a product category</option>
                  <option value="double-folding">Double Folding Machine</option>
                  <option value="sheet-metal-folder">Sheet Metal Folder</option>
                  <option value="metal-folder">Metal Folding Machine</option>
                  <option value="heavy-duty">Heavy Duty Folder</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Tell us about your requirements..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn--primary btn--full">
                Send Message
                <ChevronRight size={20} />
              </button>
            </form>
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
              <p>
                Leading manufacturer of precision sheet metal folding machines. 
                Quality, reliability, and innovation since 1998.
              </p>
            </div>
            <div className="footer__links">
              <h4>Products</h4>
              <ul>
                <li><button onClick={() => scrollToSection('products')}>Double Folding Machine</button></li>
                <li><button onClick={() => scrollToSection('products')}>Sheet Metal Folder</button></li>
                <li><button onClick={() => scrollToSection('products')}>Metal Folding Machine</button></li>
                <li><button onClick={() => scrollToSection('products')}>Heavy Duty Folder</button></li>
              </ul>
            </div>
            <div className="footer__links">
              <h4>Company</h4>
              <ul>
                <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
                <li><button onClick={() => scrollToSection('features')}>Why Choose Us</button></li>
                <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              </ul>
            </div>
            <div className="footer__contact">
              <h4>Contact Us</h4>
              <p><Phone size={16} /> +49 (0) 123 456 7890</p>
              <p><Mail size={16} /> sales@artitect-machinery.com</p>
              <p><MapPin size={16} /> Germany</p>
            </div>
          </div>
          <div className="footer__bottom">
            <p>&copy; 2026 ARTITECT MACHINERY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
