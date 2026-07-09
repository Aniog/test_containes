import { Layout } from '@/components/layout';
import { ProductCard } from '@/components/ui/product-card';
import { seedProducts } from '@/lib/data';
import { useEffect, useRef, useState, useMemo } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, Filter } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [sort, setSort] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Derive products based on filters and sort
  const products = useMemo(() => {
    let filtered = [...seedProducts];
    
    if (categoryFilter) {
      filtered = filtered.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase());
    }
    
    switch(sort) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'newest':
        // For seed data, just reverse
        return filtered.reverse();
      default: // featured
        return filtered;
    }
  }, [categoryFilter, sort]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [products]);

  const displayTitle = categoryFilter 
    ? categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1) 
    : 'All Jewelry';

  return (
    <Layout>
      <div className="pt-24 pb-12" ref={containerRef}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">{displayTitle}</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our collection of expertly crafted pieces. Designed to elevate your everyday uniform with quiet luxury.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="border-b border-border pb-6 mb-6">
                  <h3 className="font-serif text-xl mb-4">Categories</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="/shop" className={!categoryFilter ? "font-medium" : "text-muted-foreground hover:text-foreground"}>All Jewelry</a></li>
                    <li><a href="/shop?category=earrings" className={categoryFilter === 'earrings' ? "font-medium" : "text-muted-foreground hover:text-foreground"}>Earrings</a></li>
                    <li><a href="/shop?category=necklaces" className={categoryFilter === 'necklaces' ? "font-medium" : "text-muted-foreground hover:text-foreground"}>Necklaces</a></li>
                    <li><a href="/shop?category=huggies" className={categoryFilter === 'huggies' ? "font-medium" : "text-muted-foreground hover:text-foreground"}>Huggies</a></li>
                    <li><a href="/shop?category=sets" className={categoryFilter === 'sets' ? "font-medium" : "text-muted-foreground hover:text-foreground"}>Sets</a></li>
                  </ul>
                </div>
                
                <div className="border-b border-border pb-6 mb-6">
                  <h3 className="font-serif text-xl mb-4">Material</h3>
                  <ul className="space-y-3 text-sm">
                    <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" defaultChecked className="accent-accent" /> <span className="text-muted-foreground">18K Gold Plated Brass</span></label></li>
                    <li><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" defaultChecked className="accent-accent" /> <span className="text-muted-foreground">18K Gold Plated Silver</span></label></li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
                <button 
                  className="lg:hidden flex items-center gap-2 text-sm uppercase tracking-widest font-medium"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <Filter className="w-4 h-4" /> Filters
                </button>
                
                <span className="hidden lg:block text-sm text-muted-foreground">
                  Showing {products.length} products
                </span>

                <div className="flex items-center gap-2 text-sm ml-auto">
                  <span className="uppercase tracking-widest text-muted-foreground hidden sm:inline">Sort:</span>
                  <div className="relative">
                    <select 
                      className="appearance-none bg-transparent pr-8 py-1 uppercase tracking-widest font-medium outline-none cursor-pointer"
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                    >
                      <option value="featured">Featured</option>
                      <option value="newest">Newest</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Mobile Filters Drawer - simple inline version for now */}
              {isFilterOpen && (
                <div className="lg:hidden mb-8 p-4 bg-secondary rounded-sm space-y-6">
                     <h3 className="font-serif text-xl">Categories</h3>
                    <ul className="space-y-3 text-sm flex flex-wrap gap-4">
                      <li><a href="/shop" className={!categoryFilter ? "font-medium border-b border-foreground" : "text-muted-foreground"}>All</a></li>
                      <li><a href="/shop?category=earrings" className={categoryFilter === 'earrings' ? "font-medium border-b border-foreground" : "text-muted-foreground"}>Earrings</a></li>
                      <li><a href="/shop?category=necklaces" className={categoryFilter === 'necklaces' ? "font-medium border-b border-foreground" : "text-muted-foreground"}>Necklaces</a></li>
                      <li><a href="/shop?category=huggies" className={categoryFilter === 'huggies' ? "font-medium border-b border-foreground" : "text-muted-foreground"}>Huggies</a></li>
                    </ul>
                </div>
              )}

              {/* Product Grid */}
              {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="py-24 text-center">
                  <p className="text-xl font-serif text-muted-foreground mb-4">No products found.</p>
                  <Link to="/shop" className="text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:text-accent hover:border-accent">
                    Clear Filters
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}