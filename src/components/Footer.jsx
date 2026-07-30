import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from 'lucide-react'

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
    <footer className="bg-[#0F2A4A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#C8102E] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-base tracking-tight">SSourcing</span>
                <span className="text-[#E85066] text-xs font-medium tracking-widest uppercase">China</span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              Your trusted China-based sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from order to delivery.
            </p>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <a href="mailto:info@ssourcing.cn" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#C8102E] flex-shrink-0" />
                info@ssourcing.cn
              </a>
              <a href="https://wa.me/8618600000000" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#C8102E] flex-shrink-0" />
                +86 186 0000 0000
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C8102E] flex-shrink-0" />
                Shenzhen & Yiwu, China
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{section}</h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-slate-300 text-sm hover:text-white transition-colors"
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
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Start Sourcing</h4>
            <p className="text-slate-300 text-sm mb-4">
              Tell us what you need. We'll respond within 24 hours with a tailored sourcing plan.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#C8102E] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#A80D26] transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" aria-label="Website" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Globe className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <p className="text-slate-400 text-xs">
            China Sourcing Agent | Supplier Verification | Quality Control | Shipping
          </p>
        </div>
      </div>
    </footer>
  )
}
