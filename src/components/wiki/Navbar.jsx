import { useState, useEffect } from 'react';
import { BookOpen, Github, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: '功能特性', href: '#features', page: '/' },
  { label: '工作原理', href: '/how-it-works', page: '/how-it-works' },
  { label: '快速开始', href: '#quickstart', page: '/' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMenuOpen(false);
    if (link.href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(link.href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(link.href);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-[#1e1e2e] shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span className="text-slate-100 font-bold text-lg tracking-tight">LLM Wiki</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.href === '/how-it-works' && location.pathname === '/how-it-works';
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/5 ${isActive ? 'text-indigo-400' : 'text-slate-400 hover:text-slate-100'}`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/nashsu/llm_wiki"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-slate-100 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://github.com/nashsu/llm_wiki/releases"
              target="_blank"
              rel="noreferrer"
              className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl px-4 py-2 text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20"
            >
              立即下载
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-400 hover:text-slate-100 p-2 rounded-lg transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[#1e1e2e]">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="block text-slate-400 hover:text-slate-100 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#1e1e2e] flex flex-col gap-2">
              <a
                href="https://github.com/nashsu/llm_wiki"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-slate-100 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://github.com/nashsu/llm_wiki/releases"
                target="_blank"
                rel="noreferrer"
                className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl px-4 py-2.5 text-sm font-semibold transition-all text-center"
              >
                立即下载
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
