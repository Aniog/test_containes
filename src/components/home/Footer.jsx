import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-dark border-t border-navy-light/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border-2 border-gold flex items-center justify-center">
                <span className="text-gold font-extrabold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-wide leading-tight">ARTITECT</span>
                <span className="text-gold text-[10px] font-medium tracking-[0.25em] uppercase leading-tight">Machinery</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Precision-engineered metal folding solutions for industrial excellence. Trusted by manufacturers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'Why Us', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    onClick={(e) => handleNavClick(e, `#${item.toLowerCase().replace(' ', '')}`)}
                    className="text-gray-400 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-3">
              {['Double Folding Machine', 'Sheet Metal Folder', 'Metal Folding Machine', 'Metal Folder Machine'].map((item) => (
                <li key={item}>
                  <span className="text-gray-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">Industrial Zone, Shanghai, China</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">+86 21 5888 8888</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">info@artitectmachinery.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-light/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-gold text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gold text-sm transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
