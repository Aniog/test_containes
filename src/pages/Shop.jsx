import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [sortOpen, setSortOpen] = useState(false);
  const containerRef = useRef(null);
  
  const addItem = useCartStore(state => state.addItem);
  const setIsOpen = useCartStore(state => state.setIsOpen);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [categoryParam]);

  let filteredProducts = products;
  if (categoryParam) {
    filteredProducts = products.filter(p => p.category === categoryParam);
  }

  const handleAddToCart = (product) => {
    addItem(product, 1, 'gold');
    toast.success(`${product.name} added to cart!`);
    setIsOpen(true);
  };

  const handleCategoryChange = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const categories = [
    { id: 'all', label: 'All Jewelry' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'huggies', label: 'Huggies' },
  ];

  return (
    <div ref={containerRef} className="pt-24 pb-24 min-h-screen flex flex-col">
      <div className="bg-secondary/40 py-16 mb-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 id="shop-title" className="font-serif text-4xl md:text-5xl uppercase tracking-wider mb-4">
            {categoryParam ? categoryParam : 'Collection'}
          </h1>
          <p className="text-muted-foreground font-light max-w-xl mx-auto">
            Explore our curated selection of demi-fine gold jewelry, designed to bring a touch of everyday elegance to your wardrobe.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 flex-1 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 flex-shrink-0 mb-8 md:mb-0">
          <div className="sticky top-28 space-y-10">
            <div>
              <h3 className="font-serif uppercase tracking-widest text-sm border-b pb-3 mb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`text-sm tracking-wide capitalize transition-colors ${
                        (categoryParam === cat.id) || (!categoryParam && cat.id === 'all')
                          ? 'text-foreground font-medium' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif uppercase tracking-widest text-sm border-b pb-3 mb-4">Material</h3>
              <ul className="space-y-3">
                <li>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded border-border text-primary focus:ring-primary h-4 w-4" />
                    <span className="text-sm tracking-wide text-foreground">18k Gold Vermeil</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border text-primary focus:ring-primary h-4 w-4" />
                    <span className="text-sm tracking-wide text-muted-foreground">Sterling Silver</span>
                  </label>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif uppercase tracking-widest text-sm border-b pb-3 mb-4">Price</h3>
              <ul className="space-y-3">
                <li>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border text-primary focus:ring-primary h-4 w-4" />
                    <span className="text-sm tracking-wide text-muted-foreground">Under $50</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border text-primary focus:ring-primary h-4 w-4" />
                    <span className="text-sm tracking-wide text-muted-foreground">$50 - $100</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Product Grid */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {filteredProducts.length} Product{filteredProducts.length !== 1 && 's'}
            </p>
            
            <div className="relative">
              <button 
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center text-xs uppercase tracking-widest hover:text-muted-foreground transition-colors"
              >
                Sort By
                <ChevronDown className="w-3 h-3 ml-2" />
              </button>
              
              {sortOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-background border shadow-lg z-20 py-2">
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-secondary/50">Featured</button>
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-secondary/50">Price: Low to High</button>
                  <button className="block w-full text-left px-4 py-2 text-sm hover:bg-secondary/50">Price: High to Low</button>
                </div>
              )}
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group flex flex-col">
                  <Link to={`/product/${product.id}`} className="relative aspect-[4/5] bg-secondary mb-4 overflow-hidden block">
                    <img
                      alt={product.name}
                      data-strk-img-id={`shop-${product.id}`}
                      data-strk-img={`[shop-item-${product.id}-title] [shop-title]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <Button 
                        className="w-full uppercase text-[10px] tracking-widest bg-background/90 text-foreground hover:bg-background backdrop-blur-sm shadow-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(product);
                        }}
                      >
                        Quick Add
                      </Button>
                    </div>
                  </Link>
                  <div className="text-center flex flex-col flex-1">
                    <h3 id={`shop-item-${product.id}-title`} className="font-serif uppercase tracking-wider text-sm mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm font-light">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-20">
              <p className="font-serif text-2xl mb-4">No pieces found.</p>
              <p className="text-muted-foreground font-light mb-8 max-w-sm">We couldn't find any products in this category. Explore our other collections.</p>
              <Button onClick={() => handleCategoryChange('all')} variant="outline" className="uppercase tracking-widest text-xs">
                View All Jewelry
              </Button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Shop;