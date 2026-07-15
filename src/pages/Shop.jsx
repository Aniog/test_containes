import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ShoppingBag, Star, ChevronDown } from 'lucide-react';
import { products, categories, priceRanges } from '@/data/products';
import { useCart } from '@/context/CartContext';

function FilterSidebar({ selectedCategory, setSelectedCategory, selectedPrice, setSelectedPrice, selectedMaterial, setSelectedMaterial, onClose }) {
  return (
    <div className="space-y-8">
      {/* Category filter */}
      <div>
        <h3 className="text-caption uppercase tracking-widest-xl text-velmora-gold font-medium mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`block w-full text-left text-body-sm py-1.5 transition-colors ${
              !selectedCategory ? 'text-velmora-charcoal font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'
            }`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block w-full text-left text-body-sm py-1.5 transition-colors ${
                selectedCategory === cat.id ? 'text-velmora-charcoal font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="text-caption uppercase tracking-widest-xl text-velmora-gold font-medium mb-4">
          Price
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedPrice(null)}
            className={`block w-full text-left text-body-sm py-1.5 transition-colors ${
              !selectedPrice ? 'text-velmora-charcoal font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map(range => (
            <button
              key={range.id}
              onClick={() => setSelectedPrice(range.id)}
              className={`block w-full text-left text-body-sm py-1.5 transition-colors ${
                selectedPrice === range.id ? 'text-velmora-charcoal font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material filter */}
      <div>
        <h3 className="text-caption uppercase tracking-widest-xl text-velmora-gold font-medium mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {['All', 'Gold', 'Silver'].map(mat => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat === 'All' ? null : mat.toLowerCase())}
              className={`block w-full text-left text-body-sm py-1.5 transition-colors ${
                (mat === 'All' && !selectedMaterial) || selectedMaterial === mat.toLowerCase()
                  ? 'text-velmora-charcoal font-medium'
                  : 'text-velmora-muted hover:text-velmora-charcoal'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShopProductCard({ product }) {
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] bg-velmora-cream overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
          <button
            onClick={handleQuickAdd}
            className="w-full flex items-center justify-center gap-2 bg-velmora-charcoal/90 backdrop-blur-sm text-velmora-white py-3 text-caption uppercase tracking-widest-xl hover:bg-velmora-charcoal transition-colors"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>
      <div className="text-center">
        <h3 className="product-name text-[13px] text-velmora-charcoal mb-1 group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-body-sm text-velmora-muted">${product.price}</p>
        <div className="flex items-center justify-center gap-1 mt-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={11}
              className={i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-light'}
              strokeWidth={1.5}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(() => searchParams.get('category') || null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedMaterial) {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    if (selectedPrice) {
      const range = priceRanges.find(r => r.id === selectedPrice);
      if (range) {
        filtered = filtered.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.reverse();
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const activeFiltersCount = [selectedCategory, selectedPrice, selectedMaterial].filter(Boolean).length;

  return (
    <div className="min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-velmora-ivory py-10 md:py-14 text-center">
        <p className="text-caption uppercase tracking-widest-2xl text-velmora-gold mb-3">
          {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : 'All Jewelry'}
        </p>
        <h1 className="font-serif text-heading-xl md:text-[3.5rem] text-velmora-charcoal">
          {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : 'Shop All'}
        </h1>
        <p className="text-body text-velmora-muted mt-3">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
              selectedMaterial={selectedMaterial}
              setSelectedMaterial={setSelectedMaterial}
            />
          </aside>

          {/* Products area */}
          <div className="flex-1">
            {/* Sort + filter bar */}
            <div className="flex items-center justify-between mb-8">
              {/* Mobile filter button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-body-sm text-velmora-charcoal"
              >
                <SlidersHorizontal size={16} />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="w-5 h-5 bg-velmora-gold text-velmora-black text-[10px] font-medium rounded-full flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              <div className="hidden lg:block" />

              {/* Sort dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-body-sm text-velmora-muted pr-8 py-2 cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-velmora-muted pointer-events-none" />
              </div>
            </div>

            {/* Active filters */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategory && (
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-velmora-gold-muted text-body-sm text-velmora-charcoal"
                  >
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <X size={12} />
                  </button>
                )}
                {selectedPrice && (
                  <button
                    onClick={() => setSelectedPrice(null)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-velmora-gold-muted text-body-sm text-velmora-charcoal"
                  >
                    {priceRanges.find(r => r.id === selectedPrice)?.label}
                    <X size={12} />
                  </button>
                )}
                {selectedMaterial && (
                  <button
                    onClick={() => setSelectedMaterial(null)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-velmora-gold-muted text-body-sm text-velmora-charcoal"
                  >
                    {selectedMaterial.charAt(0).toUpperCase() + selectedMaterial.slice(1)}
                    <X size={12} />
                  </button>
                )}
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedPrice(null);
                    setSelectedMaterial(null);
                  }}
                  className="text-body-sm text-velmora-muted hover:text-velmora-charcoal underline underline-offset-4 ml-2"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
                {filteredProducts.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-heading-md text-velmora-charcoal mb-2">
                  No pieces found
                </p>
                <p className="text-body text-velmora-muted mb-6">
                  Try adjusting your filters to discover more.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedPrice(null);
                    setSelectedMaterial(null);
                  }}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-velmora-black/50" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={`absolute top-0 left-0 h-full w-[85%] max-w-sm bg-velmora-white shadow-2xl transition-transform duration-400 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-light">
            <h2 className="text-body-sm uppercase tracking-wider text-velmora-charcoal font-medium">
              Filters
            </h2>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="p-2 text-velmora-muted"
            >
              <X size={20} />
            </button>
          </div>
          <div className="px-6 py-6 overflow-y-auto h-[calc(100%-70px)]">
            <FilterSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
              selectedMaterial={selectedMaterial}
              setSelectedMaterial={setSelectedMaterial}
              onClose={() => setMobileFiltersOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
