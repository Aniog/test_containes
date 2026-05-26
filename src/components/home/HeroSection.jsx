import { ArrowRight, Zap, TrendingUp, ShoppingBag } from 'lucide-react';

const stats = [
  { icon: Zap, label: 'Active Deals', value: '500+' },
  { icon: TrendingUp, label: 'Games in Store', value: '2,400+' },
  { icon: ShoppingBag, label: 'Happy Gamers', value: '120K+' },
];

const HeroSection = () => (
  <section
    id="home"
    className="relative overflow-hidden bg-[#0d0d14] py-20 md:py-32 px-4 md:px-8"
  >
    {/* Background glow effects */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-700/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto">
      <div className="max-w-3xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-violet-900/40 border border-violet-700/50 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-violet-300 text-xs font-semibold tracking-wide uppercase">
            Live Deals Updated Daily
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Your Ultimate{' '}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Gaming Hub
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
          Discover the best deals across Steam, Epic, Nintendo, PlayStation, and Xbox.
          Read the latest gaming news, reviews, and buy games directly from our store.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href="#deals"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-violet-900/40"
          >
            Browse Deals
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#store"
            className="inline-flex items-center gap-2 bg-[#1a1a2e] border border-[#2a2a3e] hover:border-violet-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            Visit Store
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1a1a2e] border border-[#2a2a3e] flex items-center justify-center">
                <Icon className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-none">{value}</div>
                <div className="text-gray-500 text-xs mt-0.5">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
