import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products } from '../data/products';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'featured');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      const categoryMap = {
        'earrings': 'Earrings',
        'necklaces': 'Necklaces',
        'huggies': 'Huggies'
      };
      filtered = filtered.filter(p => p.category === categoryMap[selectedCategory]);
    }

    // Material filter
    if (selectedMaterial !== 'all') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    // Price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && (max ? p.price <= max : true));
    }

    // Sort
    switch (sortBy) {
      case 'new':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'bestsellers':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const handleQuickAdd = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: 'Gold',
      quantity: 1
    });
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setPriceRange('all');
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="container-responsive py-8 md:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">Shop All</h1>
        <p className="text-muted-foreground">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden flex items-center gap-2 text-sm uppercase tracking-wider font-medium"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </button>

        {/* Filter Sidebar */}
        <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 space-y-8`}>
          {/* Active Filters */}
          {(selectedCategory !== 'all' || selectedMaterial !== 'all' || priceRange !== 'all') && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-medium uppercase tracking-wider text-sm">Active Filters</h3>
                <button 
                  onClick={clearFilters}
                  className="text-xs text-muted-foreground hover:text-foreground elegant-transition"
                >
                  Clear All
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1 text-xs bg-muted px-3 py-1 rounded">
                    {selectedCategory}
                    <X 
                      className="w-3 h-3 cursor-pointer" 
                      onClick={() => setSelectedCategory('all')}
                    />
                  </span>
                )}
                {selectedMaterial !== 'all' && (
                  <span className="inline-flex items-center gap-1 text-xs bg-muted px-3 py-1 rounded">
                    {selectedMaterial}
                    <X 
                      className="w-3 h-3 cursor-pointer" 
                      onClick={() => setSelectedMaterial('all')}
                    />
                  </span>
                )}
                {priceRange !== 'all' && (
                  <span className="inline-flex items-center gap-1 text-xs bg-muted px-3 py-1 rounded">
                    ${priceRange}
                    <X 
                      className="w-3 h-3 cursor-pointer" 
                      onClick={() => setPriceRange('all')}
                    />
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="filter-group">
            <h3 className="filter-label">Category</h3>
            {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
              <label key={cat} className="filter-option">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                  className="w-4 h-4 accent-[hsl(var(--velmora-gold))]"
                />
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </label>
            ))}
          </div>

          {/* Material Filter */}
          <div className="filter-group">
            <h3 className="filter-label">Material</h3>
            {['all', 'Gold', 'Silver'].map((material) => (
              <label key={material} className="filter-option">
                <input
                  type="radio"
                  name="material"
                  checked={selectedMaterial === material}
                  onChange={() => setSelectedMaterial(material)}
                  className="w-4 h-4 accent-[hsl(var(--velmora-gold))]"
                />
                {material.charAt(0).toUpperCase() + material.slice(1)}
              </label>
            ))}
          </div>

          {/* Price Filter */}
          <div className="filter-group">
            <h3 className="filter-label">Price</h3>
            {[
              { value: 'all', label: 'All' },
              { value: '0-50', label: 'Under $50' },
              { value: '50-75', label: '$50 - $75' },
              { value: '75-100', label: '$75 - $100' },
              { value: '100-999', label: 'Over $100' }
            ].map((range) => (
              <label key={range.value} className="filter-option">
                <input
                  type="radio"
                  name="price"
                  checked={priceRange === range.value}
                  onChange={() => setPriceRange(range.value)}
                  className="w-4 h-4 accent-[hsl(var(--velmora-gold))]"
                />
                {range.label}
              </label>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort Dropdown */}
          <div className="flex justify-end mb-6">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--velmora-gold))]"
            >
              <option value="featured">Featured</option>
              <option value="new">New Arrivals</option>
              <option value="bestsellers">Bestsellers</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Products */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No products found matching your filters.</p>
              <button 
                onClick={clearFilters}
                className="text-sm uppercase tracking-wider text-[hsl(var(--velmora-gold))] hover:underline"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative img-hover mb-4">
                    <a href={`/product/${product.id}`}>
                      <img
                        data-strk-img-id={`shop-${product.id}`}
                        data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full aspect-square object-cover bg-[hsl(var(--velmora-cream))]"
                      />
                    </a>
                    
                    {/* Quick Add */}
                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-foreground px-6 py-2 uppercase tracking-wider text-sm font-medium opacity-0 group-hover:opacity-100 elegant-transition hover:bg-[hsl(var(--velmora-gold))] hover:text-white"
                    >
                      <ShoppingBag className="w-4 h-4 inline-block mr-2" />
                      Add to Cart
                    </button>

                    {/* Badges */}
                    {product.isNew && (
                      <span className="badge-new">New</span>
                    )}
                    {product.isBestseller && !product.isNew && (
                      <span className="badge-sale">Bestseller</span>
                    )}
                  </div>

                  <div>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-medium">${product.price}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-[hsl(var(--velmora-gold))]">★</span>
                        <span className="text-sm text-muted-foreground">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
