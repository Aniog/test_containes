const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-[var(--font-heading)] text-2xl font-bold text-white">
                ARTITECT
              </span>
              <span className="text-copper text-sm font-medium tracking-widest uppercase">
                Machinery
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              Precision-engineered sheet metal folding machines designed for professionals 
              who demand accuracy, reliability, and efficiency in every fold.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><a href="#products" className="text-white/60 hover:text-copper text-sm transition-colors no-underline">Double Folding Machine</a></li>
              <li><a href="#products" className="text-white/60 hover:text-copper text-sm transition-colors no-underline">Sheet Metal Folder</a></li>
              <li><a href="#products" className="text-white/60 hover:text-copper text-sm transition-colors no-underline">Metal Folding Machine</a></li>
              <li><a href="#products" className="text-white/60 hover:text-copper text-sm transition-colors no-underline">Custom Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><a href="#about" className="text-white/60 hover:text-copper text-sm transition-colors no-underline">About Us</a></li>
              <li><a href="#features" className="text-white/60 hover:text-copper text-sm transition-colors no-underline">Why Choose Us</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-copper text-sm transition-colors no-underline">Contact</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-copper text-sm transition-colors no-underline">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Precision Engineering for Modern Manufacturing
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
