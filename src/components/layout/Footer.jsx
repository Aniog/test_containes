import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, MessageCircle } from 'lucide-react'

const serviceLinks = [
  { label: 'Supplier Sourcing', path: '/services' },
  { label: 'Factory Audits', path: '/services' },
  { label: 'Quality Control', path: '/services' },
  { label: 'Production Follow-Up', path: '/services' },
  { label: 'Shipping Coordination', path: '/services' },
]

const companyLinks = [
  { label: 'About Us', path: '/' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="leading-tight">
                <div className="text-lg font-bold tracking-tight">SSourcing</div>
                <div className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">China</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Your reliable China sourcing agent. We help global buyers find trustworthy suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="WeChat">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-white/50 shrink-0" />
                <span className="text-sm text-white/70">
                  Room 1805, Block A<br />
                  Fortune Plaza, Yiwu<br />
                  Zhejiang, China 322000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/50 shrink-0" />
                <a href="tel:+8613800138000" className="text-sm text-white/70 hover:text-white transition-colors">
                  +86 138 0013 8000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/50 shrink-0" />
                <a href="mailto:hello@ssourcingchina.com" className="text-sm text-white/70 hover:text-white transition-colors">
                  hello@ssourcingchina.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="text-sm text-white/50 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
