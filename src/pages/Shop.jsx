import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { seedProducts } from './Home';
import { useCartStore } from '../store/cartStore';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductCard = ({ product }) => {
  const addItem = useCartStore(state => state.addItem);
  
  const handleQuickAdd = (e) => {
    e.preventDefault(); 
    addItem({ 
      id: product.id, 
      name: product.name, 
      price: product.price, 
      quantity: 1, 
      image: "",
      imgId1: product.imgId1,
      variant: 'Gold'
    });
  };

  return (
    <Link to={`/product/${product.id}`} className="group flex flex-col group">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId1}`}
          data-strk-img={`[shop-product-name-${product.id}] warm gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          data-strk-img-id={`shop-${product.imgId2}`}
          data-strk-img={`[shop-product-name-${product.id}] worn by model close up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={handleQuickAdd}
            className="w-full bg-background/90 backdrop-blur text-foreground uppercase tracking-widest text-xs py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <h3 id={`shop-product-name-${product.id}`} className="font-serif uppercase tracking-widest text-sm mb-1">{product.name}</h3>
        <p className="text-sm mt-auto">${product.price}</p>
      </div>
    </Link>
  );
};

const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryQuery = searchParams.get('category') || 'All';
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const containerRef = useRef(null);
    
    // Sort states
    const [sortBy, setSortBy] = useState('featured');
    
    useEffect(() => {
       const frameId = window.requestAnimationFrame(() => {
          if (containerRef.current) {
              ImageHelper.loadImages(strkImgConfig, containerRef.current);
          }
       });
       return () => window.cancelAnimationFrame(frameId);
    }, [categoryQuery, sortBy]);
    
    const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
    
    let filteredProducts = seedProducts;
    if (categoryQuery !== 'All') {
        filteredProducts = seedProducts.filter(p => p.category.toLowerCase() === categoryQuery.toLowerCase());
    }
    
    if (sortBy === 'price-low') {
        filteredProducts.sort((a,b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
         filteredProducts.sort((a,b) => b.price - a.price);
    }

    const setCategory = (cat) => {
        if (cat === 'All') {
            searchParams.delete('category');
        } else {
            searchParams.set('category', cat.toLowerCase());
        }
        setSearchParams(searchParams);
        setIsFilterOpen(false);
    };

    return (
        <div className="pt-24 min-h-screen bg-background pb-24" ref={containerRef}>
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="py-12 border-b border-border flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div>
                        <h1 className="font-serif text-4xl md:text-5xl capitalize">{categoryQuery === 'All' ? 'All Jewelry' : categoryQuery}</h1>
                        <p className="text-muted-foreground mt-4 max-w-xl">
                            Explore our curated collection of demi-fine pieces, crafted to bring quiet luxury to your every day. 
                        </p>
                    </div>
                    <div className="hidden md:flex items-center gap-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                        <span>Sort By:</span>
                        <select 
                            value={sortBy} 
                            onChange={e => setSortBy(e.target.value)}
                            className="bg-transparent border-none outline-none cursor-pointer focus:ring-0 text-foreground"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Mobile Filter Button */}
                    <div className="md:hidden flex justify-between items-center border-b border-border pb-4">
                        <button 
                            onClick={() => setIsFilterOpen(true)}
                            className="flex items-center gap-2 uppercase tracking-widest text-sm font-medium"
                        >
                            <Filter className="w-4 h-4" /> Filters
                        </button>
                        <select 
                            value={sortBy} 
                            onChange={e => setSortBy(e.target.value)}
                            className="bg-transparent border-none outline-none font-medium uppercase tracking-widest text-sm text-foreground focus:ring-0"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Low-High</option>
                            <option value="price-high">High-Low</option>
                        </select>
                    </div>

                    {/* Sidebar Desktop */}
                    <aside className="hidden md:block w-64 shrink-0 pr-8">
                        <div className="sticky top-32">
                            <h3 className="font-serif text-xl border-b border-border pb-4 mb-6">Categories</h3>
                            <ul className="space-y-4">
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <button 
                                            onClick={() => setCategory(cat)}
                                            className={`text-sm uppercase tracking-widest transition-colors ${
                                                categoryQuery.toLowerCase() === cat.toLowerCase() 
                                                ? 'text-foreground font-semibold' 
                                                : 'text-muted-foreground hover:text-foreground'
                                            }`}
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            
                            <h3 className="font-serif text-xl border-b border-border pb-4 mb-6 mt-12">Material</h3>
                            <ul className="space-y-4">
                                <li>
                                    <label className="flex items-center space-x-3 cursor-pointer group">
                                        <input type="checkbox" className="form-checkbox text-primary border-primary rounded-none focus:ring-0 focus:ring-offset-0" defaultChecked/>
                                        <span className="text-sm uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">18k Gold Vermeil</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="flex items-center space-x-3 cursor-pointer group">
                                        <input type="checkbox" className="form-checkbox text-primary border-primary rounded-none focus:ring-0 focus:ring-offset-0" />
                                        <span className="text-sm uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">Sterling Silver</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    {/* Mobile Filters Drawer */}
                    <div className={`fixed inset-0 bg-background z-50 transform transition-transform duration-300 md:hidden ${isFilterOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                         <div className="px-6 py-6 border-b border-border justify-between flex items-center">
                             <h2 className="font-serif text-2xl">Filters</h2>
                             <button onClick={() => setIsFilterOpen(false)}><X/></button>
                         </div>
                         <div className="p-6">
                            <h3 className="font-serif text-xl mb-6">Categories</h3>
                            <ul className="space-y-6">
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <button 
                                            onClick={() => setCategory(cat)}
                                            className={`text-sm uppercase tracking-widest ${
                                                categoryQuery.toLowerCase() === cat.toLowerCase() 
                                                ? 'text-foreground font-semibold' 
                                                : 'text-muted-foreground'
                                            }`}
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                         </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                        {filteredProducts.length === 0 && (
                            <div className="py-24 text-center">
                                <p className="text-muted-foreground mb-4">No products found in this category.</p>
                                <button onClick={() => setCategory('All')} className="text-sm font-medium uppercase tracking-widest border-b border-foreground">Clear Filters</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;