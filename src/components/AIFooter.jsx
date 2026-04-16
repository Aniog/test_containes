import { Brain, Github, Twitter, Linkedin } from 'lucide-react';

const navLinks = [
  { label: 'What is AI', href: '#what-is-ai' },
  { label: 'Applications', href: '#applications' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Ethics', href: '#ethics' },
];

const AIFooter = () => {
  return (
    <footer className="bg-[#030712] border-t border-white/10 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
              <Brain className="w-6 h-6 text-indigo-400" />
            </div>
            <span className="text-white font-bold text-xl">AI Explorer</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-lg text-slate-500 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 text-center text-slate-600 text-sm">
          © {new Date().getFullYear()} AI Explorer. Built to inspire curiosity about Artificial Intelligence.
        </div>
      </div>
    </footer>
  );
};

export default AIFooter;
