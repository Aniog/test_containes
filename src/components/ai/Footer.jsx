import { Brain } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#050510] border-t border-white/10 py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-white font-bold text-lg">
        <Brain className="w-5 h-5 text-violet-400" />
        <span>AI<span className="text-violet-400">ntelligence</span></span>
      </div>
      <p className="text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} AIntelligence. Exploring the frontier of artificial intelligence.
      </p>
      <div className="flex gap-6 text-sm text-gray-500">
        <a href="#about" className="hover:text-violet-400 transition-colors">About</a>
        <a href="#how-it-works" className="hover:text-violet-400 transition-colors">How It Works</a>
        <a href="#future" className="hover:text-violet-400 transition-colors">Future</a>
      </div>
    </div>
  </footer>
);

export default Footer;
