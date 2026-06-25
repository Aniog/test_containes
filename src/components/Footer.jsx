import { Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10">
      {/* CTA Banner */}
      <div className="bg-[#e10600] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-black uppercase text-2xl md:text-3xl tracking-wide">
              Lights Out. And Away We Go.
            </h3>
            <p className="text-white/80 mt-1">Follow every race of the 2025 Formula 1 season.</p>
          </div>
          <a
            href="https://www.formula1.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-[#e10600] px-8 py-3 font-black uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Official F1 Site
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#e10600] flex items-center justify-center">
                <span className="text-white font-black text-base leading-none">F1</span>
              </div>
              <span className="text-white font-black text-xl uppercase tracking-widest">Formula 1</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              The FIA Formula One World Championship — the highest class of international single-seater auto racing.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-gray-400 hover:border-[#e10600] hover:text-[#e10600] transition-colors bg-transparent cursor-pointer"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: 'About F1', href: '#about' },
                { label: 'Teams', href: '#teams' },
                { label: 'Circuits', href: '#circuits' },
                { label: 'Legends', href: '#legends' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-500 hover:text-white text-sm transition-colors bg-transparent border-none cursor-pointer p-0"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Season info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">2025 Season</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>20 Races</li>
              <li>10 Teams</li>
              <li>20 Drivers</li>
              <li>5 Continents</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2025 Formula One World Championship Limited. Fan tribute website.
          </p>
          <p className="text-gray-600 text-xs">
            Built with passion for the sport.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
