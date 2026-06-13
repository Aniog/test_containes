import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-lg tracking-wide leading-tight">
                  ARTITECT
                </span>
                <span className="text-gold/80 text-[10px] tracking-[0.3em] uppercase leading-tight">
                  Machinery
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Precision-engineered metal folding machines built for performance, durability, and craftsmanship.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base mb-5">Products</h4>
            <ul className="space-y-3">
              {['Double Folding Machine', 'Sheet Metal Folder', 'Metal Folding Machine', 'Metal Folder Machine'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-white/60 hover:text-gold transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Products', href: '#products' },
                { label: 'Why Us', href: '#features' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-base mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">Industrial Zone, Shanghai, China</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">+86 21 5888 8888</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">info@artitectmachinery.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
