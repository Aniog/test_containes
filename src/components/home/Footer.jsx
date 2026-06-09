import { Brain, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { label: 'What is AI', href: '#what-is-ai' },
    { label: 'Technologies', href: '#ai-technologies' },
    { label: 'Applications', href: '#ai-applications' },
    { label: 'Future', href: '#future-of-ai' },
  ];

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-ai-dark border-t border-indigo-500/10 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)]">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-slate-100 font-bold text-lg leading-none">AI Explorer</p>
              <p className="text-slate-500 text-xs">Understanding Artificial Intelligence</p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-slate-400 hover:text-slate-200 text-sm transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-lg border border-indigo-500/20 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:border-indigo-500/50 transition-all duration-200 cursor-pointer"
              >
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent my-8" />

        <p className="text-center text-slate-600 text-sm">
          © 2026 AI Explorer. Built to inspire curiosity about Artificial Intelligence.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
