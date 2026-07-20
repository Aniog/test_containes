import React, { useState } from 'react';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
    if (selectedMaterial !== 'All' && product.material !== selectedMaterial) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="serif text-4xl md:text-5xl text-center mb-12">Shop All</h1>

        {/* Filter and Sort Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden flex items-center gap-2 text-sm uppercase tracking-wider"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-sm uppercase tracking-wider transition-all ${
                      selectedCategory === cat
                        ? 'bg-charcoal text-warm-white'
                        : 'border border-border hover:border-charcoal'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Material Filter */}
              <div className="flex gap-2">
                {materials.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`px-4 py-2 text-sm uppercase tracking-wider transition-all ${
                      selectedMaterial === mat
                        ? 'bg-charcoal text-warm-white'
                        : 'border border-border hover:border-charcoal'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-border bg-transparent text-sm uppercase tracking-wider cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Alphabetical</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="mb-4 overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="product-name text-sm mb-2">{product.name}</h3>
              <p className="text-sm text-soft-gray">${product.price}</p>
            </Link>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <p className="text-center text-soft-gray py-12">No products found matching your filters.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
