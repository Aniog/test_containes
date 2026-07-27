import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">SSourcing</span>
              <span className="text-xl font-bold text-accent">China</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from production to delivery.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">Services</h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li><Link to="/services" className="text-sm text-white/70 hover:text-accent transition-colors no-underline">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-sm text-white/70 hover:text-accent transition-colors no-underline">Factory Verification</Link></li>
              <li><Link to="/services" className="text-sm text-white/70 hover:text-accent transition-colors no-underline">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-sm text-white/70 hover:text-accent transition-colors no-underline">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-sm text-white/70 hover:text-accent transition-colors no-underline">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">Company</h4>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li><Link to="/how-it-works" className="text-sm text-white/70 hover:text-accent transition-colors no-underline">How It Works</Link></li>
              <li><Link to="/case-studies" className="text-sm text-white/70 hover:text-accent transition-colors no-underline">Case Studies</Link></li>
              <li><Link to="/blog" className="text-sm text-white/70 hover:text-accent transition-colors no-underline">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-white/70 hover:text-accent transition-colors no-underline">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-4">Contact</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">+86 138 0000 0000</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">Guangzhou, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © 2026 SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-sm text-white/50 hover:text-white/80 transition-colors no-underline">Privacy Policy</Link>
            <Link to="/contact" className="text-sm text-white/50 hover:text-white/80 transition-colors no-underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
