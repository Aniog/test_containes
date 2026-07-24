import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown, ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const Collection = () => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem, openCart } = useCart();
  const containerRef = useRef(null);
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  // Set initial category from URL params
  useEffect(() => {
    if (category) {
      setSelectedCategories([category]);
    } else {
      setSelectedCategories([]);
    }
  }, [category]);
  
  // Load images when filtered products change
  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [filteredProducts]);
  
  // Filter and sort products
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter(product => selectedCategories.includes(product.category));
    }
    
    // Filter by material
    if (selectedMaterials.length > 0) {
      result = result.filter(product => selectedMaterials.includes(product.material));
    }
    
    // Filter by price range
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // For demo purposes, sort by ID (newest first)
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default: // 'featured'
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    
    setFilteredProducts(result);
  }, [selectedCategories, selectedMaterials, priceRange, sortBy]);
  
  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    openCart();
  };
  
  const toggleCategory = (categoryId) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
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
    setSelectedMaterials([]);
    setPriceRange([0, 200]);
    setSortBy('featured');
  };
  
  const activeFiltersCount = selectedCategories.length + selectedMaterials.length + 
    (priceRange[0] > 0 || priceRange[1] < 200 ? 1 : 0);
  
  return (
    <div className="pt-20" ref={containerRef}>
      {/* Header */}
      <section className="section-padding bg-cream-100">
        <div className="container-wide text-center">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-gold-600 mb-2 block">
            {category ? categories.find(c => c.id === category)?.name || 'Collection' : 'All Jewelry'}
          </span>
          <h1 className="text-display text-espresso-900 mb-4">
            {category ? categories.find(c => c.id === category)?.name || 'Collection' : 'Shop All'}
          </h1>
          <p className="font-sans text-body text-espresso-500 max-w-2xl mx-auto">
            {category 
              ? categories.find(c => c.id === category)?.description || 'Discover our collection of demi-fine jewelry.'
              : 'Discover our complete collection of demi-fine gold jewelry, designed for the modern woman.'
            }
          </p>
        </div>
      </section>
      
      {/* Filters and products */}
      <section className="section-padding">
        <div className="container-wide">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 font-sans text-sm font-medium text-espresso-700 hover:text-espresso-900 transition-colors duration-200"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="w-5 h-5 bg-gold-500 text-cream-50 text-xs rounded-full flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
              
              {activeFiltersCount > 0 && (
                <button 
                  onClick={clearFilters}
                  className="font-sans text-sm text-espresso-500 hover:text-espresso-700 transition-colors duration-200"
                >
                  Clear all
                </button>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              <span className="font-sans text-sm text-espresso-500">
                {filteredProducts.length} products
              </span>
              
              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-cream-50 border border-cream-300 rounded-md pl-4 pr-10 py-2 font-sans text-sm text-espresso-700 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-espresso-500 pointer-events-none" />
              </div>
            </div>
          </div>
          
          <div className="flex gap-8">
            {/* Filter sidebar */}
            {isFilterOpen && (
              <div className="w-full md:w-64 flex-shrink-0">
                <div className="bg-cream-50 rounded-lg p-6 sticky top-24">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-serif text-lg tracking-wider text-espresso-900 uppercase">
                      Filters
                    </h3>
                    <button 
                      onClick={() => setIsFilterOpen(false)}
                      className="md:hidden p-1 -mr-1"
                      aria-label="Close filters"
                    >
                      <X className="w-5 h-5 text-espresso-500" />
                    </button>
                  </div>
                  
                  {/* Category filter */}
                  <div className="mb-8">
                    <h4 className="font-sans text-sm font-medium text-espresso-700 mb-4 uppercase tracking-wider">
                      Category
                    </h4>
                    <div className="space-y-3">
                      {categories.map((cat) => (
                        <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                          <input 
                            type="checkbox"
                            checked={selectedCategories.includes(cat.id)}
                            onChange={() => toggleCategory(cat.id)}
                            className="w-4 h-4 text-gold-500 border-cream-300 rounded focus:ring-gold-500"
                          />
                          <span className="font-sans text-sm text-espresso-700">
                            {cat.name}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price filter */}
                  <div className="mb-8">
                    <h4 className="font-sans text-sm font-medium text-espresso-700 mb-4 uppercase tracking-wider">
                      Price Range
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between font-sans text-sm text-espresso-500">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                      <input 
                        type="range"
                        min="0"
                        max="200"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full h-2 bg-cream-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  {/* Material filter */}
                  <div>
                    <h4 className="font-sans text-sm font-medium text-espresso-700 mb-4 uppercase tracking-wider">
                      Material
                    </h4>
                    <div className="space-y-3">
                      {['gold', 'silver'].map((material) => (
                        <label key={material} className="flex items-center gap-3 cursor-pointer">
                          <input 
                            type="checkbox"
                            checked={selectedMaterials.includes(material)}
                            onChange={() => toggleMaterial(material)}
                            className="w-4 h-4 text-gold-500 border-cream-300 rounded focus:ring-gold-500"
                          />
                          <span className="font-sans text-sm text-espresso-700 capitalize">
                            {material}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Product grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <p className="font-sans text-body text-espresso-500 mb-6">
                    No products match your filters.
                  </p>
                  <button 
                    onClick={clearFilters}
                    className="btn-outline"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Link 
                      key={product.id}
                      to={`/products/${product.slug}`}
                      className="group"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-lg bg-cream-200 mb-4">
                        <img 
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          data-strk-img-id={`collection-${product.id}`}
                          data-strk-img={`[${product.id}-collection-name] [${product.id}-collection-desc] ${product.category} gold jewelry`}
                          data-strk-img-ratio="1x1"
                          data-strk-img-width="600"
                        />
                        
                        {/* Quick add button */}
                        <button 
                          onClick={(e) => handleAddToCart(e, product)}
                          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-cream-50 text-espresso-900 px-4 py-2 rounded-md shadow-medium flex items-center gap-2 text-sm font-medium"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          Add to Cart
                        </button>
                      </div>
                      
                      <div className="text-center">
                        <h3 
                          id={`${product.id}-collection-name`}
                          className="font-serif text-sm tracking-wider text-espresso-900 uppercase mb-1"
                        >
                          {product.name}
                        </h3>
                        <p 
                          id={`${product.id}-collection-desc`}
                          className="font-sans text-xs text-espresso-500 mb-2"
                        >
                          {product.shortDescription}
                        </p>
                        <div className="flex items-center justify-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold-500 fill-current' : 'text-cream-300'}`}
                            />
                          ))}
                          <span className="font-sans text-xs text-espresso-400 ml-1">
                            ({product.reviewCount})
                          </span>
                        </div>
                        <p className="font-sans text-sm font-medium text-espresso-900">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;
