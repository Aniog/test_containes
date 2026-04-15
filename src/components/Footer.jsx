import { Zap } from 'lucide-react';

const links = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Documentation', 'API Reference', 'Community', 'Status'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              AI Site
            </a>
            <p className="text-slate-500 text-sm leading-relaxed">
              The AI platform for modern teams. Build, automate, and grow.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© 2026 AI Site. All rights reserved.</p>
          <p className="text-slate-600 text-xs">Built with ❤️ and artificial intelligence</p>
        </div>
      </div>
    </footer>
  );
}
