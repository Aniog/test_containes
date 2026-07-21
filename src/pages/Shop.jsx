import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  
  const activeCategory = searchParams.get('category') || 'all';
  const activePrice = searchParams.get('price') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    
    // Filter by price
    if (activePrice !== 'all') {
      const [min, max] = activePrice.split('-').map(Number);
      result = result.filter(p => p.price >= min && (max ? p.price <= max : true));
    }
    
    // Filter by material
    if (activeMaterial !== 'all') {
      result = result.filter(p => p.variants.includes(activeMaterial));
    }
    
    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        break;
    }
    
    return result;
  }, [activeCategory, activePrice, activeMaterial, sortBy]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory !== 'all' || activePrice !== 'all' || activeMaterial !== 'all';

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-40', label: 'Under $40' },
    { value: '40-60', label: '$40 - $60' },
    { value: '60-80', label: '$60 - $80' },
    { value: '80-100', label: '$80 - $100' },
    { value: '100-999', label: 'Over $100' }
  ];

  const materials = [
    { value: 'all', label: 'All Materials' },
    { value: 'gold', label: 'Gold' },
    { value: 'silver', label: 'Silver' }
  ];

  const FilterContent = () => (
    <>
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="font-medium mb-4">Category</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={activeCategory === 'all'}
              onChange={() => updateFilter('category', 'all')}
              className="w-4 h-4 accent-velmora-gold"
            />
            <span className="text-velmora-warm-gray">All Jewelry</span>
          </label>
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={activeCategory === cat.id}
                onChange={() => updateFilter('category', cat.id)}
                className="w-4 h-4 accent-velmora-gold"
              />
              <span className="text-velmora-warm-gray">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="font-medium mb-4">Price</h3>
        <div className="space-y-3">
          {priceRanges.map((range) => (
            <label key={range.value} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={activePrice === range.value}
                onChange={() => updateFilter('price', range.value)}
                className="w-4 h-4 accent-velmora-gold"
              />
              <span className="text-velmora-warm-gray">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div className="mb-8">
        <h3 className="font-medium mb-4">Material</h3>
        <div className="space-y-3">
          {materials.map((mat) => (
            <label key={mat.value} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="material"
                checked={activeMaterial === mat.value}
                onChange={() => updateFilter('material', mat.value)}
                className="w-4 h-4 accent-velmora-gold"
              />
              <span className="text-velmora-warm-gray">{mat.label}</span>
            </label>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-sm text-velmora-gold hover:underline"
        >
          Clear All Filters
        </button>
      )}
    </>
  );

  return (
    <main className="pt-24 pb-20">
      <div className="container">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl">Shop All</h1>
          <p className="text-velmora-warm-gray mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-velmora-gold font-medium"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-5 h-5 bg-velmora-gold text-white text-xs rounded-full flex items-center justify-center">
                  !
                </span>
              )}
            </button>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort & Results */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-velmora-warm-gray">
                Showing {filteredProducts.length} results
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-velmora-light-gray px-4 py-2 pr-10 text-sm focus:border-velmora-gold outline-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[4/5] bg-velmora-light-gray overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(product);
                          }}
                          className="absolute bottom-0 left-0 right-0 bg-velmora-charcoal text-velmora-cream py-3 text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="mt-4">
                        <h3 className="font-serif text-xs uppercase tracking-product">
                          {product.name}
                        </h3>
                        <p className="text-sm text-velmora-warm-gray mt-1">
                          ${product.price}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-velmora-warm-gray mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-velmora-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute top-0 left-0 bottom-0 w-80 bg-velmora-cream animate-slide-in-right overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-velmora-light-gray">
              <h2 className="font-serif text-xl">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <FilterContent />
            </div>
            <div className="p-4 border-t border-velmora-light-gray">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full bg-velmora-gold text-white py-4 font-medium"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}