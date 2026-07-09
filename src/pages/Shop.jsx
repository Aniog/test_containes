import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '../api/products';
import ProductCard from '../components/common/ProductCard';
import { ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  const activeCategory = searchParams.get('category') || 'All';

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    let result = [...products];
    
    if (activeCategory !== 'All') {
      result = result.filter(p => p.data.category === activeCategory);
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.data.price - b.data.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.data.price - a.data.price);
    }

    setFilteredProducts(result);
  }, [products, activeCategory, sortBy]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 space-y-4 md:space-y-0">
        <div>
          <h1 className="text-4xl font-serif mb-2">Shop All</h1>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">{filteredProducts.length} pieces</p>
        </div>

        <div className="flex items-center space-x-6 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
          <div className="flex space-x-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSearchParams({ category: cat })}
                className={cn(
                  "text-[10px] uppercase tracking-[0.2em] font-semibold border-b-2 pb-1 transition-all duration-300",
                  activeCategory === cat ? "border-gold text-charcoal" : "border-transparent text-stone-400 hover:text-charcoal"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="ml-auto flex items-center space-x-4 border-l border-stone-200 pl-6">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-[10px] uppercase tracking-[0.2em] font-semibold outline-none cursor-pointer"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="animate-pulse space-y-4">
              <div className="aspect-[3/4] bg-stone-100" />
              <div className="h-2 bg-stone-100 w-2/3" />
              <div className="h-2 bg-stone-100 w-1/3" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-4 sm:gap-x-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {filteredProducts.length === 0 && !loading && (
        <div className="py-24 text-center">
          <p className="text-stone-400 font-serif italic text-xl">No pieces found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;

