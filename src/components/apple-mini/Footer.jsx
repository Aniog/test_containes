const Footer = () => (
  <footer className="bg-gray-950 border-t border-gray-800 px-6 py-12">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="max-w-xs">
          <div className="text-xl font-bold text-white tracking-tight mb-3">
            ⌘ APPLE <span className="text-blue-400">mini</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            The world's most powerful mini PC. Engineered for creators, developers, and everyone in between.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="flex flex-col gap-2 text-gray-500">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#performance" className="hover:text-white transition-colors">Performance</a></li>
              <li><a href="#design" className="hover:text-white transition-colors">Design</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#articles" className="hover:text-white transition-colors">Articles</a></li>
              <li><a href="#specs" className="hover:text-white transition-colors">Specs</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="flex flex-col gap-2 text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="flex flex-col gap-2 text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs">
        <p>© 2026 APPLE mini. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
