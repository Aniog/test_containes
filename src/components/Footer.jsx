import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ShieldCheck } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tight">SSourcing <span className="text-amber-500">China</span></span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-slate-400">Professional Sourcing Agent</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Leading China sourcing agent helping global businesses navigate the complexity of Chinese manufacturing with reliability and transparency.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 hover:text-amber-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="p-2 hover:text-amber-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="p-2 hover:text-amber-500 transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Explore</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Sourcing Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-amber-500 transition-colors">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-amber-500 transition-colors">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-amber-500 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-amber-500 transition-colors">Sourcing Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Expertise</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-amber-500" /> Supplier Verification</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-amber-500" /> Factory Audits</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-amber-500" /> Quality Control</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-amber-500" /> Logistics Coordination</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-amber-500" /> Customized Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 shrink-0" />
                <span>Futian District, Shenzhen, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500 shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-amber-500">info@ssourcingchina.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500 shrink-0" />
                <a href="tel:+8613800000000" className="hover:text-amber-500">+86 138-0000-0000</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
