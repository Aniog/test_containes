import React from 'react'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-extrabold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight leading-tight">ARTITECT</span>
                <span className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase leading-tight">Machinery</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mt-4">
              Precision-engineered metal folding machines for industrial excellence. Trusted by manufacturers worldwide.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">Products</h4>
            <ul className="space-y-3">
              {['Double Folding Machine', 'Double Folder', 'Sheet Metal Folder', 'Sheet Metal Folding Machine', 'Metal Folder', 'Metal Folding Machine'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-slate-400 hover:text-white text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Our History', 'Certifications', 'Quality Assurance', 'Global Partners'].map((item) => (
                <li key={item}>
                  <a href="#about" className="text-slate-400 hover:text-white text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>Sales: info@artitectmachinery.com</li>
              <li>Support: support@artitectmachinery.com</li>
              <li>Tel: +1 (800) 555-0199</li>
              <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-gold text-sm transition-colors"
          >
            Back to top <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
