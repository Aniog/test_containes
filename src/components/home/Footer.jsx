import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-xl font-bold tracking-[0.2em] uppercase text-white mb-4">
              ARTITECT
              <span className="text-brand-gold"> MACHINERY</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Precision sheet metal folding machines engineered in Germany. Serving the
              global fabrication industry since 1982.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-brand-gold font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Products', 'Features', 'Contact', 'Downloads', 'Support'].map((link) => (
                <li key={link}>
                  <a
                    href={link === 'Products' ? '#products' : link === 'Features' ? '#features' : '#contact'}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-brand-gold font-semibold mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Metal Folding Machine',
                'Metal Folder Machine',
              ].map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-brand-gold font-semibold mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Industriestrasse 42</li>
              <li>73230 Kirchheim</li>
              <li>Germany</li>
              <li className="pt-2">
                <a href="tel:+4970219500" className="hover:text-white transition-colors">
                  +49 7021 950 0
                </a>
              </li>
              <li>
                <a href="mailto:info@artitect-machinery.com" className="hover:text-white transition-colors">
                  info@artitect-machinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY GmbH. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center hover:bg-brand-gold/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-brand-gold" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}