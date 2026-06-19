import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { seedProducts } from '@/lib/data';
import { useCartStore } from '@/lib/cart';
import { ChevronDown, Filter } from 'lucide-react';

export default function Collection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOption, setSortOption] = useState("featured");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];

  const filteredProducts = useMemo(() => {
    let products = [...seedProducts];
    
    // Filter
    if (activeCategory !== "All") {
      products = products.filter(p => p.category === activeCategory);
    }
    
    // Sort
    if (sortOption === "price-low") {
      products.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high") {
      products.sort((a, b) => b.price - a.price);
    }
    
    return products;
  }, [activeCategory, sortOption]);

  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-widest mb-4">
          Collection
        </h1>
        <p className="text-muted-foreground font-light max-w-lg mx-auto">
          Explore our thoughtfully curated collection of demi-fine jewelry. Designed to be your daily companions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">
        
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center border-b border-border pb-4 mb-4">
          <button 
            className="flex items-center text-sm uppercase tracking-widest font-medium"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            <Filter className="w-4 h-4 mr-2" /> Filters
          </button>
          
          <div className="relative group">
            <button className="flex items-center text-sm uppercase tracking-widest font-medium">
              Sort <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            <div className="absolute right-0 top-full mt-2 bg-white border border-border w-48 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              <button 
                className={`block w-full text-left px-4 py-2 hover:bg-muted text-sm ${sortOption === 'featured' ? 'font-bold' : ''}`}
                onClick={() => setSortOption('featured')}
              >
                Featured
              </button>
              <button 
                className={`block w-full text-left px-4 py-2 hover:bg-muted text-sm ${sortOption === 'price-low' ? 'font-bold' : ''}`}
                onClick={() => setSortOption('price-low')}
              >
                Price: Low to High
              </button>
              <button 
                className={`block w-full text-left px-4 py-2 hover:bg-muted text-sm ${sortOption === 'price-high' ? 'font-bold' : ''}`}
                onClick={() => setSortOption('price-high')}
              >
                Price: High to Low
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Filters (Desktop + Mobile overlay if needed) */}
        <div className={`md:w-64 flex-shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
          <div className="sticky top-32">
            <h3 className="font-serif tracking-widest uppercase mb-6 text-lg">Category</h3>
            <ul className="space-y-4">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={`text-sm tracking-wide ${activeCategory === cat ? 'text-primary font-medium border-l-2 border-primary pl-3 -ml-[14px]' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop Sort */}
            <div className="mt-12 hidden md:block">
              <h3 className="font-serif tracking-widest uppercase mb-6 text-lg">Sort By</h3>
              <ul className="space-y-4">
                <li>
                  <button 
                    onClick={() => setSortOption('featured')}
                    className={`text-sm tracking-wide ${sortOption === 'featured' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    Featured
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setSortOption('price-low')}
                    className={`text-sm tracking-wide ${sortOption === 'price-low' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    Price, Low to High
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setSortOption('price-high')}
                    className={`text-sm tracking-wide ${sortOption === 'price-high' ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    Price, High to Low
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <p className="text-muted-foreground">No products found in this category.</p>
              <button 
                onClick={() => setActiveCategory("All")}
                className="mt-6 btn-outline"
              >
                View All Jewelry
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const addItem = useCartStore(state => state.addItem);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] mb-4 overflow-hidden bg-muted block">
        <img 
          src={isHovered ? product.hoverImage : product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button 
            className="w-full bg-background/95 backdrop-blur text-foreground py-3 text-sm tracking-wide uppercase font-medium hover:bg-background shadow-sm"
            onClick={(e) => {
              e.preventDefault();
              addItem({ ...product, variant: product.variants[0], quantity: 1 });
            }}
          >
            Quick Add
          </button>
        </div>
      </Link>
      <div className="flex flex-col items-center text-center">
        <Link to={`/product/${product.id}`} className="font-serif text-sm md:text-base uppercase tracking-wider mb-2">
          {product.name}
        </Link>
        <p className="text-muted-foreground">${product.price}</p>
      </div>
    </div>
  );
}