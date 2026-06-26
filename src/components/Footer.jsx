export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white/80">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg tracking-tight">A</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-bold text-lg tracking-wide text-white">
                  ARTITECT
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-white/50">
                  Machinery
                </span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Premium double folding machines and sheet metal folders for workshops worldwide.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white tracking-wider uppercase mb-6">
              Products
            </h4>
            <ul className="space-y-3">
              {[
                'Double Folding Machine',
                'Sheet Metal Folder',
                'Metal Folder Machine',
                'Custom Solutions',
                'Spare Parts',
              ].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-sm text-white/50 hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white tracking-wider uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Careers',
                'News',
                'Distributors',
                'Contact',
              ].map((item) => (
                <li key={item}>
                  <a href="#about" className="text-sm text-white/50 hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white tracking-wider uppercase mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              {[
                'Technical Support',
                'Operator Training',
                'Documentation',
                'Warranty Info',
                'Service Centers',
              ].map((item) => (
                <li key={item}>
                  <a href="#contact" className="text-sm text-white/50 hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
              <a key={item} href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
