import { PawPrint } from 'lucide-react';

const Footer = () => (
  <footer className="bg-stone-900 text-stone-300 py-12 px-4 sm:px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-xl mb-3">
            <PawPrint className="w-6 h-6 text-amber-400" />
            <span>Paws &amp; Tails</span>
          </div>
          <p className="text-sm text-stone-400 leading-relaxed">
            Premium dog breeders based in Austin, Texas. Raising happy, healthy puppies with love since 2010.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {['Home', 'Available Dogs', 'About Us', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="text-stone-400 hover:text-amber-400 text-sm transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Contact</h4>
          <ul className="flex flex-col gap-2 text-sm text-stone-400">
            <li>(555) 123-4567</li>
            <li>hello@pawsandtails.com</li>
            <li>Austin, Texas</li>
            <li className="text-stone-500">Mon–Sat: 9am – 6pm</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
        <p>© {new Date().getFullYear()} Paws &amp; Tails. All rights reserved.</p>
        <p>Raising puppies with love ❤️</p>
      </div>
    </div>
  </footer>
);

export default Footer;
