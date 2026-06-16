import React from 'react'
import { ArrowUp } from 'lucide-react'

const footerLinks = {
  Products: [
    { label: 'DF-3200 Double Folding Machine', href: '#products' },
    { label: 'DF-2500 Double Folder', href: '#products' },
    { label: 'SF-4000 Sheet Metal Folder', href: '#products' },
    { label: 'MF-1500 Metal Folding Machine', href: '#products' },
  ],
  Company: [
    { label: 'About ARTITECT', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Careers', href: '#contact' },
    { label: 'News', href: '#contact' },
  ],
  Support: [
    { label: 'Service & Maintenance', href: '#contact' },
    { label: 'Spare Parts', href: '#contact' },
    { label: 'Training Programs', href: '#contact' },
    { label: 'Documentation', href: '#contact' },
  ],
}

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-brand-dark border-t border-white/5">
      <div className="container-max section-padding pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border-2 border-brand-gold flex items-center justify-center">
                <span className="text-brand-gold font-black text-lg tracking-tighter">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-lg tracking-tight leading-none">
                  ARTITECT
                </span>
                <span className="text-brand-gold text-[10px] font-semibold tracking-widest-plus uppercase leading-none mt-0.5">
                  Machinery
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Precision-engineered double folding machines and sheet metal folders
              for industrial applications worldwide.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="text-slate-400 hover:text-brand-gold text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-brand-gold text-sm transition-colors"
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
