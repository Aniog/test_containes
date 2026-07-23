import { useState, useMemo, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { STRK_PLACEHOLDER } from "@/lib/utils";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const sortParam = searchParams.get("sort") || "featured";
  
  const [activeCategory, setActiveCategory] = useState(categoryParam || "all");
  const [activeSort, setActiveSort] = useState(sortParam);
  
  const containerRef = useRef(null);

  useEffect(() => {
    if (categoryParam && categoryParam !== activeCategory) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam, activeCategory]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activeSort]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  const categories = [
    { id: "all", label: "All Jewelry" },
    { id: "earrings", label: "Earrings" },
    { id: "necklaces", label: "Necklaces" },
    { id: "huggies", label: "Huggies" },
    { id: "sets", label: "Gift Sets" },
  ];

  const filteredProducts = useMemo(() => {
    let result = products;
    
    if (activeCategory !== "all") {
      result = result.filter(p => p.category === activeCategory);
    }
    
    return [...result].sort((a, b) => {
      switch (activeSort) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "newest":
          return 0; // Assuming newest is by array order for now
        case "featured":
        default:
          return (b.bestseller === true) - (a.bestseller === true);
      }
    });
  }, [activeCategory, activeSort]);

  return (
    <div className="container mx-auto px-4 md:px-8 py-12" ref={containerRef}>
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl mb-4 capitalize">{activeCategory === 'all' ? 'The Collection' : activeCategory}</h1>
        <p className="text-muted-foreground font-light max-w-xl mx-auto">
          Explore our curated pieces designed for everyday elegance. 
          Crafted with care to be lived in and loved.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-32">
            <div className="mb-10">
              <h3 className="font-serif uppercase tracking-widest text-sm mb-6 border-b border-border pb-4">Category</h3>
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`text-sm font-light transition-colors ${
                        activeCategory === cat.id 
                          ? "text-foreground font-medium" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif uppercase tracking-widest text-sm mb-6 border-b border-border pb-4">Sort By</h3>
              <select 
                value={activeSort}
                onChange={(e) => setActiveSort(e.target.value)}
                className="w-full bg-transparent border border-border p-3 text-sm font-light focus:outline-none focus:border-foreground"
              >
                <option value="featured">Featured</option>
                <option value="newest">New Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group block">
                <div className="aspect-square bg-muted relative mb-4 overflow-hidden">
                  {product.bestseller && (
                    <span className="absolute top-4 right-4 z-20 bg-background text-foreground px-3 py-1 text-[10px] uppercase tracking-widest font-medium font-serif">
                      Bestseller
                    </span>
                  )}
                  {product.images && product.images[0] && (
                    <img
                      src={STRK_PLACEHOLDER}
                      data-strk-img-id={product.images[0].id}
                      data-strk-img={product.images[0].query}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="600"
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  {product.images && product.images[1] && (
                    <img
                      src={STRK_PLACEHOLDER}
                      data-strk-img-id={product.images[1].id}
                      data-strk-img={product.images[1].query}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="600"
                      alt={`${product.name} alternate view`}
                      className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 id={`shop-title-${product.id}`} className="font-serif text-sm uppercase tracking-widest mb-1">{product.name}</h3>
                    <p className="text-sm font-light text-muted-foreground">${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <p className="text-muted-foreground mb-4">No products found in this category.</p>
              <button 
                onClick={() => handleCategoryChange("all")}
                className="text-sm uppercase tracking-widest font-serif border-b border-foreground pb-1"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;