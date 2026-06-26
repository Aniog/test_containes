import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-gold rounded flex items-center justify-center">
                <span className="text-navy-900 font-bold text-xs">AM</span>
              </div>
              <span className="text-white font-semibold">
                ARTITECT <span className="text-gold">MACHINERY</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Precision metal folding machines engineered for industry leaders worldwide.
              Quality, reliability, and innovation since 1998.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Home', 'Products', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product Range</h4>
            <ul className="space-y-2.5">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Metal Folding Machine',
              ].map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-slate-400 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-gold text-sm transition-colors duration-200"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}