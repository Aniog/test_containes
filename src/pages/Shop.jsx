import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import ProductCard from '../components/ui/ProductCard';
import { products, categories } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  const allMaterials = ['Gold', 'Silver'];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Material filter (based on variant availability)
    if (selectedMaterials.length > 0) {
      result = result.filter((p) =>
        selectedMaterials.some((m) => p.variants.includes(m))
      );
    }

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
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategories, priceRange, selectedMaterials, sortBy, searchQuery]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 120]);
    setSelectedMaterials([]);
    setSearchQuery('');
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedMaterials.length > 0 ||
    priceRange[0] !== 0 ||
    priceRange[1] !== 120 ||
    searchQuery;

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar />

      <div className="pt-20 max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs tracking-[0.15em] text-[#B8976A]">EXPLORE</span>
            <h1 className="heading-lg mt-1">The Collection</h1>
          </div>
          <div className="hidden md:block text-sm text-[#6B645E]">
            {filteredProducts.length} pieces
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-[0.1em] text-[#6B645E]">FILTERS</span>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-[#B8976A] hover:underline"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input text-sm py-2"
                />
              </div>

              {/* Category */}
              <div className="mb-6">
                <div className="text-xs tracking-[0.1em] mb-3 text-[#6B645E]">CATEGORY</div>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#B8976A]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <div className="text-xs tracking-[0.1em] mb-3 text-[#6B645E]">PRICE</div>
                <div className="flex items-center gap-2 text-sm">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([Math.max(0, parseInt(e.target.value) || 0), priceRange[1]])
                    }
                    className="input w-20 py-1 text-sm"
                  />
                  <span className="text-[#6B645E]">—</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Math.min(120, parseInt(e.target.value) || 120)])
                    }
                    className="input w-20 py-1 text-sm"
                  />
                </div>
              </div>

              {/* Material / Tone */}
              <div>
                <div className="text-xs tracking-[0.1em] mb-3 text-[#6B645E]">TONE</div>
                <div className="space-y-2">
                  {allMaterials.map((mat) => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[#B8976A]"
                      />
                      {mat}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-end mb-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input w-auto py-1.5 text-sm bg-white"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A–Z</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-[#6B645E] mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline btn-sm">
                  CLEAR FILTERS
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;