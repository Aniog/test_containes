import { Link } from 'react-router-dom'
import { Globe, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0f2a4a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-[#e86c2b]" />
              <span className="text-lg font-bold">SSourcing China</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and ensure quality from production to delivery.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Factory Verification</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="text-sm text-slate-400 hover:text-white transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="text-sm text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-sm text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#e86c2b] mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">info@ssourcingchina.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#e86c2b] mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">+86 755 8888 6666</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e86c2b] mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">Shenzhen, Guangdong, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © 2026 SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
