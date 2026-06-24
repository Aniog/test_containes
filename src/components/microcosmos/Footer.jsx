import { Microscope, Github, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-cosmos-border mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-cosmos-gradient text-cosmos-bg">
              <Microscope className="w-5 h-5" strokeWidth={2.2} />
            </span>
            <span className="font-display text-lg tracking-tight text-cosmos-fg">
              Micro<span className="text-cosmos-accent">Cosmos</span>
            </span>
          </div>
          <p className="mt-4 text-cosmos-muted text-sm max-w-md leading-relaxed">
            A visual atlas and field journal of microscopic life, made by a small studio
            of biologists, photographers, and designers based between Bristol and Lisbon.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cosmos-accent">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cosmos-muted">
            <li><a href="#about" className="hover:text-cosmos-fg transition">About the project</a></li>
            <li><a href="#gallery" className="hover:text-cosmos-fg transition">Gallery</a></li>
            <li><a href="#specimens" className="hover:text-cosmos-fg transition">Specimens</a></li>
            <li><a href="#journal" className="hover:text-cosmos-fg transition">Field journal</a></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cosmos-accent">
            Studio
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cosmos-muted">
            <li><a href="#" className="hover:text-cosmos-fg transition">Press kit</a></li>
            <li><a href="#" className="hover:text-cosmos-fg transition">Licensing</a></li>
            <li><a href="#" className="hover:text-cosmos-fg transition">Contact</a></li>
          </ul>
          <div className="mt-5 flex gap-3 text-cosmos-muted">
            <a href="#" aria-label="Twitter" className="hover:text-cosmos-fg transition">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-cosmos-fg transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Github" className="hover:text-cosmos-fg transition">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cosmos-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cosmos-muted">
          <p>© 2026 MicroCosmos Studio. All photographs licensed CC-BY 4.0.</p>
          <p className="font-mono uppercase tracking-[0.25em] text-cosmos-muted/80">
            Made under a microscope
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
