import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-slate-900 font-semibold">SS</span>
              </div>
              <span className="font-semibold text-white text-lg">SSourcing China</span>
            </div>
            <p className="text-sm">
              Professional China sourcing agent helping global buyers find reliable suppliers since 2015.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-white transition-colors">Electronics</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Home & Garden</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Industrial Equipment</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Consumer Goods</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>info@ssourcingchina.com</li>
              <li>+86 21 5888 1234</li>
              <li>Shanghai, China</li>
              <li className="pt-2"><Link to="/contact" className="text-white hover:underline">Request a Quote →</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <p>Professional sourcing services for international buyers.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer