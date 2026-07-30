export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-2xl font-black text-white">
              Micro<span className="text-teal-400">Cosmos</span>
            </span>
            <p className="text-gray-500 text-sm mt-1">
              Exploring the hidden universe of microscopic life.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#gallery" className="hover:text-teal-400 transition-colors">Gallery</a>
            <a href="#organisms" className="hover:text-teal-400 transition-colors">Organisms</a>
            <a href="#techniques" className="hover:text-teal-400 transition-colors">Techniques</a>
            <a href="#spotlight" className="hover:text-teal-400 transition-colors">Spotlight</a>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} MicroCosmos. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
