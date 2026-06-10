import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white/10 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">SS</span>
              </div>
              <span className="font-semibold text-xl">SSourcing China</span>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed">
              Professional China sourcing agent helping global buyers find reliable suppliers, verify factories, and manage quality.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-slate-300">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services" className="text-slate-200 hover:text-white">Services</Link></li>
              <li><Link to="/how-it-works" className="text-slate-200 hover:text-white">How It Works</Link></li>
              <li><Link to="/case-studies" className="text-slate-200 hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="text-slate-200 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-slate-300">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/products" className="text-slate-200 hover:text-white">Products We Source</Link></li>
              <li><Link to="/contact" className="text-slate-200 hover:text-white">Contact Us</Link></li>
              <li><a href="#faq" className="text-slate-200 hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-slate-300">Contact</h4>
            <ul className="space-y-2.5 text-sm text-slate-200">
              <li>Shanghai, China</li>
              <li>
                <a href="mailto:info@ssourcingchina.com" className="hover:text-white">info@ssourcingchina.com</a>
              </li>
              <li>
                <a href="https://wa.me/8613812345678" target="_blank" rel="noopener noreferrer" className="hover:text-white">+86 138 1234 5678 (WhatsApp)</a>
              </li>
            </ul>
            <div className="mt-4">
              <Link to="/contact" className="inline-block text-sm font-medium text-white hover:underline">
                Request a Quote →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {currentYear} SSourcing China. All rights reserved.</p>
          <p className="text-center md:text-right">Professional sourcing services for international buyers.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
