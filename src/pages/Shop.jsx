import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Filter, ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { useCart } from '@/hooks/useCart';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  const containerRef = useRef(null);
  const { addToCart } = useCart();

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];

  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let query = client.from('Products').select('*');
        
        if (activeCategory !== 'All') {
          query = query.eq('category', activeCategory);
        }

        const { data: response, error } = await query;
        if (error) throw error;
        
        let list = response?.data?.list || [];
        
        // Sorting
        if (sortBy === 'price-low') {
          list.sort((a, b) => (a.data.price || a.price) - (b.data.price || b.price));
        } else if (sortBy === 'price-high') {
          list.sort((a, b) => (b.data.price || b.price) - (a.data.price || a.price));
        } else {
          list.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        }

        setProducts(list);
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [activeCategory, sortBy]);

  useEffect(() => {
    if (!loading) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading, products]);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl mb-4">Shop the Jewelry</h1>
            <p className="text-[10px] uppercase letter-spacing-wide text-primary/60">
              {activeCategory === 'All' ? 'Our complete collection of demi-fine gold' : `Curated ${activeCategory} for every occasion`}
            </p>
          </div>

          <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-8 border-b md:border-none pb-4 md:pb-0">
            <div className="flex items-center gap-2 cursor-pointer md:hidden" onClick={() => setIsFilterOpen(!isFilterOpen)}>
              <Filter className="w-4 h-4" />
              <span className="text-[10px] uppercase letter-spacing-wide">Filter</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "text-[10px] uppercase letter-spacing-wide transition-all",
                    activeCategory === cat ? "border-b border-primary" : "text-primary/40 hover:text-primary"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative group">
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-[10px] uppercase letter-spacing-wide">Sort By</span>
                <ChevronDown className="w-3 h-3" />
              </div>
              <div className="absolute top-full right-0 mt-4 bg-white shadow-xl border p-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                <div className="flex flex-col gap-4">
                  <button onClick={() => setSortBy('newest')} className="text-[10px] uppercase letter-spacing-wide text-left hover:text-accent-gold">Newest</button>
                  <button onClick={() => setSortBy('price-low')} className="text-[10px] uppercase letter-spacing-wide text-left hover:text-accent-gold">Price: Low to High</button>
                  <button onClick={() => setSortBy('price-high')} className="text-[10px] uppercase letter-spacing-wide text-left hover:text-accent-gold">Price: High to Low</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Category Sidebar/Overlay */}
        {isFilterOpen && (
          <div className="fixed inset-0 bg-black/50 z-[100] md:hidden">
            <div className="bg-white h-full w-full max-w-xs p-8 flex flex-col">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-xl font-serif">Categories</h2>
                <X className="w-5 h-5 cursor-pointer" onClick={() => setIsFilterOpen(false)} />
              </div>
              <div className="space-y-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                        setActiveCategory(cat);
                        setIsFilterOpen(false);
                    }}
                    className={cn(
                        "block text-xs uppercase letter-spacing-wide",
                        activeCategory === cat ? "font-bold" : "text-primary/60"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {loading ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="space-y-4 animate-pulse">
                        <div className="aspect-[3/4] bg-accent" />
                        <div className="h-2 w-1/2 bg-accent mx-auto" />
                        <div className="h-2 w-1/4 bg-accent mx-auto" />
                    </div>
                ))}
            </div>
        ) : (
            <>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
                    {products.map((product) => {
                        const data = product.data || product;
                        return (
                            <div key={product.id} className="group flex flex-col items-center">
                                <Link to={`/product/${data.slug}`} className="relative w-full aspect-[3/4] overflow-hidden bg-accent">
                                    <img
                                        data-strk-img-id={`shop-product-img-${product.id}`}
                                        data-strk-img={`[shop-product-title-${product.id}] gold jewelry editorial close up aesthetic`}
                                        data-strk-img-ratio="2x3"
                                        data-strk-img-width="600"
                                        src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=600&auto=format&fit=crop"
                                        alt={data.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                addToCart(product);
                                                toast.success(`${data.name} added to cart`);
                                            }}
                                            className="w-full bg-white text-primary py-3 text-[10px] uppercase letter-spacing-wide hover:bg-black hover:text-white transition-colors"
                                        >
                                            Quick Add
                                        </button>
                                    </div>
                                </Link>
                                <div className="mt-8 text-center space-y-2">
                                    <h3 id={`shop-product-title-${product.id}`} className="text-xs uppercase letter-spacing-wide font-medium">{data.name}</h3>
                                    <p className="font-serif italic text-primary/60">${data.price}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                {products.length === 0 && (
                    <div className="py-32 text-center">
                        <p className="font-serif italic text-xl opacity-50">No pieces found in this category.</p>
                        <button onClick={() => setActiveCategory('All')} className="mt-6 text-[10px] uppercase letter-spacing-wide underline">Browse All</button>
                    </div>
                )}
            </>
        )}
      </div>
    </div>
  );
};

export default Shop;
