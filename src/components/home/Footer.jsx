const Footer = () => {
  return (
    <footer className="bg-brand-navy py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <span className="text-brand-accent font-extrabold text-xl tracking-tight">
                ARTITECT
              </span>
              <span className="text-white font-light text-sm tracking-widest uppercase ml-2">
                Machinery
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Precision sheet metal folding machines engineered for professional metalworking operations worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Products</h4>
            <ul className="space-y-2.5">
              <li><a href="#products" className="text-white/60 text-sm hover:text-brand-accent transition-colors">Double Folding Machine</a></li>
              <li><a href="#products" className="text-white/60 text-sm hover:text-brand-accent transition-colors">Sheet Metal Folder</a></li>
              <li><a href="#products" className="text-white/60 text-sm hover:text-brand-accent transition-colors">Metal Folder Pro</a></li>
              <li><a href="#products" className="text-white/60 text-sm hover:text-brand-accent transition-colors">Spare Parts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#about" className="text-white/60 text-sm hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#features" className="text-white/60 text-sm hover:text-brand-accent transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-white/60 text-sm hover:text-brand-accent transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/60 text-sm hover:text-brand-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-white/60 text-sm hover:text-brand-accent transition-colors">Technical Support</a></li>
              <li><a href="#" className="text-white/60 text-sm hover:text-brand-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/60 text-sm hover:text-brand-accent transition-colors">Warranty Info</a></li>
              <li><a href="#" className="text-white/60 text-sm hover:text-brand-accent transition-colors">Service Centers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 text-sm hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 text-sm hover:text-brand-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
