import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products } from '../data/products';

export default function Shop() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];

  const filteredProducts = products
    .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
    .filter(p => selectedMaterial === 'All' || p.material === selectedMaterial)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0; // featured - keep original order
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-4 tracking-wide text-center">
          Shop All
        </h1>
        <div className="w-24 h-px bg-velmora-gold mx-auto" />
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        {/* Filter Button (Mobile) */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className="lg:hidden flex items-center space-x-2 text-sm tracking-wider uppercase font-semibold"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Filter</span>
        </button>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-4 ml-auto">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border-none bg-transparent font-semibold focus:outline-none cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Filter Sidebar (Desktop) */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <FilterPanel
            categories={categories}
            materials={materials}
            selectedCategory={selectedCategory}
            selectedMaterial={selectedMaterial}
            setSelectedCategory={setSelectedCategory}
            setSelectedMaterial={setSelectedMaterial}
          />
        </div>

        {/* Mobile Filter Drawer */}
        {isFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-serif text-2xl">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <FilterPanel
                categories={categories}
                materials={materials}
                selectedCategory={selectedCategory}
                selectedMaterial={selectedMaterial}
                setSelectedCategory={setSelectedCategory}
                setSelectedMaterial={setSelectedMaterial}
              />
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-6">
            {filteredProducts.length} products
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
                <div className="aspect-square overflow-hidden bg-velmora-warm mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-lg tracking-widest uppercase mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <p className="font-semibold">${product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterPanel({
  categories,
  materials,
  selectedCategory,
  selectedMaterial,
  setSelectedCategory,
  setSelectedMaterial
}) {
  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div>
        <h4 className="font-semibold text-sm tracking-wider uppercase mb-4">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block text-sm ${
                selectedCategory === cat
                  ? 'text-velmora-gold font-semibold'
                  : 'text-gray-600 hover:text-velmora-charcoal'
              } transition-colors`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div>
        <h4 className="font-semibold text-sm tracking-wider uppercase mb-4">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block text-sm ${
                selectedMaterial === mat
                  ? 'text-velmora-gold font-semibold'
                  : 'text-gray-600 hover:text-velmora-charcoal'
              } transition-colors`}
            >
              {mat}
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
          className="text-sm text-velmora-gold hover:underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
}