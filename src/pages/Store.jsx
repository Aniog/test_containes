import React, { useState, useMemo } from 'react';
import { Search, Filter, Star, ShoppingCart, Store as StoreIcon, SlidersHorizontal } from 'lucide-react';
import { STORE_PRODUCTS } from '@/lib/mockData';
import { useCart } from '@/context/CartContext';

const PLATFORMS = ['All', 'PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Multi-Platform'];
const GENRES = ['All', 'RPG', 'Action RPG', 'Action Adventure', 'FPS', 'Racing', 'Simulation', 'Horror', 'Roguelike'];
const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'discount', label: 'Biggest Discount' },
];

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="game-card bg-card border border-border rounded-xl overflow-hidden flex flex-col">
      {/* Cover */}
      <div className={`relative h-48 bg-gradient-to-br ${product.cover_color} flex items-center justify-center`}>
        <span className="text-white/10 text-7xl font-black font-gaming select-none">
          {product.title.slice(0, 2).toUpperCase()}
        </span>
        {product.discount_percent > 0 && (
          <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-green-500 text-white text-xs font-black">
            -{product.discount_percent}%
          </span>
        )}
        {product.is_featured && (
          <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-purple-600 text-white text-xs font-bold">
            Featured
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-white font-bold text-sm leading-tight line-clamp-2 flex-1">{product.title}</h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-400 text-xs font-medium">{product.rating}</span>
          </div>
        </div>

        <p className="text-gray-500 text-xs mb-2">{product.developer}</p>

        <div className="flex flex-wrap gap-1 mb-3">
          <span className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-400">{product.platform}</span>
          <span className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-400">{product.genre}</span>
        </div>

        <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-2 flex-1">{product.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags?.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs px-1.5 py-0.5 rounded bg-purple-600/10 text-purple-400 border border-purple-600/20">
              {tag}
            </span>
          ))}
        </div>

        {/* Price + Add */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-purple-400 font-black text-xl">${product.price}</span>
            {product.discount_percent > 0 && (
              <span className="text-gray-600 text-xs line-through ml-2">${product.original_price}</span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              added
                ? 'bg-green-600 text-white'
                : 'bg-purple-600 text-white hover:bg-purple-500'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Store() {
  const [search, setSearch] = useState('');
  const [platform, setPlatform] = useState('All');
  const [genre, setGenre] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [maxPrice, setMaxPrice] = useState(100);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let products = STORE_PRODUCTS.filter(p => p.is_active);

    if (search) products = products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.developer?.toLowerCase().includes(search.toLowerCase()));
    if (platform !== 'All') products = products.filter(p => p.platform === platform);
    if (genre !== 'All') products = products.filter(p => p.genre === genre);
    products = products.filter(p => p.price <= maxPrice);

    if (sortBy === 'featured') products = [...products].sort((a, b) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0));
    else if (sortBy === 'price_asc') products = [...products].sort((a, b) => a.price - b.price);
    else if (sortBy === 'price_desc') products = [...products].sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') products = [...products].sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'discount') products = [...products].sort((a, b) => b.discount_percent - a.discount_percent);

    return products;
  }, [search, platform, genre, sortBy, maxPrice]);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-[#080812] border-b border-purple-900/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <StoreIcon className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl font-black text-white font-gaming">Game Store</h1>
          </div>
          <p className="text-gray-400 mb-6">Buy digital games at the best prices</p>

          {/* Search */}
          <div className="flex gap-3 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search games..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
            <button
              onClick={() => setShowFilters(v => !v)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                showFilters ? 'bg-purple-600/20 border-purple-600/30 text-purple-300' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Panel */}
        {showFilters && (
          <div className="mb-6 p-5 rounded-2xl bg-card border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Platform */}
              <div>
                <label className="text-gray-400 text-xs font-medium mb-2 block uppercase tracking-wider">Platform</label>
                <div className="flex flex-wrap gap-1.5">
                  {PLATFORMS.map(p => (
                    <button
                      key={p}
                      onClick={() => setPlatform(p)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                        platform === p ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Genre */}
              <div>
                <label className="text-gray-400 text-xs font-medium mb-2 block uppercase tracking-wider">Genre</label>
                <div className="flex flex-wrap gap-1.5">
                  {GENRES.map(g => (
                    <button
                      key={g}
                      onClick={() => setGenre(g)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                        genre === g ? 'bg-purple-600 text-white' : 'bg-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Max Price */}
              <div>
                <label className="text-gray-400 text-xs font-medium mb-2 block uppercase tracking-wider">
                  Max Price: <span className="text-purple-400">${maxPrice}</span>
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={maxPrice}
                  onChange={e => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-purple-600"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>$0</span><span>$100</span>
                </div>
              </div>

              {/* Sort */}
              <div>
                <label className="text-gray-400 text-xs font-medium mb-2 block uppercase tracking-wider">Sort By</label>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500/50"
                >
                  {SORT_OPTIONS.map(o => (
                    <option key={o.value} value={o.value} className="bg-gray-900">{o.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Sort bar (always visible) */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-500 text-sm">
            <span className="text-white font-medium">{filtered.length}</span> games found
          </p>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="bg-white/5 border border-white/10 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-purple-500/50"
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value} className="bg-gray-900">{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <StoreIcon className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-400 text-lg font-medium">No games found</p>
            <p className="text-gray-600 text-sm mt-1">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
