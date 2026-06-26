import React from 'react'
import { Facebook, Linkedin, Youtube, ArrowUp } from 'lucide-react'

const footerLinks = {
  Products: [
    { label: 'Double Folding Machine', href: '#products' },
    { label: 'Double Folder', href: '#products' },
    { label: 'Sheet Metal Folder', href: '#products' },
    { label: 'Metal Folding Machine', href: '#products' },
  ],
  Support: [
    { label: 'Technical Support', href: '#contact' },
    { label: 'Parts & Service', href: '#contact' },
    { label: 'Documentation', href: '#contact' },
    { label: 'Training', href: '#contact' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#about' },
    { label: 'Blog', href: '#about' },
    { label: 'Privacy Policy', href: '#about' },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight leading-tight text-white">
                  ARTITECT
                </span>
                <span className="text-xs tracking-widest uppercase leading-tight text-white/60">
                  Machinery
                </span>
              </div>
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Precision metal folding solutions for industry leaders worldwide. German engineering, global support.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white/70" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white/70" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-white/70" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm text-white mb-4 tracking-wider uppercase">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-brand-accent text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY GmbH. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="text-white/40 hover:text-brand-accent transition-colors flex items-center gap-1.5 text-xs"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}