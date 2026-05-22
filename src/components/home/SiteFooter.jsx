import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const footerLinks = {
  Races: ['Road Racing', 'Mountain Bike', 'Gravel Events', 'Track Racing', 'Cyclocross'],
  Bikes: ['Aero Road', 'Endurance Road', 'Full Suspension MTB', 'Hardtail MTB', 'Gravel Bikes'],
  Community: ['Rider Profiles', 'Race Results', 'Training Tips', 'Gear Reviews', 'Newsletter'],
  About: ['Our Story', 'Partners', 'Press', 'Careers', 'Contact'],
};

const socials = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Facebook, label: 'Facebook' },
];

const SiteFooter = () => (
  <footer className="bg-brand-surface border-t border-neutral-800">
    {/* CTA Banner */}
    <div className="bg-brand-red py-14 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display font-black uppercase text-4xl md:text-6xl text-white mb-4 leading-none">
          Ready to Race?
        </h2>
        <p className="text-red-100 text-base md:text-lg mb-8 max-w-xl mx-auto">
          Join thousands of riders competing in the world's most exciting cycling events. Register today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#calendar"
            className="bg-white text-brand-red font-semibold uppercase tracking-widest rounded-full px-8 py-4 text-sm hover:bg-neutral-100 transition-colors"
          >
            Browse Events
          </a>
          <a
            href="#"
            className="border border-white/50 hover:border-white text-white font-semibold uppercase tracking-widest rounded-full px-8 py-4 text-sm transition-colors"
          >
            Create Account
          </a>
        </div>
      </div>
    </div>

    {/* Main footer */}
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <p className="font-display font-black text-2xl uppercase tracking-widest text-white mb-4">
            Velo<span className="text-brand-red">Race</span>
          </p>
          <p className="text-neutral-400 text-sm leading-relaxed mb-6">
            The home of competitive cycling. Races, bikes, and the community that drives the sport forward.
          </p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-neutral-700 hover:border-brand-red flex items-center justify-center text-neutral-400 hover:text-brand-red transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="font-semibold uppercase tracking-widest text-xs text-neutral-100 mb-4">
              {category}
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-neutral-400 hover:text-brand-red text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <p>© 2026 VeloRace. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-neutral-300 transition-colors">Cookie Settings</a>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
