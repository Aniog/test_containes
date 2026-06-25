import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <span className="text-xl font-bold text-white tracking-tight">
              SSourcing<span className="text-orange-500">China</span>
            </span>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage quality from production to delivery.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors no-underline">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors no-underline">Factory Verification</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors no-underline">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors no-underline">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors no-underline">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors no-underline">How It Works</Link></li>
              <li><Link to="/case-studies" className="text-sm text-slate-400 hover:text-white transition-colors no-underline">Case Studies</Link></li>
              <li><Link to="/blog" className="text-sm text-slate-400 hover:text-white transition-colors no-underline">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-400 hover:text-white transition-colors no-underline">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                info@ssourcingchina.com
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                +86 138 0000 0000
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                Guangzhou, China
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2026 SSourcing China. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Helping global buyers source from China with confidence.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
