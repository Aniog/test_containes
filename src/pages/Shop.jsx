import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '@/lib/data';
import ProductCard from '@/components/common/ProductCard';
import { Filter, ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState('newest');

  const activeCategory = searchParams.get('category') || 'All';

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
    }

    if (sortOption === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, sortOption]);

  const handleCategoryChange = (cat) => {
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div>
            <h1 className="text-sm uppercase tracking-[0.4em] text-accent font-bold mb-4">Collection</h1>
            <h2 className="text-4xl md:text-5xl font-serif">
              {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
            </h2>
          </div>

          <div className="flex items-center gap-6 w-full md:w-auto">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-bold"
            >
              <Filter size={16} /> Filters
            </button>

            <div className="flex-1 md:flex-initial relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full md:w-48 appearance-none bg-transparent border-b border-border py-2 px-1 text-xs uppercase tracking-widest font-bold focus:outline-none focus:border-accent"
              >
                <option value="newest">Sort By: Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" size={14} />
            </div>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar */}
          <aside className={cn(
            "fixed inset-0 z-[60] bg-background p-8 md:relative md:inset-auto md:z-0 md:bg-transparent md:p-0 md:w-64 flex-col gap-12 transition-transform duration-300",
            isFilterOpen ? "translate-x-0 flex" : "-translate-x-full md:translate-x-0 hidden md:flex"
          )}>
            <div className="flex justify-between items-center md:hidden">
              <span className="text-lg font-serif">Filters</span>
              <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold mb-6 border-b pb-2">Category</h3>
              <ul className="flex flex-col gap-4">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => {
                        handleCategoryChange(cat);
                        setIsFilterOpen(false);
                      }}
                      className={cn(
                        "text-sm tracking-wide transition-colors",
                        activeCategory.toLowerCase() === cat.toLowerCase()
                          ? "text-accent font-bold"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold mb-6 border-b pb-2">Material</h3>
              <ul className="flex flex-col gap-4">
                {['18K Gold Vermeil', 'Sterling Silver'].map((mat) => (
                  <li key={mat} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full border border-border" />
                    <span className="text-sm text-muted-foreground">{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="py-24 text-center">
                <p className="text-muted-foreground font-serif italic">No products found for this selection.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
