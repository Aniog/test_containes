import { Link } from 'react-router-dom'
import { Ship, Mail, MapPin, Phone, Linkedin, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0B2545] text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
                <Ship className="h-5 w-5 text-white" />
              </span>
              <span className="text-white font-bold text-lg">SSourcing China</span>
            </Link>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              A China-based sourcing agent helping overseas buyers find verified suppliers,
              control quality, follow production, and ship safely worldwide.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="text-slate-300 hover:text-white">Home</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white">Services</Link></li>
              <li><Link to="/how-it-works" className="text-slate-300 hover:text-white">How It Works</Link></li>
              <li><Link to="/case-studies" className="text-slate-300 hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="text-slate-300 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services" className="text-slate-300 hover:text-white">Supplier Sourcing</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white">Factory Verification</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white">Quality Inspection</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white">Production Follow-up</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white">Shipping &amp; Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-[#E63946] shrink-0" />
                <span className="text-slate-300">Room 1208, Futian Trade Centre,<br />Yiwu, Zhejiang, China</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#E63946] shrink-0" />
                <a href="mailto:hello@ssourcing-china.com" className="text-slate-300 hover:text-white">hello@ssourcing-china.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#E63946] shrink-0" />
                <a href="tel:+8657985000000" className="text-slate-300 hover:text-white">+86 579 8500 0000</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p className="text-xs text-slate-400">English-speaking team &middot; Based in Yiwu &amp; Shenzhen &middot; Serving buyers worldwide</p>
        </div>
      </div>
    </footer>
  )
}
