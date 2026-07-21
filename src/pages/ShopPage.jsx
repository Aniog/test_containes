import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';
import { getProducts, getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const allProducts = getProducts();

  const filteredProducts = useMemo(() => {
    let products = [...allProducts];

    // Filter by category
    if (selectedCategory !== 'all') {
      products = products.filter(
        p => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by price
    products = products.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        products.sort((a, b) => b.id - a.id);
        break;
      case 'bestsellers':
        products.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return products;
  }, [allProducts, selectedCategory, sortBy, priceRange]);

  const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
          <p className="font-sans text-velmora-gray">
            {filteredProducts.length} products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className={`lg:w-64 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="font-serif text-lg mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block text-sm capitalize ${
                        selectedCategory === category
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-gray hover:text-velmora-black'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-serif text-lg mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    [0, 50],
                    [50, 75],
                    [75, 100],
                    [100, 200]
                  ].map(([min, max]) => (
                    <button
                      key={`${min}-${max}`}
                      onClick={() => setPriceRange([min, max])}
                      className={`block text-sm ${
                        priceRange[0] === min && priceRange[1] === max
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-gray hover:text-velmora-black'
                      }`}
                    >
                      ${min} - ${max}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden flex items-center space-x-2 text-sm font-sans"
              >
                <Filter size={16} />
                <span>Filters</span>
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans text-sm border border-velmora-beige px-4 py-2 focus:outline-none focus:border-velmora-gold"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="bestsellers">Best Sellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-sans text-velmora-gray">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
