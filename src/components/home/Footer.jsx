const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0F1B2D' }} className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-bold text-lg tracking-tight" style={{ color: '#C8A45C' }}>
                ARTITECT
              </span>
              <span className="text-white/80 font-light text-sm tracking-wide ml-2">
                MACHINERY
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Precision sheet metal folding machines engineered for the modern
              fabrication industry.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-white/50 hover:text-amber-400 text-sm transition-colors">
                  Double Folding Machine
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/50 hover:text-amber-400 text-sm transition-colors">
                  Sheet Metal Folder
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/50 hover:text-amber-400 text-sm transition-colors">
                  Metal Folder Pro
                </a>
              </li>
              <li>
                <a href="#products" className="text-white/50 hover:text-amber-400 text-sm transition-colors">
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/50 hover:text-amber-400 text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="text-white/50 hover:text-amber-400 text-sm transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/50 hover:text-amber-400 text-sm transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-amber-400 text-sm transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/50 hover:text-amber-400 text-sm transition-colors">
                  Technical Support
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-amber-400 text-sm transition-colors">
                  Spare Parts
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-amber-400 text-sm transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-amber-400 text-sm transition-colors">
                  Training
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-amber-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-amber-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
