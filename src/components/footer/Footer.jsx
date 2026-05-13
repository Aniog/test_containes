import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-green-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">GreenNest</span>
            </div>
            <p className="text-sm text-green-300 leading-relaxed">
              Bringing the beauty of nature into your home, one plant at a time.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-bold text-white mb-3 uppercase tracking-wide">Quick Links</p>
            <ul className="space-y-2">
              {['Home', 'Plants', 'Why Us', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-sm text-green-300 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-sm font-bold text-white mb-3 uppercase tracking-wide">Stay in the Loop</p>
            <p className="text-sm text-green-300 mb-3">Get plant care tips and exclusive offers.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 rounded-full bg-green-800 border border-green-700 text-sm text-white placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-500 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-green-400">© 2026 GreenNest. All rights reserved.</p>
          <p className="text-xs text-green-400">Made with 🌿 for plant lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
