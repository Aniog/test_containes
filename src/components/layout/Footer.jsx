import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Supplier Sourcing', path: '/services' },
    { label: 'Factory Verification', path: '/services' },
    { label: 'Quality Inspection', path: '/services' },
    { label: 'Production Follow-up', path: '/services' },
    { label: 'Shipping Coordination', path: '/services' },
  ],
  company: [
    { label: 'About Us', path: '/contact' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],
  resources: [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Products We Source', path: '/products' },
    { label: 'FAQ', path: '/#faq' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-tight block">SSourcing</span>
                <span className="text-blue-400 text-xs font-medium -mt-1 block">China</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers,
              verify factories, inspect quality, and coordinate shipping — all from one team.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-400" />
                info@ssourcingchina.com
              </a>
              <a href="tel:+8675512345678" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-400" />
                +86 755 1234 5678
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                Shenzhen, Guangdong, China
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
