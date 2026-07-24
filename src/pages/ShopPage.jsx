import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'All'
  );
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', '18K Gold Plated'];
  const priceRanges = [
    { label: 'All', value: 'All' },
    { label: 'Under $50', value: 'under50' },
    { label: '$50 - $80', value: '50to80' },
    { label: 'Over $80', value: 'over80' }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by material
    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    // Filter by price
    if (priceRange !== 'All') {
      filtered = filtered.filter(p => {
        if (priceRange === 'under50') return p.price < 50;
        if (priceRange === '50to80') return p.price >= 50 && p.price <= 80;
        if (priceRange === 'over80') return p.price > 80;
        return true;
      });
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif mb-12 text-center">Shop All Jewelry</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1">
          <div className="bg-velmora-cream p-6 rounded-lg shadow-premium">
            <h3 className="text-sm uppercase tracking-wider mb-4">Category</h3>
            <div className="space-y-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`block w-full text-left px-3 py-2 text-sm rounded ${
                    selectedCategory === category
                      ? 'bg-velmora-charcoal text-velmora-ivory'
                      : 'hover:bg-velmora-sand'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <h3 className="text-sm uppercase tracking-wider mb-4">Material</h3>
            <div className="space-y-2 mb-8">
              {materials.map((material) => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  className={`block w-full text-left px-3 py-2 text-sm rounded ${
                    selectedMaterial === material
                      ? 'bg-velmora-charcoal text-velmora-ivory'
                      : 'hover:bg-velmora-sand'
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>

            <h3 className="text-sm uppercase tracking-wider mb-4">Price</h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => setPriceRange(range.value)}
                  className={`block w-full text-left px-3 py-2 text-sm rounded ${
                    priceRange === range.value
                      ? 'bg-velmora-charcoal text-velmora-ivory'
                      : 'hover:bg-velmora-sand'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          {/* Sort Dropdown */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-sm text-velmora-stone">
              Showing {filteredAndSortedProducts.length} products
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-velmora-sand rounded bg-velmora-cream focus:outline-none focus:border-velmora-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-lg overflow-hidden shadow-premium hover:shadow-premium-lg transition-shadow"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative aspect-square img-hover-zoom">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="product-name text-sm mb-2 hover:text-velmora-gold">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-velmora-stone mb-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">${product.price}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-velmora-stone">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full mt-4 bg-velmora-charcoal text-velmora-ivory py-2 uppercase tracking-wider text-xs hover:bg-velmora-gold transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-velmora-stone">
                No products found matching your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
