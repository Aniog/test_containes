import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCartStore } from '../store/cartStore';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, openCart } = useCartStore();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-[#E8E2D9] rounded-sm overflow-hidden mb-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4CFC7] to-[#E8E2D9] flex items-center justify-center">
          <span className="text-muted-foreground text-xs tracking-wider">IMG</span>
        </div>
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#1A1714] text-white text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm">
            {product.badge}
          </span>
        )}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#1A1714]/90 backdrop-blur-sm text-white py-3 text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1A1714] transition-colors rounded-sm"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="product-name text-sm text-foreground">{product.name}</h3>
        <div className="flex items-center gap-1">
          <Star size={12} className="fill-primary text-primary" />
          <span className="text-xs text-muted-foreground">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
      </div>
    </Link>
  );
};

const CollectionPage = () => {
  const [searchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial);
    }
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true));
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
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h4 className="text-sm uppercase tracking-wider mb-3">Category</h4>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`block text-sm transition-colors ${selectedCategory === 'all' ? 'text-primary font-medium' : 'text-foreground/70 hover:text-foreground'}`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block text-sm transition-colors ${selectedCategory === cat.id ? 'text-primary font-medium' : 'text-foreground/70 hover:text-foreground'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-sm uppercase tracking-wider mb-3">Price</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: '0-50', label: 'Under $50' },
            { value: '50-100', label: '$50 - $100' },
            { value: '100-999', label: 'Over $100' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setPriceRange(option.value)}
              className={`block text-sm transition-colors ${priceRange === option.value ? 'text-primary font-medium' : 'text-foreground/70 hover:text-foreground'}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-sm uppercase tracking-wider mb-3">Material</h4>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedMaterial('all')}
            className={`block text-sm transition-colors ${selectedMaterial === 'all' ? 'text-primary font-medium' : 'text-foreground/70 hover:text-foreground'}`}
          >
            All Materials
          </button>
          <button
            onClick={() => setSelectedMaterial('18K Gold Plated')}
            className={`block text-sm transition-colors ${selectedMaterial === '18K Gold Plated' ? 'text-primary font-medium' : 'text-foreground/70 hover:text-foreground'}`}
          >
            18K Gold Plated
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <div className="container-padding py-8 md:py-12">
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-2">Shop All</h1>
        <p className="text-muted-foreground font-light">
          {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="container-padding pb-16">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter */}
          <div className="lg:hidden">
            {filterOpen && (
              <>
                <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setFilterOpen(false)} />
                <div className="fixed left-0 top-0 bottom-0 w-72 bg-[#FAF8F5] z-50 p-6 overflow-y-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-serif text-xl">Filters</h3>
                    <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                      <X size={20} />
                    </button>
                  </div>
                  <FilterContent />
                </div>
              </>
            )}
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Sort & filter bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#D4CFC7]">
              <button
                className="lg:hidden flex items-center gap-2 text-sm text-foreground/70"
                onClick={() => setFilterOpen(true)}
              >
                <SlidersHorizontal size={16} />
                Filters
              </button>

              <div className="ml-auto flex items-center gap-2">
                <span className="text-sm text-muted-foreground hidden sm:inline">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent text-sm pr-6 cursor-pointer focus:outline-none"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl mb-2">No pieces found</p>
                <p className="text-muted-foreground text-sm">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CollectionPage;
