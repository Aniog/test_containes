import { Link } from 'react-router-dom';
import { Flame, Star, ShoppingCart, ArrowRight } from 'lucide-react';
import { featuredGames } from '../../data/mockData';
import PlatformBadge from '../ui/PlatformBadge';
import SectionHeader from '../ui/SectionHeader';

const FeaturedGameCard = ({ game }) => (
  <div className="group relative bg-surface-card border border-surface-border rounded-2xl overflow-hidden hover:border-brand/50 hover:shadow-glow transition-all duration-300 flex flex-col">
    {/* Image placeholder with gradient */}
    <div className="relative h-48 bg-gradient-to-br from-surface-elevated to-surface overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl opacity-20">🎮</div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent" />

      {/* Badges */}
      <div className="absolute top-3 left-3 flex gap-2">
        <PlatformBadge platform={game.platform} />
        {game.isHot && (
          <span className="flex items-center gap-1 bg-hot/20 text-hot text-xs font-bold px-2 py-0.5 rounded border border-hot/30">
            <Flame className="w-3 h-3" /> Hot
          </span>
        )}
      </div>

      {game.discount > 0 && (
        <div className="absolute top-3 right-3 bg-deal text-white text-xs font-black px-2 py-1 rounded-lg">
          -{game.discount}%
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-4 flex flex-col flex-1">
      <h3 className="text-text-primary font-bold text-base leading-tight mb-1 group-hover:text-brand-light transition-colors line-clamp-2">
        {game.title}
      </h3>
      <p className="text-text-muted text-xs mb-3 line-clamp-2">{game.description}</p>

      <div className="flex flex-wrap gap-1 mb-3">
        {game.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="text-xs bg-surface-elevated text-text-muted px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-text-primary font-black text-lg">${game.price.toFixed(2)}</span>
            {game.discount > 0 && (
              <span className="text-text-muted text-sm line-through">${game.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <div className="flex items-center gap-1 text-yellow-400 text-xs">
            <Star className="w-3 h-3 fill-yellow-400" />
            <span className="font-semibold">{game.rating}</span>
          </div>
        </div>
        <Link
          to="/store"
          className="flex items-center gap-1.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          <ShoppingCart className="w-4 h-4" />
          Buy
        </Link>
      </div>
    </div>
  </div>
);

const FeaturedGames = () => (
  <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
    <SectionHeader
      title="Featured Games"
      subtitle="Hand-picked titles you'll love"
      action={
        <Link to="/store" className="flex items-center gap-1 text-brand-light hover:text-brand text-sm font-medium transition-colors">
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      }
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {featuredGames.map((game) => (
        <FeaturedGameCard key={game.id} game={game} />
      ))}
    </div>
  </section>
);

export default FeaturedGames;
