import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '../components/home/Bestsellers'; // Reusing seed data

const Collections = () => {
    const { category } = useParams();
    const containerRef = useRef(null);
    const [sortBy, setSortBy] = useState('featured');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Expand products array a bit for a better grid in a real app, 
    // here we just use the seed data and duplicate it to show grid layout
    const displayProducts = [...products, ...products].map((p, i) => ({...p, uniqueId: `${p.id}-${i}`}));

    let title = "All Jewelry";
    if (category) {
        title = category.charAt(0).toUpperCase() + category.slice(1);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, [category]);

    return (
        <div className="pt-32 pb-24 bg-background min-h-screen" ref={containerRef}>
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest mb-6">{title}</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Discover our curated collection of demi-fine pieces, designed to be layered, loved, and lived in.
                    </p>
                </div>

                {/* Toolbar */}
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-border pb-6 mb-8 gap-4">
                    <button 
                        className="flex items-center space-x-2 text-sm uppercase tracking-widest text-primary hover:text-velmora-gold transition-colors"
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                        <Filter size={16} />
                        <span>Filter</span>
                    </button>

                    <div className="text-sm text-muted-foreground">
                        {displayProducts.length} Products
                    </div>

                    <div className="flex items-center space-x-2 text-sm uppercase tracking-widest relative group">
                        <span className="text-muted-foreground text-xs mr-2">Sort By</span>
                        <div className="flex items-center space-x-1 cursor-pointer hover:text-velmora-gold transition-colors">
                            <span>{sortBy === 'featured' ? 'Featured' : sortBy === 'low-high' ? 'Price: Low-High' : 'Price: High-Low'}</span>
                            <ChevronDown size={14} />
                        </div>
                        {/* Simple Dropdown placeholder */}
                        <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 shadow-sm">
                            <button className="block w-full text-left px-4 py-3 hover:bg-velmora-light/50 transition-colors" onClick={() => setSortBy('featured')}>Featured</button>
                            <button className="block w-full text-left px-4 py-3 hover:bg-velmora-light/50 transition-colors" onClick={() => setSortBy('low-high')}>Price: Low to High</button>
                            <button className="block w-full text-left px-4 py-3 hover:bg-velmora-light/50 transition-colors" onClick={() => setSortBy('high-low')}>Price: High to Low</button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-start">
                    
                    {/* Sidebar Filters */}
                    <div className={`w-full md:w-64 flex-shrink-0 md:mr-12 mb-8 md:mb-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Category</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li><Link to="/collections/all" className={`hover:text-primary transition-colors ${!category || category === 'all' ? 'text-primary font-medium' : ''}`}>All Jewelry</Link></li>
                                    <li><Link to="/collections/earrings" className={`hover:text-primary transition-colors ${category === 'earrings' ? 'text-primary font-medium' : ''}`}>Earrings</Link></li>
                                    <li><Link to="/collections/necklaces" className={`hover:text-primary transition-colors ${category === 'necklaces' ? 'text-primary font-medium' : ''}`}>Necklaces</Link></li>
                                    <li><Link to="/collections/huggies" className={`hover:text-primary transition-colors ${category === 'huggies' ? 'text-primary font-medium' : ''}`}>Huggies</Link></li>
                                    <li><Link to="/collections/rings" className={`hover:text-primary transition-colors ${category === 'rings' ? 'text-primary font-medium' : ''}`}>Rings</Link></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Material</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-center space-x-3">
                                        <input type="checkbox" id="mat-gold" className="accent-velmora-gold border-border rounded-none" />
                                        <label htmlFor="mat-gold" className="cursor-pointer">18k Gold Vermeil</label>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <input type="checkbox" id="mat-silver" className="accent-velmora-gold border-border rounded-none" />
                                        <label htmlFor="mat-silver" className="cursor-pointer">Sterling Silver</label>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Price</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-center space-x-3">
                                        <input type="checkbox" id="price-1" className="accent-velmora-gold border-border rounded-none" />
                                        <label htmlFor="price-1" className="cursor-pointer">Under $50</label>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <input type="checkbox" id="price-2" className="accent-velmora-gold border-border rounded-none" />
                                        <label htmlFor="price-2" className="cursor-pointer">$50 - $100</label>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <input type="checkbox" id="price-3" className="accent-velmora-gold border-border rounded-none" />
                                        <label htmlFor="price-3" className="cursor-pointer">Over $100</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-grow">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8">
                            {displayProducts.map((product) => (
                                <div key={product.uniqueId} className="group flex flex-col text-center">
                                    <Link to={`/products/${product.id}`} className="block relative aspect-[3/4] overflow-hidden mb-4 bg-velmora-light">
                                        <img
                                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                            alt={product.name}
                                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                                            data-strk-img-id={`grid-img-1-${product.uniqueId}`}
                                            data-strk-img={`[grid-name-${product.uniqueId}] elegant`}
                                            data-strk-img-ratio="3x4"
                                            data-strk-img-width="400"
                                        />
                                        <img
                                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                            alt={`${product.name} alternate`}
                                            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                            data-strk-img-id={`grid-img-2-${product.uniqueId}`}
                                            data-strk-img={`[grid-name-${product.uniqueId}] model lifestyle`}
                                            data-strk-img-ratio="3x4"
                                            data-strk-img-width="400"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <Button 
                                              className="w-full uppercase tracking-wider font-serif rounded-none bg-white text-primary hover:bg-velmora-gold hover:text-white border-none shadow-sm text-xs py-2 h-auto"
                                              onClick={(e) => {
                                                  e.preventDefault(); // Prevent Link navigation
                                                  import('@/store/useCart').then(({ addToCart }) => {
                                                      addToCart(product, 1, 'gold');
                                                  });
                                              }}
                                            >
                                                Add
                                            </Button>
                                        </div>
                                    </Link>
                                    <Link to={`/products/${product.id}`} className="hover:text-velmora-gold transition-colors">
                                        <h3 id={`grid-name-${product.uniqueId}`} className="font-serif uppercase tracking-widest text-sm mb-2">
                                            {product.name}
                                        </h3>
                                    </Link>
                                    <p className="text-muted-foreground">${product.price}</p>
                                </div>
                            ))}
                        </div>

                        {/* Pagination (Visual only) */}
                        <div className="flex justify-center items-center space-x-8 mt-24">
                             <button className="text-muted-foreground hover:text-primary transition-colors disabled:opacity-50" disabled>Previous</button>
                             <div className="flex space-x-4 font-serif">
                                 <span className="text-primary border-b border-primary">1</span>
                                 <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">2</span>
                             </div>
                             <button className="text-primary hover:text-velmora-gold transition-colors">Next</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Collections;