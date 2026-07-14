import React, { useState, useMemo } from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import products from '../../data/products';

export default function ShopPage() {
  const { addToCart } = useCart();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedMaterials.length > 0) {
      filtered = filtered.filter((p) => selectedMaterials.includes(p.material));
    }

    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

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
      default:
        break;
    }

    return filtered;
  }, [selectedCategories, selectedMaterials, priceRange, sortBy]);

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
    setPriceRange([0, 200]);
  };

  return (
    <div className="container-velmora py-12 px-4">
      {/* Header */}
      <div className="mb-12">
        <h1
          className="text-4xl md:text-5xl font-light mb-4"
          style={{ fontFamily: 'Cormorant Garamond', serif: true }}
        >
          Shop All
        </h1>
        <div className="hairline w-24 mb-6" />
        <p className="text-velmora-charcoal">
          Showing {filteredProducts.length} products
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden flex items-center gap-2 px-6 py-3 border border-velmora-beige hover:border-velmora-gold transition-colors"
        >
          <SlidersHorizontal size={18} />
          <span className="text-sm uppercase tracking-wider">Filters</span>
        </button>

        {/* Filter Sidebar */}
        <div
          className={`${
            isFilterOpen ? 'fixed inset-0 z-50 bg-white p-8 overflow-y-auto' : 'hidden'
          } lg:block lg:relative lg:z-auto lg:bg-transparent lg:p-0`}
        >
          <div className="lg:w-64 filter-sidebar">
            {/* Mobile Close */}
            {isFilterOpen && (
              <button
                onClick={() => setIsFilterOpen(false)}
                className="lg:hidden absolute top-4 right-4"
              >
                <X size={24} />
              </button>
            )}

            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-light">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-velmora-charcoal hover:text-velmora-gold transition-colors"
              >
                Clear All
              </button>
            </div>

            {/* Category Filter */}
            <div className="filter-section">
              <h4 className="filter-title">Category</h4>
              {categories.map((category) => (
                <label key={category} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>

            {/* Material Filter */}
            <div className="filter-section">
              <h4 className="filter-title">Material</h4>
              {materials.map((material) => (
                <label key={material} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedMaterials.includes(material)}
                    onChange={() => toggleMaterial(material)}
                  />
                  <span>{material}</span>
                </label>
              ))}
            </div>

            {/* Price Range */}
            <div className="filter-section">
              <h4 className="filter-title">Price</h4>
              <div className="flex gap-4 items-center">
                <span className="text-sm text-velmora-charcoal">${priceRange[0]}</span>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="flex-1"
                />
                <span className="text-sm text-velmora-charcoal">${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort Dropdown */}
          <div className="flex justify-end mb-8">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-dropdown"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative overflow-hidden bg-velmora-cream mb-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-velmora-black text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-velmora-charcoal transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      Quick Add
                    </button>
                  </div>
                </Link>
                <div className="text-center px-2">
                  <h3 className="product-name text-sm mb-2">{product.name}</h3>
                  <p className="text-sm text-velmora-charcoal mb-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="flex text-velmora-gold text-sm">
                      {'★'.repeat(Math.floor(product.rating))}
                    </div>
                  </div>
                  <p className="text-lg font-light">${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-velmora-charcoal mb-4">No products found</p>
              <button
                onClick={clearFilters}
                className="btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}