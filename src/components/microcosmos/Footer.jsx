const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-space text-2xl font-bold text-white mb-2">
              Micro<span className="text-teal-400">Cosmos</span>
            </h3>
            <p className="text-gray-500 text-sm max-w-xs">
              Exploring the hidden universe of microscopic life and the science that reveals it.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#explore" className="hover:text-teal-400 transition-colors">Explore</a>
            <a href="#gallery" className="hover:text-teal-400 transition-colors">Gallery</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Research</a>
            <a href="#" className="hover:text-teal-400 transition-colors">About</a>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-600 text-sm">
          <p>© 2026 MicroCosmos. Dedicated to the wonders of the invisible world.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
