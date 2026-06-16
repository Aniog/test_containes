const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brass-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                ARTITECT
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Leading manufacturer of precision sheet metal folding machines.
              Trusted by professionals in over 40 countries.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#products" className="text-sm text-slate-400 hover:text-brass-400 transition-colors">
                  Double Folding Machine
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-slate-400 hover:text-brass-400 transition-colors">
                  Sheet Metal Folder
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-slate-400 hover:text-brass-400 transition-colors">
                  Metal Folder Pro
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-slate-400 hover:text-brass-400 transition-colors">
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="text-sm text-slate-400 hover:text-brass-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-slate-400 hover:text-brass-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-slate-400 hover:text-brass-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-brass-400 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-brass-400 transition-colors">
                  Technical Support
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-brass-400 transition-colors">
                  Spare Parts
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-brass-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-brass-400 transition-colors">
                  Warranty
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2026 ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
