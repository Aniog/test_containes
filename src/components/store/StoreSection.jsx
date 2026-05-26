import { useState } from 'react';
import { Star, ShoppingCart, Heart, Filter } from 'lucide-react';

const GENRES = ['all', 'action', 'rpg', 'strategy', 'sports', 'adventure', 'simulation', 'shooter', 'puzzle'];

const PLATFORM_PILL = {
  steam: 'bg-[#1b2838] text-[#66c0f4]',
  epic: 'bg-[#2d2d2d] text-white',
  nintendo: 'bg-[#e4000f]/20 text-red-400',
  playstation: 'bg-[#003087]/30 text-blue-400',
  xbox: 'bg-[#107c10]/20 text-green-400',
};

const GAMES = [
  {
    id: 1, title: 'Elden Ring', genre: 'rpg', developer: 'FromSoftware',
    platform: ['steam', 'playstation', 'xbox'],
    price: 59.99, sale_price: 35.99, discount_percent: 40,
    rating: 4.9, is_on_sale: true, is_featured: true,
    tags: ['Open World', 'Souls-like', 'Fantasy'],
  },
  {
    id: 2, title: 'Baldur\'s Gate 3', genre: 'rpg', developer: 'Larian Studios',
    platform: ['steam', 'playstation'],
    price: 59.99, sale_price: null, discount_percent: 0,
    rating: 4.9, is_on_sale: false, is_featured: true,
    tags: ['RPG', 'Co-op', 'Fantasy'],
  },
  {
    id: 3, title: 'Hades II', genre: 'action', developer: 'Supergiant Games',
    platform: ['steam', 'epic'],
    price: 29.99, sale_price: null, discount_percent: 0,
    rating: 4.8, is_on_sale: false, is_featured: false,
    tags: ['Roguelike', 'Action', 'Indie'],
  },
  {
    id: 4, title: 'Starfield', genre: 'rpg', developer: 'Bethesda',
    platform: ['steam', 'xbox'],
    price: 69.99, sale_price: 34.99, discount_percent: 50,
    rating: 4.2, is_on_sale: true, is_featured: false,
    tags: ['Space', 'Open World', 'Sci-Fi'],
  },
  {
    id: 5, title: 'Street Fighter 6', genre: 'action', developer: 'Capcom',
    platform: ['steam', 'playstation', 'xbox'],
    price: 59.99, sale_price: 29.99, discount_percent: 50,
    rating: 4.6, is_on_sale: true, is_featured: false,
    tags: ['Fighting', 'Competitive', 'Arcade'],
  },
  {
    id: 6, title: 'Civilization VII', genre: 'strategy', developer: 'Firaxis',
    platform: ['steam', 'epic', 'nintendo'],
    price: 69.99, sale_price: null, discount_percent: 0,
    rating: 4.5, is_on_sale: false, is_featured: false,
    tags: ['Strategy', 'Turn-Based', '4X'],
  },
  {
    id: 7, title: 'EA Sports FC 25', genre: 'sports', developer: 'EA Sports',
    platform: ['steam', 'playstation', 'xbox', 'nintendo'],
    price: 69.99, sale_price: 41.99, discount_percent: 40,
    rating: 4.0, is_on_sale: true, is_featured: false,
    tags: ['Football', 'Sports', 'Multiplayer'],
  },
  {
    id: 8, title: 'Hollow Knight: Silksong', genre: 'action', developer: 'Team Cherry',
    platform: ['steam', 'nintendo', 'xbox'],
    price: 19.99, sale_price: null, discount_percent: 0,
    rating: 4.9, is_on_sale: false, is_featured: false,
    tags: ['Metroidvania', 'Indie', 'Platformer'],
  },
];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-1">
    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
    <span className="text-yellow-400 text-xs font-semibold">{rating.toFixed(1)}</span>
  </div>
);

const GameCard = ({ game, onAddToCart }) => {
  const [wishlisted, setWishlisted] = useState(false);
  const displayPrice = game.is_on_sale ? game.sale_price : game.price;

  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a3e] rounded-xl overflow-hidden hover:border-violet-500/60 hover:shadow-lg hover:shadow-violet-900/20 transition-all duration-200 group flex flex-col">
      {/* Cover */}
      <div className="relative h-44 bg-gradient-to-br from-[#13131f] to-[#0d0d14] overflow-hidden">
        <div
          className="w-full h-full"
          data-strk-bg-id={`game-bg-${game.id}`}
          data-strk-bg={`[game-title-${game.id}] [game-genre-${game.id}] video game cover art`}
          data-strk-bg-ratio="3x2"
          data-strk-bg-width="400"
        />
        {game.is_on_sale && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-extrabold px-2 py-0.5 rounded-lg">
            -{game.discount_percent}%
          </div>
        )}
        {game.is_featured && (
          <div className="absolute top-2 left-2 bg-violet-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
            Featured
          </div>
        )}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute bottom-2 right-2 w-7 h-7 rounded-lg bg-[#0d0d14]/70 flex items-center justify-center transition-colors"
        >
          <Heart className={`w-3.5 h-3.5 transition-colors ${wishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-400'}`} />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 id={`game-title-${game.id}`} className="text-white font-semibold text-sm line-clamp-1 group-hover:text-violet-300 transition-colors flex-1">
            {game.title}
          </h3>
          <StarRating rating={game.rating} />
        </div>

        <p className="text-gray-500 text-xs mb-2">{game.developer}</p>

        <span id={`game-genre-${game.id}`} className="sr-only">{game.genre}</span>

        {/* Platform pills */}
        <div className="flex flex-wrap gap-1 mb-3">
          {game.platform.slice(0, 3).map((p) => (
            <span key={p} className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${PLATFORM_PILL[p]}`}>
              {p === 'playstation' ? 'PS' : p === 'nintendo' ? 'NS' : p.charAt(0).toUpperCase() + p.slice(1)}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {game.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[10px] text-gray-500 bg-[#13131f] px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Price + Cart */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#2a2a3e]">
          <div>
            {game.is_on_sale && (
              <div className="text-gray-600 text-xs line-through">${game.price.toFixed(2)}</div>
            )}
            <div className={`font-bold text-base ${game.is_on_sale ? 'text-green-400' : 'text-white'}`}>
              ${displayPrice.toFixed(2)}
            </div>
          </div>
          <button
            onClick={() => onAddToCart(game)}
            className="flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-150 shadow-md shadow-violet-900/30"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const StoreSection = ({ onAddToCart }) => {
  const [activeGenre, setActiveGenre] = useState('all');
  const [showSaleOnly, setShowSaleOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  let filtered = activeGenre === 'all' ? GAMES : GAMES.filter((g) => g.genre === activeGenre);
  if (showSaleOnly) filtered = filtered.filter((g) => g.is_on_sale);

  if (sortBy === 'price_asc') filtered = [...filtered].sort((a, b) => (a.sale_price || a.price) - (b.sale_price || b.price));
  if (sortBy === 'price_desc') filtered = [...filtered].sort((a, b) => (b.sale_price || b.price) - (a.sale_price || a.price));
  if (sortBy === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  if (sortBy === 'featured') filtered = [...filtered].sort((a, b) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0));

  return (
    <section id="store" className="py-16 px-4 md:px-8 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-2">Game Store</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Buy Games</h2>
            <p className="text-gray-500 text-sm mt-1">Instant digital delivery — keys for all platforms</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSaleOnly(!showSaleOnly)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border transition-all ${
                showSaleOnly
                  ? 'bg-orange-500 text-white border-transparent'
                  : 'bg-[#1a1a2e] text-gray-400 border-[#2a2a3e] hover:border-orange-500 hover:text-orange-400'
              }`}
            >
              🔥 On Sale Only
            </button>
            <div className="flex items-center gap-2 bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg px-3 py-2">
              <Filter className="w-3.5 h-3.5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-gray-300 text-xs outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="rating">Top Rated</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Genre Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {GENRES.map((genre) => (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border capitalize transition-all duration-150 ${
                activeGenre === genre
                  ? 'bg-violet-600 text-white border-transparent'
                  : 'bg-[#1a1a2e] text-gray-400 border-[#2a2a3e] hover:border-violet-500 hover:text-white'
              }`}
            >
              {genre === 'all' ? 'All Genres' : genre}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((game) => (
              <GameCard key={game.id} game={game} onAddToCart={onAddToCart} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500">No games found for this filter.</div>
        )}
      </div>
    </section>
  );
};

export default StoreSection;
