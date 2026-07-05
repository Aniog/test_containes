import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get('category') ? [searchParams.get('category')] : []
  );
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedVariants, setSelectedVariants] = useState({});

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
        break;
    }

    return result;
  }, [selectedCategories, priceRange, sortBy]);

  const toggleCategory = (cat) => {
    const newCats = selectedCategories.includes(cat)
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat];
    setSelectedCategories(newCats);
  };

  const handleAddToCart = (product) => {
    const variant = selectedVariants[product.id] || product.variant[0];
    addToCart(product, variant);
  };

  const handleVariantChange = (productId, variant) => {
    setSelectedVariants({ ...selectedVariants, [productId]: variant });
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-xs tracking-[0.2em] text-[#B8976E] mb-2">DISCOVER</p>
          <h1 className="serif text-5xl tracking-[0.02em]">The Collection</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Categories */}
              <div className="mb-8">
                <p className="filter-label">Category</p>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#B8976E]"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <p className="filter-label mb-4">Price Range</p>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="120"
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#B8976E]"
                  />
                  <div className="flex justify-between text-sm text-[#6B6560]">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedCategories([]);
                  setPriceRange([0, 120]);
                  setSortBy('featured');
                }}
                className="text-xs tracking-[0.1em] underline text-[#6B6560] hover:text-[#2C2825]"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm text-[#6B6560]">{filteredProducts.length} products</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input w-auto text-sm py-2 pr-8"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">A - Z</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <p className="text-[#6B6560]">No products match your filters.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const currentVariant = selectedVariants[product.id] || product.variant[0];
                  return (
                    <div key={product.id} className="product-card group">
                      <Link to={`/product/${product.id}`} className="block">
                        <div className="product-image-container aspect-[4/3.5] relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="product-image product-image-primary absolute inset-0"
                          />
                          <img
                            src={product.imageAlt}
                            alt={product.name}
                            className="product-image product-image-secondary absolute inset-0 opacity-0"
                          />
                        </div>
                      </Link>
                      <div className="p-5">
                        <Link to={`/product/${product.id}`}>
                          <p className="product-name text-sm tracking-[0.12em] mb-1 pr-2 hover:text-[#B8976E]">{product.name}</p>
                        </Link>
                        <p className="text-sm text-[#6B6560] mb-3">${product.price}</p>
                        <div className="flex gap-2 mb-4">
                          {product.variant.map((v) => (
                            <button
                              key={v}
                              onClick={() => handleVariantChange(product.id, v)}
                              className={`variant-pill text-[10px] py-1 px-3 ${currentVariant === v ? 'active' : ''}`}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="btn btn-outline w-full text-xs py-3"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;