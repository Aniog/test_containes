import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import ProductCard from './ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'discount', label: 'Biggest Discount' },
];

const ProductListing = ({ products = [], activeCategory, searchQuery, onProductClick }) => {
  const [sortBy, setSortBy] = useState('featured');

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory && activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (searchQuery && searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'discount':
        list.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      default:
        break;
    }

    return list;
  }, [activeCategory, searchQuery, sortBy]);

  const categoryLabel =
    activeCategory === 'all' || !activeCategory
      ? 'All Products'
      : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1);

  return (
    <section id="products" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-2">
              {searchQuery ? (
                <>
                  Results for{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    "{searchQuery}"
                  </span>
                </>
              ) : (
                <>
                  {categoryLabel}{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Collection
                  </span>
                </>
              )}
            </h2>
            <p className="text-gray-400">
              {filtered.length} {filtered.length === 1 ? 'product' : 'products'} found
            </p>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <ArrowUpDown className="w-4 h-4" />
              <span>Sort by</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-900 border border-white/10 text-white text-sm rounded-xl px-4 py-2 focus:outline-none focus:border-blue-400 cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-gray-900">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={onProductClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-white text-xl font-bold mb-2">No products found</h3>
            <p className="text-gray-400">Try adjusting your search or browse all categories.</p>
          </div>
        )}

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Products', value: '50+', sub: 'Premium items' },
            { label: 'Happy Customers', value: '120K+', sub: 'Worldwide' },
            { label: 'Avg. Rating', value: '4.8★', sub: 'Verified reviews' },
            { label: 'Free Shipping', value: '$49+', sub: 'Orders qualify' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-900 border border-white/5 rounded-2xl p-6 text-center hover:border-blue-500/20 transition-colors"
            >
              <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-blue-400 text-sm font-semibold">{stat.label}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
