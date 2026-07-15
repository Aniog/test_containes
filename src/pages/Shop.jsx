import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addItem } = useCart();

  const selectedCategory = searchParams.get('category') || 'All';
  const sortBy = searchParams.get('sort') || 'featured';

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name' }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
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
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category === 'All') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    setSearchParams(params);
  };

  const handleSortChange = (sort) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', sort);
    setSearchParams(params);
  };

  const handleQuickAdd = (product) => {
    addItem({ ...product, material: 'Gold', quantity: 1 });
    alert('Added to cart!');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className={`md:w-64 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
          <div className="bg-white md:sticky md:top-24 space-y-6">
            <div>
              <h3 className="font-medium mb-4 uppercase tracking-wider text-sm">Category</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-yellow-50 text-yellow-600 font-medium'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4 uppercase tracking-wider text-sm">Price Range</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  Under $50
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  $50 - $75
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  $75 - $100
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  Over $100
                </label>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4 uppercase tracking-wider text-sm">Material</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  Gold
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  Silver
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center gap-2 text-sm font-medium uppercase tracking-wider"
            >
              <SlidersHorizontal size={18} />
              Filter
            </button>
            <p className="text-sm text-gray-600">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="text-sm border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleQuickAdd(product);
                      }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-6 py-2 text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
                    >
                      Quick Add
                    </button>
                  </div>
                </Link>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-serif text-sm tracking-wider uppercase mb-2 group-hover:text-yellow-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-1">{product.description}</p>
                <p className="font-medium">${product.price}</p>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
              <button
                onClick={() => handleCategoryChange('All')}
                className="mt-4 text-yellow-600 hover:text-yellow-700 font-medium"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
