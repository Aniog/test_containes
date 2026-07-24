import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '@/api/products';
import ProductCard from '@/components/home/ProductGrid';
import { ChevronDown, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const currentCategory = searchParams.get('category') || 'All';
  const currentSort = searchParams.get('sort') || 'newest';

  useEffect(() => {
    fetchProducts({ category: currentCategory }).then((data) => {
      let sortedData = [...data];
      if (currentSort === 'price-low') sortedData.sort((a, b) => a.data.price - b.data.price);
      if (currentSort === 'price-high') sortedData.sort((a, b) => b.data.price - a.data.price);
      setProducts(sortedData);
    });
    window.scrollTo(0, 0);
  }, [currentCategory, currentSort]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const sortOptions = [
    { label: 'Newest', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-low' },
    { label: 'Price: High to Low', value: 'price-high' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-16 space-y-4">
        <p className="text-[10px] uppercase tracking-[0.4em] font-medium text-primary">The Collection</p>
        <h1 className="text-5xl md:text-6xl font-serif">
          {currentCategory === 'All' ? 'All Jewelry' : currentCategory}
        </h1>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between border-b pb-6 mb-12 gap-8">
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSearchParams({ category: cat, sort: currentSort })}
                className={cn(
                  "text-[10px] uppercase tracking-[0.2em] font-bold pb-1 transition-all border-b-2",
                  currentCategory === cat ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <button 
            className="md:hidden flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={16} />
            <span>Categories</span>
          </button>
        </div>

        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold">
          <span className="text-muted-foreground">Sort By:</span>
          <select 
            value={currentSort}
            onChange={(e) => setSearchParams({ category: currentCategory, sort: e.target.value })}
            className="bg-transparent outline-none cursor-pointer border-b border-transparent focus:border-primary"
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile Categories Overflow */}
      {isFilterOpen && (
        <div className="md:hidden flex flex-wrap gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSearchParams({ category: cat, sort: currentSort });
                setIsFilterOpen(false);
              }}
              className={cn(
                "px-4 py-2 text-[10px] uppercase tracking-widest border",
                currentCategory === cat ? "bg-primary text-white border-primary" : "border-border text-muted-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Product Grid */}
      {products.length === 0 ? (
        <div className="py-24 text-center">
          <p className="font-serif italic text-muted-foreground">No pieces found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
