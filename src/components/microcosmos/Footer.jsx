export default function Footer() {
  return (
    <footer className="border-t border-cosmos-line py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-gradient-to-br from-cosmos-accent via-cosmos-accent-2 to-cosmos-accent-3" />
          <span className="font-display text-base text-cosmos-text">
            Micro<span className="text-cosmos-accent">Cosmos</span>
          </span>
        </div>

        <p className="font-mono text-xs uppercase tracking-[0.25em] text-cosmos-muted">
          © 2026 · Curated under the lens.
        </p>

        <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.25em] text-cosmos-muted">
          <a href="#gallery" className="hover:text-cosmos-text transition-colors">
            Gallery
          </a>
          <a href="#stories" className="hover:text-cosmos-text transition-colors">
            Stories
          </a>
          <a href="#contact" className="hover:text-cosmos-text transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
