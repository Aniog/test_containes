import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { products, categories } from '@/data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCategory, sort, priceRange]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-ink">Shop</h1>
            <p className="mt-2 text-muted text-sm">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-white border border-border text-ink text-sm rounded-full px-4 py-2 focus:outline-none focus:border-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden flex items-center gap-2 border border-border rounded-full px-4 py-2 text-sm"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className={`md:col-span-1 ${mobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-ink mb-4">Category</h3>
                <div className="space-y-2">
                  {['All', ...categories.map((c) => c.name)].map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors ${
                        activeCategory === category ? 'text-ink font-medium' : 'text-muted hover:text-ink'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-ink mb-4">Price</h3>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold"
                  />
                  <span className="text-muted">—</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-ink mb-4">Material</h3>
                <div className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map((material) => (
                    <label key={material} className="flex items-center gap-2 text-sm text-muted">
                      <input type="checkbox" className="rounded border-border text-gold focus:ring-gold" />
                      {material}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="md:col-span-3">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted text-sm">No pieces match your filters.</p>
                <button
                  onClick={() => {
                    handleCategoryChange('All');
                    setPriceRange([0, 150]);
                    setSort('featured');
                  }}
                  className="mt-4 text-gold text-sm tracking-widest uppercase hover:text-gold-hover transition-colors"
                >
                  Clear all
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
