import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import products, { categories, materials } from '@/data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || '';
  const [material, setMaterial] = useState('');
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory) {
      if (activeCategory === 'huggies') {
        result = result.filter((p) => p.subcategory === 'huggies' || p.category === 'huggies');
      } else {
        result = result.filter((p) => p.category === activeCategory);
      }
    }
    if (material) {
      result = result.filter((p) => p.material === material);
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [activeCategory, material, sort, priceRange]);

  const clearFilters = () => {
    setSearchParams({});
    setMaterial('');
    setPriceRange([0, 150]);
    setSort('featured');
  };

  const hasFilters = activeCategory || material || sort !== 'featured';

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-[10px] tracking-ultra uppercase text-charcoal/70 mb-4">Category</h4>
        <div className="space-y-2">
          <button
            onClick={() => setSearchParams({})}
            className={`block text-xs tracking-widest uppercase transition-colors ${
              !activeCategory ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSearchParams({ category: cat.id })}
              className={`block text-xs tracking-widest uppercase transition-colors ${
                activeCategory === cat.id ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-[10px] tracking-ultra uppercase text-charcoal/70 mb-4">Material</h4>
        <div className="space-y-2">
          <button
            onClick={() => setMaterial('')}
            className={`block text-xs tracking-widest uppercase transition-colors ${
              !material ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
            }`}
          >
            All
          </button>
          {materials.map((mat) => (
            <button
              key={mat.id}
              onClick={() => setMaterial(mat.id)}
              className={`block text-xs tracking-widest uppercase transition-colors ${
                material === mat.id ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {mat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-[10px] tracking-ultra uppercase text-charcoal/70 mb-4">Price Range</h4>
        <div className="space-y-2">
          <input
            type="range"
            min={0}
            max={150}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full accent-gold"
          />
        </div>
        <p className="text-[11px] text-warm-gray mt-1">
          Up to ${priceRange[1]}
        </p>
      </div>

      {/* Clear */}
      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-[10px] tracking-widest uppercase text-gold hover:text-gold-dark transition-colors underline underline-offset-4"
        >
          Clear All
        </button>
      )}
    </div>
  );

  return (
    <div className="pt-24 lg:pt-28 pb-20 lg:pb-28 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl lg:text-4xl text-charcoal text-center">
            {activeCategory ? categories.find((c) => c.id === activeCategory)?.name || 'Shop' : 'Shop All'}
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="flex gap-10">
          {/* Desktop filter sidebar */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filter toggle */}
          <div className="lg:hidden mb-6 flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-charcoal border border-sand px-4 py-2 rounded-sm"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters {hasFilters && '(active)'}
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs tracking-widest uppercase font-medium text-charcoal border border-sand px-4 py-2 rounded-sm bg-transparent"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Mobile filter panel */}
        {mobileFilterOpen && (
          <div className="lg:hidden mb-8 p-6 border border-sand rounded-sm bg-sand-light/50">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs tracking-widest uppercase font-medium text-charcoal">Filters</span>
              <button onClick={() => setMobileFilterOpen(false)}>
                <X className="w-4 h-4 text-warm-gray" />
              </button>
            </div>
            <FilterContent />
          </div>
        )}

        <div className="lg:flex-1">
          {/* Sort (desktop) */}
          <div className="hidden lg:flex items-center justify-between mb-8">
            <p className="text-xs text-warm-gray">{filtered.length} products</p>
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-widest uppercase text-warm-gray">Sort by:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-xs tracking-widest uppercase font-medium text-charcoal border-none bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {filtered.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group"
              >
                <div className="aspect-[3/4] bg-sand-light rounded-sm overflow-hidden mb-3 relative">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-[11px] tracking-widest font-medium text-charcoal leading-tight mb-1">
                  {product.name}
                </p>
                <div className="flex items-center gap-1.5 mb-1">
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  <span className="text-[11px] text-warm-gray">{product.rating}</span>
                </div>
                <p className="text-sm font-medium text-charcoal">${product.price}</p>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-warm-gray text-sm">No products match your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-xs tracking-widest uppercase text-gold hover:text-gold-dark underline"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
