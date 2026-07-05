import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, Star } from 'lucide-react';
import products from '../data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categoryFilter = searchParams.get('category') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';

  const categories = ['all', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['all', 'Gold', 'Silver'];
  const priceRanges = [
    { label: 'All', value: 'all' },
    { label: '$0 - $50', value: '0-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100+', value: '100+' }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(p => p.category === categoryFilter);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'bestsellers':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return filtered;
  }, [categoryFilter, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || !value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-12">
          <h1
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {categoryFilter === 'all' ? 'All Collections' : categoryFilter}
          </h1>
          <p className="text-[rgb(var(--color-muted))]">
            {filteredAndSortedProducts.length} piece{filteredAndSortedProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="md:hidden flex items-center gap-2 mb-6 text-sm tracking-wider uppercase"
        >
          <SlidersHorizontal size={16} />
          Filter & Sort
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
            <div className="bg-[rgb(var(--color-card))] p-6 space-y-8">
              {/* Close button for mobile */}
              <button
                onClick={() => setIsFilterOpen(false)}
                className="md:hidden mb-4"
              >
                <X size={20} />
              </button>

              {/* Category Filter */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => updateFilter('category', category)}
                      className={`block text-sm ${
                        categoryFilter === category
                          ? 'text-[rgb(var(--color-accent))] font-medium'
                          : 'text-[rgb(var(--color-muted))] hover:text-[rgb(var(--color-foreground))]'
                      } transition-colors`}
                    >
                      {category === 'all' ? 'All' : category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4">Material</h3>
                <div className="space-y-2">
                  {materials.map(material => (
                    <button
                      key={material}
                      onClick={() => updateFilter('material', material)}
                      className="block text-sm text-[rgb(var(--color-muted))] hover:text-[rgb(var(--color-foreground))] transition-colors"
                    >
                      {material === 'all' ? 'All' : material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm tracking-wider uppercase mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.value}
                      onClick={() => updateFilter('price', range.value)}
                      className="block text-sm text-[rgb(var(--color-muted))] hover:text-[rgb(var(--color-foreground))] transition-colors"
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Dropdown */}
            <div className="flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="px-4 py-2 border border-[rgb(var(--color-border))] bg-transparent text-sm focus:outline-none focus:border-[rgb(var(--color-foreground))] cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="bestsellers">Best Sellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedProducts.map(product => (
                <Link key={product.id} to={`/product/${product.id}`} className="group">
                  <div className="mb-4 bg-[rgb(var(--color-card))] aspect-square overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3
                    className="product-name text-lg mb-2"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-[rgb(var(--color-muted))] text-sm mb-2">{product.description}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-[rgb(var(--color-accent))]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                          className={i < Math.floor(product.rating) ? '' : 'opacity-30'}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    ${product.price}
                  </p>
                </Link>
              ))}
            </div>

            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-lg text-[rgb(var(--color-muted))]">No products found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
