import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json"; // Will handle missing config in try/catch
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useCart } from "../components/cart/CartContext";

// Extended Mock Data for Shop Page
const ALL_PRODUCTS = [
  { id: "1", name: "Vivid Aura Jewels", price: 42.00, category: "earrings", material: "gold", imgId: "prod-1-vivid" },
  { id: "2", name: "Majestic Flora Nectar", price: 68.00, category: "necklaces", material: "gold", imgId: "prod-2-flora" },
  { id: "3", name: "Golden Sphere Huggies", price: 38.00, category: "huggies", material: "gold", imgId: "prod-3-sphere" },
  { id: "4", name: "Amber Lace Earrings", price: 54.00, category: "earrings", material: "gold", imgId: "prod-4-amber" },
  { id: "5", name: "Royal Heirloom Set", price: 95.00, category: "sets", material: "gold", imgId: "prod-5-royal" },
  { id: "6", name: "Silver Moonlight Drops", price: 48.00, category: "earrings", material: "silver", imgId: "prod-6-drops" },
  { id: "7", name: "Braided Gold Chain", price: 72.00, category: "necklaces", material: "gold", imgId: "prod-7-chain" },
  { id: "8", name: "Diamond Accent Huggies", price: 45.00, category: "huggies", material: "gold", imgId: "prod-8-diamond" },
  { id: "9", name: "Pearl Essence Choker", price: 85.00, category: "necklaces", material: "gold", imgId: "prod-9-pearl" },
  { id: "10", name: "Classic Silver Cuff", price: 32.00, category: "earrings", material: "silver", imgId: "prod-10-cuff" },
  { id: "11", name: "Minimalist Bar Necklace", price: 55.00, category: "necklaces", material: "gold", imgId: "prod-11-bar" },
  { id: "12", name: "Double Hoop Earrings", price: 46.00, category: "earrings", material: "gold", imgId: "prod-12-hoop" },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [sortOption, setSortOption] = useState("featured");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [filters, setFilters] = useState({
    categories: categoryParam ? [categoryParam] : [],
    materials: [],
    priceRanges: []
  });

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        try {
          ImageHelper.loadImages({}, containerRef.current);
        } catch(e) {
          console.log("ImageHelper init failed");
        }
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [filters, sortOption, categoryParam]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      const currentFilters = [...prev[filterType]];
      if (currentFilters.includes(value)) {
        return { ...prev, [filterType]: currentFilters.filter(v => v !== value) };
      } else {
        return { ...prev, [filterType]: [...currentFilters, value] };
      }
    });
  };

  // Filter and sort products
  let filteredProducts = ALL_PRODUCTS.filter(product => {
    let match = true;
    if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
      match = false;
    }
    if (filters.materials.length > 0 && !filters.materials.includes(product.material)) {
      match = false;
    }
    return match;
  });

  if (sortOption === "price-low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "newest") {
    // Mock sort, reverse id
    filteredProducts.sort((a, b) => parseInt(b.id) - parseInt(a.id));
  }

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    addItem({ ...product, variant: product.material });
  };

  return (
    <div ref={containerRef} className="pt-24 min-h-screen bg-background pb-20">
      
      {/* Header */}
      <div className="bg-secondary/30 py-16 mb-12 border-b border-border text-center">
        <h1 id="shop-title" className="font-serif text-5xl mb-4 text-foreground capitalize">
          {categoryParam ? categoryParam : "All Jewelry"}
        </h1>
        <p id="shop-desc" className="text-muted-foreground font-sans max-w-lg mx-auto">
          Discover our full collection of thoughtfully designed piece, crafted to be treasured.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Controls Bar */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
          <Button 
            variant="ghost" 
            className="md:hidden flex items-center gap-2 rounded-none px-0"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          >
            <SlidersHorizontal size={18} />
            <span className="uppercase tracking-widest text-xs">Filters</span>
          </Button>

          <div className="hidden md:flex gap-6 text-sm">
            <span className="text-muted-foreground">{filteredProducts.length} Products</span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 rounded-none px-0 h-auto">
                <span className="uppercase tracking-widest text-xs">Sort By</span>
                <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-background border-border rounded-none">
              <DropdownMenuItem onClick={() => setSortOption("featured")}>Featured</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("newest")}>Newest</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("price-low-high")}>Price: Low to High</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption("price-high-low")}>Price: High to Low</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar / Filters */}
          <aside className={`md:w-64 flex-shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-28 space-y-10">
              
              {/* Categories Filter */}
              <div>
                <h3 className="font-serif text-lg mb-4 uppercase tracking-wider border-b border-border pb-2">Category</h3>
                <div className="space-y-3 font-sans text-sm">
                  {["earrings", "necklaces", "huggies", "sets"].map(cat => (
                    <label key={cat} className="flex items-center space-x-3 cursor-pointer group hover:text-primary transition-colors">
                      <input 
                        type="checkbox" 
                        className="form-checkbox text-primary rounded-none border-border focus:ring-primary h-4 w-4"
                        checked={filters.categories.includes(cat)}
                        onChange={() => handleFilterChange("categories", cat)}
                      />
                      <span className={`capitalize ${filters.categories.includes(cat) ? 'text-foreground' : 'text-muted-foreground'}`}>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="font-serif text-lg mb-4 uppercase tracking-wider border-b border-border pb-2">Material</h3>
                <div className="space-y-3 font-sans text-sm">
                  {["gold", "silver"].map(mat => (
                    <label key={mat} className="flex items-center space-x-3 cursor-pointer group hover:text-primary transition-colors">
                      <input 
                        type="checkbox" 
                        className="form-checkbox text-primary rounded-none border-border focus:ring-primary h-4 w-4"
                        checked={filters.materials.includes(mat)}
                        onChange={() => handleFilterChange("materials", mat)}
                      />
                      <span className={`capitalize ${filters.materials.includes(mat) ? 'text-foreground' : 'text-muted-foreground'}`}>{mat === 'gold' ? '18k Gold Plated' : 'Sterling Silver'}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-xl mb-4">No products found.</p>
                <p className="text-muted-foreground mb-8">Try adjusting your filters to find what you're looking for.</p>
                <Button 
                  onClick={() => setFilters({ categories: [], materials: [], priceRanges: [] })}
                  variant="outline" 
                  className="rounded-none uppercase tracking-widest text-xs"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-4 border border-transparent hover:border-border transition-colors">
                      <img
                        data-strk-img-id={`shop-${product.id}`}
                        data-strk-img={`[product-title-${product.id}] [shop-desc] [shop-title]`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 text-[10px]"
                      />
                      
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                        <button 
                          className="w-full bg-background/95 backdrop-blur font-sans text-xs tracking-widest uppercase py-3 hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
                          onClick={(e) => handleQuickAdd(e, product)}
                        >
                          Quick Add
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 id={`product-title-${product.id}`} className="font-serif uppercase text-sm tracking-wide mb-2 text-foreground">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-sans">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}
