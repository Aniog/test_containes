import { Droplets } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white font-extrabold text-xl mb-3">
              <Droplets className="w-6 h-6 text-cyan-400" />
              AquaPure
            </div>
            <p className="text-slate-400 leading-relaxed text-sm max-w-xs">
              Pure mountain spring water, bottled at the source. Nothing added,
              nothing removed — just nature's finest.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Explore
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              {['Source', 'Benefits', 'About', 'Contact'].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Contact
            </p>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li>hello@aquapure.com</li>
              <li>+1 (800) 278-2787</li>
              <li>Alpine Springs, CO 80401</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AquaPure. All rights reserved.</p>
          <p>Sustainably sourced · Zero additives · Carbon neutral</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
