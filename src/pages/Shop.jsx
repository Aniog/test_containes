import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

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
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

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
  }, [selectedCategories, selectedMaterials, priceRange, sortBy]);

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

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    addToCart(product, 'Gold', 1);
    toast.success(`${product.name} added to cart`);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceRange([0, 120]);
    setSearchParams({});
  };

  return (
    <div className="pt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#6B605A]">DISCOVER</p>
            <h1 className="serif text-5xl tracking-[0.05em]">The Collection</h1>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-[#E5DFD6] bg-transparent px-4 py-2 text-sm tracking-[0.05em] outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">A - Z</option>
            </select>
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="md:hidden text-sm tracking-[0.1em] underline"
            >
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Filters Sidebar */}
          <aside className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-24 space-y-8">
              <div>
                <button onClick={clearFilters} className="text-xs tracking-[0.15em] underline text-[#6B605A]">
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div>
                <p className="filter-label">Category</p>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#8B7355]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <p className="filter-label">Material</p>
                <div className="space-y-2">
                  {['Gold', 'Silver'].map((mat) => (
                    <label key={mat} className="flex items-center gap-3 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleMaterial(mat)}
                        className="accent-[#8B7355]"
                      />
                      {mat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <p className="filter-label">Price Range</p>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="120"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#8B7355]"
                  />
                  <div className="flex justify-between text-sm text-[#6B605A]">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <p className="text-sm text-[#6B605A] mb-6">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#6B605A]">No products match your filters.</p>
                <button onClick={clearFilters} className="mt-4 text-sm underline">Clear filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="product-card group block">
                    <div className="relative aspect-[4/3] bg-[#F0EBE3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="primary absolute inset-0 w-full h-full object-cover"
                      />
                      <img
                        src={product.imageSecondary}
                        alt={product.name}
                        className="secondary absolute inset-0 w-full h-full object-cover opacity-0"
                      />
                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 btn btn-primary text-xs opacity-0 group-hover:opacity-100 transition-all"
                      >
                        Quick Add
                      </button>
                    </div>
                    <div className="p-4">
                      <p className="product-name text-sm tracking-[0.1em] mb-1">{product.name}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-[#6B605A] text-sm">${product.price}</p>
                        <span className="text-xs text-[#6B605A]">{product.category}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;