import { Link } from 'react-router-dom'
import { Globe, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Supplier Sourcing', to: '/services' },
    { label: 'Factory Verification', to: '/services' },
    { label: 'Quality Inspection', to: '/services' },
    { label: 'Production Follow-up', to: '/services' },
    { label: 'Shipping Coordination', to: '/services' },
  ],
  Company: [
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'Products We Source', to: '/products' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact Us', to: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <Globe className="w-5 h-5 text-navy" />
              </div>
              <div>
                <span className="text-white font-bold text-lg">SSourcing</span>
                <span className="text-brand-red font-bold text-lg"> China</span>
              </div>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, and coordinate quality shipments.
            </p>
            <div className="space-y-2 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 text-brand-gold" />
                <span>Guangzhou & Yiwu, China</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-brand-gold" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">
                  info@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-brand-gold" />
                <span>+86 (0) 20 1234 5678</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-blue-200 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Start Sourcing</h4>
            <p className="text-blue-200 text-sm mb-4">
              Tell us what you need. We'll find the right supplier in China.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-8 h-8 bg-navy-light rounded-full flex items-center justify-center hover:bg-brand-red transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-navy-light rounded-full flex items-center justify-center hover:bg-brand-red transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-light mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-blue-300">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>China Sourcing Agent | Supplier Verification | QC & Shipping</p>
        </div>
      </div>
    </footer>
  )
}
