import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCart } from '../store/CartContext';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

const ALL_PRODUCTS = [
  { id: '1', name: 'Vivid Aura Jewels', price: 42, category: 'earrings', imageId: 'vivid-aura', descId: 'p-vivid-desc' },
  { id: '2', name: 'Majestic Flora Nectar', price: 68, category: 'necklaces', imageId: 'majestic-flora', descId: 'p-flora-desc' },
  { id: '3', name: 'Golden Sphere Huggies', price: 38, category: 'huggies', imageId: 'golden-sphere', descId: 'p-sphere-desc' },
  { id: '4', name: 'Amber Lace Earrings', price: 54, category: 'earrings', imageId: 'amber-lace', descId: 'p-amber-desc' },
  { id: '5', name: 'Royal Heirloom Set', price: 95, category: 'necklaces', imageId: 'royal-heirloom', descId: 'p-royal-desc' },
  { id: '6', name: 'Luna Pearl Drop', price: 48, category: 'earrings', imageId: 'luna-drop', descId: 'p-luna-desc' },
  { id: '7', name: 'Classic Gold Chain', price: 62, category: 'necklaces', imageId: 'classic-chain', descId: 'p-classic-desc' },
  { id: '8', name: 'Diamond Pavé Huggies', price: 45, category: 'huggies', imageId: 'diamond-huggies', descId: 'p-diamond-desc' },
];

const Collections = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const { addToCart } = useCart();
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortOption, setSortOption] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Filter products
  let displayProducts = activeCategory === 'all' 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category === activeCategory);

  // Sort products
  if (sortOption === 'price-low') {
    displayProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-high') {
    displayProducts.sort((a, b) => b.price - a.price);
  }

  const categoryTitle = {
    'all': 'All Jewelry',
    'earrings': 'Earrings',
    'necklaces': 'Necklaces',
    'huggies': 'Huggies'
  }[activeCategory] || 'Collection';

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-0 bg-transparent">
        <div className="mb-6 md:mb-0 border-0 bg-transparent text-center md:text-left">
          <h1 id="collection-title" className="text-4xl md:text-5xl font-serif text-foreground mb-4 border-0 bg-transparent">{categoryTitle}</h1>
          <p id="collection-desc" className="text-muted-foreground text-sm border-0 bg-transparent">Discover our handcrafted demi-fine jewelry pieces.</p>
        </div>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-6 border-0 bg-transparent text-sm">
          <div className="flex items-center gap-2 border-0 bg-transparent">
            <span className="text-muted-foreground border-0 bg-transparent uppercase tracking-widest">Sort by:</span>
            <select 
              value={sortOption} 
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-transparent border-0 text-foreground cursor-pointer focus:outline-none uppercase font-medium tracking-widest"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center justify-between border-y border-border py-4 border-solid bg-transparent">
          <button 
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium border-0 bg-transparent"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
          <div className="flex items-center gap-2 border-0 bg-transparent">
             <select 
              value={sortOption} 
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-transparent border-0 text-sm focus:outline-none uppercase tracking-widest font-medium text-right direction-rtl"
            >
              <option value="featured">Sort</option>
              <option value="price-low">Lowest</option>
              <option value="price-high">Highest</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters (Desktop) */}
        <aside className={`${isMobileFiltersOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0 border-0 bg-transparent`}>
          <div className="sticky top-28 border-0 bg-transparent">
            <h3 className="text-xs uppercase tracking-widest font-medium text-foreground mb-6 pb-2 border-b border-border border-solid bg-transparent">Category</h3>
            <ul className="space-y-4 border-0 bg-transparent">
              {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
                <li key={cat} className="border-0 bg-transparent">
                  <button 
                    onClick={() => { setActiveCategory(cat); setIsMobileFiltersOpen(false); }}
                    className={`text-sm capitalize transition-colors border-0 bg-transparent ${activeCategory === cat ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    {cat === 'all' ? 'All Jewelry' : cat}
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="text-xs uppercase tracking-widest font-medium text-foreground mt-12 mb-6 pb-2 border-b border-border border-solid bg-transparent">Material</h3>
            <ul className="space-y-4 border-0 bg-transparent">
              <li className="border-0 bg-transparent">
                <button className="text-sm text-foreground transition-colors border-0 bg-transparent flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#D4AF37]"></span> 18k Gold Plated
                </button>
              </li>
              <li className="border-0 bg-transparent">
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors border-0 bg-transparent flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#C0C0C0]"></span> Sterling Silver
                </button>
              </li>
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1 border-0 bg-transparent">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16 border-0 bg-transparent">
            {displayProducts.map((product) => (
              <div key={product.id} className="group relative border-0 bg-transparent flex flex-col h-full">
                <a href={`/product/${product.id}`} className="block relative aspect-[3/4] mb-4 bg-muted overflow-hidden border-0 bg-transparent">
                  <img 
                    alt={product.name}
                    data-strk-img-id={`collection-${product.imageId}`}
                    data-strk-img={`[${product.descId}] [product-title-${product.id}] [collection-desc] [collection-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:flex flex-col justify-end p-4 hidden border-0 bg-transparent">
                    <button 
                      onClick={(e) => { e.preventDefault(); addToCart({ ...product, quantity: 1, variant: 'gold tone' }); }}
                      className="w-full bg-background text-foreground py-3 text-xs uppercase tracking-widest font-medium hover:bg-accent hover:text-accent-foreground transition-colors translate-y-4 group-hover:translate-y-0 duration-300 border-0"
                    >
                      Quick Add
                    </button>
                  </div>
                </a>
                <div className="flex-1 flex flex-col text-center md:text-left border-0 bg-transparent">
                  <h3 id={`product-title-${product.id}`} className="font-serif text-lg mb-1 border-0 bg-transparent text-foreground uppercase tracking-wide">
                    {product.name}
                  </h3>
                  <p id={product.descId} className="hidden">Beautiful demi-fine {product.category}</p>
                  <p className="text-muted-foreground text-sm border-0 bg-transparent">${product.price}</p>
                </div>
                <button 
                  onClick={() => addToCart({ ...product, quantity: 1, variant: 'gold tone' })}
                  className="mt-4 w-full border border-foreground py-2 text-xs uppercase tracking-widest md:hidden border-solid bg-transparent text-foreground"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {displayProducts.length === 0 && (
            <div className="text-center py-20 border-0 bg-transparent text-muted-foreground">
              <p>No products found in this category.</p>
            </div>
          )}
        </main>
      </div>

    </div>
  );
};

export default Collections;
