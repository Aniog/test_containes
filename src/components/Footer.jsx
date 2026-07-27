import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-slate-900 font-semibold text-sm tracking-tight">SS</span>
              </div>
              <span className="font-semibold text-white text-lg">SSourcing China</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional China sourcing agent helping global buyers find reliable suppliers since 2014.
            </p>
          </div>

          <div>
            <div className="font-semibold text-white mb-4 text-sm tracking-wide">COMPANY</div>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link to="/how-it-works" className="hover:text-white transition-colors">Our Process</Link>
            </div>
          </div>

          <div>
            <div className="font-semibold text-white mb-4 text-sm tracking-wide">SERVICES</div>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link to="/services" className="hover:text-white transition-colors">Supplier Sourcing</Link>
              <Link to="/services" className="hover:text-white transition-colors">Factory Verification</Link>
              <Link to="/services" className="hover:text-white transition-colors">Quality Inspection</Link>
              <Link to="/services" className="hover:text-white transition-colors">Production Monitoring</Link>
              <Link to="/services" className="hover:text-white transition-colors">Shipping Coordination</Link>
            </div>
          </div>

          <div>
            <div className="font-semibold text-white mb-4 text-sm tracking-wide">CONTACT</div>
            <div className="text-sm space-y-2">
              <div>Yiwu, Zhejiang, China</div>
              <a href="mailto:info@ssourcingchina.com" className="block hover:text-white transition-colors">info@ssourcingchina.com</a>
              <a href="tel:+8657985588888" className="block hover:text-white transition-colors">+86 579 8558 8888</a>
              <div className="pt-2 text-xs text-slate-500">Mon-Fri 8:30am - 5:30pm (China Time)</div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row justify-between gap-4">
          <div>© {new Date().getFullYear()} SSourcing China. All rights reserved.</div>
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
