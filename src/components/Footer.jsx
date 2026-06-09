import { Factory } from 'lucide-react';

const footerLinks = {
  Products: ['Double Folding Machine', 'Sheet Metal Folder', 'Metal Folder Machine', 'Accessories'],
  Company: ['About Us', 'Careers', 'News', 'Partners'],
  Support: ['Technical Docs', 'Service & Repair', 'Warranty', 'FAQ'],
};

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5 mb-4">
              <Factory className="w-6 h-6 text-accent-400" />
              <span className="font-display text-xl font-semibold tracking-tight text-white">
                ARTITECT <span className="text-accent-400 font-bold">MACHINERY</span>
              </span>
            </a>
            <p className="text-sm text-brand-400 leading-relaxed max-w-sm mb-5">
              Precision sheet metal folding machines engineered for workshops that demand perfection. Built to last, designed to perform.
            </p>
            <p className="text-xs text-brand-500">
              &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-brand-400 hover:text-accent-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-500">
            Proudly engineering precision machinery since 2003.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-brand-500 hover:text-brand-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-brand-500 hover:text-brand-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
