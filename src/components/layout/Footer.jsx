import React from 'react'
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-charcoal-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gold-400 rounded-lg flex items-center justify-center">
                <span className="text-navy-700 font-black text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-tight leading-tight">
                  ARTITECT
                </span>
                <span className="text-gold-400 text-[10px] font-semibold uppercase tracking-[0.25em] leading-tight">
                  Machinery
                </span>
              </div>
            </div>
            <p className="text-charcoal-100 text-sm leading-relaxed">
              Precision-engineered metal folding machines built for performance, 
              durability, and unmatched accuracy in sheet metal fabrication.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {['Double Folding Machine', 'Double Folder', 'Sheet Metal Folder', 'Metal Folder Machine', 'Metal Folding Machine'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-charcoal-100 hover:text-gold-400 text-sm transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Products', href: '#products' },
                { label: 'Why Choose Us', href: '#features' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-charcoal-100 hover:text-gold-400 text-sm transition-colors duration-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-charcoal-100 text-sm">
                  Industrial Zone, Block C<br />
                  Shanghai, China 200000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href="tel:+861234567890" className="text-charcoal-100 hover:text-gold-400 text-sm transition-colors">
                  +86 123 4567 890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href="mailto:info@artitectmachinery.com" className="text-charcoal-100 hover:text-gold-400 text-sm transition-colors">
                  info@artitectmachinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-200 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-charcoal-200 hover:text-gold-400 text-sm transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
