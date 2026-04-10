import { Brain } from 'lucide-react';

const links = ['About', 'How It Works', 'Applications', 'Future'];

const NavBar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2 text-white font-bold text-xl">
        <Brain className="w-6 h-6 text-violet-400" />
        <span>AI<span className="text-violet-400">ntelligence</span></span>
      </div>
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-gray-300 hover:text-violet-400 transition-colors text-sm font-medium"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#applications"
        className="hidden md:inline-block bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
      >
        Explore AI
      </a>
    </div>
  </nav>
);

export default NavBar;
