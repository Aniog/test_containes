import React, { useState, useEffect, useRef } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { ChevronDown, Filter, X } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCart } from '@/lib/cart-context';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { SEED_PRODUCTS } from '@/lib/mock-data';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'All';
  const sort = searchParams.get('sort') || 'featured';

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let query = client.from('Products').select('*');

        if (activeCategory !== 'All') {
          query = query.eq('category', activeCategory);
        }

        if (sort === 'price-low') {
          query = query.order('price', { ascending: true });
        } else if (sort === 'price-high') {
          query = query.order('price', { ascending: false });
        }

        const { data: response } = await query;
        if (response?.data?.list && response.data.list.length > 0) {
          setProducts(response.data.list);
        } else {
          // Fallback logic
          let filtered = [...SEED_PRODUCTS];
          if (activeCategory !== 'All') {
            filtered = filtered.filter(p => p.data.category === activeCategory);
          }
          if (sort === 'price-low') {
            filtered.sort((a, b) => a.data.price - b.data.price);
          } else if (sort === 'price-high') {
            filtered.sort((a, b) => b.data.price - a.data.price);
          }
          setProducts(filtered);
        }
      } catch (err) {
        let filtered = [...SEED_PRODUCTS];
        if (activeCategory !== 'All') {
          filtered = filtered.filter(p => p.data.category === activeCategory);
        }
        setProducts(filtered);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [activeCategory, sort]);

  useEffect(() => {
    if (products.length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [products]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Shop the Collection</h1>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Adorn yourself in timeless elegance.</p>
        </header>

        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12 py-6 border-y border-border">
          <div className="flex items-center gap-8 w-full md:w-auto">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium md:hidden"
            >
              <Filter size={16} /> Filters
            </button>
            <div className="hidden md:flex gap-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSearchParams({ category: cat, sort })}
                  className={cn(
                    "text-xs uppercase tracking-widest transition-opacity hover:opacity-100",
                    activeCategory === cat ? "border-b border-foreground pb-1 font-medium" : "text-muted-foreground"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Sort By</span>
            <select
              value={sort}
              onChange={(e) => setSearchParams({ category: activeCategory, sort: e.target.value })}
              className="bg-transparent text-xs uppercase tracking-widest focus:outline-none appearance-none cursor-pointer pr-4"
              style={{ backgroundImage: 'none' }}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Mobile Filter Overlay */}
        {showFilters && (
          <div className="fixed inset-0 bg-white z-[100] p-8 md:hidden">
            <div className="flex justify-between items-center mb-12">
               <h2 className="text-xl font-serif">Filters</h2>
               <button onClick={() => setShowFilters(false)}><X size={32} strokeWidth={1} /></button>
            </div>
            <div className="flex flex-col gap-6">
               <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">By Category</p>
               {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSearchParams({ category: cat, sort });
                      setShowFilters(false);
                    }}
                    className={cn(
                      "text-2xl font-serif text-left",
                      activeCategory === cat ? "text-primary italic" : "text-foreground"
                    )}
                  >
                    {cat}
                  </button>
               ))}
            </div>
          </div>
        )}

        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {loading ? (
             [...Array(8)].map((_, i) => (
               <div key={i} className="animate-pulse">
                 <div className="aspect-[3/4] bg-muted mb-4" />
                 <div className="h-4 bg-muted w-3/4 mb-2" />
                 <div className="h-4 bg-muted w-1/2" />
               </div>
             ))
          ) : (
            products.map((product) => (
              <ProductShopCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const ProductShopCard = ({ product }) => {
  const { addToCart } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-muted aspect-[3/4]">
        <img
          data-strk-img-id={`shop-img-${product.id}`}
          data-strk-img={`[shop-name-${product.id}] gold fine jewelry dark editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={product.data.images[0]}
          alt={product.data.name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
            hovered && product.data.images[1] ? "opacity-0" : "opacity-100"
          )}
        />
        {product.data.images[1] && (
          <img
            src={product.data.images[1]}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
              hovered ? "opacity-100" : "opacity-0"
            )}
            alt={`${product.data.name} alternate view`}
          />
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm py-3 text-[10px] uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Add to Bag
        </button>
      </Link>
      <div className="mt-4">
        <h3 id={`shop-name-${product.id}`} className="text-[10px] uppercase tracking-widest font-medium mb-1">{product.data.name}</h3>
        <p className="text-sm font-serif italic text-muted-foreground">${product.data.price}</p>
      </div>
    </div>
  );
};

export default Shop;
