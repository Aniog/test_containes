import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Star, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useCartStore } from '../store/useCart';
import { toast } from 'sonner';

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const sort = searchParams.get('sort') || 'featured';
  
  const { addItem } = useCartStore();

  const handleQuickAdd = (product) => {
    addItem(product, 1, product.colors[0]);
    toast.success(`${product.name} added to cart`);
  };

  const setCategoryFilter = (cat) => {
    if (cat === categoryFilter) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const setSort = (val) => {
    searchParams.set('sort', val);
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break; // featured
    }
    
    return result;
  }, [categoryFilter, sort]);

  const FilterSidebar = () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="uppercase tracking-widest text-sm font-semibold mb-4">Category</h3>
        <ul className="flex flex-col gap-3">
          <li>
            <button 
              className={`text-sm tracking-wide capitalize hover:text-primary transition-colors ${!categoryFilter ? 'font-medium text-foreground' : 'text-muted-foreground'}`}
              onClick={() => {
                searchParams.delete('category');
                setSearchParams(searchParams);
              }}
            >
              All Jewelry
            </button>
          </li>
          {CATEGORIES.map(cat => (
            <li key={cat}>
              <button 
                className={`text-sm tracking-wide capitalize hover:text-primary transition-colors ${categoryFilter === cat ? 'font-medium text-foreground' : 'text-muted-foreground'}`}
                onClick={() => setCategoryFilter(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Separator />

      <div>
        <h3 className="uppercase tracking-widest text-sm font-semibold mb-4">Material</h3>
        <ul className="flex flex-col gap-3">
          <li>
            <span className="text-sm tracking-wide text-foreground flex items-center justify-between">
              18K Gold Plated <span className="text-xs text-muted-foreground opacity-50">(5)</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Header */}
      <div className="bg-primary/5 py-16 md:py-24 border-b border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl uppercase tracking-[0.1em] mb-4">
            {categoryFilter ? categoryFilter : 'The Collection'}
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Discover our curated selection of demi-fine jewelry. Designed for the modern wardrobe and crafted to last.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row gap-12">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 shrink-0">
          <FilterSidebar />
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Controls */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-border/50">
            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden uppercase tracking-widest text-xs h-10 rounded-none border-border">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <SheetHeader className="mb-8">
                  <SheetTitle className="font-serif uppercase tracking-widest text-left">Filters</SheetTitle>
                </SheetHeader>
                <FilterSidebar />
              </SheetContent>
            </Sheet>

            <div className="hidden md:block text-sm text-muted-foreground">
              Showing {filteredProducts.length} results
            </div>

            <div className="relative group">
              <select 
                className="appearance-none bg-transparent border border-border px-4 py-2 pr-10 text-sm uppercase tracking-widest focus:outline-none focus:border-primary cursor-pointer rounded-none"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-muted-foreground" />
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="py-24 text-center">
              <h3 className="font-serif text-2xl mb-4">No pieces found</h3>
              <p className="text-muted-foreground mb-8">Try adjusting your filters to see more results.</p>
              <Button 
                onClick={() => {
                  searchParams.delete('category');
                  setSearchParams(searchParams);
                }}
                className="uppercase tracking-widest"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group flex flex-col">
                  <Link to={`/product/${product.slug}`} className="relative aspect-[3/4] mb-6 overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-opacity duration-500 absolute inset-0 z-10 group-hover:opacity-0"
                    />
                    <img 
                      src={product.imageHover} 
                      alt={`${product.name} worn`} 
                      className="w-full h-full object-cover transition-transform duration-700 absolute inset-0 z-0 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-20">
                      <Button 
                        className="w-full uppercase tracking-wider text-xs h-12 bg-white/95 text-black hover:bg-white border-0 shadow-lg backdrop-blur-sm rounded-none"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleQuickAdd(product);
                        }}
                      >
                        Quick Add
                      </Button>
                    </div>
                  </Link>
                  
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2 gap-4">
                      <Link to={`/product/${product.slug}`} className="hover:text-primary/70 transition-colors">
                        <h3 className="font-serif uppercase tracking-wider text-base leading-tight">{product.name}</h3>
                      </Link>
                      <p className="text-muted-foreground font-medium">${product.price}</p>
                    </div>
                    
                    <div className="flex items-center gap-1 mt-auto pt-2">
                      <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                      <span className="text-xs font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
