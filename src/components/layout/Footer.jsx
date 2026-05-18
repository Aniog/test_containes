import { Leaf } from 'lucide-react';

const Footer = () => (
  <footer className="bg-brand-text text-white py-12 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2 font-black text-xl mb-3">
            <Leaf className="w-5 h-5 text-brand-green-light" />
            Leafy Home
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Bringing the beauty of nature into your home, one plant at a time.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {['Home', 'Plants', 'Why Us', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white/70 hover:text-brand-green-light transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>123 Garden Street, NY 10001</li>
            <li>hello@leafyhome.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs">
        <span>© {new Date().getFullYear()} Leafy Home. All rights reserved.</span>
        <span>Made with love for plant lovers everywhere.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
