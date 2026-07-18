import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';

export default function Shop() {
  const { addItem } = useCart();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState('all');
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const categories = ['earrings', 'necklaces', 'huggies', 'sets'];
  const materials = ['gold-plated'];

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      if (max) {
        result = result.filter((p) => p.price >= min && p.price <= max);
      } else {
        result = result.filter((p) => p.price >= min);
      }
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategories, priceRange, selectedMaterials, sortBy]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange('all');
    setSelectedMaterials([]);
  };

  const activeFilterCount =
    selectedCategories.length +
    (priceRange !== 'all' ? 1 : 0) +
    selectedMaterials.length;

  return (
    <div className="pt-20 md:pt-24 bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-velmora-charcoal">
            Shop All
          </h1>
          <p className="text-sm text-velmora-stone mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-velmora-sand">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 text-sm font-medium text-velmora-charcoal hover:text-velmora-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 bg-velmora-gold text-white text-[10px] rounded-full flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm text-velmora-charcoal pr-8 py-2 outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="w-4 h-4 text-velmora-stone absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters */}
          <aside
            className={`w-64 flex-shrink-0 ${
              filtersOpen ? 'block' : 'hidden md:block'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-charcoal">
                Filters
              </h3>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-velmora-gold hover:underline"
                >
                  Clear all
                </button>
              )}
              <button
                onClick={() => setFiltersOpen(false)}
                className="md:hidden p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Category */}
            <div className="mb-8">
              <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-charcoal mb-4">
                Category
              </h4>
              <div className="space-y-2.5">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <div
                      className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                        selectedCategories.includes(cat)
                          ? 'bg-velmora-gold border-velmora-gold'
                          : 'border-velmora-sand group-hover:border-velmora-charcoal'
                      }`}
                      onClick={() => toggleCategory(cat)}
                    >
                      {selectedCategories.includes(cat) && (
                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-velmora-stone capitalize">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-charcoal mb-4">
                Price
              </h4>
              <div className="space-y-2.5">
                {[
                  { value: 'all', label: 'All prices' },
                  { value: '0-50', label: 'Under $50' },
                  { value: '50-80', label: '$50 – $80' },
                  { value: '80-999', label: '$80+' },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        priceRange === opt.value
                          ? 'border-velmora-gold'
                          : 'border-velmora-sand group-hover:border-velmora-charcoal'
                      }`}
                      onClick={() => setPriceRange(opt.value)}
                    >
                      {priceRange === opt.value && (
                        <div className="w-2 h-2 rounded-full bg-velmora-gold" />
                      )}
                    </div>
                    <span className="text-sm text-velmora-stone">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-charcoal mb-4">
                Material
              </h4>
              <div className="space-y-2.5">
                {materials.map((mat) => (
                  <label key={mat} className="flex items-center gap-3 cursor-pointer group">
                    <div
                      className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                        selectedMaterials.includes(mat)
                          ? 'bg-velmora-gold border-velmora-gold'
                          : 'border-velmora-sand group-hover:border-velmora-charcoal'
                      }`}
                      onClick={() => toggleMaterial(mat)}
                    >
                      {selectedMaterials.includes(mat) && (
                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-velmora-stone capitalize">{mat.replace('-', ' ')}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-stone">No products match your filters</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-6 py-2.5 bg-velmora-gold text-white text-xs font-semibold tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-velmora-warm overflow-hidden mb-3">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ShoppingBag className="w-10 h-10 text-velmora-sand" />
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addItem(product, 1, product.tone[0]);
                          }}
                          className="px-6 py-2.5 bg-velmora-gold text-white text-[10px] font-semibold tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors transform translate-y-2 group-hover:translate-y-0 duration-300"
                        >
                          Add to Cart
                        </button>
                      </div>
                      {product.bestseller && (
                        <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] font-semibold tracking-wider uppercase px-2 py-1">
                          Bestseller
                        </span>
                      )}
                    </Link>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-serif text-sm tracking-widest uppercase text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-sm text-velmora-stone">${product.price}</p>
                        <div className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                          <span className="text-xs text-velmora-muted">{product.rating}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
