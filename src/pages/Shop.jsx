import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '@/api/products';
import { useCart } from '@/lib/cart-context';
import { Filter, ChevronDown, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'All';
  const { addToCart } = useCart();
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Featured');

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Collections'];
  
  const filteredProducts = products.filter(p => 
    selectedCategory === 'All' || p.category === selectedCategory
  );

  const displayProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    return 0;
  });

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <header className="mb-16 text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6 tracking-tight uppercase tracking-widest-xl">
            {selectedCategory === 'All' ? 'Shop All' : selectedCategory}
          </h1>
          <p className="text-muted-foreground font-light tracking-wide max-w-xl mx-auto">
            Discover a curated collection of demi-fine treasures, designed to be worn, layered, and loved for a lifetime.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 space-y-12">
            <div>
              <h3 className="text-xs tracking-widest uppercase font-bold mb-6 flex items-center gap-2">
                 Filter <Filter className="w-3 h-3" />
              </h3>
              <div className="space-y-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSearchParams({ category: cat })}
                    className={`block text-sm tracking-widest uppercase text-left w-full hover:opacity-60 transition-opacity ${
                      selectedCategory === cat ? 'font-bold underline underline-offset-8' : 'font-light'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-12 border-t">
              <h3 className="text-xs tracking-widest uppercase font-bold mb-6">Material</h3>
              <div className="space-y-4">
                {['18K Gold Plated', 'Silver Vermeil', 'Mixed Crystals'].map((mat) => (
                  <label key={mat} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-black flex items-center justify-center">
                      <div className="w-2 h-2 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
                    </div>
                    <span className="text-sm font-light tracking-widest uppercase">{mat}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="flex justify-between items-center mb-10 border-b pb-6">
              <span className="text-sm font-light tracking-widest uppercase">
                {displayProducts.length} Results
              </span>
              <div className="relative">
                <button 
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="text-sm tracking-widest uppercase font-medium flex items-center gap-2"
                >
                  Sort By: {sortBy} <ChevronDown className="w-4 h-4" />
                </button>
                {isSortOpen && (
                  <div className="absolute right-0 mt-4 w-56 bg-white border border-border shadow-lg z-20 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    {['Featured', 'Price: Low to High', 'Price: High to Low'].map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSortBy(option);
                          setIsSortOpen(false);
                        }}
                        className="flex items-center justify-between w-full px-6 py-3 text-[10px] tracking-widest uppercase hover:bg-muted text-left font-medium"
                      >
                        {option}
                        {sortBy === option && <Check className="w-3 h-3" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {displayProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-[3/4] overflow-hidden bg-muted mb-6 relative">
                    <Link to={`/product/${product.id}`}>
                       <img 
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          data-strk-img-id={`shop-primary-${product.id}`}
                          data-strk-img={`${product.name} jewelry minimalism gold`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="800"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                       />
                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                    </Link>
                    <button 
                      onClick={() => {
                        addToCart(product);
                        toast.success(`Added ${product.name} to bag`);
                      }}
                      className="absolute bottom-6 left-6 right-6 bg-white text-black py-4 text-xs tracking-widest uppercase font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white"
                    >
                      Add to Bag
                    </button>
                  </div>
                  <div className="text-center">
                    <Link to={`/product/${product.id}`} className="hover:opacity-60 transition-opacity block mb-2">
                       <h3 className="font-serif text-xl tracking-widest uppercase">{product.name}</h3>
                    </Link>
                    <p className="text-muted-foreground font-medium text-sm border-t border-border/50 pt-4 inline-block px-4">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}