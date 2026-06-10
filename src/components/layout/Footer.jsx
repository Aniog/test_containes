import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold">SS</span>
              </div>
              <span className="text-white font-semibold text-lg">SSourcing China</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, and manage quality and logistics.
            </p>
          </div>

          <div>
            <div className="text-white font-medium mb-4 text-sm tracking-wide">COMPANY</div>
            <div className="space-y-2 text-sm">
              <Link to="/services" className="block hover:text-white">Services</Link>
              <Link to="/how-it-works" className="block hover:text-white">How It Works</Link>
              <Link to="/case-studies" className="block hover:text-white">Case Studies</Link>
              <Link to="/blog" className="block hover:text-white">Blog</Link>
            </div>
          </div>

          <div>
            <div className="text-white font-medium mb-4 text-sm tracking-wide">RESOURCES</div>
            <div className="space-y-2 text-sm">
              <Link to="/products" className="block hover:text-white">Products We Source</Link>
              <Link to="/contact" className="block hover:text-white">Request a Quote</Link>
              <a href="#faq" className="block hover:text-white">FAQ</a>
            </div>
          </div>

          <div>
            <div className="text-white font-medium mb-4 text-sm tracking-wide">CONTACT</div>
            <div className="space-y-2 text-sm">
              <a href="mailto:info@ssourcingchina.com" className="block hover:text-white">info@ssourcingchina.com</a>
              <a href="https://wa.me/861234567890" target="_blank" rel="noopener noreferrer" className="block hover:text-white">+86 123 4567 890 (WhatsApp)</a>
              <div className="text-slate-400 pt-2">Shanghai, China</div>
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
