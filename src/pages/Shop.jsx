import React, { useState, useEffect, useRef } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { fetchProducts } from '@/api/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { formatPrice } from '@/lib/utils';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';

const Shop = () => {
  const { category: categoryParam } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    let filtered = products;
    if (categoryParam) {
      filtered = products.filter(p => p.data.category.toLowerCase() === categoryParam.toLowerCase());
    }
    setFilteredProducts(filtered);
  }, [products, categoryParam]);

  useEffect(() => {
    if (filteredProducts.length > 0) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [filteredProducts]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];

  return (
    <div className="pt-32 pb-24 bg-parchment min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16 border-b border-stone-muted pb-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <nav className="flex gap-2 text-[10px] tracking-widest uppercase text-stone-400 mb-4">
              <Link to="/" className="hover:text-gold">Home</Link>
              <span>/</span>
              <span className="text-obsidian">{categoryParam || 'Shop All'}</span>
            </nav>
            <h1 className="text-5xl font-serif tracking-tight capitalize">
              {categoryParam ? `${categoryParam}` : 'The Collection'}
            </h1>
          </div>
          
          <div className="flex gap-4 items-center">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase border border-stone-muted px-6 py-3 hover:bg-white transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <div className="relative group">
              <button className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase border border-stone-muted px-6 py-3 hover:bg-white transition-colors">
                Sort By
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters - Sticky */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-32 space-y-12">
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 border-b border-stone-muted pb-2">Category</h3>
                <ul className="space-y-4">
                  {categories.map(cat => (
                    <li key={cat}>
                      <Link 
                        to={cat === 'All' ? '/shop' : `/shop/${cat.toLowerCase()}`}
                        className={`text-sm hover:text-gold transition-colors block ${
                          (cat === 'All' && !categoryParam) || (cat.toLowerCase() === categoryParam) 
                          ? 'text-gold font-medium' 
                          : 'text-stone-500 font-light'
                        }`}
                      >
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 border-b border-stone-muted pb-2">Material</h3>
                <div className="space-y-3">
                  {['18K Gold Plated', 'Sterling Silver'].map(material => (
                    <label key={material} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-stone-muted group-hover:border-gold transition-colors" />
                      <span className="text-sm font-light text-stone-500 group-hover:text-gold">{material}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div ref={containerRef} className="flex-1">
            {loading ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[3/4] bg-stone-muted mb-6" />
                    <div className="h-4 bg-stone-muted w-3/4 mx-auto mb-2" />
                    <div className="h-4 bg-stone-muted w-1/2 mx-auto" />
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-32 border border-dashed border-stone-muted">
                <p className="font-serif italic text-xl text-stone-400">No pieces found in this selection.</p>
                <Link to="/shop" className="text-xs font-bold tracking-widest uppercase mt-6 inline-block border-b border-obsidian pb-1">View All Jewelry</Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group relative">
                    <Link to={`/product/${product.data.slug}`} className="block overflow-hidden aspect-[3/4] bg-stone-muted relative">
                      <img
                        data-strk-img-id={`shop-prod-${product.id}`}
                        data-strk-img={`[shop-prod-name-${product.id}] jewelry editorial`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="700"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.data.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <div className="mt-8 text-center px-4">
                      <Link to={`/product/${product.data.slug}`}>
                        <h3 id={`shop-prod-name-${product.id}`} className="text-xs font-medium tracking-[0.2em] uppercase mb-2 group-hover:text-gold transition-colors">
                          {product.data.name}
                        </h3>
                      </Link>
                      <p className="font-serif text-stone-500">{formatPrice(product.data.price)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {showFilters && (
        <div className="fixed inset-0 z-[100] bg-white lg:hidden overflow-y-auto px-8 py-12">
          <button onClick={() => setShowFilters(false)} className="absolute top-8 right-8">
            <X className="w-8 h-8" />
          </button>
          <h2 className="text-3xl font-serif mb-12">Filters</h2>
          {/* Mobile Filter Content */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6">Category</h3>
              <ul className="space-y-6">
                {categories.map(cat => (
                  <li key={cat}>
                    <Link 
                      to={cat === 'All' ? '/shop' : `/shop/${cat.toLowerCase()}`}
                      className="text-xl font-light"
                      onClick={() => setShowFilters(false)}
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Add more mobile filters as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
