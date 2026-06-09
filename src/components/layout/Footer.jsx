import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-900 border-t border-brand-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-brand-900 font-bold text-lg font-[var(--font-heading)]">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-wider font-[var(--font-heading)]">
                  ARTITECT
                </span>
                <span className="text-accent-400 text-[10px] tracking-[0.3em] uppercase -mt-1">
                  Machinery
                </span>
              </div>
            </div>
            <p className="text-brand-400 text-sm leading-relaxed">
              Precision metal folding machines trusted by fabricators in over
              50 countries worldwide.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Products
            </h3>
            <ul className="space-y-2">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Sheet Metal Folding Machine',
                'Metal Folder',
                'Metal Folding Machine',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-brand-400 hover:text-accent-400 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'Contact', href: '#contact' },
                { label: 'Careers', href: '#' },
                { label: 'News', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-brand-400 hover:text-accent-400 text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Support
            </h3>
            <ul className="space-y-2">
              {[
                'Technical Documentation',
                'Spare Parts',
                'Training Programs',
                'Warranty Information',
                'Remote Diagnostics',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="text-brand-400 hover:text-accent-400 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-500 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY Co., Ltd. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-brand-500 hover:text-brand-300 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-brand-500 hover:text-brand-300 text-sm transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-brand-700 hover:bg-accent-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-brand-300 group-hover:text-brand-900 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
