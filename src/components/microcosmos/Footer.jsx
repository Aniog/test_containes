const navLinks = ['Intro', 'Gallery', 'Organisms', 'Worlds']

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Micro<span className="text-teal-400">Cosmos</span>
            </h3>
            <p className="text-gray-500 text-sm max-w-xs">
              Celebrating the invisible universe that sustains all life on Earth.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Tagline */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-xs uppercase tracking-widest">
              Explore · Discover · Wonder
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-600 text-xs">
            © 2026 MicroCosmos. A celebration of microscopic life.
          </p>
        </div>
      </div>
    </footer>
  )
}
