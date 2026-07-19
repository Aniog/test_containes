import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import FilterSidebar from '@/components/shop/FilterSidebar';
import { useCart } from '@/context/CartContext';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });
  const [sort, setSort] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const { addItem, setCartOpen } = useCart();

  const filtered = useMemo(() => {
    let result = products;

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result = result.filter((p) => p.price >= priceRange.min && p.price <= priceRange.max);

    if (sort === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategory, priceRange, sort]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleAddToCart = (product) => {
    addItem({ ...product, tone: product.tone || 'gold' });
    setCartOpen(true);
  };

  return (
    <div className="pt-24 pb-20 bg-brand-bg">
      <div className="container-narrow">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="section-title">Shop</h1>
            <p className="mt-2 text-sm text-brand-muted">{filtered.length} {filtered.length === 1 ? 'product' : 'products'}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden inline-flex items-center gap-2 rounded-full border border-brand-line px-4 py-2 text-sm text-brand-ink"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none rounded-full border border-brand-line bg-brand-surface px-4 py-2 pr-8 text-sm text-brand-ink focus:outline-none focus:border-brand-ink"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            <FilterSidebar
              categories={[{ id: 'all', label: 'All' }, ...categories]}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
            />
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-brand-warm">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 rounded-full bg-white/95 py-2.5 text-xs font-semibold text-brand-ink shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-serif text-sm md:text-base text-brand-ink tracking-wide">{product.name}</h3>
                    <div className="mt-1 flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                      <span className="text-xs text-brand-muted">{product.rating} ({product.reviewCount})</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-brand-ink">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-brand-muted">No products match your filters.</p>
                <button onClick={() => { handleCategoryChange('all'); setPriceRange({ min: 0, max: 200 }); }} className="btn-outline mt-4">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
