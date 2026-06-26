import { ArrowUp, Linkedin, Youtube, Twitter } from 'lucide-react'

const footerLinks = {
  Products: [
    { label: 'Double Folder Pro', href: '#products' },
    { label: 'Sheet Metal Master', href: '#products' },
    { label: 'Compact Metal Folder', href: '#products' },
    { label: 'Custom Solutions', href: '#contact' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#contact' },
    { label: 'News', href: '#contact' },
    { label: 'Partners', href: '#contact' },
  ],
  Support: [
    { label: 'Technical Support', href: '#contact' },
    { label: 'Spare Parts', href: '#contact' },
    { label: 'Training', href: '#contact' },
    { label: 'Documentation', href: '#contact' },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-surface-dark border-t border-steel-700/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent-500 rounded-sm flex items-center justify-center">
                <span className="font-display font-bold text-brand-900 text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-lg tracking-wider leading-none">
                  ARTITECT
                </span>
                <span className="text-accent-400 text-[10px] tracking-[0.3em] font-semibold uppercase leading-none mt-0.5">
                  Machinery
                </span>
              </div>
            </a>
            <p className="text-steel-400 text-sm leading-relaxed max-w-xs mt-2">
              Precision sheet metal folding machines engineered for accuracy, durability, and performance. Trusted by professionals worldwide.
            </p>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-brand-800 rounded-sm flex items-center justify-center text-steel-500 hover:text-accent-400 hover:bg-brand-700 transition-all"
                  aria-label="Social media link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display text-sm font-bold text-white tracking-wider uppercase mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-steel-400 text-sm hover:text-accent-400 transition-colors"
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
        <div className="border-t border-steel-700/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-steel-500 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-steel-500 text-sm hover:text-steel-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-steel-500 text-sm hover:text-steel-300 transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-brand-800 rounded-sm flex items-center justify-center text-steel-500 hover:text-accent-400 hover:bg-brand-700 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
