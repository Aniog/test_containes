import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Supplier Sourcing', href: '/services' },
    { label: 'Factory Verification', href: '/services' },
    { label: 'Quality Inspection', href: '/services' },
    { label: 'Production Follow-up', href: '/services' },
    { label: 'Shipping Coordination', href: '/services' },
  ],
  Company: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Products We Source', href: '/products' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">SS</span>
              </div>
              <span className="text-white font-bold text-xl">SSourcing China</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6 max-w-sm">
              A professional China-based sourcing agent helping global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex flex-col gap-3 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Guangzhou, China (Operations across Shenzhen, Yiwu, Ningbo)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">info@ssourcingchina.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>WhatsApp: +86 138 0000 0000</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-blue-200 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-blue-300 text-sm">
            China Sourcing Agent | Supplier Verification | Quality Control | Shipping
          </p>
        </div>
      </div>
    </footer>
  )
}
