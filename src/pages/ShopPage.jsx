import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ChevronDown } from 'lucide-react';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    // Sorting
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
  }, [selectedCategories, priceRange, selectedMaterials, sortBy]);

  const toggleCategory = (cat) => {
    const newCats = selectedCategories.includes(cat)
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat];
    setSelectedCategories(newCats);
  };

  const toggleMaterial = (mat) => {
    const newMats = selectedMaterials.includes(mat)
      ? selectedMaterials.filter((m) => m !== mat)
      : [...selectedMaterials, mat];
    setSelectedMaterials(newMats);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 120]);
    setSelectedMaterials([]);
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="pt-20">
      <div className="max-w-[1440px] mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#8b7355] mb-2">DISCOVER</div>
            <h1 className="font-serif text-4xl tracking-[0.05em]">All Jewelry</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="md:hidden text-sm tracking-[0.1em] border px-4 py-2"
            >
              FILTERS
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-[#e5e0d8] px-4 py-2 pr-10 text-sm tracking-[0.05em] cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">A - Z</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#6b6763]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className={`w-full md:w-60 flex-shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <div className="text-xs tracking-[0.15em] mb-4">CATEGORY</div>
                <div className="space-y-2 text-sm">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#8b7355]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="text-xs tracking-[0.15em] mb-4">PRICE RANGE</div>
                <div className="space-y-3 text-sm">
                  <input
                    type="range"
                    min="0"
                    max="120"
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#8b7355]"
                  />
                  <div className="flex justify-between text-[#6b6763]">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Material */}
              <div>
                <div className="text-xs tracking-[0.15em] mb-4">MATERIAL</div>
                <div className="space-y-2 text-sm">
                  {['Gold', 'Silver'].map((mat) => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[#8b7355]"
                      />
                      {mat}
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={clearFilters}
                className="text-xs tracking-[0.1em] underline text-[#6b6763] hover:text-[#2c2a28]"
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="text-sm text-[#6b6763] mb-6">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#6b6763] mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn btn-outline text-sm">
                  CLEAR FILTERS
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
