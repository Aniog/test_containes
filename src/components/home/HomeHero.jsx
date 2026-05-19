import { Link } from 'react-router-dom';
import { Zap, ShoppingBag, ArrowRight, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Games Available', value: '10,000+' },
  { label: 'Active Deals', value: '500+' },
  { label: 'Platforms', value: '5' },
  { label: 'Happy Gamers', value: '2M+' },
];

const HomeHero = () => (
  <section className="relative overflow-hidden bg-hero-gradient">
    {/* Background decoration */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-3xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/30 text-brand-light text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <TrendingUp className="w-4 h-4" />
          Steam Summer Sale is Live — Up to 90% Off
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-black text-text-primary leading-tight mb-6">
          Your Ultimate
          <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
            Gaming Hub
          </span>
        </h1>

        <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
          Discover the best game deals across Steam, Epic, Nintendo, PlayStation, and Xbox.
          Read the latest gaming news, and shop our curated store.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-12">
          <Link
            to="/deals"
            className="flex items-center gap-2 px-6 py-3 bg-brand-gradient text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-glow text-base"
          >
            <Zap className="w-5 h-5" />
            Browse Deals
          </Link>
          <Link
            to="/store"
            className="flex items-center gap-2 px-6 py-3 bg-surface-elevated border border-surface-border text-text-primary font-bold rounded-xl hover:border-brand/40 hover:bg-surface-card transition-all text-base"
          >
            <ShoppingBag className="w-5 h-5" />
            Visit Store
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface-card/60 border border-surface-border rounded-xl p-4">
              <div className="text-2xl font-black text-brand-light">{stat.value}</div>
              <div className="text-text-muted text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Platform strip */}
    <div className="border-t border-surface-border bg-surface-card/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
          <span className="text-text-muted text-xs font-medium whitespace-nowrap">Platforms:</span>
          {[
            { name: 'Steam', color: 'text-blue-300' },
            { name: 'Epic Games', color: 'text-gray-300' },
            { name: 'Nintendo', color: 'text-red-400' },
            { name: 'PlayStation', color: 'text-blue-400' },
            { name: 'Xbox', color: 'text-green-400' },
          ].map((p) => (
            <Link
              key={p.name}
              to="/deals"
              className={`${p.color} text-sm font-semibold whitespace-nowrap hover:opacity-80 transition-opacity flex items-center gap-1`}
            >
              {p.name}
              <ArrowRight className="w-3 h-3" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HomeHero;
