import { Compass, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const footerLinks = {
  Destinations: ['Steampunk Albion', 'Neon Megacity IX', 'Terra Prima', 'Aqua Infinitum', 'Upcoming Realities'],
  Company: ['About Nexus', 'Our Technology', 'Safety Standards', 'Careers', 'Press'],
  Support: ['FAQ', 'Travel Insurance', 'Cancellation Policy', 'Contact Us', 'Emergency Recall'],
};

export default function Footer() {
  return (
    <footer id="about" className="bg-space-black border-t border-purple-900/30 pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-700 to-violet-500 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="font-cinzel text-xl font-bold text-mist tracking-widest">
                NEXUS <span className="text-gold">VOYAGES</span>
              </span>
            </div>
            <p className="font-inter text-sm text-gray-500 leading-relaxed max-w-xs mb-6">
              The world's only licensed quantum portal travel agency. Certified by the
              Interdimensional Travel Authority since 2019.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold/40 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-cinzel text-sm font-semibold text-mist tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-inter text-sm text-gray-500 hover:text-gold transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-900/60 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-gray-600">
            © 2026 Nexus Voyages. All realities reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Travel', 'Reality Disclaimer'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-inter text-xs text-gray-600 hover:text-gray-400 transition-colors"
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
