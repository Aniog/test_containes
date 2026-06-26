import { Mail, Phone, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const products = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folder Machine',
]

export default function Footer() {
  return (
    <footer className="bg-am-bg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="text-2xl font-extrabold text-am-text mb-4">
              ARTITECT
              <span className="text-am-gold"> MACHINERY</span>
            </div>
            <p className="text-sm text-am-muted leading-relaxed mb-6">
              Precision folding machinery for sheet metal fabrication. Built
              for performance, designed for reliability.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:sales@artitectmachinery.com"
                className="flex items-center text-sm text-am-muted hover:text-am-gold"
              >
                <Mail className="w-4 h-4 mr-3 text-am-gold" />
                sales@artitectmachinery.com
              </a>
              <a
                href="tel:+8612345678900"
                className="flex items-center text-sm text-am-muted hover:text-am-gold"
              >
                <Phone className="w-4 h-4 mr-3 text-am-gold" />
                +86 123 4567 8900
              </a>
              <div className="flex items-start text-sm text-am-muted">
                <MapPin className="w-4 h-4 mr-3 text-am-gold shrink-0 mt-0.5" />
                88 Industrial Park Road, Jiangsu, China
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-am-text mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-am-muted hover:text-am-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-am-text mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-sm text-am-muted hover:text-am-gold transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-am-text mb-5">
              Certifications
            </h4>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-lg bg-am-surface border border-white/10 text-xs font-semibold text-am-text">
                ISO 9001
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-am-surface border border-white/10 text-xs font-semibold text-am-text">
                CE Marked
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-am-surface border border-white/10 text-xs font-semibold text-am-text">
                2-Year Warranty
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-am-muted">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-am-muted hover:text-am-gold transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-am-muted hover:text-am-gold transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
