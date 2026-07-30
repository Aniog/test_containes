import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0f2a4a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="text-xl font-bold tracking-tight">
              SSourcing<span className="text-[#e86a2e]">China</span>
            </span>
            <p className="mt-4 text-sm text-neutral-200 leading-relaxed">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from production to delivery.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-neutral-200">Services</h4>
            <ul className="space-y-2.5">
              <li><Link to="/services" className="text-sm text-neutral-300 hover:text-[#e86a2e] transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-sm text-neutral-300 hover:text-[#e86a2e] transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="text-sm text-neutral-300 hover:text-[#e86a2e] transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-sm text-neutral-300 hover:text-[#e86a2e] transition-colors">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-sm text-neutral-300 hover:text-[#e86a2e] transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-neutral-200">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/how-it-works" className="text-sm text-neutral-300 hover:text-[#e86a2e] transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="text-sm text-neutral-300 hover:text-[#e86a2e] transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-sm text-neutral-300 hover:text-[#e86a2e] transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-neutral-300 hover:text-[#e86a2e] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-neutral-200">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-[#e86a2e] shrink-0" />
                <span className="text-sm text-neutral-300">info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-[#e86a2e] shrink-0" />
                <span className="text-sm text-neutral-300">+86 755 8888 6666</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-[#e86a2e] shrink-0" />
                <span className="text-sm text-neutral-300">Shenzhen, Guangdong, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-sm text-neutral-400 hover:text-[#e86a2e] transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-sm text-neutral-400 hover:text-[#e86a2e] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
