import { Cpu, Github, Twitter, Linkedin } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-[#C0C0C0]/10 bg-[#111112]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 flex items-center justify-center border border-[#C0C0C0]/30 rounded">
                <Cpu className="w-3.5 h-3.5 text-[#C0C0C0]" />
              </div>
              <span className="font-orbitron font-bold text-xs tracking-[0.2em] uppercase text-metallic">
                TITAN-CORE
              </span>
            </div>
            <p className="font-inter text-sm text-[#C0C0C0]/50 leading-relaxed max-w-xs">
              Precision-engineered custom hardware. Built for those who demand more from their machines.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-orbitron text-xs tracking-[0.2em] uppercase text-[#C0C0C0]/40 mb-4">
              Navigate
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { to: '/', label: 'Hardware' },
                { to: '/blueprints', label: 'Blueprints' },
                { to: '/forge', label: 'The Forge' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="font-inter text-sm text-[#C0C0C0]/60 hover:text-[#C0C0C0] transition-colors"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-orbitron text-xs tracking-[0.2em] uppercase text-[#C0C0C0]/40 mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 flex items-center justify-center border border-[#C0C0C0]/20 rounded hover:border-[#C0C0C0]/50 hover:bg-[#C0C0C0]/5 transition-all"
                >
                  <Icon className="w-3.5 h-3.5 text-[#C0C0C0]/60" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#C0C0C0]/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-[#C0C0C0]/30">
            © 2026 TITAN-CORE. All rights reserved.
          </p>
          <p className="font-orbitron text-xs tracking-widest text-[#C0C0C0]/20 uppercase">
            Forged in Precision
          </p>
        </div>
      </div>
    </footer>
  );
}
