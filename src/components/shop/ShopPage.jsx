// Shop/Collection Page Component
import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Star, SlidersHorizontal, X } from 'lucide-react';
import products from '../../data/products';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Get unique categories and materials
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const materials = ['All', 'Gold', 'Silver'];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by material
    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    // Filter by price range
    if (priceRange !== 'All') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => {
        if (max) {
          return p.price >= min && p.price <= max;
        }
        return p.price >= min;
      });
    }

    // Sort products
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
      case 'featured':
      default:
        filtered.sort((a, b) => b.featured - a.featured);
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'Gold');
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setPriceRange('All');
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-premium">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
          <div className="divider-hairline w-24 mx-auto my-6" />
          <p className="text-velmora-text-secondary">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="lg:hidden flex items-center justify-center space-x-2 py-3 border border-velmora-border mb-4"
          >
            <SlidersHorizontal size={20} />
            <span>Filters</span>
          </button>

          {/* Sidebar Filters */}
          <div className={`${isMobileFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="bg-white p-6 border border-velmora-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-lg">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left py-1 text-sm transition-colors ${
                        selectedCategory === category
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-text-secondary hover:text-velmora-charcoal'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h4 className="font-medium mb-3">Material</h4>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`block w-full text-left py-1 text-sm transition-colors ${
                        selectedMaterial === material
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-text-secondary hover:text-velmora-charcoal'
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="font-medium mb-3">Price</h4>
                <div className="space-y-2">
                  {['All', '0-50', '50-100', '100+'].map((range) => (
                    <button
                      key={range}
                      onClick={() => setPriceRange(range)}
                      className={`block w-full text-left py-1 text-sm transition-colors ${
                        priceRange === range
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-text-secondary hover:text-velmora-charcoal'
                      }`}
                    >
                      {range === 'All' ? 'All Prices' : range === '100+' ? 'Over $100' : `$${range}`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Dropdown */}
            <div className="flex justify-end mb-6">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-velmora-border bg-white text-sm focus:outline-none focus:border-velmora-gold"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="bestsellers">Best Sellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-velmora-text-secondary mb-4">No products found matching your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block">
                      {/* Product Image */}
                      <div className="relative overflow-hidden bg-velmora-cream aspect-square mb-4">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                        />

                        {/* Quick Add Button */}
                        <button
                          onClick={(e) => handleQuickAdd(e, product)}
                          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-velmora-charcoal px-6 py-2 text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-gold hover:text-white"
                        >
                          <ShoppingBag size={16} className="inline-block mr-2" />
                          Add to Cart
                        </button>
                      </div>

                      {/* Product Info */}
                      <div className="text-center">
                        <h3 className="product-name text-lg mb-2">{product.name}</h3>
                        <p className="text-sm text-velmora-text-secondary mb-2">{product.description}</p>
                        <div className="flex items-center justify-center space-x-1 mb-2">
                          <Star size={14} className="text-velmora-gold fill-current" />
                          <span className="text-sm text-velmora-text-secondary">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                        <p className="font-serif text-lg">${product.price}.00</p>
                      </div>
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
};

export default ShopPage;
