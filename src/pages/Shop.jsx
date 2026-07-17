import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/product/ProductCard';
import { ChevronDown, Filter } from 'lucide-react';

// Seed data (usually fetched)
const allProducts = [
  { id: '1', name: 'Vivid Aura Jewels', price: 42, category: 'earrings', material: 'gold' },
  { id: '2', name: 'Majestic Flora Nectar', price: 68, category: 'necklaces', material: 'gold' },
  { id: '3', name: 'Golden Sphere Huggies', price: 38, category: 'huggies', material: 'gold' },
  { id: '4', name: 'Amber Lace Earrings', price: 54, category: 'earrings', material: 'gold' },
  { id: '5', name: 'Royal Heirloom Set', price: 95, category: 'collections', material: 'gold' },
  { id: '6', name: 'Stellar Drop Pendant', price: 58, category: 'necklaces', material: 'gold' },
  { id: '7', name: 'Minimalist Mini Huggies', price: 32, category: 'huggies', material: 'silver' },
  { id: '8', name: 'Lustrous Pearl Drops', price: 62, category: 'earrings', material: 'gold' },
];

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'all';
  const sortParam = searchParams.get('sort') || 'featured';
  
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleFilterChange = (type, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' && type === 'category') {
      params.delete('category');
    } else {
      params.set(type, value);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];
    
    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    switch (sortParam) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'az':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured (original order)
        break;
    }
    
    return result;
  }, [categoryFilter, sortParam]);

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif capitalize mb-4">
          {categoryFilter === 'all' ? 'All Jewelry' : categoryFilter}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of demi-fine jewelry, designed to bring a touch of quiet luxury to your everyday look.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center bg-muted/30 p-4 border border-border">
          <button 
            className="flex items-center gap-2 font-semibold uppercase tracking-wider text-sm"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <Filter className="w-4 h-4" /> Filters
          </button>
          <div className="relative">
            <select 
              className="appearance-none bg-transparent pr-8 py-1 uppercase text-sm tracking-wider outline-none"
              value={sortParam}
              onChange={(e) => handleFilterChange('sort', e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low - High</option>
              <option value="price-high">Price: High - Low</option>
              <option value="az">A - Z</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Sidebar */}
        <div className={`w-full md:w-64 flex-shrink-0 ${isMobileFilterOpen ? 'block' : 'hidden md:block'}`}>
          <div className="sticky top-32">
            <div className="mb-10">
              <h3 className="font-serif text-xl mb-6 border-b border-border pb-2">Category</h3>
              <ul className="space-y-4 text-sm tracking-wider uppercase">
                {['All', 'Earrings', 'Necklaces', 'Huggies', 'Collections'].map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => handleFilterChange('category', cat.toLowerCase())}
                      className={`hover:text-foreground transition-colors ${categoryFilter === cat.toLowerCase() ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Desktop Toolbar */}
          <div className="hidden md:flex justify-between items-center mb-8 pb-4 border-b border-border">
            <span className="text-muted-foreground text-sm">{filteredProducts.length} Products</span>
            <div className="flex items-center gap-4">
              <span className="text-sm uppercase tracking-wider">Sort by:</span>
              <div className="relative">
                <select 
                  className="appearance-none bg-transparent pr-8 py-1 outline-none font-semibold text-sm cursor-pointer"
                  value={sortParam}
                  onChange={(e) => handleFilterChange('sort', e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low - High</option>
                  <option value="price-high">Price: High - Low</option>
                  <option value="az">A - Z</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">No products found matching your filters.</p>
              <button 
                onClick={() => setSearchParams({})}
                className="border-b border-foreground pb-1"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
