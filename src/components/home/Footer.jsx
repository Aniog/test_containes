import { Microscope } from 'lucide-react';

const navLinks = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'Specimens', href: '#specimens' },
  { label: 'Ecosystems', href: '#ecosystem' },
];

const Footer = () => {
  return (
    <footer className="bg-cosmos-deep border-t border-cosmos-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Microscope className="w-6 h-6 text-cosmos-teal" />
              <span className="text-xl font-bold text-white">
                Micro<span className="text-cosmos-teal">Cosmos</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Exploring the invisible universe that surrounds us — one microorganism at a time.
              Science, beauty, and wonder at the microscopic scale.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-400 hover:text-cosmos-teal transition-colors duration-200 text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Stay Curious
            </h4>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe for weekly discoveries from the microscopic world.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-cosmos-card border border-cosmos-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cosmos-teal transition-colors"
              />
              <button className="bg-cosmos-teal text-cosmos-black font-semibold px-4 py-2.5 rounded-lg hover:bg-cosmos-cyan transition-colors text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cosmos-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Dedicated to the beauty of the invisible world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
