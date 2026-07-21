import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";
import { useCart } from "@/lib/CartContext";
import { Filter, SlidersHorizontal, X } from "lucide-react";

export default function Collections() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  
  const [sortBy, setSortBy] = useState("featured"); // featured, price-low, price-high
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    switch(sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      // featured keeps default order
      default:
        break;
    }
    return result;
  }, [categoryFilter, sortBy]);

  const handleCategoryFilter = (cat) => {
    if (categoryFilter === cat) {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  const categories = ["earrings", "necklaces", "huggies", "sets"];

  const FilterSidebar = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-heading tracking-widest uppercase text-sm mb-4">Category</h3>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {categories.map(cat => (
            <li key={cat}>
              <button 
                onClick={() => handleCategoryFilter(cat)}
                className={`uppercase tracking-wide hover:text-foreground transition-colors ${categoryFilter === cat ? "text-foreground font-medium" : ""}`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-heading tracking-widest uppercase text-sm mb-4">Material</h3>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li><button className="uppercase tracking-wide hover:text-foreground transition-colors text-foreground font-medium">18K Gold Plated</button></li>
          <li><button className="uppercase tracking-wide hover:text-foreground transition-colors">14K Gold Vermeil</button></li>
          <li><button className="uppercase tracking-wide hover:text-foreground transition-colors">Sterling Silver</button></li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 min-h-screen">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl mb-4 tracking-widest uppercase">
          {categoryFilter ? categoryFilter : "All Jewelry"}
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto font-light">
          Discover our full collection of demi-fine pieces, crafted to be treasured.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <button 
          className="flex items-center text-sm uppercase tracking-widest md:hidden"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <Filter className="w-4 h-4 mr-2" /> Filter
        </button>
        <div className="hidden md:block text-sm text-muted-foreground">
          {filteredProducts.length} Products
        </div>
        
        <div className="flex items-center space-x-2 text-sm">
          <span className="uppercase tracking-widest text-muted-foreground hidden sm:inline">Sort:</span>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border-none appearance-none focus:outline-none uppercase tracking-widest cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-48 shrink-0">
          <FilterSidebar />
        </aside>

        {/* Mobile Filters Overlay */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 bg-background flex flex-col md:hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-heading text-lg tracking-widest uppercase">Filters</h2>
              <Button variant="ghost" size="icon" onClick={() => setMobileFiltersOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-4 flex-grow overflow-y-auto">
              <FilterSidebar />
            </div>
            <div className="p-4 border-t">
              <Button className="w-full tracking-widest uppercase" onClick={() => setMobileFiltersOpen(false)}>
                Show {filteredProducts.length} Results
              </Button>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              No products found matching your criteria.
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
              {filteredProducts.map(product => (
                <div key={product.id} className="group flex flex-col text-left">
                  <Link to={`/collections/${product.id}`} className="relative aspect-[4/5] bg-muted mb-4 overflow-hidden rounded-sm">
                    <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
                    <img src={product.hoverImage} alt={`${product.name} worn`} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Button 
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart({ ...product, variant: product.variants[0] }, 1);
                        }}
                        className="w-full bg-background/90 text-foreground hover:bg-background uppercase tracking-widest text-xs h-10 backdrop-blur-sm"
                      >
                        Quick Add
                      </Button>
                    </div>
                  </Link>
                  <h3 className="font-heading uppercase tracking-wide text-sm mb-1 line-clamp-1">{product.name}</h3>
                  <p className="text-muted-foreground text-sm">${product.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
