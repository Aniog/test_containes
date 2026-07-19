import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import products from '../data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    priceRange: 'all',
    material: 'all',
    sort: searchParams.get('sort') || 'featured',
  });

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
  const priceRanges = [
    { label: 'All', value: 'all' },
    { label: 'Under $50', value: 'under50' },
    { label: '$50 - $80', value: '50to80' },
    { label: 'Over $80', value: 'over80' },
  ];
  const materials = ['all', '18K Gold Plated', 'Sterling Silver'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category !== 'all') {
      result = result.filter(p => p.category === filters.category);
    }

    if (filters.priceRange !== 'all') {
      if (filters.priceRange === 'under50') result = result.filter(p => p.price < 50);
      if (filters.priceRange === '50to80') result = result.filter(p => p.price >= 50 && p.price <= 80);
      if (filters.priceRange === 'over80') result = result.filter(p => p.price > 80);
    }

    if (filters.material !== 'all') {
      result = result.filter(p => p.material === filters.material);
    }

    if (filters.sort === 'price-low') result.sort((a, b) => a.price - b.price);
    if (filters.sort === 'price-high') result.sort((a, b) => b.price - a.price);
    if (filters.sort === 'newest') result.sort((a, b) => b.id - a.id);
    if (filters.sort === 'bestsellers') result.sort((a, b) => b.reviews - a.reviews);

    return result;
  }, [filters]);

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    if (key === 'category') {
      setSearchParams(prev => {
        if (value === 'all') {
          prev.delete('category');
        } else {
          prev.set('category', value);
        }
        return prev;
      });
    }
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      priceRange: 'all',
      material: 'all',
      sort: 'featured',
    });
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
        <div className="w-24 h-0.5 bg-velmora-gold" />
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 font-sans text-sm tracking-wider uppercase hover:text-velmora-gold transition-colors"
        >
          <SlidersHorizontal size={18} />
          Filters
        </button>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">{filteredProducts.length} products</span>
          <select
            value={filters.sort}
            onChange={(e) => updateFilter('sort', e.target.value)}
            className="font-sans text-sm border border-velmora-border px-4 py-2 focus:outline-none focus:border-velmora-gold"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="bestsellers">Best Sellers</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Filter Sidebar (Mobile Overlay) */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsFilterOpen(false)} />
      )}

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className={`fixed md:relative top-0 left-0 h-full md:h-auto w-80 md:w-64 bg-white md:bg-transparent z-50 transform transition-transform duration-300 ${
          isFilterOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } p-6 md:p-0 overflow-y-auto`}>
          <div className="flex justify-between items-center mb-6 md:hidden">
            <h3 className="font-serif text-2xl">Filters</h3>
            <button onClick={() => setIsFilterOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <h4 className="font-sans text-sm tracking-wider uppercase mb-4">Category</h4>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => updateFilter('category', cat)}
                  className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                    filters.category === cat ? 'bg-velmora-cream text-velmora-charcoal' : 'hover:bg-gray-50'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h4 className="font-sans text-sm tracking-wider uppercase mb-4">Price</h4>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => updateFilter('priceRange', range.value)}
                  className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                    filters.priceRange === range.value ? 'bg-velmora-cream text-velmora-charcoal' : 'hover:bg-gray-50'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          {/* Material Filter */}
          <div className="mb-8">
            <h4 className="font-sans text-sm tracking-wider uppercase mb-4">Material</h4>
            <div className="space-y-2">
              {materials.map((mat) => (
                <button
                  key={mat}
                  onClick={() => updateFilter('material', mat)}
                  className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                    filters.material === mat ? 'bg-velmora-cream text-velmora-charcoal' : 'hover:bg-gray-50'
                  }`}
                >
                  {mat.charAt(0).toUpperCase() + mat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={clearFilters}
            className="text-sm text-velmora-gold hover:underline"
          >
            Clear All Filters
          </button>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl mb-4">No products found</p>
              <button onClick={clearFilters} className="btn-secondary">
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="product-card group cursor-pointer block">
                  <div className="relative overflow-hidden mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-square object-cover"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-charcoal px-6 py-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-gold hover:text-white"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="text-center">
                    <h3 className="product-name mb-2">{product.name}</h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-sm">★</span>
                      <span className="text-sm">{product.rating}</span>
                    </div>
                    <p className="font-serif text-xl">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
