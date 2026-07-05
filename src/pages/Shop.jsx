import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import ProductCard from '@/components/home/Bestsellers'; // Import just the card component logic later, for now we re-implement card here for consistency or fix export

// Re-defining internal card for PDP compatibility and avoid circularity
const ProductGridCard = ({ product }) => {
  const { name, price, images, slug } = product.data || product;
  const productId = product.id;

  return (
    <Link to={`/product/${slug}`} className="group block">
      <div className="relative overflow-hidden aspect-[4/5] bg-secondary mb-4">
        <img
          data-strk-img-id={`shop-img-${productId}`}
          data-strk-img={`[shop-name-${productId}] jewelry editorial`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
          alt={name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="text-center space-y-1">
        <h3 id={`shop-name-${productId}`} className="product-name text-xs tracking-[0.2em]">{name}</h3>
        <p className="text-sm font-light text-muted-foreground">${price}</p>
      </div>
    </Link>
  );
};

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  const categoryFilter = searchParams.get('category') || 'All';
  const sortFilter = searchParams.get('sort') || 'newest';

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let query = client.from('Products').select('*');
        if (categoryFilter !== 'All') {
          query = query.eq('category', categoryFilter);
        }
        
        const { data: response } = await query;
        if (response?.success) {
          let list = response.data.list;
          
          // Apply sorting client-side
          if (sortFilter === 'price-low') {
            list = list.sort((a, b) => a.data.price - b.data.price);
          } else if (sortFilter === 'price-high') {
            list = list.sort((a, b) => b.data.price - a.data.price);
          }
          
          setProducts(list);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryFilter, sortFilter]);

  useEffect(() => {
    if (products.length > 0) {
      window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
    }
  }, [products]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];

  return (
    <div className="pt-32 pb-24 border-t border-border min-h-screen">
      <div className="max-w-7xl mx-auto px-6" ref={containerRef}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif">
              {categoryFilter === 'All' ? 'The Collection' : categoryFilter}
            </h1>
            <p className="text-muted-foreground font-light italic">
              Carefully curated pieces designed for everyday elegance.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {/* Desktop Filters */}
            <div className="hidden md:flex items-center space-x-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSearchParams({ category: cat, sort: sortFilter })}
                  className={cn(
                    "text-[10px] tracking-widest uppercase font-bold transition-colors pb-1 border-b",
                    categoryFilter === cat ? "text-primary border-primary" : "text-muted-foreground border-transparent hover:text-accent"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative flex items-center group">
              <span className="text-[10px] tracking-widest uppercase font-bold text-muted-foreground mr-2">Sort by:</span>
              <select 
                value={sortFilter}
                onChange={(e) => setSearchParams({ category: categoryFilter, sort: e.target.value })}
                className="bg-transparent text-[10px] tracking-widest uppercase font-bold border-none focus:ring-0 cursor-pointer text-primary"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-16">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="aspect-[4/5] bg-secondary" />
                <div className="h-4 bg-secondary w-2/3 mx-auto" />
                <div className="h-4 bg-secondary w-1/4 mx-auto" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-16">
            {products.map((product) => (
              <ProductGridCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {!loading && products.length === 0 && (
          <div className="py-24 text-center space-y-6">
            <p className="font-serif italic text-2xl">No pieces found in this category.</p>
            <Button variant="outline" onClick={() => setSearchParams({ category: 'All' })}>
              View All Collection
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
