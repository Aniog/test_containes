import { useState } from 'react';
import { ShoppingCart, Star, Flame, Search, Filter, X, Check, Trash2, CreditCard, ChevronDown } from 'lucide-react';
import { storeGames, genres, platforms } from '../data/mockData';
import PlatformBadge from '../components/ui/PlatformBadge';

const platformFilters = [{ id: 'all', name: 'All' }, ...platforms];

const GameCard = ({ game, onAddToCart, inCart }) => (
  <div className="group bg-surface-card border border-surface-border rounded-xl overflow-hidden hover:border-brand/40 hover:shadow-glow-sm transition-all duration-300 flex flex-col">
    {/* Image */}
    <div className="relative h-40 bg-gradient-to-br from-surface-elevated to-surface flex items-center justify-center overflow-hidden">
      <div className="text-5xl opacity-15">🎮</div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface-card/70 to-transparent" />

      <div className="absolute top-3 left-3 flex gap-1.5">
        <PlatformBadge platform={game.platform} />
        {game.isHot && (
          <span className="flex items-center gap-1 bg-hot/20 text-hot text-xs font-bold px-2 py-0.5 rounded border border-hot/30">
            <Flame className="w-3 h-3" />
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
      <h3 className="text-text-primary font-bold text-sm leading-tight group-hover:text-brand-light transition-colors line-clamp-2 mb-1">
        {game.title}
      </h3>
      <p className="text-text-muted text-xs line-clamp-2 mb-3">{game.description}</p>

      <div className="flex flex-wrap gap-1 mb-3">
        {game.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="text-xs bg-surface-elevated text-text-muted px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-text-primary font-black text-lg">${game.price.toFixed(2)}</span>
              {game.discount > 0 && (
                <span className="text-text-muted text-xs line-through">${game.originalPrice.toFixed(2)}</span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-1 text-yellow-400 text-xs">
            <Star className="w-3 h-3 fill-yellow-400" />
            <span className="font-semibold">{game.rating}</span>
          </div>
        </div>

        <button
          onClick={() => onAddToCart(game)}
          className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-all ${
            inCart
              ? 'bg-deal/20 text-deal border border-deal/30 cursor-default'
              : 'bg-brand hover:bg-brand-dark text-white'
          }`}
          disabled={inCart}
        >
          {inCart ? (
            <><Check className="w-4 h-4" /> In Cart</>
          ) : (
            <><ShoppingCart className="w-4 h-4" /> Add to Cart</>
          )}
        </button>
      </div>
    </div>
  </div>
);

const CartDrawer = ({ cart, onRemove, onClose, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const savings = cart.reduce((sum, item) => sum + (item.originalPrice - item.price), 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-surface-card border-l border-surface-border flex flex-col h-full shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-surface-border">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-brand-light" />
            <h2 className="text-text-primary font-bold text-lg">Your Cart</h2>
            <span className="bg-brand text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-elevated transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🛒</div>
              <p className="text-text-secondary font-semibold">Your cart is empty</p>
              <p className="text-text-muted text-sm mt-1">Add some games to get started</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center gap-3 bg-surface-elevated rounded-xl p-3 border border-surface-border">
                <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                  🎮
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-text-primary text-sm font-semibold truncate">{item.title}</div>
                  <PlatformBadge platform={item.platform} />
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-text-primary font-bold text-sm">${item.price.toFixed(2)}</div>
                  {item.discount > 0 && (
                    <div className="text-deal text-xs">-{item.discount}%</div>
                  )}
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="p-1.5 rounded-lg text-text-muted hover:text-red-400 hover:bg-red-900/20 transition-colors flex-shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-surface-border space-y-3">
            {savings > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">You save</span>
                <span className="text-deal font-semibold">-${savings.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-text-secondary font-semibold">Total</span>
              <span className="text-text-primary font-black text-xl">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full flex items-center justify-center gap-2 bg-brand-gradient text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity shadow-glow"
            >
              <CreditCard className="w-5 h-5" />
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const CheckoutSuccess = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
    <div className="relative bg-surface-card border border-surface-border rounded-2xl p-8 max-w-sm w-full mx-4 text-center shadow-2xl">
      <div className="w-16 h-16 bg-deal/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-deal/30">
        <Check className="w-8 h-8 text-deal" />
      </div>
      <h2 className="text-text-primary text-2xl font-black mb-2">Order Complete!</h2>
      <p className="text-text-muted text-sm mb-6">Your games have been added to your library. Enjoy playing!</p>
      <button
        onClick={onClose}
        className="w-full bg-brand-gradient text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity"
      >
        Continue Shopping
      </button>
    </div>
  </div>
);

const Store = () => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutDone, setCheckoutDone] = useState(false);
  const [activePlatform, setActivePlatform] = useState('all');
  const [activeGenre, setActiveGenre] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (game) => {
    if (!cart.find((i) => i.id === game.id)) {
      setCart((prev) => [...prev, game]);
    }
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const handleCheckout = () => {
    setCart([]);
    setCartOpen(false);
    setCheckoutDone(true);
  };

  const filtered = storeGames.filter((g) => {
    const matchPlatform = activePlatform === 'all' || g.platform === activePlatform;
    const matchGenre = activeGenre === 'All' || g.genre === activeGenre;
    const matchSearch = g.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchPlatform && matchGenre && matchSearch;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'popular') return (b.isHot ? 1 : 0) - (a.isHot ? 1 : 0);
    if (sortBy === 'price_asc') return a.price - b.price;
    if (sortBy === 'price_desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'discount') return b.discount - a.discount;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-text-primary mb-1">Game Store</h1>
          <p className="text-text-muted">{storeGames.length} games available</p>
        </div>
        <button
          onClick={() => setCartOpen(true)}
          className="relative flex items-center gap-2 bg-brand-gradient text-white font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity shadow-glow-sm"
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="hidden sm:inline">Cart</span>
          {cart.length > 0 && (
            <span className="bg-white text-brand text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      {/* Filters */}
      <div className="bg-surface-card border border-surface-border rounded-xl p-4 mb-6 space-y-4">
        {/* Search + Sort */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-surface-elevated border border-surface-border rounded-xl text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-brand/50 transition-colors"
            />
          </div>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2.5 bg-surface-elevated border border-surface-border rounded-xl text-text-primary text-sm focus:outline-none focus:border-brand/50 cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="discount">Biggest Discount</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
          </div>
        </div>

        {/* Platform filter */}
        <div className="flex gap-2 flex-wrap">
          {platformFilters.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePlatform(p.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activePlatform === p.id
                  ? 'bg-brand text-white'
                  : 'bg-surface-elevated border border-surface-border text-text-secondary hover:text-text-primary hover:border-brand/40'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Genre filter */}
        <div className="flex gap-2 flex-wrap">
          {['All', ...genres].map((g) => (
            <button
              key={g}
              onClick={() => setActiveGenre(g)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeGenre === g
                  ? 'bg-surface-elevated border border-brand/50 text-brand-light'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-text-muted text-sm mb-4">
        Showing {sorted.length} of {storeGames.length} games
      </p>

      {/* Game grid */}
      {sorted.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🎮</div>
          <p className="text-text-secondary text-lg font-semibold">No games found</p>
          <p className="text-text-muted text-sm mt-1">Try adjusting your filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sorted.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onAddToCart={addToCart}
              inCart={!!cart.find((i) => i.id === game.id)}
            />
          ))}
        </div>
      )}

      {/* Cart Drawer */}
      {cartOpen && (
        <CartDrawer
          cart={cart}
          onRemove={removeFromCart}
          onClose={() => setCartOpen(false)}
          onCheckout={handleCheckout}
        />
      )}

      {/* Checkout success */}
      {checkoutDone && (
        <CheckoutSuccess onClose={() => setCheckoutDone(false)} />
      )}
    </div>
  );
};

export default Store;
