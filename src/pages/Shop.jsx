import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import products from '../data/products';

export default function Shop() {
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];

  const filteredProducts = products
    .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
    .filter(p => selectedMaterial === 'All' || p.material === selectedMaterial)
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0; // featured - keep original order
    });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-serif text-4xl mb-4">Shop All</h1>
        <p className="text-warm-gray">Discover our complete collection of demi-fine jewelry</p>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="sm:hidden flex items-center gap-2 px-4 py-2 border border-border"
        >
          <SlidersHorizontal size={16} />
          Filters
        </button>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 ml-auto">
          <label className="text-sm text-warm-gray">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-border bg-transparent focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className={`${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="space-y-8">
            {/* Category Filter */}
            <div>
              <h3 className="font-serif text-lg mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                      selectedCategory === cat
                        ? 'bg-charcoal text-cream'
                        : 'hover:bg-light-gray'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div>
              <h3 className="font-serif text-lg mb-4">Material</h3>
              <div className="space-y-2">
                {materials.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                      selectedMaterial === mat
                        ? 'bg-charcoal text-cream'
                        : 'hover:bg-light-gray'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="font-serif text-lg mb-4">Price</h3>
              <div className="space-y-2">
                {[
                  { label: 'Under $50', range: [0, 50] },
                  { label: '$50 - $80', range: [50, 80] },
                  { label: '$80 - $100', range: [80, 100] },
                  { label: 'Over $100', range: [100, 200] }
                ].map((price) => (
                  <button
                    key={price.label}
                    onClick={() => setPriceRange(price.range)}
                    className="block w-full text-left px-3 py-2 text-sm hover:bg-light-gray transition-colors"
                  >
                    {price.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          <p className="text-sm text-warm-gray mb-6">
            Showing {filteredProducts.length} results
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-4">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.bestseller && (
                    <div className="absolute top-4 left-4 bg-gold text-white text-xs px-3 py-1">
                      Bestseller
                    </div>
                  )}
                </div>
                <h3 className="font-serif text-sm uppercase tracking-wider mb-2">
                  {product.name}
                </h3>
                <p className="text-warm-gray text-sm mb-1">{product.description}</p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-gold text-sm">
                    {'★'.repeat(Math.floor(product.rating))}
                  </div>
                  <span className="text-xs text-warm-gray">({product.reviews})</span>
                </div>
                <p className="font-serif text-lg">${product.price}</p>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-warm-gray text-lg">No products match your filters</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedMaterial('All');
                  setPriceRange([0, 200]);
                }}
                className="mt-4 text-gold hover:underline"
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
