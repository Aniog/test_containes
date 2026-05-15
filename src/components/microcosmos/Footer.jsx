export default function Footer() {
  return (
    <footer className="bg-[#060609] border-t border-white/10 py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <span
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Micro<span className="text-violet-400">Cosmos</span>
            </span>
            <p
              className="text-white/40 text-sm mt-2 max-w-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Revealing the invisible universe that surrounds and sustains all life.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6 justify-center">
            {['Gallery', 'Worlds', 'Science', 'Explore'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/50 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Images courtesy of Unsplash contributors
          </p>
        </div>
      </div>
    </footer>
  );
}
