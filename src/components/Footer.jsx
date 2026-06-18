import { Link } from 'react-router-dom'
import { Factory, Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <Link to="/" className="footer-logo">
              <Factory className="logo-icon" />
              <span>SSourcing China</span>
            </Link>
            <p className="footer-desc">
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping.
            </p>
            <div className="footer-contact">
              <a href="mailto:info@ssourcingchina.com" className="contact-item">
                <Mail size={18} />
                <span>info@ssourcingchina.com</span>
              </a>
              <a href="tel:+862112345678" className="contact-item">
                <Phone size={18} />
                <span>+86 21 1234 5678</span>
              </a>
              <div className="contact-item">
                <MapPin size={18} />
                <span>Shanghai, China</span>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Supplier Identification</Link></li>
              <li><Link to="/services">Factory Verification</Link></li>
              <li><Link to="/services">Quality Control</Link></li>
              <li><Link to="/services">Production Monitoring</Link></li>
              <li><Link to="/services">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Stay Updated</h4>
            <p className="newsletter-desc">
              Subscribe to our newsletter for sourcing tips and China market insights.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} SSourcing China. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--primary);
          color: white;
          padding: 64px 0 24px;
          margin-top: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 48px;
          margin-bottom: 48px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 20px;
          color: white;
          margin-bottom: 16px;
        }

        .footer-logo .logo-icon {
          width: 28px;
          height: 28px;
        }

        .footer-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }

        .contact-item:hover {
          color: white;
        }

        .footer-col h4 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 20px;
          color: white;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-col ul li {
          margin-bottom: 12px;
        }

        .footer-col ul li a {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          transition: color 0.2s;
        }

        .footer-col ul li a:hover {
          color: white;
        }

        .newsletter-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 16px;
        }

        .newsletter-form {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
        }

        .newsletter-form input {
          flex: 1;
          padding: 10px 14px;
          border: none;
          border-radius: 4px;
          font-size: 14px;
        }

        .newsletter-form .btn {
          padding: 10px 16px;
          font-size: 14px;
          white-space: nowrap;
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          transition: background 0.2s;
        }

        .social-links a:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }

        .footer-bottom-links a {
          color: rgba(255, 255, 255, 0.6);
        }

        .footer-bottom-links a:hover {
          color: white;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
          .newsletter-form {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer