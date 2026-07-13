import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-slate-900 font-semibold">SS</span>
              </div>
              <span className="font-semibold text-white text-lg">SSourcing China</span>
            </div>
            <p className="text-sm text-slate-400">Professional China sourcing services for global buyers.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Shanghai, China</li>
              <li>info@ssourcingchina.com</li>
              <li>+86 21 5888 0000</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} SSourcing China. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer