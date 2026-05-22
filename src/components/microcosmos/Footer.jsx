const Footer = () => (
  <footer className="bg-gray-950 border-t border-gray-800 py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-2xl font-black">
            <span className="text-cyan-400">Micro</span>
            <span className="text-white">Cosmos</span>
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Exploring the universe beneath the surface
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {['About', 'Gallery', 'Worlds', 'Explore'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-cyan-400 text-sm uppercase tracking-widest transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-800 text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} MicroCosmos. A celebration of the invisible world.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
