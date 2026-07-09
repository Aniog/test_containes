import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');
  const [sortOption, setSortOption] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (categoryParam) {
      const matchedCategory = categories.find(c => c.toLowerCase() === categoryParam.toLowerCase());
      setActiveCategory(matchedCategory || 'All');
    } else {
      setActiveCategory('All');
    }
  }, [categoryParam]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  let filteredProducts = products;
  if (activeCategory !== 'All') {
    filteredProducts = products.filter(p => p.category === activeCategory);
  }

  // Basic sorting
  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low-high') return a.price - b.price;
    if (sortOption === 'price-high-low') return b.price - a.price;
    return 0; // featured (default array order)
  });

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-widest mb-6">
            {activeCategory === 'All' ? 'The Collection' : activeCategory}
          </h1>
          <p className="text-velmora-muted italic font-serif text-lg">
            Discover our carefully curated selection of demi-fine jewelry, designed to bring a touch of everyday luxury to your collection.
          </p>
        </div>

        {/* Filters Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-y border-velmora-border mb-12 gap-4">
          <button 
            className="md:hidden flex items-center space-x-2 text-sm uppercase tracking-wider font-medium"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <SlidersHorizontal size={16} />
            <span>Filter</span>
          </button>
          
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
            <button 
              className={`pb-1 border-b-2 transition-colors ${activeCategory === 'All' ? 'border-velmora-gold text-velmora-dark' : 'border-transparent text-velmora-muted hover:text-velmora-dark'}`}
              onClick={() => handleCategoryChange('All')}
            >
              All
            </button>
            {categories.map(cat => (
              <button 
                key={cat}
                className={`pb-1 border-b-2 transition-colors ${activeCategory === cat ? 'border-velmora-gold text-velmora-dark' : 'border-transparent text-velmora-muted hover:text-velmora-dark'}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 text-sm uppercase tracking-wider font-medium text-velmora-muted ml-auto">
            <span>Sort by:</span>
            <div className="relative group">
              <select 
                className="appearance-none bg-transparent pr-6 focus:outline-none cursor-pointer text-velmora-dark"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Mobile Filter Menu (Collapsible) */}
        {isFilterOpen && (
          <div className="md:hidden mb-8 p-4 bg-velmora-light border border-velmora-border">
            <h3 className="text-xs uppercase tracking-widest font-medium mb-4 text-velmora-muted">Categories</h3>
            <div className="flex flex-col space-y-3">
              <button 
                className={`text-left uppercase text-sm tracking-wider ${activeCategory === 'All' ? 'text-velmora-gold' : 'text-velmora-dark'}`}
                onClick={() => handleCategoryChange('All')}
              >
                All Pieces
              </button>
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={`text-left uppercase text-sm tracking-wider ${activeCategory === cat ? 'text-velmora-gold' : 'text-velmora-dark'}`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <h3 className="font-serif text-2xl mb-4">No pieces found</h3>
            <p className="text-velmora-muted mb-8">We couldn't find any pieces matching your current selection.</p>
            <button 
              onClick={() => handleCategoryChange('All')}
              className="px-8 py-3 bg-velmora-dark text-velmora-base uppercase text-xs tracking-widest font-medium hover:bg-velmora-gold transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;