import { Microscope, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const footerLinks = {
  Explore: ['Gallery', 'Creatures', 'Ecosystems', 'Research'],
  Learn: ['About Microbes', 'Cell Biology', 'Fungi & Mold', 'Aquatic Life'],
  Connect: ['Newsletter', 'Community', 'Contribute', 'Contact'],
};

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Mail, label: 'Email', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050a0f] border-t border-[#00d4c8]/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Microscope className="w-6 h-6 text-[#00d4c8]" />
              <span className="text-[#e2f0f9] font-bold text-lg tracking-tight">
                Micro<span className="text-[#00d4c8]">Cosmos</span>
              </span>
            </div>
            <p className="text-[#7fa8c4] text-sm leading-relaxed max-w-xs mb-6">
              Exploring the invisible universe that surrounds us — one microbe at a time.
              Discover the beauty and complexity of life at the smallest scale.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full border border-[#00d4c8]/20 flex items-center justify-center text-[#4a7a9b] hover:text-[#00d4c8] hover:border-[#00d4c8]/50 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[#e2f0f9] font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#7fa8c4] text-sm hover:text-[#00d4c8] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border border-[#00d4c8]/15 rounded-2xl p-6 md:p-8 bg-[#0d1a24] mb-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-[#e2f0f9] font-bold text-lg mb-1">Stay in the Loop</h3>
              <p className="text-[#7fa8c4] text-sm">
                Get weekly discoveries from the microcosmos delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-64 bg-[#050a0f] border border-[#00d4c8]/20 text-[#e2f0f9] placeholder-[#4a7a9b] text-sm px-4 py-2.5 rounded-full focus:outline-none focus:border-[#00d4c8]/50"
              />
              <button className="bg-[#00d4c8] text-[#050a0f] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#00b8ad] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t border-[#00d4c8]/10">
          <p className="text-[#4a7a9b] text-xs">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Use', 'Accessibility'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#4a7a9b] text-xs hover:text-[#7fa8c4] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
