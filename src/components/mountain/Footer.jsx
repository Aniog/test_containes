import { Mountain, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2 text-white font-black text-xl tracking-tight mb-3">
            <Mountain className="w-6 h-6 text-sky-400" />
            SUMMIT
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Inspiring climbers of all levels to push their limits and discover the transformative power of the mountains.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['About', 'Peaks', 'Why Climb', 'Gear', 'Gallery'].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(' ', '')}`}
                  className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Follow the Journey</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400 transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
          <p className="text-slate-500 text-xs mt-6">
            Share your summit stories with <span className="text-sky-400">#SummitClimbing</span>
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-slate-500 text-xs">
          © 2026 Summit. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs">
          Built for those who dare to climb higher.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
