import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-slate-900 font-semibold">SS</span>
              </div>
              <span className="font-semibold text-white text-lg tracking-tight">SSourcing China</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, and manage quality.
            </p>
          </div>

          <div>
            <div className="font-medium text-white mb-4 text-sm tracking-wide">COMPANY</div>
            <div className="space-y-2.5 text-sm">
              <Link to="/services" className="block hover:text-white transition-colors">Services</Link>
              <Link to="/how-it-works" className="block hover:text-white transition-colors">How It Works</Link>
              <Link to="/case-studies" className="block hover:text-white transition-colors">Case Studies</Link>
              <Link to="/blog" className="block hover:text-white transition-colors">Blog</Link>
            </div>
          </div>

          <div>
            <div className="font-medium text-white mb-4 text-sm tracking-wide">SERVICES</div>
            <div className="space-y-2.5 text-sm">
              <div>Supplier Sourcing</div>
              <div>Factory Verification</div>
              <div>Quality Inspection</div>
              <div>Production Monitoring</div>
              <div>Shipping Coordination</div>
            </div>
          </div>

          <div>
            <div className="font-medium text-white mb-4 text-sm tracking-wide">CONTACT</div>
            <div className="space-y-2.5 text-sm">
              <a href="mailto:info@ssourcingchina.com" className="block hover:text-white transition-colors">info@ssourcingchina.com</a>
              <a href="tel:+862155556666" className="block hover:text-white transition-colors">+86 21 5555 6666</a>
              <div className="pt-1">Shanghai, China</div>
              <Link to="/contact" className="inline-block mt-3 text-white hover:underline">Get in touch →</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>© {currentYear} SSourcing China. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer