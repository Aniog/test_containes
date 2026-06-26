import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Supplier Verification', path: '/services' },
    { label: 'Quality Control', path: '/services' },
    { label: 'Production Follow-up', path: '/services' },
    { label: 'Shipping Coordination', path: '/services' },
  ],
  Company: [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Products We Source', path: '/products' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
  ],
  Support: [
    { label: 'Contact Us', path: '/contact' },
    { label: 'FAQ', path: '/#faq' },
    { label: 'Get a Quote', path: '/contact' },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">SS</span>
              </div>
              <span className="text-xl font-bold text-white">
                SSourcing<span className="text-accent ml-0.5">China</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted China-based sourcing agent. We help global buyers find reliable suppliers,
              verify factories, inspect quality, and coordinate shipping — end to end.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Guangzhou, Guangdong, China</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@ssourcingchina.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+86 138 0000 0000</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-400 text-sm hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-accent transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-accent transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-accent transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
