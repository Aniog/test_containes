import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-accent-500 rounded-md flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20h20" />
                  <path d="M5 20V8l7-5 7 5v12" />
                  <path d="M9 20v-6h6v6" />
                </svg>
              </div>
              <div>
                <span className="text-white font-extrabold text-base tracking-wide">ARTITECT</span>
                <span className="block text-accent-400 text-[9px] font-semibold tracking-[0.3em] uppercase">Machinery</span>
              </div>
            </div>
            <p className="text-steel-400 text-sm leading-relaxed max-w-xs">
              Precision metal folding machines engineered for reliability, speed, and accuracy. Serving the global sheet metal industry since 1998.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Products</h4>
            <ul className="space-y-2.5">
              {['Double Folder Pro', 'Sheet Metal Folder X1', 'Metal Folder Compact', 'Metal Folding Elite'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-steel-400 text-sm hover:text-accent-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['About Us', 'Certifications', 'Careers', 'Press & Media'].map((item) => (
                <li key={item}>
                  <a href="#about" className="text-steel-400 text-sm hover:text-accent-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-2.5">
              {['Technical Support', 'Spare Parts', 'Training', 'Documentation'].map((item) => (
                <li key={item}>
                  <a href="#contact" className="text-steel-400 text-sm hover:text-accent-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-steel-500 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-steel-400 text-xs hover:text-accent-400 transition-colors group"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
