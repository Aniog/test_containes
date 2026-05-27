import { Microscope, Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030a14] border-t border-teal-900/40 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-white font-black text-xl">
              <Microscope className="w-6 h-6 text-teal-400" />
              <span>Micro<span className="text-teal-400">Cosmos</span></span>
            </div>
            <p className="text-slate-500 text-sm text-center md:text-left max-w-xs">
              Exploring the hidden universe of microscopic life — one organism at a time.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {['Home', 'About', 'Gallery', 'Categories', 'Creatures', 'Facts'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-teal-400 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, label: 'GitHub' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Mail, label: 'Email' },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-teal-900/50 hover:border-teal-500/60 flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-teal-900/30 text-center text-slate-600 text-xs">
          © {new Date().getFullYear()} MicroCosmos. All rights reserved. Celebrating the invisible world.
        </div>
      </div>
    </footer>
  );
}
