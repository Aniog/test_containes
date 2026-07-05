import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, X, ShoppingBag, Star } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ShopProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-[#F5F0EB] aspect-[3/4]">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-white/95 backdrop-blur-sm text-[#1A1A1A] py-3 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-[#B8860B] hover:text-white transition-colors"
          >
            <ShoppingBag size={14} />
            Add to Bag
          </button>
        </div>
      </Link>
      <div className="mt-4 text-center">
        <div className="flex items-center justify-center gap-1 mb-2">
          <Star size={12} className="fill-[#D4A843] text-[#D4A843]" />
          <span className="text-xs text-[#6B6560]">{product.rating}</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 className="product-name text-sm text-[#1A1A1A] hover:text-[#B8860B] transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-[#6B6560] mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const initialCategory = searchParams.get('category') || '';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (selectedMaterial) {
      result = result.filter(p => p.material === selectedMaterial);
    }
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

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
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedMaterial('');
    setPriceRange([0, 200]);
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory || selectedMaterial || priceRange[0] > 0 || priceRange[1] < 200;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-[#1A1A1A] mb-3">Category</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={!selectedCategory}
              onChange={() => setSelectedCategory('')}
              className="accent-[#B8860B]"
            />
            <span className="text-sm text-[#6B6560]">All</span>
          </label>
          {categories.map(cat => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => setSelectedCategory(cat.id)}
                className="accent-[#B8860B]"
              />
              <span className="text-sm text-[#6B6560] capitalize">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-[#1A1A1A] mb-3">Material</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="material"
              checked={!selectedMaterial}
              onChange={() => setSelectedMaterial('')}
              className="accent-[#B8860B]"
            />
            <span className="text-sm text-[#6B6560]">All</span>
          </label>
          {['gold', 'silver'].map(mat => (
            <label key={mat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="material"
                checked={selectedMaterial === mat}
                onChange={() => setSelectedMaterial(mat)}
                className="accent-[#B8860B]"
              />
              <span className="text-sm text-[#6B6560] capitalize">{mat} tone</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase text-[#1A1A1A] mb-3">Price</h4>
        <div className="space-y-3">
          <div className="flex gap-3">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="w-full border border-[#E8E2DB] px-3 py-2 text-sm"
              placeholder="Min"
              min={0}
            />
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full border border-[#E8E2DB] px-3 py-2 text-sm"
              placeholder="Max"
              min={0}
            />
          </div>
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-[#B8860B] underline tracking-wider uppercase"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="serif-heading text-4xl md:text-5xl font-light text-[#1A1A1A] mb-2">
            Shop All
          </h1>
          <p className="text-sm text-[#6B6560]">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 text-sm text-[#6B6560] mb-6"
            >
              <Filter size={16} />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-[#B8860B] rounded-full" />
              )}
            </button>
          </div>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-80 max-w-full bg-white p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm tracking-widest uppercase">Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X size={20} />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-[#E8E2DB] px-4 py-2 text-sm text-[#6B6560] bg-transparent focus:outline-none focus:border-[#B8860B]"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="serif-heading text-2xl text-[#6B6560] mb-4">No pieces found</p>
                <button onClick={clearFilters} className="btn-secondary inline-block">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
