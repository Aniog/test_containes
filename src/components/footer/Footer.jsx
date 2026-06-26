import { ArrowUp } from 'lucide-react'

const footerLinks = {
  Products: [
    { label: 'DF-2000 Pro', href: '#products' },
    { label: 'DF-3200 Elite', href: '#products' },
    { label: 'SF-1300 Compact', href: '#products' },
    { label: 'MF-2500 Industrial', href: '#products' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#contact' },
    { label: 'News', href: '#contact' },
    { label: 'Contact', href: '#contact' },
  ],
  Support: [
    { label: 'Technical Support', href: '#contact' },
    { label: 'Spare Parts', href: '#contact' },
    { label: 'Training', href: '#contact' },
    { label: 'Warranty', href: '#contact' },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-extrabold text-sm leading-none">AM</span>
              </div>
              <span className="font-bold text-lg tracking-tight">ARTITECT MACHINERY</span>
            </div>
            <p className="text-steel text-sm leading-relaxed max-w-sm mb-6">
              Industrial-grade sheet metal folding machines engineered for precision,
              durability, and performance. Serving fabricators worldwide since 1998.
            </p>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 bg-white/5 hover:bg-accent/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 text-steel" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </span>
              <span className="w-10 h-10 bg-white/5 hover:bg-accent/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 text-steel" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-steel hover:text-white text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-steel text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-steel hover:text-white text-xs transition-colors"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
