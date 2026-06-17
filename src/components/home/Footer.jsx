export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-accent font-display font-bold text-lg">AM</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white leading-tight">
                  ARTITECT
                </h3>
                <p className="text-[10px] font-body font-medium text-white/40 tracking-[0.2em] uppercase">
                  Machinery
                </p>
              </div>
            </a>
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
              Precision sheet metal folding machines engineered for the world's most
              demanding manufacturing environments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Products', 'Why Us', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase() === 'why us' ? 'features' : item.toLowerCase() === 'products' ? 'products' : item.toLowerCase() === 'contact' ? 'contact' : 'about'}`}
                    className="font-body text-sm text-white/60 hover:text-accent transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-base font-bold text-white mb-4">Products</h4>
            <ul className="space-y-3">
              {[
                'Double Folding Machine',
                'Double Folder',
                'Sheet Metal Folder',
                'Metal Folding Machine',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="font-body text-sm text-white/60 hover:text-accent transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-white/60 font-body text-sm">
              <li>Industriestrasse 42</li>
              <li>8031 Zurich, Switzerland</li>
              <li>
                <a href="tel:+41445550123" className="hover:text-accent transition-colors">
                  +41 44 555 0123
                </a>
              </li>
              <li>
                <a href="mailto:info@artitect-machinery.com" className="hover:text-accent transition-colors">
                  info@artitect-machinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-white/40">
            &copy; {year} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-white/40 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-white/40 hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}