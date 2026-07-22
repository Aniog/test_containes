import { Microscope, Mail, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => (
  <footer className="bg-cosmos-bg border-t border-cosmos-teal/10 py-16 px-6 md:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-cosmos-teal font-black text-xl mb-4">
            <Microscope className="w-6 h-6" />
            <span>MicroCosmos</span>
          </div>
          <p className="text-cosmos-muted text-sm leading-relaxed max-w-sm">
            Dedicated to revealing the extraordinary beauty and complexity of the microscopic world. Science, art, and wonder — all in one place.
          </p>
          <div className="flex gap-4 mt-6">
            {[Twitter, Instagram, Youtube, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-cosmos-surface border border-cosmos-teal/20 flex items-center justify-center text-cosmos-dim hover:text-cosmos-teal hover:border-cosmos-teal/50 transition-colors"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-cosmos-text text-sm font-semibold mb-4">Explore</h4>
          <ul className="space-y-2">
            {['Gallery', 'Organisms', 'Techniques', 'Research', 'Articles'].map((item) => (
              <li key={item}>
                <a href="#" className="text-cosmos-muted text-sm hover:text-cosmos-teal transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-cosmos-text text-sm font-semibold mb-4">About</h4>
          <ul className="space-y-2">
            {['Our Mission', 'Team', 'Partners', 'Press', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="text-cosmos-muted text-sm hover:text-cosmos-teal transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cosmos-teal/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-cosmos-dim text-xs">
          © 2026 MicroCosmos. All rights reserved.
        </p>
        <p className="text-cosmos-dim text-xs">
          Dedicated to the beauty of the invisible world.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
