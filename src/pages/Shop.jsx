import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '@/api/products';
import ProductCard from '@/components/common/ProductCard';
import { ChevronDown, Filter, X } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  const categories = ['Earrings', 'Necklaces', 'Huggies'];

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts({ category: categoryFilter });
        let sorted = [...data];
        if (sortBy === 'price-low') sorted.sort((a,b) => a.data.price - b.data.price);
        if (sortBy === 'price-high') sorted.sort((a,b) => b.data.price - a.data.price);
        setProducts(sorted);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [categoryFilter, sortBy]);

  const handleCategoryChange = (cat) => {
    if (categoryFilter === cat) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-4xl font-serif">
              {categoryFilter ? categoryFilter : 'All Jewelry'}
            </h1>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              {products.length} Products
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 text-[10px] tracking-[0.2em] font-medium uppercase md:hidden"
            >
              <Filter size={16} />
              <span>Filter</span>
            </button>
            <div className="relative group">
              <button className="flex items-center space-x-2 text-[10px] tracking-[0.2em] font-medium uppercase">
                <span>Sort By: {sortBy.replace('-', ' ')}</span>
                <ChevronDown size={14} />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-40">
                <div className="py-2 text-[10px] tracking-widest uppercase text-left">
                  <button onClick={() => setSortBy('newest')} className="block w-full px-4 py-2 hover:bg-stone-50">Newest</button>
                  <button onClick={() => setSortBy('price-low')} className="block w-full px-4 py-2 hover:bg-stone-50">Price: Low to High</button>
                  <button onClick={() => setSortBy('price-high')} className="block w-full px-4 py-2 hover:bg-stone-50">Price: High to Low</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Sidebar Filter */}
          <aside className="hidden md:block space-y-10">
            <div className="space-y-6">
              <h3 className="text-[11px] tracking-[0.2em] font-medium uppercase border-b pb-2">Category</h3>
              <ul className="space-y-4 text-sm font-serif italic text-stone-600">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryChange(cat)}
                      className={categoryFilter === cat ? 'text-accent font-bold' : 'hover:text-accent transition-colors'}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-[11px] tracking-[0.2em] font-medium uppercase border-b pb-2">Material</h3>
              <ul className="space-y-4 text-sm font-serif italic text-stone-600">
                <li><button className="hover:text-accent">18K Gold Plated</button></li>
                <li><button className="hover:text-accent">Sterling Silver</button></li>
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="md:col-span-3">
            {loading ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="space-y-4 animate-pulse">
                    <div className="aspect-[3/4] bg-stone-100" />
                    <div className="h-4 bg-stone-100 w-2/3 mx-auto" />
                    <div className="h-4 bg-stone-100 w-1/3 mx-auto" />
                  </div>
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 font-serif italic text-muted-foreground">
                No products found in this category.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-[100] bg-white animate-in slide-in-from-bottom duration-500 overflow-y-auto">
          <div className="p-6 flex justify-between items-center border-b">
            <h2 className="text-xl font-serif uppercase tracking-widest">Filter By</h2>
            <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
          </div>
          <div className="p-12 space-y-16">
            <div className="space-y-6">
              <h3 className="text-xs tracking-[0.2em] font-medium uppercase">Category</h3>
              <ul className="space-y-6 text-xl font-serif italic">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => { handleCategoryChange(cat); setIsFilterOpen(false); }}
                      className={categoryFilter === cat ? 'text-accent underline underline-offset-8' : ''}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button
               onClick={() => setIsFilterOpen(false)}
               className="w-full bg-primary text-white py-4 uppercase tracking-[0.2em] text-[10px]"
            >
              Show Results
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Shop;
