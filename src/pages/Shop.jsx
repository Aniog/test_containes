import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/plugin/strk-img-config.json';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialSort = searchParams.get('sort') || 'featured';
  
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState(initialSort);
  const [material, setMaterial] = useState('All');
  const containerRef = useRef(null);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (category !== 'All') params.set('category', category);
    if (sort !== 'featured') params.set('sort', sort);
    setSearchParams(params);
  }, [category, sort, setSearchParams]);

  // Sync state if URL changes externally
  useEffect(() => {
    const urlCategory = searchParams.get('category') || 'All';
    if (urlCategory !== category) setCategory(urlCategory);
  }, [searchParams]);

  // Rerun image loader when filtered products change
  useEffect(() => {
    if (containerRef.current) {
        const frameId = window.requestAnimationFrame(() => {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
    }
  }, [category, sort, material]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', '18K Gold Plated'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (material !== 'All') {
      result = result.filter(p => p.material === material);
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // 'featured' - maintain original order
        break;
    }

    return result;
  }, [category, material, sort]);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-24 mt-12" ref={containerRef}>
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-serif text-primary uppercase tracking-widest text-center">
          {category === 'All' ? 'The Collection' : category}
        </h1>
        <p className="text-center text-muted-foreground mt-4 font-light">
          Discover our curated selection of demi-fine jewelry.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-32 space-y-8">
            {/* Category Filter */}
            <div>
              <h3 className="font-serif uppercase tracking-widest text-sm mb-4 border-b border-border pb-2">Category</h3>
              <ul className="space-y-3">
                {categories.map(c => (
                  <li key={c}>
                    <button
                      onClick={() => setCategory(c)}
                      className={`text-sm font-medium transition-colors ${
                        category.toLowerCase() === c.toLowerCase() 
                          ? 'text-primary' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Material Filter */}
            <div>
              <h3 className="font-serif uppercase tracking-widest text-sm mb-4 border-b border-border pb-2">Material</h3>
              <ul className="space-y-3">
                {materials.map(m => (
                  <li key={m}>
                    <button
                      onClick={() => setMaterial(m)}
                      className={`text-sm font-medium transition-colors ${
                        material === m 
                          ? 'text-primary' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {m}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Top Controls */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
            <p className="text-sm text-muted-foreground font-medium">
              {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm uppercase tracking-widest font-medium sr-only">Sort by</label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-sm bg-transparent border-none focus:ring-0 text-foreground font-medium uppercase tracking-widest cursor-pointer py-1"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Alphabetical</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="text-muted-foreground font-serif text-xl">No products match your criteria.</p>
              <button 
                onClick={() => { setCategory('All'); setMaterial('All'); }}
                className="mt-6 uppercase tracking-widest text-sm font-medium border-b border-primary text-primary pb-1"
              >
                Clear all filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}