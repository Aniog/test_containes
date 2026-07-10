import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import products from '../data/products';

export default function ShopPage() {
  const { addToCart } = useCart();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Get unique categories and materials
  const categories = [...new Set(products.map(p => p.category))];
  const materials = [...new Set(products.map(p => p.material))];

  // Filter and sort products
  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Filter by price
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Filter by material
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material));
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
        result.sort((a, b) => b.id - a.id);
        break;
      case 'bestsellers':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        result.sort((a, b) => b.featured - a.featured);
    }

    setFilteredProducts(result);
  }, [selectedCategories, priceRange, selectedMaterials, sortBy]);

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleMaterial = (material) => {
    setSelectedMaterials(prev =>
      prev.includes(material)
        ? prev.filter(m => m !== material)
        : [...prev, material]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 200]);
    setSelectedMaterials([]);
    setSortBy('featured');
  };

  const handleQuickAdd = (product) => {
    addToCart(product, 1, 'gold');
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32">
      <div className="container-custom py-8 md:py-16">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="section-title mb-4">Shop All</h1>
          <p className="font-sans text-gray-warm">
            Discover our full collection of demi-fine jewelry
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center space-x-2 font-sans text-sm tracking-wider uppercase"
          >
            <SlidersHorizontal size={18} />
            <span>Filter & Sort</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Filter Sidebar */}
          <div className={`${isMobileFilterOpen ? 'fixed inset-0 z-50 bg-cream p-6 overflow-y-auto' : 'hidden'} md:block md:relative md:z-0 md:w-64 md:flex-shrink-0`}>
            {/* Mobile Close Button */}
            {isMobileFilterOpen && (
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="absolute top-4 right-4"
              >
                <X size={24} />
              </button>
            )}

            <div className="space-y-8">
              {/* Sort (Mobile) */}
              <div className="md:hidden">
                <h3 className="font-serif text-lg mb-4">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 font-sans text-sm border border-gray-border focus:outline-none focus:border-gold"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="bestsellers">Bestsellers</option>
                </select>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-serif text-lg mb-4">Category</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="w-4 h-4 border-gray-border rounded accent-gold"
                      />
                      <span className="font-sans text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-serif text-lg mb-4">Price</h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-gold"
                  />
                  <div className="flex items-center justify-between font-sans text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Materials */}
              <div>
                <h3 className="font-serif text-lg mb-4">Material</h3>
                <div className="space-y-3">
                  {materials.map((material) => (
                    <label key={material} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(material)}
                        onChange={() => toggleMaterial(material)}
                        className="w-4 h-4 border-gray-border rounded accent-gold"
                      />
                      <span className="font-sans text-sm">{material}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategories.length > 0 || priceRange[1] < 200 || selectedMaterials.length > 0) && (
                <button
                  onClick={clearFilters}
                  className="font-sans text-sm text-gold hover:text-gold-dark transition-colors duration-300"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Dropdown (Desktop) */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="font-sans text-sm text-gray-warm">
                {filteredProducts.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 font-sans text-sm border border-gray-border focus:outline-none focus:border-gold"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="bestsellers">Bestsellers</option>
              </select>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl mb-4">No products found</p>
                <p className="font-sans text-gray-warm">
                  Try adjusting your filters
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group relative">
                    <Link to={`/product/${product.id}`} className="block">
                      {/* Product Image */}
                      <div className="relative aspect-square bg-gray-light overflow-hidden mb-4 img-hover-zoom">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Quick Add Button */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleQuickAdd(product);
                          }}
                          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-charcoal text-cream 
                                   px-6 py-2 font-sans text-xs tracking-wider uppercase
                                   opacity-0 group-hover:opacity-100 transition-all duration-300
                                   hover:bg-gold-dark"
                        >
                          <ShoppingBag size={14} className="inline-block mr-2" />
                          Quick Add
                        </button>
                      </div>

                      {/* Product Info */}
                      <div>
                        <h3 className="product-name text-sm mb-2">{product.name}</h3>
                        <p className="font-serif text-base font-medium">
                          ${product.price}
                        </p>
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
}