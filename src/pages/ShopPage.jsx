import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, Grid, List } from 'lucide-react';

const allProducts = [
  {
    id: 1,
    name: 'VIVID AURA JEWELS',
    price: 42,
    description: 'Gold ear cuff with crystal accent',
    image: '/api/placeholder/400/400',
    category: 'earrings',
    bestseller: true
  },
  {
    id: 2,
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    description: 'Multicolor floral crystal necklace',
    image: '/api/placeholder/400/400',
    category: 'necklaces',
    bestseller: true
  },
  {
    id: 3,
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    description: 'Chunky gold dome huggie earrings',
    image: '/api/placeholder/400/400',
    category: 'huggies',
    bestseller: true
  },
  {
    id: 4,
    name: 'AMBER LACE EARRINGS',
    price: 54,
    description: 'Textured gold filigree drop earrings',
    image: '/api/placeholder/400/400',
    category: 'earrings',
    bestseller: false
  },
  {
    id: 5,
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    description: 'Gift-boxed earring + necklace set',
    image: '/api/placeholder/400/400',
    category: 'sets',
    bestseller: true
  }
];

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name', label: 'Alphabetically' },
  { value: 'bestsellers', label: 'Bestsellers' }
];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...allProducts];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(
        product => product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'bestsellers':
        filtered.sort((a, b) => b.bestseller - a.bestseller);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 
          className="text-4xl md:text-5xl font-light mb-4"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Shop All
        </h1>
        <p className="text-gray-600">Discover our collection of demi-fine gold jewelry</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 text-sm tracking-wider uppercase hover:text-amber-600 transition-colors"
        >
          <SlidersHorizontal size={20} />
          <span>Filters</span>
        </button>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <label htmlFor="sort" className="text-sm text-gray-600">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border-none bg-transparent focus:outline-none cursor-pointer"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'text-amber-600' : 'text-gray-400'}`}
              aria-label="Grid view"
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'text-amber-600' : 'text-gray-400'}`}
              aria-label="List view"
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      {showFilters && (
        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm tracking-wider uppercase transition-colors ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
          : 'grid-cols-1'
      }`}>
        {filteredAndSortedProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className={`group ${viewMode === 'list' ? 'flex space-x-6' : ''}`}
          >
            <div className={`relative overflow-hidden bg-gray-100 ${
              viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-square mb-4'
            }`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {product.bestseller && (
                <span className="absolute top-4 left-4 bg-amber-600 text-white text-xs px-3 py-1 tracking-wider uppercase">
                  Bestseller
                </span>
              )}
            </div>
            <div className={viewMode === 'list' ? 'flex-1' : ''}>
              <h3 className="text-sm tracking-wider uppercase mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-1">{product.description}</p>
              <p className="text-gray-900 font-semibold">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
          <button
            onClick={() => setSelectedCategory('All')}
            className="mt-4 text-amber-600 hover:text-amber-700 transition-colors"
          >
            View all products
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
