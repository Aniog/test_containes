import { Link } from 'react-router-dom'
import { Globe, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

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
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/blog', label: 'Blog' },
    { to: '/products', label: 'Products We Source' },
    { to: '/contact', label: 'Contact Us' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Globe className="w-7 h-7 text-white" />
              <span className="text-lg font-bold tracking-tight">
                SSourcing<span className="text-accent">China</span>
              </span>
            </Link>
            <p className="text-sm text-text-light leading-relaxed mb-6">
              Professional China sourcing agent helping global buyers find reliable suppliers, 
              verify factories, inspect quality, and coordinate shipping since 2012.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-text-light hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-light mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-text-light">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>Room 1208, Block A, Dongfang Plaza, Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-light">
                <Mail className="w-4 h-4 shrink-0 text-accent" />
                <span>info@ssourcingchina.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-light">
                <Phone className="w-4 h-4 shrink-0 text-accent" />
                <span>+86 755 8888 6666</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-light">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-text-light hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-text-light hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}