import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import products from '../../data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
  const materials = ['all', '18K Gold Plated', 'Silver Plated'];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to80', label: '$50 - $80' },
    { value: 'over80', label: 'Over $80' },
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      const categoryMap = {
        'earrings': 'Earrings',
        'necklaces': 'Necklaces',
        'huggies': 'Huggies',
        'sets': 'Sets',
      };
      filtered = filtered.filter(p => 
        p.category.toLowerCase() === categoryMap[selectedCategory]?.toLowerCase()
      );
    }

    // Filter by material
    if (selectedMaterial !== 'all') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    // Filter by price
    if (priceRange !== 'all') {
      filtered = filtered.filter(p => {
        if (priceRange === 'under50') return p.price < 50;
        if (priceRange === '50to80') return p.price >= 50 && p.price <= 80;
        if (priceRange === 'over80') return p.price > 80;
        return true;
      });
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'bestsellers':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const handleQuickAdd = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants[0]);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setPriceRange('all');
    setSortBy('featured');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedMaterial !== 'all' || priceRange !== 'all';

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
            Shop All
          </h1>
          <div className="w-16 h-px bg-velmora-gold" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="lg:hidden flex items-center justify-between w-full p-4 border border-velmora-sand mb-4"
          >
            <span className="font-sans text-sm uppercase tracking-wider flex items-center">
              <SlidersHorizontal size={16} className="mr-2" />
              Filters
            </span>
            {hasActiveFilters && (
              <span className="text-velmora-gold text-sm">Active</span>
            )}
          </button>

          {/* Sidebar Filters */}
          <div className={`${isMobileFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="bg-velmora-cream p-6">
              {/* Filter Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-sans text-sm uppercase tracking-wider text-velmora-charcoal">
                  Filters
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="font-sans text-xs text-velmora-gold hover:text-velmora-gold-dark"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="font-sans text-xs uppercase tracking-wider text-velmora-charcoal mb-4">
                  Category
                </h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left font-sans text-sm py-2 px-3 transition-colors
                                 ${
                                   selectedCategory === category
                                     ? 'bg-velmora-gold text-white'
                                     : 'text-velmora-charcoal hover:bg-velmora-warm'
                                 }`}
                    >
                      {category === 'all' ? 'All' : category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h4 className="font-sans text-xs uppercase tracking-wider text-velmora-charcoal mb-4">
                  Material
                </h4>
                <div className="space-y-2">
                  {materials.map(material => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`block w-full text-left font-sans text-sm py-2 px-3 transition-colors
                                 ${
                                   selectedMaterial === material
                                     ? 'bg-velmora-gold text-white'
                                     : 'text-velmora-charcoal hover:bg-velmora-warm'
                                 }`}
                    >
                      {material === 'all' ? 'All Materials' : material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="font-sans text-xs uppercase tracking-wider text-velmora-charcoal mb-4">
                  Price
                </h4>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={`block w-full text-left font-sans text-sm py-2 px-3 transition-colors
                                 ${
                                   priceRange === range.value
                                     ? 'bg-velmora-gold text-white'
                                     : 'text-velmora-charcoal hover:bg-velmora-warm'
                                 }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Dropdown */}
            <div className="flex items-center justify-between mb-8">
              <p className="font-sans text-sm text-velmora-muted">
                {filteredAndSortedProducts.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans text-sm border border-velmora-taupe px-4 py-2 focus:outline-none focus:border-velmora-gold"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="bestsellers">Best Sellers</option>
              </select>
            </div>

            {/* Products */}
            {filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-velmora-charcoal mb-4">
                  No products found
                </p>
                <p className="font-sans text-sm text-velmora-muted mb-8">
                  Try adjusting your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map(product => (
                  <div key={product.id} className="group cursor-pointer">
                    <Link to={`/product/${product.slug}`}>
                      <div className="relative overflow-hidden bg-velmora-cream aspect-[3/4] mb-4">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <button
                          onClick={(e) => handleQuickAdd(product, e)}
                          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-charcoal 
                                   px-6 py-2 font-sans text-xs uppercase tracking-wider
                                   opacity-0 translate-y-2 transition-all duration-300
                                   group-hover:opacity-100 group-hover:translate-y-0
                                   hover:bg-velmora-gold hover:text-white"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <h3 className="font-sans text-sm uppercase tracking-wider text-velmora-charcoal mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={`${
                                i < Math.floor(product.rating)
                                  ? 'text-velmora-gold fill-velmora-gold'
                                  : 'text-velmora-taupe'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="font-serif text-lg text-velmora-charcoal">
                        ${product.price}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
