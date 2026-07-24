import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '@/api/products';
import ProductCard from '@/components/shop/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
  const [sortBy, setSortBy] = useState('newest');
  const containerRef = useRef(null);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setActiveCategory(category);
    } else {
      setActiveCategory('All');
    }
  }, [searchParams]);

  useEffect(() => {
    if (!loading) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [loading]);

  const filteredProducts = products.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  ).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0; // Default newest (handled by fetch)
  });

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="pt-24 pb-24 min-h-screen bg-velmora-base">
      {/* Header */}
      <div className="px-6 max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-serif mb-4 uppercase tracking-[0.1em]">
          {activeCategory === 'All' ? 'The Collection' : activeCategory}
        </h1>
        <p className="text-velmora-gray text-sm md:text-base font-light max-w-2xl mx-auto italic">
          Curated pieces designed for the intentional woman. Modern heirlooms that bridge the gap between costume and fine jewelry.
        </p>
      </div>

      <div className="px-6 max-w-7xl mx-auto">
        {/* Filters & Sort Mobile Bar */}
        <div className="flex lg:hidden justify-between items-center mb-8 border-y border-border py-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="uppercase tracking-[0.2em] text-[10px] font-bold flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-background">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-left font-serif tracking-[0.2em]">FILTERS</SheetTitle>
              </SheetHeader>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-[10px] uppercase tracking-widest font-bold">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className={`text-xs uppercase tracking-widest px-4 py-2 border ${
                          activeCategory === cat ? 'bg-velmora-charcoal text-white border-velmora-charcoal' : 'border-border text-velmora-gray'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div className="relative group">
            <button className="uppercase tracking-[0.2em] text-[10px] font-bold flex items-center gap-2">
              Sort By <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar Desktop */}
          <aside className="hidden lg:block w-64 space-y-12 flex-shrink-0">
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-widest font-bold border-b border-border pb-4">Category</h3>
              <div className="flex flex-col gap-3">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`text-sm tracking-wide text-left hover:text-velmora-gold transition-colors ${
                      activeCategory === cat ? 'text-velmora-gold font-medium' : 'text-velmora-gray'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-widest font-bold border-b border-border pb-4">Sort By</h3>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Newest', value: 'newest' },
                  { label: 'Price: Low to High', value: 'price-asc' },
                  { label: 'Price: High to Low', value: 'price-desc' },
                ].map(sort => (
                  <button
                    key={sort.value}
                    onClick={() => setSortBy(sort.value)}
                    className={`text-sm tracking-wide text-left hover:text-velmora-gold transition-colors ${
                      sortBy === sort.value ? 'text-velmora-gold font-medium' : 'text-velmora-gray'
                    }`}
                  >
                    {sort.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 p-6 bg-velmora-sand/50 rounded-sm">
              <p className="text-[11px] uppercase tracking-widest font-bold mb-4">Sustainability</p>
              <p className="text-xs text-velmora-gray leading-relaxed mb-4">
                All Velmora pieces are shipped in plastic-free, recyclable packaging made from FSC-certified paper.
              </p>
              <button className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-velmora-charcoal/20 pb-0.5 hover:border-velmora-gold transition-colors">
                Learn More
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-8">
                {Array(6).fill(0).map((_, i) => (
                  <div key={i} className="space-y-4 animate-pulse">
                    <div className="aspect-[3/4] bg-velmora-sand" />
                    <div className="h-4 bg-velmora-sand w-2/3 mx-auto" />
                    <div className="h-4 bg-velmora-sand w-1/3 mx-auto" />
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="py-24 text-center space-y-4 border border-dashed border-border">
                <p className="font-serif text-xl tracking-widest uppercase">No products found</p>
                <p className="text-sm text-velmora-gray">Try adjusting your filters or search criteria.</p>
                <Button 
                  onClick={() => handleCategoryChange('All')}
                  variant="outline" 
                  className="rounded-none border-velmora-charcoal uppercase tracking-widest text-[10px]"
                >
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
