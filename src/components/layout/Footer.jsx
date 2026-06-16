import React from 'react'
import { ArrowRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gold-500 rounded-sm flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">AM</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-sm tracking-wider text-white">ARTITECT</span>
                <span className="font-medium text-[10px] tracking-[0.2em] uppercase text-slate-400">MACHINERY</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mt-4">
              Precision-engineered metal folding solutions for industrial excellence. Trusted by manufacturers worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide mb-4">Products</h4>
            <ul className="space-y-2.5">
              {['Double Folding Machine', 'Sheet Metal Folder', 'Metal Folding Machine', 'Metal Folder Machine'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-sm hover:text-gold-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['About Us', 'Our Technology', 'Industries Served', 'Quality Assurance'].map((item) => (
                <li key={item}>
                  <a href="#about" className="text-sm hover:text-gold-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>info@artitectmachinery.com</li>
              <li>+1 (800) 555-0199</li>
              <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-4 text-gold-500 text-sm font-medium hover:text-gold-400 transition-colors"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-navy-700 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
