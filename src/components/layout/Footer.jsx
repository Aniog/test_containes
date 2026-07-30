import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Supplier Sourcing', path: '/services' },
    { label: 'Factory Verification', path: '/services' },
    { label: 'Quality Inspection', path: '/services' },
    { label: 'Production Follow-Up', path: '/services' },
    { label: 'Shipping Coordination', path: '/services' },
  ],
  company: [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Products We Source', path: '/products' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">SSourcing China</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A China-based sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@ssourcingchina.com"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Office 1208, Tower B, Fortune Plaza<br />
                  Shenzhen, Guangdong, China 518000
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-slate-400 hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <a href="tel:+8675588881234" className="text-slate-400 hover:text-white transition-colors">
                  +86 755 8888 1234
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} SSourcing China. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
