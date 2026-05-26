import { Instagram, Youtube, Twitter } from 'lucide-react';

const footerLinks = {
  Learn: ['Beginner Tricks', 'Intermediate Tricks', 'Advanced Tricks', 'Video Tutorials'],
  Gear: ['Decks', 'Trucks', 'Wheels', 'Accessories'],
  Community: ['Find Spots', 'Events', 'Forums', 'Leaderboard'],
  Company: ['About Us', 'Blog', 'Careers', 'Contact'],
};

const Footer = () => (
  <footer className="bg-zinc-900 border-t border-zinc-800 pt-16 pb-8 px-6 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto">
      {/* Top row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <span className="font-display text-4xl accent-text tracking-widest leading-none block mb-2">
            SKATE
          </span>
          <p className="text-zinc-500 text-sm leading-relaxed">
            The global home for skateboarders. Learn, gear up, and connect.
          </p>
          <div className="flex gap-4 mt-5">
            <a href="#" className="text-zinc-500 hover:accent-text transition" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-500 hover:accent-text transition" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-500 hover:accent-text transition" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="text-zinc-100 text-xs font-bold uppercase tracking-widest mb-4">
              {category}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-zinc-500 hover:accent-text text-sm transition-colors"
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
      <div className="border-t border-zinc-800 pt-10 mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-zinc-100 font-bold uppercase tracking-widest text-sm mb-1">
              Stay in the loop
            </h4>
            <p className="text-zinc-500 text-sm">New tricks, gear drops, and events — straight to your inbox.</p>
          </div>
          <form
            className="flex gap-2 w-full md:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500 text-sm px-4 py-2 rounded-full focus:outline-none focus:accent-border transition flex-1 md:w-64"
            />
            <button
              type="submit"
              className="accent-bg accent-text-on font-bold uppercase tracking-widest text-xs px-5 py-2 rounded-full hover-accent-bg transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-zinc-600 text-xs">
          © {new Date().getFullYear()} SKATE. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
            <a key={item} href="#" className="text-zinc-600 hover:text-zinc-400 text-xs transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
