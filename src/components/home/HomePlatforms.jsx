import { Link } from 'react-router-dom';
import { Zap, ShoppingBag, BookOpen } from 'lucide-react';

const PlatformCard = ({ name, color, textColor, description, icon }) => (
  <Link
    to="/deals"
    className={`group flex items-center gap-4 p-4 rounded-xl border border-surface-border bg-surface-card hover:border-brand/40 hover:shadow-glow-sm transition-all duration-300`}
  >
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-2xl flex-shrink-0`}>
      {icon}
    </div>
    <div>
      <div className={`font-bold text-sm ${textColor}`}>{name}</div>
      <div className="text-text-muted text-xs">{description}</div>
    </div>
  </Link>
);

const platforms = [
  { name: 'Steam', color: 'bg-blue-900/60', textColor: 'text-blue-300', description: 'PC gaming platform', icon: '🎮' },
  { name: 'Epic Games', color: 'bg-gray-800/60', textColor: 'text-gray-200', description: 'Free games weekly', icon: '⚡' },
  { name: 'Nintendo', color: 'bg-red-900/60', textColor: 'text-red-300', description: 'Switch exclusives', icon: '🕹️' },
  { name: 'PlayStation', color: 'bg-blue-950/60', textColor: 'text-blue-400', description: 'PS4 & PS5 titles', icon: '🎯' },
  { name: 'Xbox', color: 'bg-green-900/60', textColor: 'text-green-300', description: 'Game Pass deals', icon: '🟢' },
];

const HomePlatforms = () => (
  <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Platforms */}
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Browse by Platform</h2>
        <p className="text-text-muted text-sm mb-6">Find deals and games on your favorite platform</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {platforms.map((p) => (
            <PlatformCard key={p.name} {...p} />
          ))}
        </div>
      </div>

      {/* Quick links */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-text-primary">Quick Access</h2>
        <Link
          to="/deals"
          className="group flex items-center gap-4 p-5 rounded-xl bg-brand/10 border border-brand/30 hover:bg-brand/20 hover:border-brand/50 transition-all"
        >
          <div className="w-12 h-12 bg-brand-gradient rounded-xl flex items-center justify-center shadow-glow-sm">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-text-primary font-bold">Today's Deals</div>
            <div className="text-text-muted text-sm">500+ active discounts</div>
          </div>
        </Link>

        <Link
          to="/store"
          className="group flex items-center gap-4 p-5 rounded-xl bg-surface-card border border-surface-border hover:border-brand/40 hover:shadow-glow-sm transition-all"
        >
          <div className="w-12 h-12 bg-surface-elevated rounded-xl flex items-center justify-center border border-surface-border">
            <ShoppingBag className="w-6 h-6 text-brand-light" />
          </div>
          <div>
            <div className="text-text-primary font-bold">Game Store</div>
            <div className="text-text-muted text-sm">Buy & download instantly</div>
          </div>
        </Link>

        <Link
          to="/news"
          className="group flex items-center gap-4 p-5 rounded-xl bg-surface-card border border-surface-border hover:border-brand/40 hover:shadow-glow-sm transition-all"
        >
          <div className="w-12 h-12 bg-surface-elevated rounded-xl flex items-center justify-center border border-surface-border">
            <BookOpen className="w-6 h-6 text-brand-light" />
          </div>
          <div>
            <div className="text-text-primary font-bold">News & Reviews</div>
            <div className="text-text-muted text-sm">Latest gaming coverage</div>
          </div>
        </Link>
      </div>
    </div>
  </section>
);

export default HomePlatforms;
