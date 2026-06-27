import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';
import { products, categories } from '@/data/products';
import { formatPrice } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterial, setSelectedMaterial] = useState('all');

  const urlCategory = searchParams.get('category') || 'all';
  const urlSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [searchQuery, setSearchQuery] = useState(urlSearch);

  // Sync with URL params
  React.useEffect(() => {
    setSelectedCategory(urlCategory);
    setSearchQuery(urlSearch);
  }, [urlCategory, urlSearch]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.shortDescription.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Material filter (simplified - based on product data)
    if (selectedMaterial === 'crystal') {
      result = result.filter(p => p.material.includes('Crystal'));
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, priceRange, selectedMaterial, sortBy]);

  const updateCategory = (cat) => {
    setSelectedCategory(cat);
    const newParams = new URLSearchParams(searchParams);
    if (cat === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', cat);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs tracking-[3px] text-[#BFA46F]">DISCOVER</span>
          <h1 className="font-serif text-4xl tracking-[1px] mt-1">The Collection</h1>
          <p className="text-[#4A463F] mt-2">Timeless demi-fine pieces, designed for everyday elegance.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs tracking-[2px] mb-3 text-[#1C1B18]">CATEGORY</h3>
                <div className="space-y-1.5 text-sm">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => updateCategory(cat.value)}
                      className={`block w-full text-left py-1 transition-colors ${
                        selectedCategory === cat.value 
                          ? 'text-[#BFA46F] font-medium' 
                          : 'text-[#4A463F] hover:text-[#1C1B18]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-xs tracking-[2px] mb-3 text-[#1C1B18]">PRICE</h3>
                <div className="space-y-2 text-sm text-[#4A463F]">
                  <div className="flex justify-between text-xs">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#BFA46F]"
                  />
                  <div className="flex gap-2">
                    {[30, 60, 90, 120].map((p) => (
                      <button 
                        key={p}
                        onClick={() => setPriceRange([0, p])}
                        className="text-xs px-2 py-0.5 border border-[#D4C9B8] hover:border-[#BFA46F] transition-colors"
                      >
                        Under {formatPrice(p)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-[2px] mb-3 text-[#1C1B18]">MATERIAL</h3>
                <div className="space-y-1.5 text-sm">
                  {[
                    { value: 'all', label: 'All Materials' },
                    { value: 'gold', label: '18K Gold Plated' },
                    { value: 'crystal', label: 'With Crystal' },
                  ].map((m) => (
                    <button
                      key={m.value}
                      onClick={() => setSelectedMaterial(m.value)}
                      className={`block w-full text-left py-1 transition-colors ${
                        selectedMaterial === m.value 
                          ? 'text-[#BFA46F] font-medium' 
                          : 'text-[#4A463F] hover:text-[#1C1B18]'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setPriceRange([0, 120]);
                  setSelectedMaterial('all');
                  setSortBy('featured');
                  setSearchParams({});
                }}
                className="text-xs tracking-[1.5px] text-[#8A8175] hover:text-[#BFA46F] underline"
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#D4C9B8]">
              <p className="text-sm text-[#4A463F]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              
              <div className="flex items-center gap-3">
                <label className="text-xs tracking-[1.5px] text-[#8A8175]">SORT</label>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border border-[#D4C9B8] text-sm py-1.5 px-3 focus:border-[#BFA46F] focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A–Z</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-[#4A463F]">No products match your filters.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                    setPriceRange([0, 120]);
                    setSelectedMaterial('all');
                    setSearchParams({});
                  }}
                >
                  CLEAR FILTERS
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
