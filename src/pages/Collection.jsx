import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Button } from "../components/ui/button";
import { useCartStore } from "../store/cartStore";

const allProducts = [
  { id: "1", name: "Vivid Aura Jewels", price: 42, type: "earrings" },
  { id: "2", name: "Majestic Flora Nectar", price: 68, type: "necklaces" },
  { id: "3", name: "Golden Sphere Huggies", price: 38, type: "huggies" },
  { id: "4", name: "Amber Lace Earrings", price: 54, type: "earrings" },
  { id: "5", name: "Royal Heirloom Set", price: 95, type: "necklaces" },
  { id: "6", name: "Luminous Drop Studs", price: 32, type: "earrings" },
  { id: "7", name: "Twisted Vine Collar", price: 110, type: "necklaces" },
  { id: "8", name: "Micro Pavé Huggies", price: 45, type: "huggies" },
  { id: "9", name: "Baroque Pearl Drops", price: 78, type: "earrings" },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [products, setProducts] = useState(allProducts);
  const [sort, setSort] = useState("featured");
  const containerRef = useRef(null);

  useEffect(() => {
    let filtered = [...allProducts];
    
    if (categoryFilter) {
      filtered = filtered.filter(p => p.type === categoryFilter);
    }

    if (sort === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setProducts(filtered);
  }, [categoryFilter, sort]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [products]);

  const handleFilter = (cat) => {
    if (cat === categoryFilter) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="pt-24 pb-20 md:py-32 container mx-auto px-4 min-h-screen">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 id="collection-title" className="text-4xl md:text-5xl font-serif mb-6">
          {categoryFilter ? (categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1)) : 'All Jewelry'}
        </h1>
        <p className="text-muted-foreground font-light">
          Discover our full collection of thoughtfully designed pieces. Crafted to layer, designed to last.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24">
             <div className="mb-8">
               <h3 className="text-sm font-medium tracking-widest uppercase mb-4 pb-2 border-b border-border">Category</h3>
               <ul className="space-y-3">
                 {['earrings', 'necklaces', 'huggies'].map(cat => (
                   <li key={cat}>
                     <button 
                       onClick={() => handleFilter(cat)}
                       className={`text-sm hover:text-primary transition-colors cursor-pointer capitalize ${categoryFilter === cat ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                     >
                       {cat}
                     </button>
                   </li>
                 ))}
               </ul>
             </div>
             <div>
               <h3 className="text-sm font-medium tracking-widest uppercase mb-4 pb-2 border-b border-border">Sort By</h3>
               <select 
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="w-full bg-transparent text-sm border-none focus:ring-0 p-0 text-muted-foreground hover:text-foreground cursor-pointer"
               >
                 <option value="featured">Featured</option>
                 <option value="price-low">Price: Low to High</option>
                 <option value="price-high">Price: High to Low</option>
               </select>
             </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
            {products.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="group block">
                <div className="relative aspect-[4/5] bg-secondary/30 mb-4 overflow-hidden">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img={`[product-${item.id}-name] elegant gold jewelry dark background`}
                    data-strk-img-id={`collection-img-${item.id}`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Secondary Image on Hover */}
                  <div className="absolute inset-0 bg-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                     <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      data-strk-img={`[product-${item.id}-name] worn on model editorial lighting`}
                      data-strk-img-id={`collection-hover-${item.id}`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="400"
                      alt={`${item.name} on model`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hidden md:block z-20">
                    <Button className="w-full bg-background/90 text-foreground hover:bg-background rounded-none text-xs uppercase tracking-widest h-10 backdrop-blur-sm"
                      onClick={(e) => { 
                        e.preventDefault(); 
                        useCartStore.getState().addItem({ ...item, variant: "gold" }); 
                      }}
                    >
                      Quick Add
                    </Button>
                  </div>
                </div>
                <h3 id={`product-${item.id}-name`} className="font-serif uppercase tracking-widest text-sm md:text-base mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-sm">${item.price}</p>
              </Link>
            ))}
          </div>
          {products.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No products found in this category.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}