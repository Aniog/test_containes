import DreamBackground from '../components/home/DreamBackground';
import MarketplaceGrid from '../components/marketplace/MarketplaceGrid';

export default function Marketplace() {
  return (
    <div className="relative min-h-screen pt-20">
      <DreamBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-4">
        <h1 className="font-dream text-4xl sm:text-5xl font-black text-white mb-2">
          Dream <span className="text-shimmer">Marketplace</span>
        </h1>
        <p className="text-purple-300/60 font-body mb-8">
          Discover and collect extraordinary AI-generated dream experiences
        </p>
      </div>
      <MarketplaceGrid />
    </div>
  );
}
