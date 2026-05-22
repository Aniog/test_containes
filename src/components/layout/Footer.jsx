import { Leaf, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => (
  <footer id="contact" className="bg-gray-900 text-gray-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-white font-extrabold text-xl">
            <Leaf className="w-5 h-5 text-green-400" />
            FreshFruit
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Bringing nature's finest fruits from local farms straight to your table. Fresh, organic, and delicious.
          </p>
          <div className="flex gap-3 mt-2">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-700 flex items-center justify-center transition-colors"
              >
                <Icon className="w-4 h-4 text-gray-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-white font-semibold mb-4">Shop</h4>
          <ul className="flex flex-col gap-2 text-sm">
            {['All Fruits', 'Berries', 'Tropical', 'Citrus', 'Seasonal Boxes'].map((item) => (
              <li key={item}>
                <a href="#shop" className="hover:text-green-400 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="flex flex-col gap-2 text-sm">
            {['About Us', 'Our Farms', 'Sustainability', 'Careers', 'Blog'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-green-400 transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Stay Fresh</h4>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe for weekly deals, seasonal picks, and healthy recipes.
          </p>
          <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-500"
            />
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-600 text-white font-semibold rounded-xl px-4 py-2.5 text-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <p>© 2026 FreshFruit. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
