import { Microscope } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Categories', href: '#categories' },
  { label: 'Specimens', href: '#specimens' },
  { label: 'Facts', href: '#facts' },
];

export default function FooterSection() {
  return (
    <footer className="bg-[#050d1a] border-t border-[#1e3a5f] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#00d4ff]/20 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-[#00d4ff]" />
              </div>
              <span className="text-[#f0f9ff] font-bold text-lg">
                Micro<span className="text-[#00d4ff]">Cosmos</span>
              </span>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xs">
              Exploring the invisible universe that sustains all life on Earth — one microorganism at a time.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-[#f0f9ff] font-semibold text-sm uppercase tracking-widest mb-4">
              Explore
            </h5>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#94a3b8] hover:text-[#00d4ff] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-[#f0f9ff] font-semibold text-sm uppercase tracking-widest mb-4">
              Stay Curious
            </h5>
            <p className="text-[#94a3b8] text-sm mb-4">
              Subscribe for weekly discoveries from the microcosmos.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-[#0f1f35] border border-[#1e3a5f] text-[#f0f9ff] placeholder-[#475569] text-sm px-4 py-2.5 rounded-full focus:outline-none focus:border-[#00d4ff]/50"
              />
              <button className="bg-[#00d4ff] text-[#050d1a] text-sm font-bold px-5 py-2.5 rounded-full hover:bg-cyan-300 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1e3a5f] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-[#475569] text-sm">
            Dedicated to the invisible architects of life on Earth.
          </p>
        </div>
      </div>
    </footer>
  );
}
