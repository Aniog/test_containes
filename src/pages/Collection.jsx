import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, Filter } from 'lucide-react';
import { seedProducts } from '@/data';
import { useCart } from '@/lib/CartContext';

export default function Collection() {
  const { categoryId } = useParams();
  const { addItem } = useCart();
  const [sortOrder, setSortOrder] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceFilter, setPriceFilter] = useState('all');

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...seedProducts];

    // Category filter
    if (categoryId && categoryId !== 'all') {
      const normalizedCategory = categoryId.toLowerCase();
      // Handle special case 'sets', otherwise use exact match
      result = result.filter(p => 
        normalizedCategory === 'sets' 
          ? p.category.toLowerCase() === 'sets'
          : p.category.toLowerCase() === normalizedCategory
      );
    }

    // Price filter
    if (priceFilter === 'under50') {
      result = result.filter(p => p.price < 50);
    } else if (priceFilter === '50to100') {
      result = result.filter(p => p.price >= 50 && p.price <= 100);
    }

    // Sorting
    switch (sortOrder) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Mock newest by reversing array for demo
        result.reverse();
        break;
      default: // featured
        break;
    }

    return result;
  }, [categoryId, sortOrder, priceFilter]);

  const collectionTitle = categoryId && categoryId !== 'all' 
    ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) 
    : 'All Jewelry';

  return (
    <div className="pt-24 md:pt-32 pb-20">
      
      {/* Header */}
      <div className="bg-secondary/50 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">{collectionTitle}</h1>
          <p className="text-foreground/70 text-balance max-w-lg mx-auto">
            Discover our complete collection of demi-fine jewelry. Pieces designed to be layered, lived in, and loved.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters (Desktop) & Mobile Toggle */}
          <div className="md:w-64 flex-shrink-0">
            <div className="flex justify-between items-center md:hidden mb-4">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center text-sm tracking-widest uppercase font-medium"
              >
                <Filter size={16} className="mr-2" /> Filters
              </button>
              
              <div className="relative">
                <select 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="appearance-none bg-transparent text-sm tracking-widest uppercase font-medium pr-6 focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className={`space-y-8 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
              
              {/* Category Filter */}
              <div>
                <h3 className="font-serif text-lg border-b border-border pb-2 mb-4">Category</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link 
                      to="/collections/all" 
                      className={`hover:text-primary transition-colors ${!categoryId || categoryId === 'all' ? 'text-primary font-medium' : 'text-foreground/70'}`}
                    >
                      All Jewelry
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/collections/earrings" 
                      className={`hover:text-primary transition-colors ${categoryId === 'earrings' ? 'text-primary font-medium' : 'text-foreground/70'}`}
                    >
                      Earrings
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/collections/necklaces" 
                      className={`hover:text-primary transition-colors ${categoryId === 'necklaces' ? 'text-primary font-medium' : 'text-foreground/70'}`}
                    >
                      Necklaces
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/collections/huggies" 
                      className={`hover:text-primary transition-colors ${categoryId === 'huggies' ? 'text-primary font-medium' : 'text-foreground/70'}`}
                    >
                      Huggies
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-serif text-lg border-b border-border pb-2 mb-4">Price</h3>
                <ul className="space-y-3 text-sm text-foreground/70">
                  <li>
                    <button 
                      onClick={() => setPriceFilter('all')}
                      className={`hover:text-primary transition-colors ${priceFilter === 'all' ? 'text-primary font-medium' : ''}`}
                    >
                      All Prices
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setPriceFilter('under50')}
                      className={`hover:text-primary transition-colors ${priceFilter === 'under50' ? 'text-primary font-medium' : ''}`}
                    >
                      Under $50
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setPriceFilter('50to100')}
                      className={`hover:text-primary transition-colors ${priceFilter === '50to100' ? 'text-primary font-medium' : ''}`}
                    >
                      $50 - $100
                    </button>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden md:flex justify-between items-center mb-8 border-b border-border pb-4">
              <span className="text-sm text-foreground/60">{filteredAndSortedProducts.length} Products</span>
              <div className="relative flex items-center">
                <span className="text-sm tracking-widest uppercase mr-3">Sort by:</span>
                <select 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="appearance-none bg-transparent text-sm tracking-widest uppercase font-medium pr-6 focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {filteredAndSortedProducts.map((product) => (
                  <div key={product.id} className="group relative flex flex-col">
                    <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary mb-4 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                      />
                      <img 
                        src={product.hoverImage || product.image} 
                        alt={`${product.name} alternate view`} 
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                      {/* Quick Add Button Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            addItem(product);
                          }}
                          className="w-full py-3 bg-background/95 backdrop-blur text-foreground text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
                        >
                          Quick Add
                        </button>
                      </div>
                    </Link>
                    <div className="flex flex-col flex-1 text-center">
                      <h3 className="font-serif text-sm tracking-wider uppercase mb-1">
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                      </h3>
                      <p className="text-foreground/70">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="font-serif text-xl mb-4">No products found.</p>
                <button 
                  onClick={() => { setPriceFilter('all'); setSortOrder('featured'); }}
                  className="text-sm tracking-widest uppercase underline underline-offset-4"
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
}
