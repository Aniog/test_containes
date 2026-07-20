import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products, categories, materials } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');

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
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
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
      default:
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

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceRange([0, 120]);
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#B8976F] mb-2">DISCOVER</div>
            <h1 className="font-serif text-4xl tracking-[0.05em]">The Collection</h1>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="input w-auto text-sm py-2"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">A–Z</option>
          </select>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <div className="text-xs tracking-[0.15em] uppercase">Filters</div>
                <button onClick={clearFilters} className="text-xs text-[#B8976F] hover:underline">
                  Clear All
                </button>
              </div>

              {/* Category */}
              <div className="mb-8">
                <div className="filter-label">Category</div>
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 py-1.5 cursor-pointer text-sm">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="accent-[#B8976F]"
                    />
                    {cat}
                  </label>
                ))}
              </div>

              {/* Material */}
              <div className="mb-8">
                <div className="filter-label">Material</div>
                {materials.map((mat) => (
                  <label key={mat} className="flex items-center gap-2 py-1.5 cursor-pointer text-sm">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(mat)}
                      onChange={() => toggleMaterial(mat)}
                      className="accent-[#B8976F]"
                    />
                    {mat}
                  </label>
                ))}
              </div>

              {/* Price */}
              <div>
                <div className="filter-label">Price Range</div>
                <div className="flex items-center gap-3 text-sm">
                  <span>${priceRange[0]}</span>
                  <input
                    type="range"
                    min="0"
                    max="120"
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="flex-1 accent-[#B8976F]"
                  />
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="text-sm text-[#6B6560] mb-6">
              {filteredProducts.length} products
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="product-card group">
                    <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] bg-[#F5F2ED] overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <img
                        src={product.images[1]}
                        alt={product.name}
                        className="secondary absolute inset-0 w-full h-full object-cover"
                      />
                    </Link>
                    <div className="p-4">
                      <Link to={`/product/${product.id}`}>
                        <div className="product-name text-sm tracking-wider mb-1 pr-8">{product.name}</div>
                      </Link>
                      <div className="flex items-center justify-between">
                        <span className="text-[#6B6560]">${product.price}</span>
                        <button
                          onClick={() => addToCart(product)}
                          className="quick-add btn btn-gold text-xs py-2 px-5"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-[#6B6560]">
                No products match your filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;