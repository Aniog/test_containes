import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ShoppingCart, Star, Check, Filter, Search, SlidersHorizontal } from 'lucide-react';

const storeCategories = ['All', 'Action', 'RPG', 'Strategy', 'Sports', 'Indie', 'Horror'];

const storeGames = [
  {
    id: 'sg-1', category: 'RPG',
    title: 'Starfield: Complete Edition', developer: 'Bethesda Game Studios',
    price: 79.99, originalPrice: null, rating: 4.4, reviews: 12840,
    tags: ['Space', 'Open World', 'Sci-Fi'], inStock: true, isNew: true,
    titleId: 'sg-1-title', descId: 'sg-1-desc', imgId: 'sg-img-1-ab12cd',
    desc: 'Explore the vast universe in Bethesda\'s epic space RPG',
  },
  {
    id: 'sg-2', category: 'Action',
    title: 'Spider-Man 2', developer: 'Insomniac Games',
    price: 49.99, originalPrice: 69.99, rating: 4.8, reviews: 28500,
    tags: ['Superhero', 'Open World', 'Action'], inStock: true, isNew: false,
    titleId: 'sg-2-title', descId: 'sg-2-desc', imgId: 'sg-img-2-ef34gh',
    desc: 'Swing through New York as both Peter Parker and Miles Morales',
  },
  {
    id: 'sg-3', category: 'Strategy',
    title: 'Civilization VII', developer: 'Firaxis Games',
    price: 59.99, originalPrice: null, rating: 4.6, reviews: 9200,
    tags: ['Turn-Based', '4X', 'Historical'], inStock: true, isNew: true,
    titleId: 'sg-3-title', descId: 'sg-3-desc', imgId: 'sg-img-3-ij56kl',
    desc: 'Build an empire to stand the test of time in this legendary strategy series',
  },
  {
    id: 'sg-4', category: 'Horror',
    title: 'Resident Evil 9', developer: 'Capcom',
    price: 59.99, originalPrice: null, rating: 4.7, reviews: 15600,
    tags: ['Survival Horror', 'Action', 'Story'], inStock: true, isNew: true,
    titleId: 'sg-4-title', descId: 'sg-4-desc', imgId: 'sg-img-4-mn78op',
    desc: 'The next chapter in the iconic survival horror franchise',
  },
  {
    id: 'sg-5', category: 'Indie',
    title: 'Hollow Knight: Silksong', developer: 'Team Cherry',
    price: 29.99, originalPrice: null, rating: 4.9, reviews: 42000,
    tags: ['Metroidvania', 'Platformer', 'Indie'], inStock: true, isNew: false,
    titleId: 'sg-5-title', descId: 'sg-5-desc', imgId: 'sg-img-5-qr90st',
    desc: 'The long-awaited sequel to the beloved Hollow Knight',
  },
  {
    id: 'sg-6', category: 'Sports',
    title: 'EA Sports FC 26', developer: 'EA Sports',
    price: 69.99, originalPrice: null, rating: 4.1, reviews: 31200,
    tags: ['Football', 'Multiplayer', 'Sports'], inStock: true, isNew: true,
    titleId: 'sg-6-title', descId: 'sg-6-desc', imgId: 'sg-img-6-uv12wx',
    desc: 'The world\'s most popular football simulation game returns',
  },
  {
    id: 'sg-7', category: 'Action',
    title: 'Black Myth: Wukong', developer: 'Game Science',
    price: 59.99, originalPrice: 69.99, rating: 4.8, reviews: 67000,
    tags: ['Action RPG', 'Mythology', 'Soulslike'], inStock: true, isNew: false,
    titleId: 'sg-7-title', descId: 'sg-7-desc', imgId: 'sg-img-7-yz34ab',
    desc: 'Journey through ancient Chinese mythology as the Destined One',
  },
  {
    id: 'sg-8', category: 'RPG',
    title: 'Final Fantasy XVII', developer: 'Square Enix',
    price: 69.99, originalPrice: null, rating: 4.5, reviews: 8900,
    tags: ['JRPG', 'Fantasy', 'Story-Rich'], inStock: false, isNew: true,
    titleId: 'sg-8-title', descId: 'sg-8-desc', imgId: 'sg-img-8-cd56ef',
    desc: 'The next mainline entry in the legendary Final Fantasy series',
  },
];

function StoreCard({ game, onAddToCart, addedIds }) {
  const added = addedIds.has(game.id);
  const discount = game.originalPrice
    ? Math.round((1 - game.price / game.originalPrice) * 100)
    : null;

  return (
    <div className="bg-game-card border border-game-border rounded-xl overflow-hidden hover:border-game-purple/60 transition-all duration-200 shadow-lg shadow-black/40 group flex flex-col">
      <div className="relative overflow-hidden">
        <img
          alt={game.title}
          data-strk-img-id={game.imgId}
          data-strk-img={`[${game.descId}] [${game.titleId}]`}
          data-strk-img-ratio="3x2"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300 bg-game-elevated"
        />
        <div className="absolute top-2 left-2 flex gap-1.5">
          {game.isNew && (
            <span className="bg-game-cyan text-game-bg text-xs font-bold px-2 py-0.5 rounded-md">NEW</span>
          )}
          {discount && (
            <span className="bg-game-red text-white text-xs font-bold px-2 py-0.5 rounded-md">-{discount}%</span>
          )}
        </div>
        {!game.inStock && (
          <div className="absolute inset-0 bg-game-bg/70 flex items-center justify-center">
            <span className="text-game-muted text-sm font-semibold bg-game-card px-3 py-1.5 rounded-lg border border-game-border">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="text-game-dim text-xs mb-1">{game.developer}</div>
        <h3 id={game.titleId} className="text-game-text font-bold text-sm leading-snug mb-1">{game.title}</h3>
        <p id={game.descId} className="text-game-muted text-xs leading-relaxed mb-2 line-clamp-2 flex-1">{game.desc}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          {game.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-game-dim text-xs bg-game-elevated px-2 py-0.5 rounded-md">{tag}</span>
          ))}
        </div>

        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(game.rating) ? 'text-game-amber fill-game-amber' : 'text-game-dim'}`}
            />
          ))}
          <span className="text-game-dim text-xs ml-1">({game.reviews.toLocaleString()})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-game-text font-bold text-lg">${game.price}</span>
            {game.originalPrice && (
              <span className="text-game-dim text-sm line-through">${game.originalPrice}</span>
            )}
          </div>
          <button
            onClick={() => game.inStock && onAddToCart(game)}
            disabled={!game.inStock}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-200 ${
              added
                ? 'bg-game-green/20 text-game-green border border-game-green/40'
                : game.inStock
                ? 'bg-game-purple hover:bg-purple-500 text-white'
                : 'bg-game-elevated text-game-dim cursor-not-allowed'
            }`}
          >
            {added ? (
              <><Check className="w-3.5 h-3.5" /> Added</>
            ) : (
              <><ShoppingCart className="w-3.5 h-3.5" /> Add to Cart</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function StoreSection({ onCartUpdate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedIds, setAddedIds] = useState(new Set());
  const containerRef = useRef(null);

  const filtered = storeGames.filter((g) => {
    const matchCat = activeCategory === 'All' || g.category === activeCategory;
    const matchSearch = g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.developer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleAddToCart = (game) => {
    setAddedIds((prev) => {
      const next = new Set(prev);
      next.add(game.id);
      onCartUpdate?.(next.size);
      return next;
    });
    console.log('Added to cart:', game.title);
  };

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, searchQuery]);

  return (
    <section id="store" ref={containerRef} className="py-20 px-4 md:px-8 bg-game-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-game-green text-xs font-semibold uppercase tracking-wider mb-2">Game Store</div>
            <h2 className="text-3xl md:text-4xl font-bold text-game-text tracking-tight">Buy Games</h2>
            <p className="text-game-muted mt-2 text-sm">Purchase games directly from our curated store. Instant digital delivery.</p>
          </div>
          <div className="flex items-center gap-2 text-game-muted text-sm">
            <SlidersHorizontal className="w-4 h-4" />
            <span>{filtered.length} games found</span>
          </div>
        </div>

        {/* Search + Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-game-dim" />
            <input
              type="text"
              placeholder="Search games or developers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-game-card border border-game-border text-game-text placeholder-game-dim text-sm pl-9 pr-4 py-2.5 rounded-lg focus:outline-none focus:border-game-purple/60 transition-colors"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <Filter className="w-4 h-4 text-game-dim flex-shrink-0" />
            {storeCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 text-xs font-semibold px-3 py-2 rounded-lg border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-game-purple text-white border-transparent'
                    : 'bg-game-card border-game-border text-game-muted hover:text-game-text hover:border-game-purple/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((game) => (
              <StoreCard
                key={game.id}
                game={game}
                onAddToCart={handleAddToCart}
                addedIds={addedIds}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-game-dim text-5xl mb-4">🎮</div>
            <p className="text-game-muted text-lg font-medium">No games found</p>
            <p className="text-game-dim text-sm mt-1">Try a different search or category</p>
          </div>
        )}
      </div>
    </section>
  );
}
