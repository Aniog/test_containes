import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, Check } from 'lucide-react';
import { seedProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const CollectionPage = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [sortOpen, setSortOpen] = useState(false);
    const [currentSort, setCurrentSort] = useState('featured');
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [category]);
    
    const [filters, setFilters] = useState({
        price: [],
        material: []
    });

    useEffect(() => {
        let filtered = [...seedProducts];
        
        // Category filter
        // Treat undefined category as 'all'
        const currentCategory = category || 'all'; 

        if (currentCategory !== 'all' && currentCategory !== 'bestsellers') {
            filtered = filtered.filter(p => p.category === currentCategory);
        } else if (currentCategory === 'bestsellers') {
            filtered = filtered.filter(p => p.bestseller);
        }

        // Apply sort
        if (currentSort === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (currentSort === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (currentSort === 'newest') {
            // Mock newest - just reverse array
            filtered.reverse();
        }

        setProducts(filtered);
    }, [category, currentSort, filters]);

    const sortOptions = [
        { id: 'featured', label: 'Featured' },
        { id: 'newest', label: 'Newest Arrivals' },
        { id: 'price-low', label: 'Price: Low to High' },
        { id: 'price-high', label: 'Price: High to Low' },
    ];

    const formatCategoryTitle = (cat) => {
        if (!cat || cat === 'all') return 'All Jewelry';
        if (cat === 'bestsellers') return 'Bestsellers';
        return cat.charAt(0).toUpperCase() + cat.slice(1);
    };

    return (
        <div className="bg-background min-h-screen pb-24">
            {/* Header Area */}
            <div className="bg-velmora-stone py-16 md:py-24 border-b border-border/50 text-center px-4">
                <nav className="text-xs tracking-widest uppercase text-velmora-charcoal/50 mb-4 flex justify-center space-x-2">
                    <Link to="/" className="hover:text-velmora-charcoal">Home</Link>
                    <span>/</span>
                    <span>{formatCategoryTitle(category || 'all')}</span>
                </nav>
                <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal tracking-wide mb-4">
                    {formatCategoryTitle(category || 'all')}
                </h1>
                <p className="text-velmora-charcoal/70 max-w-lg mx-auto">
                    Explore our collection of carefully curated demi-fine pieces designed for your everyday editorial.
                </p>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl pt-8">
                {/* Controls Bar */}
                <div className="flex justify-between items-center pb-8 border-b border-border/50 mb-8 relative">
                    <button className="flex items-center space-x-2 text-sm uppercase tracking-widest text-velmora-charcoal hover:opacity-70 transition-opacity">
                        <SlidersHorizontal size={16} />
                        <span>Filter</span>
                    </button>

                    <div className="text-sm tracking-wide text-velmora-charcoal/60 hidden md:block">
                        {products.length} Products
                    </div>

                    <div className="relative">
                        <button 
                            className="flex items-center space-x-2 text-sm uppercase tracking-widest text-velmora-charcoal hover:opacity-70 transition-opacity"
                            onClick={() => setSortOpen(!sortOpen)}
                        >
                            <span>Sort By</span>
                            <ChevronDown size={16} className={`transition-transform duration-300 ${sortOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Sort Dropdown */}
                        {sortOpen && (
                            <div className="absolute right-0 top-full mt-2 w-56 bg-background border border-border/50 shadow-lg z-20 py-2">
                                {sortOptions.map(option => (
                                    <button
                                        key={option.id}
                                        onClick={() => {
                                            setCurrentSort(option.id);
                                            setSortOpen(false);
                                        }}
                                        className="w-full flex items-center justify-between px-4 py-2 text-sm text-left hover:bg-velmora-stone transition-colors text-velmora-charcoal"
                                    >
                                        <span className={`${currentSort === option.id ? 'font-medium' : ''}`}>
                                            {option.label}
                                        </span>
                                        {currentSort === option.id && <Check size={14} className="text-velmora-gold" />}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Product Grid */}
                {products.length === 0 ? (
                    <div className="text-center py-20 text-velmora-charcoal/60">
                        No products found in this category.
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 lg:gap-x-8 lg:gap-y-16">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CollectionPage;