import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../lib/data';
import { Filter, ChevronDown } from 'lucide-react';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (categoryParam) {
      if (categoryParam !== 'new' && categoryParam !== 'collections') {
        result = result.filter(p => p.category === categoryParam);
      }
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Mock sorting by newest (reverse order of array)
        result.reverse();
        break;
      default:
        // Featured - keep original order
        break;
    }
    
    setFilteredProducts(result);
  }, [categoryParam, sortBy]);

  const handleCategoryChange = (category) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
    setIsFilterOpen(false);
  };

  const categories = [
    { id: '', label: 'All Jewelry' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'huggies', label: 'Huggies & Hoops' },
    { id: 'sets', label: 'Sets' },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="bg-secondary/30 py-16 mb-12">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 capitalize">
            {categoryParam ? categoryParam : 'Shop All'}
          </h1>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Discover our collection of effortlessly elegant pieces, crafted in 18k gold vermeil to be loved and lived in every day.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <div className="md:hidden flex justify-between items-center border-b border-border pb-4">
            <button 
              className="flex items-center gap-2 uppercase tracking-widest text-sm font-medium"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={16} /> Filter
            </button>
            
            <div className="flex items-center gap-2 uppercase tracking-widest text-sm font-medium">
              Sort By <ChevronDown size={16} />
            </div>
          </div>

          {/* Sidebar / Filters */}
          <div className={`w-full md:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-28">
              <div className="mb-10">
                <h3 className="font-medium uppercase tracking-widest text-sm mb-6 border-b border-border pb-4">Categories</h3>
                <ul className="space-y-4">
                  {categories.map((cat) => (
                    <li key={cat.id || 'all'}>
                      <button 
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`text-sm hover:text-primary transition-colors ${
                          (categoryParam === cat.id) || (!categoryParam && cat.id === '') 
                            ? 'text-primary font-medium' 
                            : 'text-muted-foreground'
                        }`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-10">
                <h3 className="font-medium uppercase tracking-widest text-sm mb-6 border-b border-border pb-4">Material</h3>
                <div className="flex items-center gap-3 mb-3">
                  <input type="checkbox" id="gold" checked readOnly className="accent-primary" />
                  <label htmlFor="gold" className="text-sm text-foreground">18k Gold Plated</label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="silver" disabled className="accent-primary" />
                  <label htmlFor="silver" className="text-sm text-muted-foreground line-through">Sterling Silver (Coming Soon)</label>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex justify-between items-center mb-8 border-b border-border pb-4">
              <span className="text-sm text-muted-foreground">{filteredProducts.length} Products</span>
              <div className="flex items-center gap-3">
                <label className="text-sm text-muted-foreground uppercase tracking-widest text-xs">Sort:</label>
                <select 
                  className="bg-transparent border-none outline-none text-sm font-medium cursor-pointer"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl font-serif mb-4">No products found.</p>
                <button 
                  onClick={() => handleCategoryChange('')}
                  className="text-primary hover:text-accent underline-offset-4 hover:underline uppercase tracking-widest text-sm"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;