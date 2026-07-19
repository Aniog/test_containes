import React, { useState, useEffect, useRef } from 'react';
import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { ChevronDown, Filter, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [category, setCategory] = useState('All');
    const [sortBy, setSortBy] = useState('Featured');
    const [priceRange, setPriceRange] = useState(120);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const containerRef = useRef(null);

    const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Collections'];

    useEffect(() => {
        let result = products;
        if (category !== 'All') {
            result = result.filter(p => p.category === category);
        }
        result = result.filter(p => p.price <= priceRange);
        
        if (sortBy === 'Price: Low to High') {
            result = [...result].sort((a, b) => a.price - b.price);
        } else if (sortBy === 'Price: High to Low') {
            result = [...result].sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(result);
    }, [category, priceRange, sortBy]);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, [filteredProducts]);

    return (
        <div ref={containerRef} className="pt-32 pb-24 px-4 md:px-10 max-w-7xl mx-auto min-h-screen">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-[0.2em]">Shop All</h1>
                <p className="text-velmora-stone text-xs uppercase tracking-widest">Discover our latest additions and timeless classics.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Filter - Desktop */}
                <aside className="hidden md:block w-64 flex-shrink-0 space-y-12">
                    <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-6">Category</h4>
                        <div className="space-y-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setCategory(cat)}
                                    className={cn(
                                        "block text-xs uppercase tracking-widest transition-colors",
                                        category === cat ? "text-velmora-black font-semibold" : "text-velmora-stone hover:text-velmora-black"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-6">Price Drop</h4>
                        <input
                            type="range"
                            min="30"
                            max="120"
                            value={priceRange}
                            onChange={(e) => setPriceRange(parseInt(e.target.value))}
                            className="w-full h-1 bg-stone-200 accent-velmora-black appearance-none"
                        />
                        <div className="flex justify-between mt-4 text-[10px] uppercase tracking-widest text-velmora-stone font-medium">
                            <span>$30</span>
                            <span>Under ${priceRange}</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-semibold mb-6">Material</h4>
                        <div className="space-y-3">
                            <label className="flex items-center gap-3 text-xs uppercase tracking-widest text-velmora-stone cursor-pointer">
                                <input type="checkbox" defaultChecked className="accent-velmora-black" />
                                18K Gold Plated
                            </label>
                            <label className="flex items-center gap-3 text-xs uppercase tracking-widest text-velmora-stone cursor-pointer">
                                <input type="checkbox" className="accent-velmora-black" />
                                Sterling Silver
                            </label>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1">
                    {/* Mobile Controls */}
                    <div className="flex md:hidden justify-between items-center mb-8 pb-4 border-b border-stone-100">
                        <button
                            onClick={() => setIsFilterOpen(true)}
                            className="flex items-center gap-2 text-xs uppercase tracking-widest"
                        >
                            <Filter size={16} /> Filter
                        </button>
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest">
                            Sort <ChevronDown size={14} />
                        </div>
                    </div>

                    {/* Sorting - Desktop */}
                    <div className="hidden md:flex justify-end items-center mb-12 gap-8">
                        <span className="text-[10px] uppercase tracking-widest text-velmora-stone">{filteredProducts.length} Products</span>
                        <div className="relative group">
                            <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-semibold pb-1 border-b border-velmora-black">
                                Sort: {sortBy} <ChevronDown size={12} />
                            </button>
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-xl border border-stone-100 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                                {['Featured', 'Price: Low to High', 'Price: High to Low', 'Top Rated'].map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => setSortBy(opt)}
                                        className="block w-full text-left px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-velmora-sand transition-colors"
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="py-24 text-center">
                            <h3 className="font-serif text-xl mb-4">No pieces found</h3>
                            <button
                                onClick={() => { setCategory('All'); setPriceRange(120); }}
                                className="text-xs uppercase tracking-widest border-b border-velmora-black pb-1"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Filter Overlay */}
            <div className={cn(
                "fixed inset-0 bg-white z-[100] transition-transform duration-500 md:hidden p-8",
                isFilterOpen ? "translate-x-0" : "translate-x-full"
            )}>
                 <div className="flex justify-between items-center mb-12">
                     <h2 className="text-xl font-serif tracking-widest uppercase">Filters</h2>
                     <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
                 </div>
                 
                 <div className="space-y-12">
                    <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6">Category</h4>
                        <div className="flex flex-wrap gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setCategory(cat)}
                                    className={cn(
                                        "px-4 py-2 text-[10px] uppercase tracking-widest border transition-colors",
                                        category === cat ? "bg-velmora-black text-white border-velmora-black" : "bg-white text-velmora-stone border-stone-200"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6">Price Range</h4>
                        <input
                            type="range"
                            min="30"
                            max="120"
                            value={priceRange}
                            onChange={(e) => setPriceRange(parseInt(e.target.value))}
                            className="w-full h-1 bg-stone-200 accent-velmora-black appearance-none"
                        />
                         <div className="flex justify-between mt-4 text-[10px] uppercase tracking-widest text-velmora-stone font-medium">
                            <span>$30</span>
                            <span>Under ${priceRange}</span>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsFilterOpen(false)}
                        className="w-full bg-velmora-black text-white py-5 text-xs uppercase tracking-widest font-semibold"
                    >
                        Apply Filters
                    </button>
                 </div>
            </div>
        </div>
    );
};

export default Shop;
