import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { seedProducts } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState('featured');

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = useMemo(() => {
    let products = [...seedProducts];
    
    // Apply Category Filter
    if (categoryFilter && categoryFilter !== 'all') {
      products = products.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase());
    }

    // Apply Sort
    switch (sortOption) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      // 'featured' keeps original order
      default:
        break;
    }

    return products;
  }, [categoryFilter, sortOption]);


  const handleCategoryChange = (category) => {
    if (category.toLowerCase() === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category.toLowerCase());
    }
    setSearchParams(searchParams);
    setIsMobileFilterOpen(false);
  };

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 capitalize">
            {categoryFilter && categoryFilter !== 'all' ? categoryFilter : 'The Collection'}
          </h1>
          <p className="text-muted-foreground uppercase tracking-widest text-xs">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-6 border-b border-border gap-4">
          
          {/* Mobile Filter Toggle */}
          <button 
            className="md:hidden flex items-center justify-between w-full border border-border px-4 py-3 uppercase tracking-widest text-xs font-medium"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <span className="flex items-center gap-2"><SlidersHorizontal className="w-4 h-4"/> Filter by Category</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isMobileFilterOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Desktop Categories */}
          <div className="hidden md:flex gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`uppercase tracking-widest text-xs font-medium transition-colors ${
                  (categoryFilter === cat.toLowerCase() || (!categoryFilter && cat === 'All'))
                    ? 'text-primary border-b border-primary pb-1'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-end">
            <span className="uppercase tracking-widest text-xs font-medium text-muted-foreground whitespace-nowrap">Sort By</span>
            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-transparent border-none text-foreground uppercase tracking-widest text-xs font-medium focus:ring-0 cursor-pointer appearance-none pr-8 py-2 relative"
              style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"><path d="M4 6l4 4 4-4H4z"/></svg>')`, backgroundPosition: 'right center', backgroundRepeat: 'no-repeat' }}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Mobile Filter Menu (Expandable) */}
        {isMobileFilterOpen && (
          <div className="md:hidden pb-10 border-b border-border mb-10 flex flex-col gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-left uppercase tracking-widest text-sm font-medium p-2 ${
                  (categoryFilter === cat.toLowerCase() || (!categoryFilter && cat === 'All'))
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="font-serif text-2xl mb-4">No products found.</h3>
            <p className="text-muted-foreground">Try selecting a different category.</p>
            <button 
              onClick={() => handleCategoryChange('All')}
              className="mt-6 border-b border-foreground uppercase tracking-widest text-xs hover:text-primary hover:border-primary transition-colors pb-1"
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
