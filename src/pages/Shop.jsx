import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const productsData = [
  { id: '1', name: 'VIVID AURA JEWELS', price: 42, type: 'Ear Cuff', category: 'earrings', material: 'Gold' },
  { id: '2', name: 'MAJESTIC FLORA NECTAR', price: 68, type: 'Necklace', category: 'necklaces', material: 'Gold' },
  { id: '3', name: 'GOLDEN SPHERE HUGGIES', price: 38, type: 'Huggies', category: 'huggies', material: 'Gold' },
  { id: '4', name: 'AMBER LACE EARRINGS', price: 54, type: 'Earrings', category: 'earrings', material: 'Gold' },
  { id: '5', name: 'ROYAL HEIRLOOM SET', price: 95, type: 'Set', category: 'sets', material: 'Gold' },
  { id: '6', name: 'LUMINA DROP EARRINGS', price: 60, type: 'Earrings', category: 'earrings', material: 'Silver' },
  { id: '7', name: 'CELESTIAL CHAIN', price: 48, type: 'Necklace', category: 'necklaces', material: 'Silver' },
  { id: '8', name: 'PETITE DOME HUGGIES', price: 32, type: 'Huggies', category: 'huggies', material: 'Gold' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [category, setCategory] = useState(initialCategory);
  const [material, setMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addItem } = useCart();

  const handleCategoryChange = (newCat) => {
    setCategory(newCat);
    setSearchParams(newCat === 'all' ? {} : { category: newCat });
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...productsData];

    if (category !== 'all') {
      result = result.filter(p => p.category === category);
    }
    if (material !== 'all') {
      result = result.filter(p => p.material.toLowerCase() === material.toLowerCase());
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // featured - keep original order
        break;
    }

    return result;
  }, [category, material, sortBy]);

  const FilterSidebar = () => (
    <div className="space-y-8">
      <div>
        <h4 className="font-serif uppercase tracking-widest text-sm mb-4">Category</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {['all', 'earrings', 'necklaces', 'huggies', 'sets'].map((cat) => (
            <li key={cat}>
              <button 
                onClick={() => handleCategoryChange(cat)}
                className={`uppercase tracking-wider transition-colors ${category === cat ? 'text-foreground font-medium' : 'hover:text-foreground'}`}
              >
                {cat === 'all' ? 'All Products' : cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-serif uppercase tracking-widest text-sm mb-4">Material</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {['all', 'gold', 'silver'].map((mat) => (
            <li key={mat}>
              <button 
                onClick={() => setMaterial(mat)}
                className={`uppercase tracking-wider transition-colors ${material === mat ? 'text-foreground font-medium' : 'hover:text-foreground'}`}
              >
                {mat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="bg-background min-h-screen pt-12 pb-24">
      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-12">
        <h1 id="shop-title" className="font-serif text-4xl md:text-5xl uppercase tracking-widest mb-4">
          {category === 'all' ? 'The Collection' : category}
        </h1>
        <p className="text-muted-foreground font-light max-w-2xl mx-auto">
          Discover our full range of demi-fine jewelry. Crafted for longevity and designed to be layered, mixed, and loved everyday.
        </p>
      </div>

      <div className="container mx-auto px-4">
        {/* Controls Layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-4 border-y border-border mb-8">
          
          {/* Mobile Filter Toggle */}
          <div className="w-full md:w-auto flex justify-between md:hidden">
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <button className="flex items-center gap-2 text-sm uppercase tracking-widest">
                  <SlidersHorizontal className="w-4 h-4" /> Filters
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background pt-12 border-r border-border">
                  <FilterSidebar />
              </SheetContent>
            </Sheet>
            
            <span className="text-sm text-muted-foreground uppercase tracking-widest">{filteredAndSortedProducts.length} Results</span>
          </div>

          {/* Desktop Count */}
          <div className="hidden md:block">
            <span className="text-sm text-muted-foreground uppercase tracking-widest">{filteredAndSortedProducts.length} Results</span>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto mt-4 md:mt-0">
             <label htmlFor="sort" className="text-sm uppercase tracking-widest text-muted-foreground sr-only">Sort By</label>
             <div className="relative w-full md:w-auto">
               <select 
                 id="sort" 
                 value={sortBy}
                 onChange={(e) => setSortBy(e.target.value)}
                 className="appearance-none bg-transparent border border-border px-4 py-2 pr-10 text-sm uppercase tracking-widest w-full md:w-[200px] focus:outline-none focus:border-primary rounded-none"
               >
                 <option value="featured">Featured</option>
                 <option value="price-asc">Price: Low to High</option>
                 <option value="price-desc">Price: High to Low</option>
                 <option value="name-asc">Alphabetical: A-Z</option>
               </select>
               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
             <FilterSidebar />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-muted-foreground font-serif text-xl mb-4">No products found for this selection.</p>
                <button 
                  onClick={() => { setCategory('all'); setMaterial('all'); }}
                  className="text-primary underline text-sm uppercase tracking-widest"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
                {filteredAndSortedProducts.map(product => (
                  <div key={product.id} className="group cursor-pointer flex flex-col">
                    <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-secondary w-full block">
                      <img 
                        alt={product.name}
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        data-strk-img-id={`shop-img-${product.id}`}
                        data-strk-img={`[product-title-${product.id}] [shop-title]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="400"
                      />
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          addItem({ ...product, quantity: 1, variant: '18K Gold' });
                        }}
                        className="absolute bottom-4 left-4 right-4 bg-white/90 text-foreground py-3 text-xs uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-primary-foreground text-center"
                      >
                        Quick Add
                      </button>
                    </Link>
                    <div className="text-center flex-grow flex flex-col justify-between">
                      <div>
                        <h3 id={`product-title-${product.id}`} className="font-serif uppercase tracking-widest text-sm mb-1 leading-snug">{product.name}</h3>
                      </div>
                      <p className="text-foreground tracking-wide mt-2">${product.price}</p>
                    </div>
                  </div>
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