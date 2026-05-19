import { Leaf, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-950 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-serif font-bold text-xl mb-4">
              <Leaf className="w-5 h-5 text-green-leaf" />
              Into the Wild
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Celebrating the beauty of our natural world and inspiring a deeper connection with the earth.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-green-leaf transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-leaf transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-leaf transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Explore</h4>
            <ul className="space-y-3">
              {['Forests', 'Oceans', 'Mountains', 'Deserts', 'Wildlife'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Stay Connected</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Get weekly nature stories and photography delivered to your inbox.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm px-4 py-2 rounded-full focus:outline-none focus:border-green-leaf"
              />
              <button
                type="submit"
                className="bg-green-forest hover:bg-green-leaf text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2026 Into the Wild. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
