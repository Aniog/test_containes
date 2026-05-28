const Footer = () => (
  <footer className="bg-gray-950 border-t border-gray-800 py-10 px-4 md:px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-center md:text-left">
        <span className="text-xl font-black text-white">
          Micro<span className="text-cyan-400">Cosmos</span>
        </span>
        <p className="text-gray-500 text-sm mt-1">Exploring the invisible universe</p>
      </div>
      <div className="flex gap-6 text-sm text-gray-500">
        <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
        <a href="#gallery" className="hover:text-cyan-400 transition-colors">Gallery</a>
        <a href="#organisms" className="hover:text-cyan-400 transition-colors">Organisms</a>
        <a href="#science" className="hover:text-cyan-400 transition-colors">Science</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </div>
      <p className="text-gray-600 text-xs">© 2026 MicroCosmos. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
