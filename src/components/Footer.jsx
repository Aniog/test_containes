import { ChevronUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-navy text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="text-xl font-heading font-bold text-white tracking-wide">
              ARTITECT
            </span>
            <span className="text-xs font-light tracking-widest uppercase text-brand-gold ml-2">
              Machinery
            </span>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Precision metal folding machinery engineered for the modern fabrication shop.
              Built with quality. Backed by experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Products', href: '#products' },
                { label: 'About Us', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products List */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Metal Folding Machine',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-sm text-white/60 hover:text-brand-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-brand-gold transition-colors"
          >
            <ChevronUp className="w-3.5 h-3.5" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}