import { Microscope } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
        <nav className="flex items-center justify-between rounded-full border border-cosmos-border bg-cosmos-surface/60 backdrop-blur-md px-5 py-3">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-cosmos-gradient text-cosmos-bg shadow-[0_0_24px_rgba(124,249,216,0.35)]">
              <Microscope className="w-5 h-5" strokeWidth={2.2} />
            </span>
            <span className="font-display text-lg tracking-tight text-cosmos-fg">
              Micro<span className="text-cosmos-accent">Cosmos</span>
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm text-cosmos-muted">
            <li><a href="#about" className="hover:text-cosmos-fg transition-colors">About</a></li>
            <li><a href="#features" className="hover:text-cosmos-fg transition-colors">Features</a></li>
            <li><a href="#gallery" className="hover:text-cosmos-fg transition-colors">Gallery</a></li>
            <li><a href="#specimens" className="hover:text-cosmos-fg transition-colors">Specimens</a></li>
            <li><a href="#journal" className="hover:text-cosmos-fg transition-colors">Journal</a></li>
          </ul>
          <a
            href="#cta"
            className="hidden sm:inline-flex items-center rounded-full bg-cosmos-gradient text-cosmos-bg font-medium text-sm px-4 py-2 hover:opacity-90 transition"
          >
            Begin Exploring
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
