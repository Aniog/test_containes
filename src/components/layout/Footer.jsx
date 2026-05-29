import { Sparkles, Twitter, Instagram, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-[#050510] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-dream text-lg font-bold text-shimmer">Dream Exchange</span>
            </div>
            <p className="text-purple-300/60 text-sm font-body leading-relaxed max-w-xs">
              The world's first marketplace for AI-generated dream experiences. Buy, sell, and explore the infinite landscape of human imagination.
            </p>
            <div className="flex gap-3 mt-6">
              {[Twitter, Instagram, Github].map((Icon, i) => (
                <button key={i} className="w-9 h-9 rounded-full glass flex items-center justify-center text-purple-300/60 hover:text-purple-300 hover:bg-white/10 transition-all">
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-dream text-sm font-semibold text-purple-200 mb-4">Explore</h4>
            <ul className="space-y-2">
              {['Marketplace', 'AI Generator', 'Trending Dreams', 'New Releases', 'Collections'].map(item => (
                <li key={item}>
                  <Link to="/marketplace" className="text-purple-300/50 hover:text-purple-300 text-sm font-body transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-dream text-sm font-semibold text-purple-200 mb-4">Creators</h4>
            <ul className="space-y-2">
              {['Dashboard', 'Analytics', 'Upload Dream', 'Revenue', 'Community'].map(item => (
                <li key={item}>
                  <Link to="/dashboard" className="text-purple-300/50 hover:text-purple-300 text-sm font-body transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-purple-300/30 text-xs font-body">© 2026 Dream Exchange. All dreams reserved.</p>
          <p className="text-purple-300/30 text-xs font-body">Powered by imagination & AI</p>
        </div>
      </div>
    </footer>
  );
}
