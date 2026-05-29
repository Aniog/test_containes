export default function Footer() {
  return (
    <footer className="bg-cosmos-surface border-t border-cosmos-elevated py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cosmos-teal to-cosmos-purple flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-cosmos-bg" />
            </div>
            <span className="font-grotesk font-bold text-cosmos-text text-base">
              Micro<span className="text-cosmos-teal">Cosmos</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="font-inter text-cosmos-dim text-sm text-center">
            Exploring the hidden universe — one microbe at a time.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            {['About', 'Gallery', 'Organisms', 'Habitats'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="font-inter text-cosmos-dim text-xs hover:text-cosmos-teal transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cosmos-elevated text-center">
          <p className="font-inter text-cosmos-dim text-xs">
            © 2026 MicroCosmos. A journey into the invisible world.
          </p>
        </div>
      </div>
    </footer>
  );
}
