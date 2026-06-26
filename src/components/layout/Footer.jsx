import { Link } from 'react-router-dom'
import { Container, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-md bg-blue-700 text-white">
                <Container className="w-5 h-5" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-base font-bold text-white">SSourcing China</span>
                <span className="text-[11px] uppercase tracking-wider text-slate-400">China Sourcing Agent</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              A China-based sourcing partner helping overseas buyers source reliable
              suppliers, verify factories, control quality and ship worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Sourcing</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
              <li><Link to="/services" className="hover:text-white">Factory Verification</Link></li>
              <li><Link to="/services" className="hover:text-white">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-white">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                <a href="mailto:hello@ssourcingchina.com" className="hover:text-white">
                  hello@ssourcingchina.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                <span>+86 138 0000 0000</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                <span>Yiwu, Zhejiang, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {year} SSourcing China. All rights reserved.</p>
          <p>Helping global buyers source from China since 2015.</p>
        </div>
      </div>
    </footer>
  )
}
