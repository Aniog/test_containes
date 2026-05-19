const Footer = () => (
  <footer className="bg-black border-t border-neutral-900 py-12 px-6 md:px-12">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <p className="text-white font-black text-lg tracking-widest uppercase">MicroCosmos</p>
        <p className="text-neutral-600 text-sm mt-1">Exploring the invisible universe</p>
      </div>
      <div className="flex gap-8 text-sm text-neutral-500">
        <a href="#explore" className="hover:text-white transition-colors">Explore</a>
        <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
        <a href="#worlds" className="hover:text-white transition-colors">Worlds</a>
        <a href="#science" className="hover:text-white transition-colors">Science</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
      <p className="text-neutral-700 text-xs">© 2026 MicroCosmos. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
