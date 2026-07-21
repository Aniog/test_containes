import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import CartDrawer from '@/components/ui/CartDrawer';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Filter states
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(120);
  const [sortBy, setSortBy] = useState('featured');

  // Get unique categories and materials from products
  const allCategories = [...new Set(products.map((p) => p.category))];
  const allMaterials = [...new Set(products.map((p) => p.material))];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= minPrice && p.price <= maxPrice
    );

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategories, selectedMaterials, minPrice, maxPrice, sortBy]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleMaterial = (material) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setMinPrice(0);
    setMaxPrice(120);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedMaterials.length > 0 ||
    minPrice > 0 ||
    maxPrice < 120;

  return (
    <div className="min-h-screen bg-[#F8F5F1] text-[#1C1917]">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-12 pt-20">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs tracking-[3px] text-[#A67C52]">EXPLORE</span>
          <h1 className="font-serif text-4xl tracking-[1px] text-[#1C1917] mt-1">
            The Collection
          </h1>
          <p className="text-[#4A4640] mt-2">
            Timeless pieces crafted in 18K gold plating.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-[2px] text-[#1C1917]">FILTERS</span>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-[#A67C52] hover:underline"
                  >
                    CLEAR ALL
                  </button>
                )}
              </div>

              {/* Category */}
              <div className="mb-8">
                <p className="text-xs tracking-[1.5px] text-[#8A8178] mb-3">CATEGORY</p>
                <div className="space-y-2">
                  {allCategories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#A67C52]"
                      />
                      <span className="text-sm text-[#1C1917] group-hover:text-[#A67C52] transition-colors">
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <p className="text-xs tracking-[1.5px] text-[#8A8178] mb-3">PRICE RANGE</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[#4A4640]">$</span>
                    <input
                      type="number"
                      value={minPrice}
                      onChange={(e) => setMinPrice(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-20 border border-[#C4B8A8] px-2 py-1 text-sm focus:border-[#A67C52] outline-none"
                    />
                    <span className="text-[#8A8178]">to</span>
                    <span className="text-[#4A4640]">$</span>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Math.min(120, parseInt(e.target.value) || 120))}
                      className="w-20 border border-[#C4B8A8] px-2 py-1 text-sm focus:border-[#A67C52] outline-none"
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="120"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                    className="w-full accent-[#A67C52]"
                  />
                </div>
              </div>

              {/* Material */}
              <div>
                <p className="text-xs tracking-[1.5px] text-[#8A8178] mb-3">MATERIAL</p>
                <div className="space-y-2">
                  {allMaterials.map((mat) => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[#A67C52]"
                      />
                      <span className="text-sm text-[#1C1917] group-hover:text-[#A67C52] transition-colors">
                        {mat.replace('18K Gold Plated ', '')}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort + Count */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#C4B8A8]">
              <p className="text-sm text-[#4A4640]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-[1.5px] text-[#8A8178]">SORT</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border border-[#C4B8A8] text-sm px-4 py-2 focus:border-[#A67C52] outline-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A–Z</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#8A8178] mb-4">No products match your filters.</p>
                <Button variant="outline" onClick={clearFilters}>
                  CLEAR FILTERS
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Shop;
