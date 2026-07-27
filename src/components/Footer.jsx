import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Linkedin, MessageCircle } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],
  Services: [
    { label: 'Supplier Sourcing', path: '/services' },
    { label: 'Factory Verification', path: '/services' },
    { label: 'Quality Inspection', path: '/services' },
    { label: 'Production Follow-Up', path: '/services' },
    { label: 'Shipping Coordination', path: '/services' },
  ],
  Resources: [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Products We Source', path: '/products' },
    { label: 'FAQ', path: '/#faq' },
    { label: 'Get a Quote', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded bg-brand text-white flex items-center justify-center font-extrabold text-lg">S</span>
              <span className="text-xl font-extrabold text-white tracking-tight">SSourcing<span className="text-brand">China</span></span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-6">
              China sourcing agent for global buyers. We help you find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brand" />
                info@ssourcingchina.com
              </a>
              <a href="tel:+8613812345678" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-brand" />
                +86 138 1234 5678
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand mt-0.5" />
                <span>Room 1208, Fortune Plaza, Shenzhen, China 518000</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5 text-sm">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="WeChat" className="text-slate-400 hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
