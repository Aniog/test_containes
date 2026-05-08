import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#2c1810] text-amber-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🐴</span>
              <span
                className="text-white font-bold text-xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                HorseWise
              </span>
            </div>
            <p className="text-sm text-amber-200/70 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Your trusted guide to the wonderful world of horses. Learn, explore, and grow your equine knowledge.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Explore
            </h3>
            <ul className="space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
              {[
                { to: '/breeds', label: 'Horse Breeds' },
                { to: '/care', label: 'Care & Training' },
                { to: '/facts', label: 'Fun Facts' },
                { to: '/quiz', label: 'Take the Quiz' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-amber-200/70 hover:text-amber-300 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-white font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Topics
            </h3>
            <div className="flex flex-wrap gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
              {['Anatomy', 'Nutrition', 'Grooming', 'Riding', 'Health', 'History'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/10 text-amber-200 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-xs text-amber-200/50" style={{ fontFamily: "'Inter', sans-serif" }}>
            © 2026 HorseWise. Built with love for horse enthusiasts everywhere. 🐎
          </p>
        </div>
      </div>
    </footer>
  );
}
