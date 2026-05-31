import { Waves, Mail, Globe, Anchor } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-abyss border-t border-bio-cyan/10 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-6 h-6 text-bio-cyan" />
              <span className="font-display text-xl font-bold text-pearl tracking-widest">ABYSSIA</span>
            </div>
            <p className="text-muted-slate text-sm leading-relaxed font-sans">
              A civilization 4,000 meters beneath the surface, thriving in the eternal dark of the deep ocean since 12,000 BCE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-bio-cyan uppercase tracking-widest text-xs font-semibold mb-4">Discover</h4>
            <ul className="space-y-2">
              {['Cities', 'Transportation', 'Government', 'Technology', 'Culture'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const el = document.querySelector(`#${item.toLowerCase()}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-muted-slate hover:text-bio-cyan transition-colors duration-300 text-sm font-sans"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="font-heading text-bio-cyan uppercase tracking-widest text-xs font-semibold mb-4">Surface Liaison</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-slate text-sm">
                <Mail className="w-4 h-4 text-bio-cyan flex-shrink-0" />
                <span className="font-sans">contact@abyssia.deep</span>
              </div>
              <div className="flex items-center gap-3 text-muted-slate text-sm">
                <Globe className="w-4 h-4 text-bio-cyan flex-shrink-0" />
                <span className="font-sans">Depth: 4,200m — Pacific Trench</span>
              </div>
              <div className="flex items-center gap-3 text-muted-slate text-sm">
                <Anchor className="w-4 h-4 text-bio-cyan flex-shrink-0" />
                <span className="font-sans">Est. 12,000 BCE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-bio-cyan/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-slate text-xs font-sans">
            © 12,026 Abyssian Council of Records. All depths reserved.
          </p>
          <p className="text-muted-slate/50 text-xs font-sans italic">
            "The surface world sleeps. We have always been awake."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
