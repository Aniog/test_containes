import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { getProductsByCategory, getProducts } from '@/lib/data';
import { ProductCard } from '../components/product/ProductCard';

export function Collection() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [activeMaterial, setActiveMaterial] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  useEffect(() => {
    let result = categoryId === 'all' || !categoryId 
      ? getProducts() 
      : getProductsByCategory(categoryId);

    if (activeMaterial !== 'all') {
      result = result.filter(p => p.material.toLowerCase().includes(activeMaterial.toLowerCase()));
    }

    // Sort
    let sorted = [...result];
    if (sortBy === 'price-low') sorted.sort((a,b) => a.price - b.price);
    if (sortBy === 'price-high') sorted.sort((a,b) => b.price - a.price);

    setProducts(sorted);
  }, [categoryId, sortBy, activeMaterial]);

  const displayTitle = categoryId === 'all' || !categoryId ? 'All Jewelry' : categoryId;

  return (
    <div className="bg-background pt-32 pb-24">
      {/* Header */}
      <div className="container mx-auto px-4 md:px-8 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-4">{displayTitle}</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">Explore our curated collection of demi-fine jewelry. Designed to be layered, loved, and lived in.</p>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-y border-border py-4 mb-8 gap-4">
          <button 
            className="flex items-center gap-2 uppercase tracking-widest text-sm font-medium text-foreground hover:text-primary transition-colors"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters {activeMaterial !== 'all' && '(1)'}
          </button>
          
          <div className="flex items-center gap-6 w-full md:w-auto">
            <span className="text-sm text-muted-foreground hidden md:inline">{products.length} products</span>
            
            <div className="relative group ml-auto md:ml-0">
              <button className="flex items-center gap-2 uppercase tracking-widest text-sm font-medium text-foreground">
                Sort: {sortBy === 'featured' ? 'Featured' : sortBy === 'price-low' ? 'Price: Low to High' : 'Price: High to Low'}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                <button onClick={() => setSortBy('featured')} className="block w-full text-left px-4 py-3 text-sm hover:bg-muted transition-colors">Featured</button>
                <button onClick={() => setSortBy('price-low')} className="block w-full text-left px-4 py-3 text-sm hover:bg-muted transition-colors">Price: Low to High</button>
                <button onClick={() => setSortBy('price-high')} className="block w-full text-left px-4 py-3 text-sm hover:bg-muted transition-colors">Price: High to Low</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`w-full md:w-64 flex-shrink-0 space-y-8 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div>
              <h3 className="uppercase tracking-widest text-sm font-semibold mb-4 text-foreground border-b border-border pb-2">Category</h3>
              <ul className="space-y-3">
                <li><Link to="/collections/all" className={`text-sm ${categoryId==='all'||!categoryId ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}>All Jewelry</Link></li>
                <li><Link to="/collections/earrings" className={`text-sm ${categoryId==='earrings' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}>Earrings</Link></li>
                <li><Link to="/collections/necklaces" className={`text-sm ${categoryId==='necklaces' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}>Necklaces</Link></li>
                <li><Link to="/collections/huggies" className={`text-sm ${categoryId==='huggies' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}>Huggies</Link></li>
                <li><Link to="/collections/sets" className={`text-sm ${categoryId==='sets' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}>Sets</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="uppercase tracking-widest text-sm font-semibold mb-4 text-foreground border-b border-border pb-2">Material</h3>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => setActiveMaterial('all')} className={`text-sm ${activeMaterial==='all' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}>All Materials</button>
                </li>
                <li>
                  <button onClick={() => setActiveMaterial('gold')} className={`text-sm ${activeMaterial==='gold' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}>18K Gold Plated</button>
                </li>
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {products.length === 0 ? (
              <div className="text-center py-24 text-muted-foreground">
                <p>No products found fitting these criteria.</p>
                <button 
                  onClick={() => { setActiveMaterial('all'); setSortBy('featured'); }}
                  className="mt-4 border-b border-muted-foreground pb-1 hover:text-foreground transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
                {products.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
