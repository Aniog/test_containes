import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { SlidersHorizontal, Star } from "lucide-react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

const ShopPage = () => {
  const { addToCart } = useCart();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [],
    material: []
  });

  const categories = ["Earrings", "Necklaces", "Huggies", "Sets"];
  const priceRanges = [
    { label: "Under $40", value: "under40", min: 0, max: 40 },
    { label: "$40 - $60", value: "40to60", min: 40, max: 60 },
    { label: "$60 - $80", value: "60to80", min: 60, max: 80 },
    { label: "Over $80", value: "over80", min: 80, max: 1000 }
  ];
  const materials = ["Gold", "Silver"];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category.length > 0) {
      result = result.filter(p => filters.category.includes(p.category));
    }

    if (filters.priceRange.length > 0) {
      result = result.filter(p => {
        return filters.priceRange.some(range => {
          const priceRange = priceRanges.find(r => r.value === range);
          return p.price >= priceRange.min && p.price <= priceRange.max;
        });
      });
    }

    if (filters.material.length > 0) {
      result = result.filter(p => filters.material.includes(p.material));
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return result;
  }, [filters, sortBy]);

  const handleFilterChange = (type, value) => {
    setFilters(prev => {
      const current = prev[type];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [type]: updated };
    });
  };

  const clearFilters = () => {
    setFilters({ category: [], priceRange: [], material: [] });
  };

  return (
    <div className="min-h-screen bg-ivory pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="font-serif text-4xl lg:text-5xl mb-4" style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}>
            Shop All
          </h1>
          <div className="w-16 h-px bg-gold" />
        </div>

        <div className="flex items-center justify-between mb-8 pb-6 border-b border-cream">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 text-sm uppercase tracking-wider hover:text-gold transition-colors lg:hidden"
          >
            <SlidersHorizontal size={16} />
            <span>Filters</span>
          </button>

          <p className="text-sm text-charcoal/60">
            {filteredProducts.length} products
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-charcoal/20 px-4 py-2 focus:outline-none focus:border-gold transition-colors cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          <div className={`${isFilterOpen ? "block" : "hidden"} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="bg-white p-6 lg:sticky lg:top-32">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm uppercase tracking-wider">Filters</h3>
                {(filters.category.length > 0 || filters.priceRange.length > 0 || filters.material.length > 0) && (
                  <button onClick={clearFilters} className="text-xs text-gold hover:text-gold-dark transition-colors">
                    Clear All
                  </button>
                )}
              </div>

              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-wider mb-4 text-charcoal/60">Category</h4>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.category.includes(category)}
                        onChange={() => handleFilterChange("category", category)}
                        className="w-4 h-4 border-charcoal/20 rounded accent-gold cursor-pointer"
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-wider mb-4 text-charcoal/60">Price</h4>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <label key={range.value} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.priceRange.includes(range.value)}
                        onChange={() => handleFilterChange("priceRange", range.value)}
                        className="w-4 h-4 border-charcoal/20 rounded accent-gold cursor-pointer"
                      />
                      <span className="text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-wider mb-4 text-charcoal/60">Material</h4>
                <div className="space-y-3">
                  {materials.map((material) => (
                    <label key={material} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.material.includes(material)}
                        onChange={() => handleFilterChange("material", material)}
                        className="w-4 h-4 border-charcoal/20 rounded accent-gold cursor-pointer"
                      />
                      <span className="text-sm">{material}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg text-charcoal/60 mb-4">No products found</p>
                <button onClick={clearFilters} className="text-gold hover:text-gold-dark transition-colors">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="product-card group relative">
                    <Link to={`/product/${product.id}`}>
                      <div className="aspect-square bg-cream overflow-hidden">
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="product-name text-sm mb-2">{product.name}</h3>
                        <div className="flex items-center justify-center space-x-1 mb-2">
                          <Star size={14} fill="#C9A96E" stroke="#C9A96E" />
                          <span className="text-xs text-charcoal/60">{product.rating}</span>
                        </div>
                        <p className="text-sm font-medium">${product.price}</p>
                      </div>
                    </Link>
                    <button
                      onClick={() => addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        images: product.images
                      })}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-charcoal text-white px-6 py-2 text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
