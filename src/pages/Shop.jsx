import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { ChevronDown } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
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
  }, [selectedCategories, priceRange, sortBy]);

  const toggleCategory = (cat) => {
    const newCategories = selectedCategories.includes(cat)
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat];
    setSelectedCategories(newCategories);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 120]);
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[#8B7355] mb-1">Discover</p>
          <h1 className="serif text-5xl">The Collection</h1>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden text-sm tracking-[0.1em] uppercase border px-4 py-2"
          >
            Filters
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-[#E5DFD6] px-4 py-2 pr-10 text-sm tracking-[0.05em] cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">A - Z</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-3 pointer-events-none text-[#6B635C]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Filters Sidebar */}
        <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
          <div className="sticky top-24 space-y-8">
            {/* Categories */}
            <div>
              <p className="text-xs tracking-[0.15em] uppercase mb-4">Category</p>
              <div className="space-y-2 text-sm">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
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

            {/* Price Range */}
            <div>
              <p className="text-xs tracking-[0.15em] uppercase mb-4">Price Range</p>
              <div className="space-y-3 text-sm">
                <input
                  type="range"
                  min="0"
                  max="120"
                  step="5"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#8B7355]"
                />
                <div className="flex justify-between text-[#6B635C]">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <button onClick={clearFilters} className="text-xs tracking-[0.1em] uppercase text-[#8B7355] hover:underline">
              Clear All Filters
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <p className="text-sm text-[#6B635C] mb-6">{filteredProducts.length} products</p>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card group">
                  <Link to={`/product/${product.id}`} className="block relative aspect-[4/3.5] bg-[#F8F5F1] overflow-hidden">
                    <img
                      src={product.image1}
                      alt={product.name}
                      className="product-image-primary absolute inset-0 w-full h-full object-cover"
                    />
                    <img
                      src={product.image2}
                      alt={product.name}
                      className="product-image-secondary absolute inset-0 w-full h-full object-cover"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="quick-add btn btn-primary text-xs py-2.5 px-6"
                    >
                      Quick Add
                    </button>
                  </Link>
                  <div className="pt-4">
                    <Link to={`/product/${product.id}`}>
                      <p className="product-name text-sm tracking-[0.1em] mb-1">{product.name}</p>
                    </Link>
                    <p className="text-sm text-[#6B635C]">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="mb-4">No products match your filters.</p>
              <button onClick={clearFilters} className="btn btn-outline text-sm">
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