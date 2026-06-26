import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-gold rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">AM</span>
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight text-white">ARTITECT</span>
                <span className="font-light text-lg tracking-tight text-white/80"> MACHINERY</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Precision metal folding solutions engineered for the most demanding
              industrial applications worldwide.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-brand-gold mb-4">Products</h4>
            <ul className="space-y-2.5">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Sheet Metal Folding Machine',
                'Metal Folder',
                'Metal Folding Machine',
              ].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-white/60 hover:text-brand-gold text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-brand-gold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: '#products', label: 'Products' },
                { href: '#features', label: 'Features' },
                { href: '#about', label: 'About Us' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-white/60 hover:text-brand-gold text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase text-brand-gold mb-4">Contact</h4>
            <ul className="space-y-2.5 text-white/60 text-sm">
              <li>Industriestrasse 42</li>
              <li>70565 Stuttgart, Germany</li>
              <li>
                <a href="tel:+4971112345678" className="hover:text-brand-gold transition-colors">
                  +49 711 1234 5678
                </a>
              </li>
              <li>
                <a href="mailto:info@artitect-machinery.com" className="hover:text-brand-gold transition-colors">
                  info@artitect-machinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 mt-10 border-t border-white/10">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY GmbH. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/40 hover:text-brand-gold text-xs transition-colors"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}