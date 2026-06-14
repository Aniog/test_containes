import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const productLinks = [
    { name: 'Double Folding Machine', href: '#products' },
    { name: 'Sheet Metal Folder', href: '#products' },
    { name: 'Metal Folding Machine', href: '#products' },
    { name: 'Metal Folder Machine', href: '#products' },
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              <span className="logo-text">ARTITECT</span>
              <span className="logo-subtext">MACHINERY</span>
            </a>
            <p className="footer-brand-desc">
              Leading manufacturer of precision sheet metal folding machines 
              and metal fabrication equipment since 1998.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-link-list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => scrollToSection(e, link.href)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Products</h4>
            <ul className="footer-link-list">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => scrollToSection(e, link.href)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Contact Us</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <Mail size={16} />
                <a href="mailto:info@artitectmachinery.com">info@artitectmachinery.com</a>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} />
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>1234 Industrial Boulevard<br />Manufacturing District, CA 90210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} ARTITECT MACHINERY. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
