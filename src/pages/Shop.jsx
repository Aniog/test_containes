import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { seedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Filter, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const { addToCart } = useCart();
  
  const [sortBy, setSortBy] = useState('featured');
  const [activeFilters, setActiveFilters] = useState({
    category: categoryFilter || 'all',
  });

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...seedProducts];

    // Filter
    if (activeFilters.category !== 'all') {
      result = result.filter(p => p.category === activeFilters.category);
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        // 'featured' - keep original order
        break;
    }

    return result;
  }, [activeFilters, sortBy]);

  const setCategoryFilter = (cat) => {
    setActiveFilters(prev => ({ ...prev, category: cat }));
  };

  const FilterSidebarContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-heading text-lg tracking-wider uppercase mb-4">Category</h3>
        <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat}>
              <button 
                onClick={() => setCategoryFilter(cat)}
                className={`text-sm tracking-wide capitalize hover:text-accent transition-colors ${activeFilters.category === cat ? 'text-accent font-medium' : 'text-muted-foreground'}`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="pt-24 min-h-screen bg-background pb-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-12 mt-8">
          <h1 className="font-heading text-4xl md:text-5xl tracking-wide uppercase mb-4">
            {activeFilters.category === 'all' ? 'All Jewelry' : activeFilters.category}
          </h1>
          <p className="text-muted-foreground">Discover pieces designed to be treasured forever.</p>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center py-4 border-y border-border mb-8">
          
          {/* Mobile Filter Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="flex items-center gap-2 text-sm tracking-wide uppercase">
                  <Filter className="w-4 h-4" /> Filters
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <SheetHeader className="mb-8 mt-4 text-left">
                  <SheetTitle className="font-heading text-2xl tracking-wide uppercase font-normal">Filters</SheetTitle>
                </SheetHeader>
                <FilterSidebarContent />
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Filter Toggle (placeholder for alignment) */}
          <div className="hidden md:block w-1/4"></div>

          <div className="text-sm text-muted-foreground hidden sm:block">
            {filteredAndSortedProducts.length} Products
          </div>

          <div className="flex items-center gap-2 w-1/4 justify-end">
            <span className="text-sm text-muted-foreground hidden sm:inline-block">Sort:</span>
            {/* Using native select for simpler implementation within constraints, or basic dropdown */}
            <select 
              className="bg-transparent border-none text-sm font-medium focus:ring-0 focus:outline-none cursor-pointer uppercase tracking-wide appearance-none text-right"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 shrink-0 pr-8 border-r border-border min-h-[50vh]">
            <FilterSidebarContent />
          </aside>

          {/* Product Grid */}
          <div className="flex-1 text-center">
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAndSortedProducts.map((product) => (
                  <ShopProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center">
                <p className="text-lg text-muted-foreground mb-4">No products found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setCategoryFilter('all')}
                  className="rounded-none border-foreground uppercase tracking-widest text-xs"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

function ShopProductCard({ product, addToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative flex flex-col text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-secondary mb-4 overflow-hidden">
        <img 
          src={isHovered ? product.image2 : product.image} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        />
        
        <div className={`absolute bottom-0 left-0 w-full p-4 transition-transform duration-300 ease-in-out ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-white text-foreground hover:bg-black hover:text-white py-3 text-sm tracking-widest uppercase font-medium transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </Link>
      
      <div className="flex flex-col">
        <Link to={`/product/${product.id}`} className="font-heading text-lg tracking-wider uppercase mb-1 hover:text-accent transition-colors">
          {product.name}
        </Link>
        <span className="text-muted-foreground">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}