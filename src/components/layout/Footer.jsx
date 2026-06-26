import { ArrowUp } from 'lucide-react'

const footerLinks = {
  products: [
    { label: 'Double Folding Machine', href: '#products' },
    { label: 'Double Folder', href: '#products' },
    { label: 'Sheet Metal Folder', href: '#products' },
    { label: 'Metal Folding Machine', href: '#products' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Features', href: '#features' },
    { label: 'Contact', href: '#contact' },
    { label: 'Support', href: '#contact' },
  ],
  resources: [
    { label: 'Product Catalog', href: '#products' },
    { label: 'Technical Specs', href: '#products' },
    { label: 'Service Plans', href: '#contact' },
    { label: 'Spare Parts', href: '#contact' },
  ],
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-charcoal pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-amber rounded flex items-center justify-center">
                <span className="text-charcoal font-bold text-sm tracking-tight">AM</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-base tracking-wide">ARTITECT</span>
                <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-medium">Machinery</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Precision metal folding machines engineered for professionals. Quality, reliability, and innovation since 1999.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Products</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-white/40 text-sm hover:text-amber transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-white/40 text-sm hover:text-amber transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Resources</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-white/40 text-sm hover:text-amber transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/30 text-xs hover:text-amber transition-colors group"
            aria-label="Back to top"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
