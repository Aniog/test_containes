import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import products, { categories as allCategories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const { addItem, openCart } = useCart();

  const materials = ['18K Gold Plated', 'Swarovski Crystal', 'Freshwater Pearl'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (selectedMaterial) {
      result = result.filter((p) => p.materials.includes(selectedMaterial));
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, sortBy, priceRange, selectedMaterial]);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    openCart();
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setPriceRange([0, 120]);
    setSelectedMaterial('');
  };

  const hasActiveFilters = selectedCategory || selectedMaterial || priceRange[0] > 0 || priceRange[1] < 120;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-[0.12em] uppercase text-espresso mb-4 font-medium">Category</h4>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('')}
            className={`block text-sm w-full text-left py-1 transition-colors ${
              !selectedCategory ? 'text-espresso font-medium' : 'text-taupe hover:text-espresso'
            }`}
          >
            All
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat === selectedCategory ? '' : cat)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                selectedCategory === cat ? 'text-espresso font-medium' : 'text-taupe hover:text-espresso'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="text-xs tracking-[0.12em] uppercase text-espresso mb-4 font-medium">Price</h4>
        <div className="flex items-center gap-3">
          <input
            type="range"
            min="0"
            max="120"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            className="w-full accent-gold"
          />
          <input
            type="range"
            min="0"
            max="120"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full accent-gold"
          />
        </div>
        <p className="text-xs text-taupe mt-2">
          ${priceRange[0]} – ${priceRange[1]}
        </p>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-[0.12em] uppercase text-espresso mb-4 font-medium">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat === selectedMaterial ? '' : mat)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                selectedMaterial === mat ? 'text-espresso font-medium' : 'text-taupe hover:text-espresso'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <div className="section-padding py-12 md:py-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso tracking-wider text-center">
          Shop All
        </h1>
        <p className="text-taupe text-sm text-center mt-4 max-w-lg mx-auto leading-relaxed">
          Explore our full collection of demi-fine jewelry, crafted in 18K gold plate and designed to be worn every day.
        </p>
      </div>

      <div className="section-padding">
        {/* Toolbar */}
        <div className="flex items-center justify-between pb-6 border-b border-border">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-espresso"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
              {hasActiveFilters && (
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              )}
            </button>
            <span className="text-xs text-taupe hidden lg:block">
              {filteredProducts.length} products
            </span>
          </div>

          <div className="flex items-center gap-4">
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs text-taupe hover:text-espresso transition-colors flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                Clear
              </button>
            )}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs border border-border bg-transparent px-3 py-2 outline-none cursor-pointer text-espresso"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10 pt-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-taupe text-sm">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs tracking-[0.15em] uppercase border-b border-espresso pb-1"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] bg-rose overflow-hidden mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-rose via-warm-white to-rose flex items-center justify-center">
                        <div className="text-center px-4">
                          <div className="w-12 h-12 mx-auto rounded-full bg-gold-pale/50 flex items-center justify-center mb-2">
                            <span className="text-gold">✦</span>
                          </div>
                          <span className="text-[10px] text-taupe/50 uppercase tracking-[0.15em]">
                            {product.category}
                          </span>
                        </div>
                      </div>
                      {/* Quick add on hover */}
                      <div className="absolute inset-0 bg-espresso/5 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={(e) => handleAddToCart(e, product)}
                          className="bg-white text-espresso text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 flex items-center gap-2 shadow-lg hover:bg-gold-pale transition-colors"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'
                          }`}
                        />
                      ))}
                    </div>
                    <h3 className="product-name text-xs md:text-sm tracking-[0.15em] text-espresso mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-taupe">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileFilterOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            mobileFilterOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileFilterOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-cream shadow-2xl transition-transform duration-300 ease-out ${
            mobileFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <h2 className="font-serif text-lg tracking-wider">Filters</h2>
            <button onClick={() => setMobileFilterOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="px-6 py-6 overflow-y-auto">
            <FilterContent />
          </div>
        </div>
      </div>
    </div>
  );
}