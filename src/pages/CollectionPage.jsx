import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import products from '../data/products';

export default function CollectionPage({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
    if (selectedMaterial !== 'All' && product.material !== selectedMaterial) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Collection</h1>
        <p className="text-gray-600">Discover our curated selection of demi-fine jewelry</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="lg:hidden flex items-center justify-between w-full p-4 border border-velmora-border mb-4"
        >
          <span className="flex items-center space-x-2">
            <SlidersHorizontal size={16} />
            <span>Filters</span>
          </span>
          <span className="text-sm text-gray-500">
            {selectedCategory !== 'All' || selectedMaterial !== 'All' ? 'Active' : ''}
          </span>
        </button>

        {/* Sidebar Filters */}
        <aside className={`${isMobileFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
          <div className="lg:sticky lg:top-24 space-y-8">
            {/* Category Filter */}
            <div>
              <h3 className="font-semibold tracking-wide mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-velmora-gold text-white'
                        : 'hover:bg-velmora-lightGray'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div>
              <h3 className="font-semibold tracking-wide mb-4">Material</h3>
              <div className="space-y-2">
                {materials.map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                      selectedMaterial === material
                        ? 'bg-velmora-gold text-white'
                        : 'hover:bg-velmora-lightGray'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(selectedCategory !== 'All' || selectedMaterial !== 'All') && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedMaterial('All');
                }}
                className="flex items-center space-x-2 text-sm text-velmora-gold hover:underline"
              >
                <X size={14} />
                <span>Clear Filters</span>
              </button>
            )}
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort Bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-border">
            <p className="text-sm text-gray-600">
              {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-velmora-border px-4 py-2 focus:outline-none focus:border-velmora-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <Link to={`/product/${product.id}`}>
                  <div className="relative overflow-hidden mb-4 bg-velmora-lightGray aspect-square">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-velmora-black px-6 py-2 text-sm tracking-wider hover:bg-velmora-gold hover:text-white transition-all opacity-0 group-hover:opacity-100"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <h3 className="text-sm tracking-widest mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">${product.price}</p>
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="fill-velmora-gold text-velmora-gold" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No products match your filters</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedMaterial('All');
                }}
                className="text-velmora-gold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
