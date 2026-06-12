const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-navy font-extrabold text-sm">A</span>
              </div>
              <span className="font-bold text-lg tracking-tight">
                ARTITECT<span className="text-gold ml-1">MACHINERY</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Precision sheet metal folding machines engineered for the modern
              manufacturing industry.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Products
            </h4>
            <ul className="space-y-2">
              <li><a href="#products" className="text-slate-400 hover:text-gold transition-colors text-sm">Double Folding Machine</a></li>
              <li><a href="#products" className="text-slate-400 hover:text-gold transition-colors text-sm">Sheet Metal Folder</a></li>
              <li><a href="#products" className="text-slate-400 hover:text-gold transition-colors text-sm">Metal Folding Machine</a></li>
              <li><a href="#products" className="text-slate-400 hover:text-gold transition-colors text-sm">Double Folder</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-400 hover:text-gold transition-colors text-sm">About Us</a></li>
              <li><a href="#features" className="text-slate-400 hover:text-gold transition-colors text-sm">Why Choose Us</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-gold transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-slate-400 hover:text-gold transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-gold transition-colors text-sm">Technical Support</a></li>
              <li><a href="#" className="text-slate-400 hover:text-gold transition-colors text-sm">Spare Parts</a></li>
              <li><a href="#" className="text-slate-400 hover:text-gold transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-gold transition-colors text-sm">Warranty</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 Artitect Machinery. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-gold transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-gold transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
