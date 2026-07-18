import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  ChevronDown,
  Filter,
  X,
  SlidersHorizontal
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category') || 'All';
  const [sortBy, setSortBy] = useState('Featured');
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const containerRef = useRef(null);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['18k Gold Plated', 'Silver Tone', 'Rose Gold'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS
      .filter(p => {
        const matchesCategory = categoryFilter === 'All' || p.category === categoryFilter;
        const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
        const matchesMaterial = selectedMaterials.length === 0 || 
          (p.materials && selectedMaterials.some(m => p.materials.includes(m)));
        return matchesCategory && matchesPrice && matchesMaterial;
      })
      .sort((a, b) => {
        if (sortBy === 'Price: Low to High') return a.price - b.price;
        if (sortBy === 'Price: High to Low') return b.price - a.price;
        return 0;
      });
  }, [categoryFilter, sortBy, priceRange, selectedMaterials]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts, categoryFilter]);

  const toggleMaterial = (m) => {
    setSelectedMaterials(prev =>
      prev.includes(m) ? prev.filter(item => item !== m) : [...prev, m]
    );
  };

  return (
    <div className="pt-24 lg:pt-32 pb-24 bg-white min-h-screen" ref={containerRef}>
      <div className="px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 px-6">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-widest">
            {categoryFilter === 'All' ? 'Fine Jewelry' : categoryFilter}
          </h1>
          <p className="text-stone-500 text-sm max-w-xl mx-auto leading-relaxed">
            Elevated essentials for every occasion. Discover our range of responsibly crafted demi-fine jewelry.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center mb-12 border-y border-stone-100 py-6 sticky top-[72px] bg-white/80 backdrop-blur-md z-30">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:opacity-70 transition-opacity">
                <SlidersHorizontal className="w-4 h-4" />
                Filter
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="mb-8">
                  <SheetTitle className="text-2xl font-serif">Filters</SheetTitle>
                </SheetHeader>
                <div className="space-y-12">
                  {/* Categories */}
                  <div>
                    <h3 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-stone-400">Categories</h3>
                    <div className="space-y-4 text-sm">
                      {categories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => setSearchParams({ category: cat })}
                          className={`block w-full text-left transition-colors ${categoryFilter === cat ? 'font-bold text-primary' : 'text-stone-500 hover:text-stone-900'}`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Price Range</h3>
                      <span className="text-xs text-stone-500 tabular-nums">${priceRange[0]} - ${priceRange[1]}</span>
                    </div>
                    <Slider
                      defaultValue={[0, 150]}
                      max={150}
                      step={1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-4"
                    />
                  </div>

                  {/* Material */}
                  <div>
                    <h3 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-stone-400">Material</h3>
                    <div className="space-y-4">
                      {materials.map(m => (
                        <div key={m} className="flex items-center gap-3">
                          <Checkbox
                            id={m}
                            checked={selectedMaterials.includes(m)}
                            onCheckedChange={() => toggleMaterial(m)}
                          />
                          <label htmlFor={m} className="text-sm text-stone-500 cursor-pointer select-none">
                            {m}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <button
                    onClick={() => {
                      setSearchParams({});
                      setPriceRange([0, 150]);
                      setSelectedMaterials([]);
                    }}
                    className="w-full border border-stone-200 py-4 text-xs uppercase tracking-widest font-bold hover:bg-stone-50 transition-colors"
                  >
                    Clear All
                  </button>
                </div>
              </SheetContent>
            </Sheet>

            <div className="hidden lg:flex gap-6 text-[10px] uppercase tracking-widest font-bold text-stone-400">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSearchParams({ category: cat })}
                  className={`hover:text-primary transition-colors ${categoryFilter === cat ? 'text-primary' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest hidden sm:inline">
              {filteredProducts.length} Items
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:opacity-70 transition-opacity">
                Sort: {sortBy}
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-none min-w-[200px]">
                {['Featured', 'Newest', 'Price: Low to High', 'Price: High to Low'].map(option => (
                  <DropdownMenuItem
                    key={option}
                    className="text-xs uppercase tracking-widest py-3 cursor-pointer"
                    onClick={() => setSortBy(option)}
                  >
                    {option}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-stone-400 font-serif italic text-xl mb-4">No pieces found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchParams({});
                setPriceRange([0, 150]);
                setSelectedMaterials([]);
              }}
              className="text-xs uppercase tracking-widest font-bold border-b border-primary pb-1"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
