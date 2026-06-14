import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-slate-900 font-semibold text-base tracking-tight">SS</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">SSourcing China</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional China sourcing agent helping global buyers find reliable suppliers since 2014.
            </p>
          </div>

          <div>
            <div className="text-white font-medium mb-4 text-sm tracking-wide">COMPANY</div>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              <Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <div className="text-white font-medium mb-4 text-sm tracking-wide">SERVICES</div>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link to="/services" className="hover:text-white transition-colors">Supplier Sourcing</Link>
              <Link to="/services" className="hover:text-white transition-colors">Factory Verification</Link>
              <Link to="/services" className="hover:text-white transition-colors">Quality Inspection</Link>
              <Link to="/services" className="hover:text-white transition-colors">Production Monitoring</Link>
              <Link to="/services" className="hover:text-white transition-colors">Shipping Coordination</Link>
            </div>
          </div>

          <div>
            <div className="text-white font-medium mb-4 text-sm tracking-wide">CONTACT</div>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="mailto:info@ssourcingchina.com" className="hover:text-white transition-colors">info@ssourcingchina.com</a>
              <a href="tel:+862162345678" className="hover:text-white transition-colors">+86 21 6234 5678</a>
              <div className="pt-1 text-slate-400 text-xs leading-relaxed">
                Room 1208, Tower B<br />
                88 Century Avenue<br />
                Shanghai 200120, China
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>© {currentYear} SSourcing China. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
