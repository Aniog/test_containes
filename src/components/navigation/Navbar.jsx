import { Microscope } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cosmos-dark/80 backdrop-blur-lg border-b border-cosmos-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Microscope className="w-6 h-6 text-cosmos-cyan" />
          <span className="text-xl font-bold text-cosmos-text">MicroCosmos</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-cosmos-muted hover:text-cosmos-cyan transition-colors duration-300 text-sm font-medium">Home</a>
          <a href="#gallery" className="text-cosmos-muted hover:text-cosmos-cyan transition-colors duration-300 text-sm font-medium">Gallery</a>
          <a href="#organisms" className="text-cosmos-muted hover:text-cosmos-cyan transition-colors duration-300 text-sm font-medium">Organisms</a>
          <a href="#explore" className="text-cosmos-muted hover:text-cosmos-cyan transition-colors duration-300 text-sm font-medium">Explore</a>
          <a href="#about" className="text-cosmos-muted hover:text-cosmos-cyan transition-colors duration-300 text-sm font-medium">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
