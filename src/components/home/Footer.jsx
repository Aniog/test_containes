const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-sm flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">A</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                ARTITECT<span className="text-amber-500 ml-1">MACHINERY</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Leading manufacturer of precision sheet metal folding machines.
              Delivering quality, reliability, and innovation since 1999.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Products</h4>
            <ul className="space-y-2.5">
              <li><a href="#products" className="text-slate-400 text-sm hover:text-amber-400 transition-colors">Double Folding Machine</a></li>
              <li><a href="#products" className="text-slate-400 text-sm hover:text-amber-400 transition-colors">Sheet Metal Folder</a></li>
              <li><a href="#products" className="text-slate-400 text-sm hover:text-amber-400 transition-colors">Metal Folding Machine</a></li>
              <li><a href="#products" className="text-slate-400 text-sm hover:text-amber-400 transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#about" className="text-slate-400 text-sm hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-slate-400 text-sm hover:text-amber-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-400 text-sm hover:text-amber-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 text-sm hover:text-amber-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 text-sm hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 text-sm hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
