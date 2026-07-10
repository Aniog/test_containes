import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/home/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const categoryParam = searchParams.get('category') || 'all';
  const sortParam = searchParams.get('sort') || 'featured';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState(sortParam);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by material
    if (selectedMaterial !== 'all') {
      result = result.filter(p => p.material === selectedMaterial);
    }

    // Filter by price
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && p.price <= max);
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
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const updateParams = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'featured') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setPriceRange('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-sm uppercase tracking-wider mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => { setSelectedCategory('all'); updateParams('category', 'all'); }}
            className={`block text-left font-sans text-sm ${selectedCategory === 'all' ? 'text-velmora-gold' : 'text-velmora-charcoal/70'} hover:text-velmora-gold`}
          >
            All Jewelry
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setSelectedCategory(cat.id); updateParams('category', cat.id); }}
              className={`block text-left font-sans text-sm capitalize ${selectedCategory === cat.id ? 'text-velmora-gold' : 'text-velmora-charcoal/70'} hover:text-velmora-gold`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-sm uppercase tracking-wider mb-4">Material</h3>
        <div className="space-y-2">
          {['all', 'gold', 'silver'].map(mat => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block text-left font-sans text-sm capitalize ${selectedMaterial === mat ? 'text-velmora-gold' : 'text-velmora-charcoal/70'} hover:text-velmora-gold`}
            >
              {mat === 'all' ? 'All Materials' : `${mat} Tone`}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-sm uppercase tracking-wider mb-4">Price</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: '0-40', label: 'Under $40' },
            { value: '40-60', label: '$40 - $60' },
            { value: '60-100', label: '$60 - $100' },
            { value: '100-200', label: 'Over $100' },
          ].map(range => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={`block text-left font-sans text-sm ${priceRange === range.value ? 'text-velmora-gold' : 'text-velmora-charcoal/70'} hover:text-velmora-gold`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={clearFilters}
        className="text-sm text-velmora-taupe hover:text-velmora-charcoal underline"
      >
        Clear all filters
      </button>
    </div>
  );

  return (
    <main className="min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
          <div className="hairline max-w-20 mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center justify-center gap-2 py-3 border border-velmora-taupe/30"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile Filter Overlay */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/30" onClick={() => setIsFilterOpen(false)} />
              <div className="absolute left-0 top-0 h-full w-80 bg-cream p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-xl">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex items-center justify-between mb-6">
              <p className="font-sans text-sm text-velmora-taupe">
                {filteredProducts.length} products
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => { setSortBy(e.target.value); updateParams('sort', e.target.value); }}
                  className="appearance-none bg-transparent border border-velmora-taupe/30 px-4 py-2 pr-8 font-sans text-sm focus:outline-none focus:border-velmora-charcoal"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl mb-4">No products found</p>
                <p className="text-velmora-taupe mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="text-velmora-gold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
