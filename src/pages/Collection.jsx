import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ChevronDown, Filter } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Collection() {
  const { addItem } = useCart();
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Filter
    if (categoryFilter !== 'All') {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Sort
    switch (sortOrder) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'bestseller':
        result.sort((a, b) => (a.bestseller === b.bestseller ? 0 : a.bestseller ? -1 : 1));
        break;
      case 'featured':
      default:
        // Use default order
        break;
    }

    return result;
  }, [categoryFilter, sortOrder]);

  return (
    <div className="pt-24 md:pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center md:text-left mb-12 flex flex-col md:flex-row md:items-end md:justify-between border-b border-stone-200 pb-8">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-widest text-stone-900 mb-4">
              {categoryFilter === 'All' ? 'Fine Jewelry' : categoryFilter}
            </h1>
            <p className="text-stone-500 font-light max-w-xl">
              Discover our signature pieces. Heavy 18k gold vermeil designed for everyday movement and elegant stacking.
            </p>
          </div>
          <p className="text-xs uppercase tracking-widest font-medium text-stone-400 mt-6 md:mt-0">
            {filteredAndSortedProducts.length} Items
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between border-y border-stone-200 py-3 -mx-4 px-4 bg-stone-50 sticky top-16 z-30">
            <button 
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold"
            >
              <Filter className="w-4 h-4" /> Filter & Sort
            </button>
          </div>

          {/* Sidebar Filters */}
          <aside className={cn(
            "lg:w-64 flex-shrink-0 transition-all duration-300 overflow-hidden lg:overflow-visible",
            isMobileFilterOpen ? "max-h-[800px] opacity-100 py-4" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"
          )}>
            <div className="sticky top-28 space-y-10">
              
              {/* Categories */}
              <div>
                <h3 className="text-xs uppercase tracking-widest font-semibold text-stone-900 mb-6">Category</h3>
                <ul className="space-y-4 font-light text-sm text-stone-600">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button 
                        onClick={() => { setCategoryFilter(cat); setIsMobileFilterOpen(false); }}
                        className={cn(
                          "hover:text-primary transition-colors hover:translate-x-1 duration-200",
                          categoryFilter === cat ? "text-primary font-medium translate-x-1" : ""
                        )}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sort functionality */}
              <div className="hidden lg:block pt-8 border-t border-stone-200">
                <h3 className="text-xs uppercase tracking-widest font-semibold text-stone-900 mb-6">Sort By</h3>
                <ul className="space-y-4 font-light text-sm text-stone-600">
                  {[
                    { val: 'featured', label: 'Featured' },
                    { val: 'bestseller', label: 'Best Sellers' },
                    { val: 'price-low', label: 'Price: Low to High' },
                    { val: 'price-high', label: 'Price: High to Low' },
                  ].map(opt => (
                    <li key={opt.val}>
                      <button 
                        onClick={() => setSortOrder(opt.val)}
                        className={cn(
                          "hover:text-primary transition-colors hover:translate-x-1 duration-200",
                          sortOrder === opt.val ? "text-primary font-medium translate-x-1" : ""
                        )}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Mobile Sorting inside the toggle */}
            <div className="lg:hidden mt-8">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-stone-900 mb-4">Sort By</h3>
               <select 
                  value={sortOrder}
                  onChange={(e) => { setSortOrder(e.target.value); setIsMobileFilterOpen(false); }}
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-stone-900 transition-colors"
                >
                  <option value="featured">Featured</option>
                  <option value="bestseller">Best Sellers</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredAndSortedProducts.length === 0 ? (
              <div className="py-24 text-center">
                <h2 className="font-serif text-2xl mb-4 text-stone-900">No pieces found</h2>
                <p className="text-stone-500 font-light">Try adjusting your filters.</p>
                <button 
                  onClick={() => setCategoryFilter('All')}
                  className="mt-8 border border-stone-900 text-stone-900 px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-stone-900 hover:text-white transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
                {filteredAndSortedProducts.map(product => (
                  <div key={product.id} className="group flex flex-col">
                    <Link 
                      to={`/product/${product.id}`} 
                      className="relative aspect-[4/5] overflow-hidden mb-4 bg-stone-100 block"
                    >
                      <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0" />
                      <img src={product.hoverImage || product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100" />
                      <button 
                        onClick={(e) => { e.preventDefault(); addItem(product, 1, { tone: 'gold' }); }}
                        className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 py-3 text-xs uppercase tracking-widest font-semibold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white"
                      >
                        Quick Add
                      </button>
                    </Link>
                    <div className="flex-1 flex flex-col text-center">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif tracking-widest uppercase text-xs md:text-sm mb-1 text-stone-900 group-hover:text-primary transition-colors truncate px-2">{product.name}</h3>
                      </Link>
                      <p className="text-stone-500 text-sm mt-1">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {filteredAndSortedProducts.length > 0 && (
               <div className="mt-24 text-center border-t border-stone-200 pt-16">
                 <p className="text-xs uppercase tracking-widest text-stone-500 mb-8">Showing {filteredAndSortedProducts.length} of {filteredAndSortedProducts.length} items</p>
                 {filteredAndSortedProducts.length > 12 && (
                   <button className="border border-stone-900 text-stone-900 px-10 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-stone-900 hover:text-white transition-colors">
                     Load More
                   </button>
                 )}
               </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
