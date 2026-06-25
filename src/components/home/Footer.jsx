const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <span className="text-accent font-extrabold text-xl">ARTITECT</span>
              <span className="text-text-on-dark font-light text-sm tracking-widest uppercase ml-2">
                Machinery
              </span>
            </div>
            <p className="text-text-on-dark/60 text-sm leading-relaxed">
              Precision sheet metal folding machines engineered for the world's most demanding industries.
            </p>
          </div>

          <div>
            <h4 className="text-text-on-dark font-semibold text-sm uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-2">
              <li><a href="#products" className="text-text-on-dark/60 hover:text-accent text-sm transition-colors no-underline">Double Folding Machine</a></li>
              <li><a href="#products" className="text-text-on-dark/60 hover:text-accent text-sm transition-colors no-underline">Sheet Metal Folder</a></li>
              <li><a href="#products" className="text-text-on-dark/60 hover:text-accent text-sm transition-colors no-underline">Metal Folder Pro</a></li>
              <li><a href="#products" className="text-text-on-dark/60 hover:text-accent text-sm transition-colors no-underline">Custom Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-on-dark font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-text-on-dark/60 hover:text-accent text-sm transition-colors no-underline">About Us</a></li>
              <li><a href="#features" className="text-text-on-dark/60 hover:text-accent text-sm transition-colors no-underline">Why Choose Us</a></li>
              <li><a href="#contact" className="text-text-on-dark/60 hover:text-accent text-sm transition-colors no-underline">Contact</a></li>
              <li><a href="#" className="text-text-on-dark/60 hover:text-accent text-sm transition-colors no-underline">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-on-dark font-semibold text-sm uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-on-dark/60 hover:text-accent text-sm transition-colors no-underline">Technical Support</a></li>
              <li><a href="#" className="text-text-on-dark/60 hover:text-accent text-sm transition-colors no-underline">Spare Parts</a></li>
              <li><a href="#" className="text-text-on-dark/60 hover:text-accent text-sm transition-colors no-underline">Documentation</a></li>
              <li><a href="#" className="text-text-on-dark/60 hover:text-accent text-sm transition-colors no-underline">Training</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-on-dark/40 text-sm">
            © {currentYear} Artitect Machinery. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-text-on-dark/40 hover:text-accent text-sm transition-colors no-underline">Privacy Policy</a>
            <a href="#" className="text-text-on-dark/40 hover:text-accent text-sm transition-colors no-underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
