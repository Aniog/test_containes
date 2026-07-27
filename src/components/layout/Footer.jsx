import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Supplier Verification', path: '/services#supplier-verification' },
    { name: 'Factory Audits', path: '/services#factory-audits' },
    { name: 'Quality Inspection', path: '/services#quality-inspection' },
    { name: 'Production Monitoring', path: '/services#production-monitoring' },
    { name: 'Shipping Coordination', path: '/services#shipping' },
  ],
  company: [
    { name: 'About Us', path: '/how-it-works' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products We Source', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
  ],
  resources: [
    { name: 'Sourcing Guide', path: '/blog' },
    { name: 'FAQ', path: '/#faq' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Get a Quote', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary-800 font-bold text-xl">S</span>
              </div>
              <div>
                <div className="font-bold text-lg">SSourcing China</div>
                <div className="text-primary-300 text-sm">Your Trusted Partner</div>
              </div>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed">
              Helping global buyers source quality products from China with
              professional supplier verification, quality control, and logistics management.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@ssourcingchina.com"
                className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors no-underline text-sm"
              >
                <Mail size={16} />
                info@ssourcingchina.com
              </a>
              <a
                href="tel:+86-21-1234-5678"
                className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors no-underline text-sm"
              >
                <Phone size={16} />
                +86 21 1234 5678
              </a>
              <div className="flex items-center gap-3 text-primary-200 text-sm">
                <MapPin size={16} />
                Shanghai, China
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-200 hover:text-white transition-colors no-underline text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-200 hover:text-white transition-colors no-underline text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-200 hover:text-white transition-colors no-underline text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-300 text-sm">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-primary-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-primary-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-primary-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
