import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight } from 'lucide-react'

const footerLinks = {
  Services: [
    { to: '/services', label: 'Supplier Sourcing' },
    { to: '/services', label: 'Factory Verification' },
    { to: '/services', label: 'Quality Inspection' },
    { to: '/services', label: 'Production Follow-up' },
    { to: '/services', label: 'Shipping Coordination' },
  ],
  Company: [
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/products', label: 'Products We Source' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact Us' },
  ],
  Industries: [
    { label: 'Electronics & Components' },
    { label: 'Machinery & Parts' },
    { label: 'Textiles & Apparel' },
    { label: 'Home & Kitchen Products' },
    { label: 'Packaging & Printing' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-extrabold text-white tracking-tight">
                SSourcing<span className="text-gold-400">China</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Your trusted China sourcing partner. We help global buyers find
              verified suppliers, ensure product quality, and manage logistics
              — so you can source with confidence.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-gold-400" />
                <span>hello@ssourcingchina.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4 text-gold-400" />
                <span>+86 755 1234 5678</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span>Shenzhen, Guangdong, China</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="text-slate-400 hover:text-gold-400 text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span className="text-slate-400 text-sm cursor-default">
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-gold-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="text-slate-500 hover:text-gold-400 transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
