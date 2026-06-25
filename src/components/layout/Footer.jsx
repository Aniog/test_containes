const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold tracking-tight">ARTITECT</span>
              <span className="text-xl font-light tracking-tight text-white/70 ml-1">MACHINERY</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Precision-engineered sheet metal folding machines built for performance, reliability, and lasting value.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Products</h4>
            <ul className="list-none p-0 m-0 space-y-2">
              <li><span className="text-sm text-white/70">Double Folding Machine</span></li>
              <li><span className="text-sm text-white/70">Double Folder</span></li>
              <li><span className="text-sm text-white/70">Sheet Metal Folder</span></li>
              <li><span className="text-sm text-white/70">Metal Folding Machine</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Company</h4>
            <ul className="list-none p-0 m-0 space-y-2">
              <li><a href="#about" className="text-sm text-white/70 hover:text-white transition-colors no-underline">About Us</a></li>
              <li><a href="#features" className="text-sm text-white/70 hover:text-white transition-colors no-underline">Why Choose Us</a></li>
              <li><a href="#contact" className="text-sm text-white/70 hover:text-white transition-colors no-underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white">Contact</h4>
            <ul className="list-none p-0 m-0 space-y-2">
              <li><span className="text-sm text-white/70">info@artitectmachinery.com</span></li>
              <li><span className="text-sm text-white/70">+1 (555) 234-5678</span></li>
              <li><span className="text-sm text-white/70">Mon – Fri, 8:00 – 17:00</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © 2026 Artitect Machinery. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-white/50 hover:text-white/80 transition-colors no-underline">Privacy Policy</a>
            <a href="#" className="text-sm text-white/50 hover:text-white/80 transition-colors no-underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
