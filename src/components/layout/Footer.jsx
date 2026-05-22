import { Leaf, Twitter, Instagram, Youtube, Rss } from 'lucide-react';

const footerLinks = {
  Topics: ['Biology', 'Space', 'Environment', 'Technology', 'Health', 'Geology'],
  Company: ['About Us', 'Our Team', 'Careers', 'Press'],
  Resources: ['Newsletter', 'Podcast', 'Research Database', 'Glossary'],
};

const socials = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Rss, label: 'RSS Feed' },
];

const Footer = () => {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-sage rounded-full p-1.5">
                <Leaf className="w-5 h-5 text-forest" />
              </div>
              <span className="text-xl font-bold">
                Nature<span className="text-sage">Scope</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Bringing you the latest discoveries in science, nature, and the environment since 2018.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-sage hover:text-forest transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white/60 mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/70 hover:text-sage transition-colors"
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
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <span>© 2026 NatureScope. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white/70 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
