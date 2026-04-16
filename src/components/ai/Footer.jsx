import { Brain, Github, Twitter, Linkedin } from 'lucide-react';

const sections = [
  {
    title: 'Topics',
    links: ['What is AI', 'Machine Learning', 'Deep Learning', 'Neural Networks', 'Generative AI'],
  },
  {
    title: 'Applications',
    links: ['Healthcare AI', 'Autonomous Vehicles', 'Finance AI', 'AI in Education', 'Climate AI'],
  },
  {
    title: 'Resources',
    links: ['Research Papers', 'AI Glossary', 'Learning Paths', 'AI Tools', 'Community'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#030308] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-lg">
                AI<span className="gradient-text">verse</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Your guide to understanding artificial intelligence — from fundamentals to the frontier.
            </p>
            <div className="flex gap-3">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="text-white font-semibold text-sm mb-4">{s.title}</h4>
              <ul className="space-y-2.5">
                {s.links.map((link) => (
                  <li key={link}>
                    <span className="text-slate-500 text-sm hover:text-indigo-300 transition-colors cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © 2026 AIverse. Built to explore the future of intelligence.
          </p>
          <div className="flex items-center gap-1 text-slate-600 text-sm">
            <span>Made with</span>
            <span className="text-red-500 mx-1">♥</span>
            <span>for curious minds everywhere</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
