import React from 'react'
import { ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-navy font-extrabold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight tracking-tight">
                  ARTITECT
                </span>
                <span className="text-gold text-[10px] font-semibold tracking-[0.25em] uppercase leading-tight">
                  Machinery
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Precision metal folding solutions trusted by fabricators worldwide since 2005.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Products</h4>
            <ul className="space-y-2.5">
              {['Double Folding Machine', 'Double Folder', 'Sheet Metal Folder', 'Metal Folder Machine'].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    onClick={(e) => { e.preventDefault(); handleNav('#products') }}
                    className="text-white/50 hover:text-gold text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Why Choose Us', href: '#features' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNav(item.href) }}
                    className="text-white/50 hover:text-gold text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <div className="space-y-2.5 text-white/50 text-sm">
              <p>sales@artitectmachinery.com</p>
              <p>+86 555 123 4567</p>
              <p>Ma'anshan, Anhui, China</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/10 hover:bg-gold/20 rounded-lg flex items-center justify-center transition-colors group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-white/60 group-hover:text-gold transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
